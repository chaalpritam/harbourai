import { createPublicClient, http } from 'viem'
import { arbitrumSepolia } from 'viem/chains'

export function createViemPublicClient() {
    return createPublicClient({
        chain: arbitrumSepolia,
        transport: http(),
    });
}