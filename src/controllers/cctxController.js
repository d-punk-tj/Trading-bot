const { getTradableCoins, getAveragePrices } = require('../services/cctxService');

// Add route handlers for CCTX
const getTradableCoinsList = async (req, res) => {
  const coins = await getTradableCoins();
  res.json(coins);
};

const getCoinsAveragePrices = async (req, res) => {
  const averagePrices = await getAveragePrices();
  res.json(averagePrices);
};

module.exports = {
  getTradableCoinsList,
  getCoinsAveragePrices,
};
