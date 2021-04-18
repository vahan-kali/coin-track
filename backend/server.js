const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
// const { storeEmail } = require("./Routers/handlers/emails");
// const emailsRoutes = require("./Routers/emailsRoutes");
const cryptocurrenciesRoutes = require("./Routers/cryptocurrenciesRoutes");
const app = new express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/cryptocurrencies", cryptocurrenciesRoutes);

// app.post("/storeEmail", storeEmail);

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}.`);
  }
});
