require("@nomicfoundation/hardhat-ethers");
require('@nomicfoundation/hardhat-toolbox');
require("dotenv").config();

const { RPC_URL, PRIVATE_KEY } = process.env

module.exports = {
  solidity: "0.8.20",
  networks: {
    XRPL_EVM_Sidechain_Devnet: {
      url: "https://rpc-evm-sidechain.xrpl.org",
      chainId: 1440002,
      accounts: [process.env.PRIVATE_KEY],
    },
  },

  // sourcify: {
  //   enabled: true
  // }, 

  // etherscan: {
  //   apiKey: {
  //     'XRPL_EVM_Sidechain_Devnet': "void"
  //   },
  //   customChains: [
  //     {
  //       network: "XRPL_EVM_Sidechain_Devnet",
  //       chainId: 1440002,
  //       urls: {
  //         apiURL: "https://explorer.xrplevm.org/api",
  //         browserURL: "https://explorer.xrplevm.org/",
  //       }
  //     }
  //   ]
  // }
};
