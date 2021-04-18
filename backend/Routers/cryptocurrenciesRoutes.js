const express = require("express");

const router = express.Router();

const {
  getGlobalData,
  getCryptoNews,
  getLiveMarketData,
} = require("./handlers/cryptocurrencies.js");

router.get("/globalData", getGlobalData);
router.get("/cryptoNews", getCryptoNews);
router.get("/liveMarket", getLiveMarketData);

module.exports = router;
