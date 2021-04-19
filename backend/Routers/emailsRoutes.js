const express = require("express");

const router = express.Router();

const { storeEmail } = require("./handlers/emails");

router.post("/storeEmail", storeEmail);

module.exports = router;
