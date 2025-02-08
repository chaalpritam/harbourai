'use client'
import { useState } from 'react';

export default function Chat() {
    const [message, setMessage] = useState('');
    const [threadId, setThreadId] = useState<string | null>(null);
    const [responses, setResponses] = useState<Array<{ type: 'user' | 'ai', text: string }>>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        setIsLoading(true);
        setResponses(prev => [...prev, { type: 'user', text: message }]);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message,
                    threadId,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setThreadId(data.threadId);
                setResponses(prev => [...prev, { type: 'ai', text: data.response }]);
                setMessage('');
            } else {
                console.error('Error:', data.error);
            }
        } catch (error) {
            console.error('Failed to send message:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="mb-4 h-96 overflow-y-auto border rounded p-4">
                {responses.map((response, index) => (
                    <div
                        key={index}
                        className={`mb-2 p-2 rounded ${response.type === 'user'
                            ? 'bg-blue-100 text-right'
                            : 'bg-gray-100'
                            }`}
                    >
                        <p>{response.text}</p>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 p-2 border rounded"
                    placeholder="Type your message..."
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Send
                </button>
            </form>
        </div>
    );
}