import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const defaultNetwork = "arbitrumSepolia";
const mainnetGwei = 21;

const config: HardhatUserConfig = {
  defaultNetwork,
  // gasReporter: {
  //   currency: "USD",
  //   coinmarketcap: process.env.COINMARKETCAP || undefined,
  // },
  networks: {
    arbitrumMainnet: {
      url: `${process.env.ARBITRUM_MAINNET_RPC_URL}`,
      gasPrice: mainnetGwei * 1000000000,
      accounts: [`${process.env.ARBITRUM_PROD_DEPLOYER_PRIV_KEY}`],
    },
    arbitrumSepolia: {
      url: `${process.env.ARBITRUM_SEPOLIA_RPC_URL}`,
      accounts: [`${process.env.ARBITRUM_SEPOLIA_DEPLOYER_PRIV_KEY}`],
    },
    hardhat: {
      forking: {
        url: "https://sepolia.arbitrum.io/rpc",
        blockNumber: 120921756
      }
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      }
    ],
  }
};

export default config;
