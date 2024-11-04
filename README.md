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

Blockchain: AIAchain

# Smart Contracts

1. Lending Contract
This contract manages the creation and funding of loans.

2. Repayment Contract
Handles the repayment of loans, including late penalties and repayment schedules.

3. Credit Score Contract
Maintains the credit scores of borrowers and updates scores based on repayment history.

# Getting Started

**Prerequisites**

Node.js

npm

Hardhat (for development and testing)

**Installation**

Clone the repository:

git clone https://github.com/Hackathonzx/decilend.git

cd deciLend

**Install dependencies:**

npm install

**Compile the smart contracts:**

npx hardhat compile

**Deployment**

To deploy the contracts on the AIAchain testnet, use the deployment script provided in the scripts directory:

npx hardhat run ignition/modules/deploy.js --network AIATestnet

Here are the deployed contract addresses for each contract:

Lending Contract deployed at: 0x1d8c981FD95060A45b3Cea346DbF7b5b48f5CD36

Repayment Contract deployed at: 0xf1979Ac32D086D1f3f3773fe0828d37729ed545f

Credit Score Contract deployed at: 0x2479eb1a719799D2956bB80551d9FA1aF46b0560



# Testing

To run the test cases for the smart contracts:

npx hardhat test

  DeciLend Contracts

    ✔ should allow a borrower to create a loan

    ✔ should allow a lender to fund a loan

    ✔ should allow a borrower to repay a loan

    ✔ should update the credit score on repayment


  4 passing (3s)

  Verify your contracts:

npx hardhat verify --network aiatestnet <contract-address>

# Contributing

Contributions are welcome! Please open issues or pull requests for any enhancements or bug fixes.

# License

This project is licensed under the MIT License.