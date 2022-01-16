const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./Employee");
const dotenv = require('dotenv')
dotenv.config()

const Employee = mongoose.model("employee");

const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl, {
  useNewURLParser: true,
  useUnifiedTopology:true

});

mongoose.connection.on("connected",()=>{
  console.log("Database Connected")
})

mongoose.connection.on("error",()=>{
  console.log("error", err)
})


app.get("/", (req, res) => {
  res.send("Welcome to node js");
});

app.listen(3000, () => {
  console.log("Server is running");
});
