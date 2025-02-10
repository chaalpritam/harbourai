import { getWalletAddressTool } from "./getwalletaddress";
import { getBalanceTool } from "./getbalance";
import { sendTransactionTool } from "./sendtransaction";
import { deployErc20Tool } from "./deployerc20";
import { deployDaoTokenTool } from "./deploydaotoken";
import { deployDaoGovernorTool } from "./deploydaogovernor";
import { deployDaoTimelockTool } from "./deploydaotimelock";
import { deployDaoTargetContractTool } from "./deploydaotargetcontract";

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