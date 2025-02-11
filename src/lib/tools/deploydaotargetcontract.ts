import type { ToolConfig } from "./alltools";
import { createViemWalletClient } from "../viem/createviemwalletclient";
import { DaoTargetContract_ABI, DaoTargetContract_BYTECODE } from "../onchain/daotargetcontract";
import { createViemPublicClient } from "../viem/createviewpublicclinet";

/**
 * Configuration for the deploy_dao_target tool.
 */
export const deployDaoTargetContractTool: ToolConfig = {
    /**
     * The definition of the tool.
     */
    definition: {
        type: "function",
        function: {
            name: "deploy_dao_target_contract",
            description: "Deploy a new DAO Target contract that will be controlled by the DAO governance",
            parameters: {
                type: "object",
                properties: {},
                required: [],
            },
        },
    },

    /**
     * The handler function that will be called when the tool is executed.
     */
    handler: async () => {
        const publicClient = createViemPublicClient();
        const walletClient = createViemWalletClient();

        const hash = await walletClient.deployContract({
            account: walletClient.account,
            abi: DaoTargetContract_ABI,
            bytecode: DaoTargetContract_BYTECODE,
        });

        const receipt = await publicClient.waitForTransactionReceipt({ hash });

        console.log(`DAO Target Contract deployed at address: ${receipt.contractAddress}`);

        return `DAO Target contract deployed successfully at: ${receipt.contractAddress}`;
    },
};
