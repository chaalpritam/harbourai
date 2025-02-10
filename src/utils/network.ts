import { Chain } from "wagmi/chains";

export const arbitrumSepolia: Chain = {
    id: 421614,
    name: "Arbitrum Sepolia",
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
    rpcUrls: {
        default: {
            // http: ["https://sepolia-rollup.arbitrum.io/rpc"],
            http: ["https://endpoints.omniatech.io/v1/arbitrum/sepolia/public"]
        },
    },
    blockExplorers: {
        default: {
            name: "Arbitrum Sepolia Block Explorer",
            url: "https://sepolia-explorer.arbitrum.io",
        },
    }
};