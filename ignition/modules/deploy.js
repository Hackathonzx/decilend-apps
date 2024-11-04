const { ethers } = require("hardhat");

async function main() {
    // Deploy Lending Contract
    const LendingFactory = await ethers.getContractFactory("Lending");
    const lending = await LendingFactory.deploy();
    await lending.waitForDeployment();
    console.log("Lending Contract deployed at:", await lending.getAddress());

    // Deploy Repayment Contract
    const RepaymentFactory = await ethers.getContractFactory("Repayment");
    const repayment = await RepaymentFactory.deploy();
    await repayment.waitForDeployment();
    console.log("Repayment Contract deployed at:", await repayment.getAddress());

    // Deploy CreditScore Contract
    const CreditScoreFactory = await ethers.getContractFactory("CreditScore");
    const creditScore = await CreditScoreFactory.deploy();
    await creditScore.waitForDeployment();
    console.log("Credit Score Contract deployed at:", await creditScore.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
