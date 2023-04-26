require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const HTTP_URL = process.env.HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    ethermint: {
      url: HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
