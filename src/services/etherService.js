const { ethers } = require('ethers'); // Import the ethers object
const TransactionModel = require('../entities/transactionModel');
require('dotenv').config();

// Initialize Ethereum provider
const provider = new ethers.InfuraProvider('mainnet', process.env.INFURA_PROJECT_ID); 

const validateAddress = async (address) => {
  try {
    return ethers.utils.isAddress(address);
  } catch (error) {
    return false;
  }
};

const createWallet = () => {
  const wallet = ethers.Wallet.createRandom();
  return wallet;
};

const getLatestTransactions = async () => {
  try {
    const latestTransactions = await provider.getLogs({
      fromBlock: 0,
      toBlock: 'latest',
    });

    // Process and save transactions to the database
    for (const tx of latestTransactions) {
      await TransactionModel.create({
        transactionHash: tx.transactionHash,
        senderAddress: tx.topics[1],
        receiverAddress: tx.topics[2],
        amount: ethers.utils.formatEther(tx.data),
        blockNumber: tx.blockNumber,
      });
    }

    // Retrieve and return the latest 1000 transactions
    const sortedTransactions = await TransactionModel.find()
      .sort({ amount: -1 })
      .limit(1000);

    return sortedTransactions;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  validateAddress,
  createWallet,
  getLatestTransactions,
};
