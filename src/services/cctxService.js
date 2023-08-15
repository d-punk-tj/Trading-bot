const ccxt = require('ccxt');

const getTradableCoins = async () => {
  const binance = new ccxt.binance();
  const markets = await binance.loadMarkets();
  const tradableCoins = Object.keys(markets);
  return tradableCoins;
};

const getAveragePrices = async () => {
  const binance = new ccxt.binance();
  const coins = await getTradableCoins();

  const averagePrices = {};

  for (const coin of coins) {
    const recentTrades = await binance.fetchTrades(coin, 100);
    const prices = recentTrades.map((trade) => trade.price);
    const averagePrice = prices.reduce((sum, price) => sum + price, 0) / prices.length;
    averagePrices[coin] = averagePrice;
  }

  return averagePrices;
};

module.exports = {
  getTradableCoins,
  getAveragePrices,
};
