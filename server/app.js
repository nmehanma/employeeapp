const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



const dbUrl = process.env.DB_URL

app.get("/", (req, res) => {
  res.send("Welcome to node js");
});

app.listen(3000, () => {
  console.log("server is running");
});
