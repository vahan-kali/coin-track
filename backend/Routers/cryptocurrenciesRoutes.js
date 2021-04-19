const express = require("express");

const router = express.Router();

const {
  getGlobalData,
  getCryptoNews,
  getLiveMarketData,
  getCoinHistoricalData,
  getLiveCoinData,
} = require("./handlers/cryptocurrencies.js");

router.get("/globalData", getGlobalData);
router.get("/cryptoNews", getCryptoNews);
router.get("/liveMarket", getLiveMarketData);
router.get("/coinHistory/:coin/:date", getCoinHistoricalData);
router.get("/liveCoinData/:coin", getLiveCoinData);

module.exports = router;
