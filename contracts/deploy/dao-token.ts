import { ethers } from "hardhat";
import {
    TOKEN_NAME,
    TOKEN_SYMBOL,
    INIT_TOKEN_SUPPLY
} from "../constants";
import { DaoToken } from "../typechain-types";

async function deployGovernanceToken(): Promise<DaoToken> {
    await ethers.getSigners();

    const daoToken = await ethers.deployContract(
        "DaoToken",
        [TOKEN_NAME, TOKEN_SYMBOL, INIT_TOKEN_SUPPLY]
    );
    await daoToken.waitForDeployment();

    return daoToken;
}

export default deployGovernanceToken;