import OpenAI from "openai";
import type { Assistant } from "openai/resources/beta/assistants";
import { tools } from '../tools/alltools';
import { assistantPrompt } from "../const/prompt";

export async function createAssistant(client: OpenAI): Promise<Assistant> {
    return await client.beta.assistants.create({
        model: "gpt-4o-mini",
        name: "Sathoshi Nakamoto",
        instructions: assistantPrompt,
        tools: Object.values(tools).map(tool => tool.definition)
    });
}