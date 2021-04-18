const { MongoClient, Db } = require("mongodb");

require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const storeEmail = async (req, res) => {
  const email = req.body.email;
  console.log(req.body.email, "email");
  console.log(req.body, "body");
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db();
  console.log("connected!");
  await db.collection("email-leads").insertOne({ email: email });
  client.close();
  console.log("disconnected!");
  if (email) {
    return res.status(200).json({ status: 200, users: userName });
  } else {
    return res.status(400).json({ status: 400, message: "No data received" });
  }
};

module.exports = { storeEmail };
