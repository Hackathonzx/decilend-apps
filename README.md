# DeciLend: Global Decentralized Micro-Lending Network

# Project Overview

DeciLend empowers underserved communities by connecting lenders and borrowers in a decentralized network. Through smart contracts, borrowers can access loans with transparent, fair terms, and lenders can diversify their portfolios with minimized risk.

# Features

- Decentralized Lending: Borrowers can create loan requests and receive funding directly from lenders.

- Credit Scoring: A built-in credit scoring system that incentivizes timely repayments.

- Transparent Transactions: All transactions are recorded on the blockchain for transparency and security.

- User-Friendly Interface: Designed for accessibility, catering to users with varying levels of technical familiarity.

# Technical Stack

Frontend: javascript

Smart Contracts: Solidity (for lending, borrowing, and credit scoring)

Blockchain: XRPL_EVM_Sidechain_Devnet

# Smart Contracts

1. Lending Contract
This contract manages the creation and funding of loans.

2. Repayment Contract
Handles the repayment of loans, including late penalties and repayment schedules.

3. Credit Score Contract
Maintains the credit scores of borrowers and updates scores based on repayment history.

# Getting Started

**Prerequisites**

- Node.js

- npm

- Hardhat (for development and testing)

**Installation**

- Clone the repository:

git clone https://github.com/Hackathonzx/decilend.git

cd deciLend

**Install dependencies:**

- npm install

**Compile the smart contracts:**

- npx hardhat compile

# Deployment

To deploy the contracts on the XRPL_EVM_Sidechain_Devnet, use the deployment script provided in the scripts directory:

- npx hardhat run ignition/modules/deploy.js --network XRPL_EVM_Sidechain_Devnet

Here are the deployed contract addresses for each contract:

1. Lending Contract deployed at: 0x2Fad953E1F524e6590EdF50BDA6FCB391Dd4Fd96

2. Repayment Contract deployed at: 0x359451AC3C73827A7653C0Ab7D30243844a55447

3. Credit Score Contract deployed at: 0x069F92465a8795a06A28B1e85f320D57CE29Bc8F

# Verified contract
1. Successfully verified contract Lending on the block explorer.
https://explorer.xrplevm.org/address/0x2Fad953E1F524e6590EdF50BDA6FCB391Dd4Fd96#code

2. Successfully verified contract Repayment on the block explorer.
https://explorer.xrplevm.org/address/0x359451AC3C73827A7653C0Ab7D30243844a55447#code

3. Successfully verified contract CreditScore on the block explorer.
https://explorer.xrplevm.org/address/0x069F92465a8795a06A28B1e85f320D57CE29Bc8F#code



# Testing

To run the test cases for the smart contracts:

npx hardhat test

  DeciLend Contracts

    ✔ should allow a borrower to create a loan

    ✔ should allow a lender to fund a loan

    ✔ should allow a borrower to repay a loan

    ✔ should update the credit score on repayment


  4 passing (3s)

  

# Contributing

Contributions are welcome! Please open issues or pull requests for any enhancements or bug fixes.

# License

This project is licensed under the MIT License.