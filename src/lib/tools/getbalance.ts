import { createViemPublicClient } from "../viem/createviewpublicclinet";
import type { ToolConfig } from "./alltools";
import { formatEther } from "viem";
import type { Address } from "viem";
import type { GetBalanceArgs } from "../interface/index";

export const getBalanceTool: ToolConfig<GetBalanceArgs> = {
    definition: {
        type: "function",
        function: {
            name: "get_balance",
            description: "Get the balance of a wallet",
            parameters: {
                type: "object",
                properties: {
                    wallet: {
                        type: "string",
                        pattern: "^0x[a-fA-F0-9]{40}$",
                        description: "The wallet address to get the balance from",
                    },
                },
                required: ["wallet"],
            },
        },
    },
    handler: async ({ wallet }) => {
        return await getBalance(wallet);
    },
};

async function getBalance(wallet: Address) {
    const publicClient = createViemPublicClient();
    const balance = await publicClient.getBalance({ address: wallet });
    return formatEther(balance);
}