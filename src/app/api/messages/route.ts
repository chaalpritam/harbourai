import { NextResponse } from "next/server"
import dbConnect from "../../../database/mongodb"
import { Message } from "../../../database/Message"
import crypto from "crypto"

export async function GET() {
    await dbConnect()

    // Get unique threads with their latest message and message count
    const threads = await Message.aggregate([
        { $sort: { timestamp: -1 } },
        {
            $group: {
                _id: "$threadId",
                latestMessage: { $first: "$content" },
                timestamp: { $first: "$timestamp" },
                messageCount: { $sum: 1 }
            }
        },
        { $sort: { timestamp: -1 } }
    ])

    return NextResponse.json(threads)
}

export async function POST(request: Request) {
    try {
        const { role, content, threadId } = await request.json()

        if (!threadId) {
            return NextResponse.json(
                { error: 'ThreadId is required' },
                { status: 400 }
            )
        }

        await dbConnect()

        const newMessage = new Message({
            role,
            content,
            threadId,
            timestamp: new Date(),
            messageId: crypto.randomUUID()
        })

        const result = await newMessage.save()

        return NextResponse.json(result)
    } catch (error) {
        console.error('MongoDB Error:', error)
        return NextResponse.json(
            { error: 'Failed to save message' },
            { status: 500 }
        )
    }
}
