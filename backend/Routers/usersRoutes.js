const express = require("express");

const router = express.Router();

const {
  storeFavoriteCoin,
  getFavoriteCoins,
  registerUser,
  login,
  storeTrackedCoin,
  getTrackedCoins,
} = require("./handlers/users");

router.post("/storeFavoriteCoin", storeFavoriteCoin);

router.get("/getFavoriteCoins", getFavoriteCoins);

router.post("/register", registerUser);

router.post("/login", login);

router.post("/storeTrackedCoin", storeTrackedCoin);

router.get("/getTrackedCoins", getTrackedCoins);

module.exports = router;
