console.log(`Your node version is ${process.version}`);

("use strict");
if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
const fs = require("fs/promises");
const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");
const { Configuration, PlaidEnvironments, PlaidApi } = require("plaid");

const APP_PORT = process.env.APP_PORT || 8000;
const CURR_USER_ID = process.env.USER_ID || 1;
const USER_FILES_FOLDER = ".data";
const FIELD_ACCESS_TOKEN = "accessToken";
const FIELD_USER_STATUS = "userStatus";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

const server = app.listen(APP_PORT, function () {
  console.log(`Server is up and running at http://localhost:${APP_PORT}/`);
});

// Example defining a route in Express
app.get("/", (req, res) => {
  res.send("<h1>Hello, Express.js Server!</h1>");
});
