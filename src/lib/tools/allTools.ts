import { getWalletAddressTool } from "./getWalletAddress";
import { getBalanceTool } from "./getBalance";
import { sendTransactionTool } from "./sendTransaction";
import { deployErc20Tool } from "./deployERC20";
import { deployDaoTokenTool } from "./deployDaoToken";
import { deployDaoGovernorTool } from "./deployDaoGovernor";
import { deployDaoTimelockTool } from "./deployDaoTimelock";
import { deployDaoTargetContractTool } from "./deployDaoTargetContract";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ToolConfig<T = any> {
    definition: {
        type: "function";
        function: {
            name: string;
            description: string;
            parameters: {
                type: "object";
                properties: Record<string, unknown>;
                required: string[];
            };
        };
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handler: (args: T) => Promise<any>;
}

export const tools: Record<string, ToolConfig> = {
    get_balance: getBalanceTool,
    get_wallet_address: getWalletAddressTool,
    send_transaction: sendTransactionTool,
    deploy_erc20: deployErc20Tool,
    deploy_dao_token: deployDaoTokenTool,
    deploy_dao_governor: deployDaoGovernorTool,
    deploy_dao_timelock: deployDaoTimelockTool,
    deploy_dao_target_contract: deployDaoTargetContractTool
};