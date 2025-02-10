import OpenAI from "openai";
import { createAssistant } from "../../../lib/openai/createassistant";
import { createThread } from "../../../lib/openai/createthread";
import { createRun } from "../../../lib/openai/createrun";
import { performRun } from "../../../lib/openai/performruns";

const client = new OpenAI();

// Store threads in memory (consider using a database in production)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const threads: Record<string, any> = {};

export async function POST(
    req: Request
) {
    try {
        const { message, threadId } = await req.json();

        // Get or create thread
        let thread;
        if (threadId && threads[threadId]) {
            thread = threads[threadId];
        } else {
            await createAssistant(client);
            thread = await createThread(client);
            threads[thread.id] = thread;
        }

        // Add the user's message to the thread
        await client.beta.threads.messages.create(thread.id, {
            role: "user",
            content: message,
        });

        // Create and perform the run
        const assistant = await createAssistant(client);
        const run = await createRun(client, thread, assistant.id);
        const result = await performRun(run, client, thread);

        return Response.json({
            threadId: thread.id,
            response: result?.type === "text" ? result.text.value : null,
        });
    } catch (error) {
        console.error('API Error:', error);
        return Response.json(
            { error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}