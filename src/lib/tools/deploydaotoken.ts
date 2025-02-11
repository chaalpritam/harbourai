import type { ToolConfig } from "./alltools";
import { createViemWalletClient } from "../viem/createviemwalletclient";
import { DaoToken_ABI, DaoToken_BYTECODE } from "../onchain/daotoken";
import { createViemPublicClient } from "../viem/createviewpublicclinet";

/**
 * Configuration for the deploy_dao_token tool.
 */
export const deployDaoTokenTool: ToolConfig = {
    /**
     * The definition of the tool.
     */
    definition: {
        type: "function",
        function: {
            /**
             * The name of the tool.
             */
            name: "deploy_dao_token",
            /**
             * A short description of what the tool does.
             */
            description: "Deploy a new DAO governance token with voting capabilities",
            /**
             * The parameters that the tool accepts.
             */
            parameters: {
                type: "object",
                properties: {
                    /**
                     * The name of the token.
                     */
                    name: {
                        type: "string",
                        description: "The name of the governance token",
                    },
                    /**
                     * The symbol of the token.
                     */
                    symbol: {
                        type: "string",
                        description: "The symbol of the governance token",
                    },
                    /**
                     * The initial supply of the token in natural language.
                     */
                    initialSupply: {
                        type: "string",
                        description:
                            'Initial supply in natural language (e.g., "one million", "half a billion", "10k", "1.5M tokens"). Interpret the amount and format it into a number amount and then convert it into wei. Defaults to 1 billion tokens if not specified.',
                    },
                },
                /**
                 * The required parameters.
                 */
                required: ["name", "symbol"],
            },
        },
    },
    /**
     * The handler function that will be called when the tool is executed.
     */
    handler: async (args: {
        name: string;
        symbol: string;
        initialSupply?: string;
    }) => {
        /**
         * The base number of tokens to deploy.
         */
        const baseNumber = parseFloat(args.initialSupply || "1000000000"); // 1 billion default

        /**
         * The public client instance.
         */
        const publicClient = createViemPublicClient();

        /**
         * The wallet client instance.
         */
        const walletClient = createViemWalletClient();

        /**
         * The hash of the transaction.
         */
        const hash = await walletClient.deployContract({
            account: walletClient.account,
            abi: DaoToken_ABI,
            bytecode: DaoToken_BYTECODE,
            args: [args.name, args.symbol, baseNumber],
        });

        /**
         * The transaction receipt.
         */
        const receipt = await publicClient.waitForTransactionReceipt({ hash });

        /**
         * Log a message to the console with the contract address.
         */
        console.log(`DAO Token deployed at address: ${receipt.contractAddress}`);

        /**
         * Return a success message with the contract address.
         */
        return `${args.name} (${args.symbol}) DAO governance token deployed successfully at: ${receipt.contractAddress}`;
    },
};
