import { NextResponse } from "next/server"
import dbConnect from "../../../../database/mongodb"
import { Message } from "../../../../database/Message"

 
export async function GET(
    request: Request,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    context: any
) {
    const { threadId } = await context.params

    if (!threadId || typeof threadId !== 'string') {
        return NextResponse.json(
            { error: 'Valid threadId is required' },
            { status: 400 }
        )
    }

    await dbConnect()

    const messages = await Message.find({ threadId })
        .sort({ timestamp: 1 })
        .lean()

    return NextResponse.json({
        threadId,
        messages,
        messageCount: messages.length
    })
} 