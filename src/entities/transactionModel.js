const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  transactionHash: String,
  senderAddress: String,
  receiverAddress: String,
  amount: String,
  blockNumber: Number,
});

module.exports = mongoose.model('Transaction', transactionSchema);
