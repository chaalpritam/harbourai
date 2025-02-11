import type { ToolConfig } from "./alltools";
import { createViemWalletClient } from "../viem/createviemwalletclient";
import { DaoGovernor_ABI, DaoGovernor_BYTECODE } from "../onchain/daogovernor";
import { createViemPublicClient } from "../viem/createviewpublicclinet";

/**
 * Configuration for the deploy_dao_governor tool.
 */
export const deployDaoGovernorTool: ToolConfig = {
    /**
     * The definition of the tool.
     */
    definition: {
        type: "function",
        function: {
            name: "deploy_dao_governor",
            description: "Deploy a new DAO Governor contract for governance functionality",
            parameters: {
                type: "object",
                properties: {
                    tokenAddress: {
                        type: "string",
                        description: "The address of the governance token (DaoToken) contract",
                    },
                    timelockAddress: {
                        type: "string",
                        description: "The address of the timelock controller contract",
                    },
                    quorumPercentage: {
                        type: "number",
                        description: "The percentage of total supply required for quorum (e.g., 4 for 4%)",
                    },
                    votingPeriod: {
                        type: "number",
                        description: "The voting period in blocks (e.g., 50400 for ~1 week with 12s blocks)",
                    },
                    votingDelay: {
                        type: "number",
                        description: "The delay before voting starts in blocks (e.g., 7200 for ~1 day with 12s blocks)",
                    },
                    proposalThreshold: {
                        type: "number",
                        description: "The minimum number of tokens needed to submit a proposal",
                    },
                },
                required: [
                    "tokenAddress",
                    "timelockAddress",
                    "quorumPercentage",
                    "votingPeriod",
                    "votingDelay",
                    "proposalThreshold"
                ],
            },
        },
    },

    /**
     * The handler function that will be called when the tool is executed.
     */
    handler: async (args: {
        tokenAddress: string;
        timelockAddress: string;
        quorumPercentage: number;
        votingPeriod: number;
        votingDelay: number;
        proposalThreshold: number;
    }) => {
        const publicClient = createViemPublicClient();
        const walletClient = createViemWalletClient();

        const hash = await walletClient.deployContract({
            account: walletClient.account,
            abi: DaoGovernor_ABI,
            bytecode: DaoGovernor_BYTECODE,
            args: [
                args.tokenAddress,
                args.timelockAddress,
                args.quorumPercentage,
                args.votingPeriod,
                args.votingDelay,
                args.proposalThreshold
            ],
        });

        const receipt = await publicClient.waitForTransactionReceipt({ hash });

        console.log(`DAO Governor deployed at address: ${receipt.contractAddress}`);

        return `DAO Governor contract deployed successfully at: ${receipt.contractAddress}`;
    },
};
