const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  const metadataURL = METADATA_URL;

  const celestiaNftContract = await ethers.getContractFactory("CelestiaNft");

  const deployedCelestiaNftContract = await celestiaNftContract.deploy(
    metadataURL,
    whitelistContract
  );

  await deployedCelestiaNftContract.deployed();

  console.log(
    "Celestia NFT Contract Address:",
    deployedCelestiaNftContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
