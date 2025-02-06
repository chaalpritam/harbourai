import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from 'viem/accounts';
import { arbitrumSepolia } from "viem/chains";

export function createViemWalletClient() {
    if (!process.env.WALLET_PRIVATE_KEY) {
        throw new Error("⛔ PRIVATE_KEY environment variable is not set.");
    }

    const account = privateKeyToAccount(
        (process.env.WALLET_PRIVATE_KEY?.startsWith('0x') ? '' : '0x') + process.env.WALLET_PRIVATE_KEY as `0x${string}`
    );

    return createWalletClient({
        account,
        chain: arbitrumSepolia,
        transport: http(),
    });
}