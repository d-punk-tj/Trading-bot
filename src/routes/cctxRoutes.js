const express = require('express');
const cctxController = require('../src/controllers/cctxController');

const router = express.Router();

/**
 * @swagger
 * /cctx/tradableCoins:
 *   get:
 *     tags:
 *       - CCTX
 *     summary: Get the list of tradable coins on Binance.
 *     description: This endpoint retrieves the list of coins that are tradable on the Binance exchange.
 *     responses:
 *       200:
 *         description: List of tradable coins.
 *         schema:
 *           $ref: "#/definitions/CCTXTradableCoinsResponse"
 *         examples:
 *           application/json: ["BTC", "ETH", "XRP"]
 */
router.get('/tradableCoins', cctxController.getTradableCoinsList);

/**
 * @swagger
 * /cctx/averagePrices:
 *   get:
 *     tags:
 *       - CCTX
 *     summary: Get the average prices of tradable coins.
 *     description: This endpoint fetches and returns the average prices of recent trades for each tradable coin on Binance.
 *     responses:
 *       200:
 *         description: Object containing average prices for each coin.
 *         schema:
 *           $ref: "#/definitions/CCTXAveragePricesResponse"
 *         examples:
 *           application/json: {"BTC": 40000, "ETH": 2500, "XRP": 1.5}
 */
router.get('/averagePrices', cctxController.getCoinsAveragePrices);

module.exports = router;
