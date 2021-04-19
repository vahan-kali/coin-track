const { MongoClient, Db } = require("mongodb");
const bcrypt = require("bcrypt");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const storeFavoriteCoin = async (req, res) => {
  console.log(req.body.coin);
  const coin = req.body.coin;
  console.log(req.body.favorite);
  const favorite = req.body.favorite;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db();
  console.log("connected!");
  if (!favorite) {
    await db.collection("users").deleteOne({ favoriteCoin: coin });
  } else {
    await db.collection("users").insertOne({ favoriteCoin: coin });
  }

  client.close();
  console.log("disconnected!");
  if (coin) {
    return res.status(200).json({ status: 200, data: coin, favorite });
  } else {
    return res.status(400).json({ status: 400, message: "No data received" });
  }
};

const getFavoriteCoins = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db();
  console.log("connected!");
  const data = await db.collection("users").find().toArray();
  const favoriteCoins = data;
  client.close();
  console.log("disconnected!");
  if (favoriteCoins.length > 0) {
    return res.status(200).json({ status: 200, data: favoriteCoins });
  } else {
    return res.status(400).json({ status: 400, message: "No data received" });
  }
};

const registerUser = async (req, res) => {
  /**
   * TODO:
   * 1. enforce email uniqueness
   */
  let password = req.body.password;
  const passwordConfirmation = req.body.passwordConfirmation;
  if (password !== passwordConfirmation) {
    return res
      .status(400)
      .json({ status: 400, message: "Passwords dont match" });
  }
  bcrypt.hash(password, 10, function (err, hash) {
    password = hash;
  });
  const email = req.body.email;
  const username = req.body.username;

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db();
  console.log("connected!");
  const data = await db.collection("users").insertOne({
    loginInfo: {
      email: email,
      username: username,
      password: password,
    },
    trackCoins: {},
    favorites: {},
  });

  client.close();
  console.log(data.ops[0].loginInfo.email, "Data");
  console.log("disconnected!");
  if (data.ops[0].loginInfo.email === email) {
    return res.status(201).json({ status: 201, message: "User received" });
  } else {
    return res.status(400).json({ status: 400, message: "No data received" });
  }
};

const login = async (req, res) => {
  let password = req.body.password;
  let email = req.body.email;
  // if (password !== passwordConfirmation) {
  //   return res
  //     .status(400)
  //     .json({ status: 400, message: "Passwords dont match" });
  // }
  // bcrypt.hash(password, 10, function (err, hash) {
  //   password = hash;
  // });
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db();
  console.log("connected!");
  const data = await db.collection("users").find().toArray();

  const user = data.find((user) => {
    return user.loginInfo.email === email;
  });
  client.close();
  console.log("disconnected!");

  if (user) {
    bcrypt.compare(password, user.loginInfo.password, (err, result) => {
      if (result) {
        console.log("successfully logged in");
        return res
          .status(200)
          .json({ status: 200, message: "User succesfully logged in" });
      } else {
        console.log("password does not match");
        return res
          .status(400)
          .json({ status: 400, message: "Password does not match" });
      }
    });
  } else {
    console.log("user does not exist");
    return res
      .status(404)
      .json({ status: 404, message: "User does not exist" });
  }
};
module.exports = { storeFavoriteCoin, getFavoriteCoins, registerUser, login };
