import type { Address } from "viem";
import { createViemWalletClient } from "../viem/createviemwalletclient";
import type { ToolConfig } from "./alltools";

import type { GetWalletAddressArgs } from "../interface/index";

export const getWalletAddressTool: ToolConfig<GetWalletAddressArgs> = {
    definition: {
        type: "function",
        function: {
            name: "get_wallet_address",
            description: "Get the connected wallet address",
            // No parameters needed since we're getting the connected wallet
            parameters: {
                type: "object",
                properties: {},
                required: [],
            },
        },
    },
    handler: async () => {
        return await getWalletAddress();
    },
};

async function getWalletAddress(): Promise<Address> {
    const walletClient = createViemWalletClient();
    const [address] = await walletClient.getAddresses();
    return address;
}