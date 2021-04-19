const express = require("express");

const router = express.Router();

const {
  storeFavoriteCoin,
  getFavoriteCoins,
  registerUser,
  login,
} = require("./handlers/users");

router.post("/storeFavoriteCoin", storeFavoriteCoin);

router.get("/getFavoriteCoins", getFavoriteCoins);

router.post("/register", registerUser);

router.post("/login", login);

module.exports = router;
