const e = require("express");
const fetch = require("node-fetch");

const getGlobalData = async (req, res) => {
  const coinMarketCapApiKey = process.env.REACT_APP_COIN_MARKET_CAP_API_KEY;
  const response = await fetch(
    "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest",
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": coinMarketCapApiKey,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  if (data) {
    res.status(200).json({ status: 200, message: "success!", data: data });
  } else {
    res.status(404).json({ status: 404, message: "data not found!" });
  }
};

const getCryptoNews = async (req, res) => {
  const finnHubApiKey = process.env.REACT_APP_COIN_FINN_HUB_API_KEY;
  const response = await fetch(
    "https://finnhub.io/api/v1/news?category=crypto",
    {
      method: "GET",
      headers: {
        "X-Finnhub-Token": finnHubApiKey,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  if (data) {
    res.status(200).json({ status: 200, message: "success!", data: data });
  } else {
    res.status(404).json({ status: 404, message: "data not found!" });
  }
};

const getLiveMarketData = async (req, res) => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d",
    {
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  if (data) {
    res.status(200).json({ status: 200, message: "success!", data: data });
  } else {
    res.status(404).json({ status: 404, message: "data not found!" });
  }
};

const getCoinHistoricalData = async (req, res) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${req.params.coin}/history?date=${req.params.date}&localization=false`,
    {
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  if (data) {
    res.status(200).json({ status: 200, message: "success!", data: data });
  } else {
    res.status(404).json({ status: 404, message: "data not found!" });
  }
};

const getLiveCoinData = async (req, res) => {
  console.log(req.params.coin, "get live coin");
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${req.params.coin}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`,
    {
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  if (data) {
    res.status(200).json({ status: 200, message: "success!", data: data });
  } else {
    res.status(404).json({ status: 404, message: "data not found!" });
  }
};

module.exports = {
  getGlobalData,
  getCryptoNews,
  getLiveMarketData,
  getCoinHistoricalData,
  getLiveCoinData,
};
