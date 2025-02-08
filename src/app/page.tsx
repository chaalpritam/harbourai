"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, Send, User } from "lucide-react"

interface Message {
  _id?: string
  role: "user" | "assistant"
  content: string
  timestamp?: Date
  threadId?: string
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [threadId, setThreadId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (input.trim()) {
      const currentThreadId = threadId || crypto.randomUUID()
      const userMessage: Message = {
        role: "user",
        content: input,
        threadId: currentThreadId,
        timestamp: new Date()
      }
      setMessages((prev) => [...prev, userMessage])
      setInput("")
      setIsLoading(true)

      try {
        await fetch("/api/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userMessage),
        })

        // Send message to chat API
        const chatResponse = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: input,
            threadId: currentThreadId,
          }),
        })

        const data = await chatResponse.json()
        if (chatResponse.ok) {
          setThreadId(currentThreadId)
          const aiMessage: Message = {
            role: "assistant",
            content: data.response,
            threadId: currentThreadId,
            timestamp: new Date()
          }

          // Save AI message to database
          await fetch("/api/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(aiMessage),
          })

          setMessages((prev) => [...prev, aiMessage])
        } else {
          console.error('Error:', data.error)
        }
      } catch (error) {
        console.error('Failed to send message:', error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
      <div className="flex bg-background">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Messages */}
          <ScrollArea className="flex-1 p-4">
          <h2 className="text-lg font-semibold">Harbour AI</h2>
            <div className="space-y-4">
              {messages.map((message, i) => (
                <div key={message._id || i} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-start space-x-2 ${message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                  >
                    <div
                      className={`p-2 rounded-lg ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                    >
                      {message.role === "user" ? <User className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
                    </div>
                    <div
                      className={`p-2 rounded-lg ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here..."
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                disabled={isLoading}
              />
              <Button onClick={handleSend} disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}
