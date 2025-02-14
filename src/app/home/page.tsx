"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, Send, User } from "lucide-react"

import { Web3Provider } from '@/utils/web3provider'
import { useAccount } from "wagmi"

interface Message {
  _id?: string
  role: "user" | "assistant"
  content: string
  timestamp?: Date
  threadId?: string
  walletAddress: `0x${string}` | undefined
}

interface Thread {
  _id: string
  latestMessage: string
  timestamp: Date
  messageCount: number
}

export default function Chat() {
  return <Web3Provider><ChatUI /></Web3Provider>
}

function ChatUI() {
  const { isConnected, address } = useAccount()
  const [messages, setMessages] = useState<Message[]>([])
  const [threads, setThreads] = useState<Thread[]>([])
  const [input, setInput] = useState("")
  const [threadId, setThreadId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchThreads = async () => {
    const response = await fetch(`/api/messages?walletAddress=${address}`)
    const data = await response.json()
    setThreads(data)
  }

  useEffect(() => {
    if (isConnected && address) {
      fetchThreads()
    }
  }, [isConnected, address, fetchThreads])


  const fetchMessagesForThread = async (threadId: string) => {
    const response = await fetch(`/api/messages/${threadId}`)
    const data = await response.json()
    setMessages(data.messages)
    setThreadId(threadId)
  }

  const handleSend = async () => {
    if (input.trim()) {
      const currentThreadId = threadId || crypto.randomUUID()
      const userMessage: Message = {
        role: "user",
        content: input,
        threadId: currentThreadId,
        walletAddress: address,
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
            walletAddress: address,
            timestamp: new Date()
          }

          // Save AI message to database
          await fetch("/api/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(aiMessage),
          })

          setMessages((prev) => [...prev, aiMessage])
          fetchThreads() // Refresh the threads list
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
    <div className="h-screen">
      {/* Top Navigation Bar */}
      {/* <div className="p-2 border-b flex justify-between items-center"> */}
      {/*   <h2 className="text-lg font-semibold">Harbour AI</h2> */}
      {/*   <div className="flex space-x-4"> */}
      {/*     <Link href="/home"><Button variant="ghost">Home</Button></Link> */}
      {/*     <Link href="/home/dao"><Button variant="ghost">DAO</Button></Link> */}
      {/*     <Link href="/home/proposal"><Button variant="ghost">Proposal</Button></Link> */}
      {/*     <Link href="/home/agents"><Button variant="ghost">Create Agents</Button></Link> */}
      {/*     <Link href="/home/token"><Button variant="ghost">Token</Button></Link> */}
      {/*   </div> */}
      {/*   <ConnectKitButton /> */}
      {/* </div> */}
      {isConnected ?
        <div className="flex bg-background">
          {/* Sidebar */}
          <div className="w-80 border-r">
            <ScrollArea className="h-[calc(100vh-60px)]">
              <div className="p-4 space-y-2">
                {threads.map((thread) => (
                  <Button
                    key={thread._id}
                    variant={threadId === thread._id ? "secondary" : "ghost"}
                    className="w-full justify-start text-left"
                    onClick={() => fetchMessagesForThread(thread._id)}
                  >
                    <div className="flex flex-col w-full overflow-hidden">
                      <div className="truncate text-sm">
                        {thread.latestMessage.substring(0, 30)}
                        {thread.latestMessage.length > 30 ? "..." : ""}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {thread.messageCount} messages • {new Date(thread.timestamp).toLocaleDateString()}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Messages */}
            <ScrollArea className="flex-1 p-4">
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
                ))
                }
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t">
              {isConnected && (
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
              )}
            </div>
          </div>
        </div>
        : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-red-500">
              <h3>Please Connect the wallet to use the agent</h3>
            </div>
          </div>
        )}
    </div>
  )
}