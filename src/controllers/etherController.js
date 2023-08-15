const { validateAddress, createWallet, getLatestTransactions } = require('../services/etherService');

// Add route handlers for Ether.js
const isValidAddress = (req, res) => {
  const { address } = req.params;
  const isValid = validateAddress(address);
  res.json({ isValid });
};

const createNewWallet = (req, res) => {
  const wallet = createWallet();
  res.json(wallet);
};

const getLatestEthTransactions = async (req, res) => {
  const transactions = await getLatestTransactions();
  res.json(transactions);
};

module.exports = {
  isValidAddress,
  createNewWallet,
  getLatestEthTransactions,
};
