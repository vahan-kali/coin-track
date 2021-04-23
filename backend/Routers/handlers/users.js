const { MongoClient, Db } = require("mongodb");
const bcrypt = require("bcrypt");
const assert = require("assert");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000,
  keepAlive: 1,
};

const token = () => {
  return (Math.random() * 1000000000) / 56.4567;
};

const storeFavoriteCoin = async (req, res) => {
  const coin = req.body.coin;
  const userToken = req.body.userToken;

  console.log(req.body.favorite);
  const favorite = req.body.favorite;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db();
  console.log("connected!");
  const data = await db.collection("users").find().toArray();
  const user = data.find((user) => {
    console.log(user.loginInfo.token, "%", userToken);
    return user.loginInfo.token == userToken;
  });
  if (user === undefined) {
    return res.status(400).json({ status: 400, message: "User not logged in" });
  }

  const _id = user._id;

  const query = { _id };

  const updateFavorites = user.favorites;

  if (!favorite) {
    delete updateFavorites[coin];
  } else {
    updateFavorites[coin] = coin;
  }

  const newValues = { $set: { favorites: updateFavorites } };

  const result = await db.collection("users").updateOne(query, newValues);
  // assert.strictEqual(1, result.matchedCount);
  // assert.strictEqual(1, result.modifiedCount);

  client.close();
  console.log("disconnected!");
};

const getFavoriteCoins = async (req, res) => {
  const token = req.get("usertoken");

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db();
  console.log("connected!");
  const data = await db.collection("users").find().toArray();
  const currentUser = data.find((user) => {
    console.log(user.loginInfo.token, token);
    return user.loginInfo.token == token;
  });

  console.log("Testing");

  client.close();
  console.log("disconnected!");
  console.log(currentUser.favorites);
  if (currentUser.favorites !== {}) {
    return res.status(200).json({ status: 200, data: currentUser.favorites });
  } else {
    return res
      .status(200)
      .json({ status: 200, message: "No favorites stored", data: {} });
  }
};

const registerUser = async (req, res) => {
  /**
   * TODO:
   * 1. enforce email uniqueness
   */
  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db();
  const email = req.body.email;
  const username = req.body.username;

  const users = await db.collection("users").find().toArray();

  const existingEmail = users.find((user) => {
    console.log(user, "user");
    // console.log(user.loginInfo.email, "user email");
    return user.loginInfo.email === email;
  });

  if (existingEmail !== undefined) {
    return res
      .status(400)
      .json({ status: 400, message: "User already exist. Please sign in" });
  }

  let password = req.body.password;

  const passwordConfirmation = req.body.passwordConfirmation;

  if (password !== passwordConfirmation) {
    return res
      .status(400)
      .json({ status: 400, message: "Passwords dont match" });
  }
  await bcrypt.hash(password, 10).then((hash) => {
    console.log(hash, "hash");
    password = hash;
  });
  console.log(password, "password");
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

  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db();

  console.log("connected!");

  const data = await db.collection("users").find().toArray();

  const user = data.find((user) => {
    return user.loginInfo.email === email;
  });
  if (user) {
    bcrypt.compare(password, user.loginInfo.password, async (err, result) => {
      if (result) {
        const _id = user._id;

        const generatedToken = token();

        const query = {
          _id,
        };

        const updatedLoginInfo = user.loginInfo;

        updatedLoginInfo["token"] = generatedToken;

        const newvalues = { $set: { loginInfo: updatedLoginInfo } };

        const result = await db.collection("users").updateOne(query, newvalues);
        assert.strictEqual(1, result.matchedCount);
        assert.strictEqual(1, result.modifiedCount);

        console.log("successfully logged in");

        console.log(generatedToken, "token");

        return res.status(200).json({
          status: 200,
          message: "User succesfully logged in",
          token: generatedToken,
        });
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
  // client.close();
  // console.log("disconnected!");
};

const storeTrackedCoin = async (req, res) => {
  console.log("store coin tracked");

  const amountBought = req.body.amountBought;

  const marketPrice = req.body.marketPrice;

  const coin = req.body.coin;

  const userToken = req.body.userToken;

  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db();

  console.log("connected!");

  const data = await db.collection("users").find().toArray();

  console.log(data, "Data");

  const user = data.find((user) => {
    console.log(user.loginInfo.token, "%", userToken);
    return user.loginInfo.token == userToken;
  });

  const _id = user._id;

  const query = { _id };

  const updatedTrackCoins = user.trackCoins;

  updatedTrackCoins[coin] = {
    "market price": marketPrice,
    "amount bought": amountBought,
  };

  const newValues = { $set: { trackCoins: updatedTrackCoins } };

  await db.collection("users").updateOne(query, newValues);

  client.close();
  console.log("disconnected!");
};

const getTrackedCoins = async (req, res) => {
  const userToken = req.get("usertoken");

  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db();

  console.log("connected!");

  const data = await db.collection("users").find().toArray();

  const user = data.find((user) => {
    console.log(user.loginInfo.token, "%", userToken);
    return user.loginInfo.token == userToken;
  });

  const trackCoins = user.trackCoins;
  if (Object.keys(trackCoins).length !== 0) {
    res.status(200).json({
      status: 200,
      data: trackCoins,
      message: "data received successfully",
    });
  } else {
    res
      .status(200)
      .json({ status: 200, data: trackCoins, message: "no data available" });
  }

  client.close();

  console.log("disconnected!");
};

module.exports = {
  storeFavoriteCoin,
  getFavoriteCoins,
  registerUser,
  login,
  storeTrackedCoin,
  getTrackedCoins,
};
