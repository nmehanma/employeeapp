const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// password=StkzsMJACfRq2Mqx

const mongoUri =
  "mongodb+srv://cnq:StkzsMJACfRq2Mqx@cluster0.w2tre.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.get("/", (req, res) => {
  res.send("Welcome to node js");
});

app.listen(3000, () => {
  console.log("server is running");
});
