const express = require('express');
const etherController = require('../src/controllers/etherController');

const router = express.Router();

/**
 * @swagger
 * /ether/validate/{address}:
 *   get:
 *     tags:
 *       - Ether
 *     summary: Check if a wallet address is valid.
 *     description: This endpoint checks whether a given Ethereum wallet address is valid or not.
 *     parameters:
 *       - name: address
 *         in: path
 *         required: true
 *         description: The Ethereum wallet address to validate.
 *         type: string
 *     responses:
 *       200:
 *         description: Boolean indicating whether the address is valid or not.
 *         schema:
 *           $ref: "#/definitions/EtherAddressValidationResponse"
 *         examples:
 *           application/json: { "isValid": true }
 *       400:
 *         description: Bad request, invalid address format.
 *         examples:
 *           application/json: { "message": "Invalid address format" }
 */
router.get('/validate/:address', etherController.isValidAddress);

/**
 * @swagger
 * /ether/createWallet:
 *   get:
 *     tags:
 *       - Ether
 *     summary: Create a new Ethereum wallet.
 *     description: This endpoint generates a new random Ethereum wallet.
 *     responses:
 *       200:
 *         description: The generated Ethereum wallet.
 *         schema:
 *           $ref: "#/definitions/EtherWallet"
 *         examples:
 *           application/json: { "address": "0x...", "privateKey": "..." }
 */
router.get('/createWallet', etherController.createNewWallet);

/**
 * @swagger
 * /ether/latestTransactions:
 *   get:
 *     tags:
 *       - Ether
 *     summary: Get the latest 1000 Ethereum transactions.
 *     description: This endpoint fetches and returns the latest 1000 Ethereum transactions.
 *     responses:
 *       200:
 *         description: List of the latest transactions.
 *         schema:
 *           type: array
 *           items:
 *             $ref: "#/definitions/EtherTransaction"
 *         examples:
 *           application/json: [{"transactionHash": "...", "senderAddress": "...", "receiverAddress": "...", "amount": "...", "blockNumber": 12345}]
 */
router.get('/latestTransactions', etherController.getLatestEthTransactions);

module.exports = router;
