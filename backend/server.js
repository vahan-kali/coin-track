const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
const emailsRoutes = require("./Routers/emailsRoutes");
const cryptocurrenciesRoutes = require("./Routers/cryptocurrenciesRoutes");
const userRoutes = require("./Routers/usersRoutes");
const app = new express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/cryptocurrencies", cryptocurrenciesRoutes);

app.use("/email", emailsRoutes);

app.use("/user", userRoutes);

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}.`);
  }
});
