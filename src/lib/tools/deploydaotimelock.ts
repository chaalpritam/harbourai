import type { ToolConfig } from "./alltools";
import { createViemWalletClient } from "../viem/createviemwalletclient";
import { DaoTimelock_ABI, DaoTimelock_BYTECODE } from "../onchain/daotimelock";
import { createViemPublicClient } from "../viem/createviewpublicclinet";

/**
 * Configuration for the deploy_timelock tool.
 */
export const deployDaoTimelockTool: ToolConfig = {
    /**
     * The definition of the tool.
     */
    definition: {
        type: "function",
        function: {
            name: "deploy_dao_timelock",
            description: "Deploy a new Timelock Controller contract for delayed governance execution",
            parameters: {
                type: "object",
                properties: {
                    minDelay: {
                        type: "number",
                        description: "The minimum delay in seconds before an operation can be executed (e.g., 172800 for 2 days)",
                    },
                    proposers: {
                        type: "array",
                        items: { type: "string" },
                        description: "Array of addresses that can propose new operations",
                    },
                    executors: {
                        type: "array",
                        items: { type: "string" },
                        description: "Array of addresses that can execute operations after delay",
                    },
                    admin: {
                        type: "string",
                        description: "The address that will be granted admin role (can grant/revoke roles)",
                    }
                },
                required: ["minDelay", "proposers", "executors", "admin"],
            },
        },
    },

    /**
     * The handler function that will be called when the tool is executed.
     */
    handler: async (args: {
        minDelay: number;
        proposers: string[];
        executors: string[];
        admin: string;
    }) => {
        // Input validation
        if (args.minDelay < 0) {
            throw new Error("minDelay must be non-negative");
        }
        if (args.proposers.length === 0) {
            throw new Error("At least one proposer address is required");
        }
        if (args.executors.length === 0) {
            throw new Error("At least one executor address is required");
        }
        if (!args.admin || args.admin === "0x0000000000000000000000000000000000000000") {
            throw new Error("Invalid admin address");
        }

        const publicClient = createViemPublicClient();
        const walletClient = createViemWalletClient();

        const hash = await walletClient.deployContract({
            account: walletClient.account,
            abi: DaoTimelock_ABI,
            bytecode: DaoTimelock_BYTECODE,
            args: [
                args.minDelay,
                args.proposers,
                args.executors,
                args.admin
            ],
        });

        const receipt = await publicClient.waitForTransactionReceipt({ hash });

        console.log(`Timelock Controller deployed at address: ${receipt.contractAddress}`);

        return `Timelock Controller contract deployed successfully at: ${receipt.contractAddress}`;
    },
};
