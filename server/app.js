const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./Employee");
const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.json());

const Employee = mongoose.model("employee");

const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl, {
  useNewURLParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("Database Connected");
});

mongoose.connection.on("error", err => {
  console.log("error", err);
});

app.get("/", (req, res) => {
  res.send("Welcome to node js");
});

app.post("/send-data", (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    picture: req.body.picture,
    salary: req.body.salary,
    positon: req.body.position
  });
  // console.log(req.body)
  employee
  .save()
  .then(data => {
    console.log(data);
    res.send("success");
  })
  .catch(err => {
    console.log(err);
  });
  // res.send("success")
});

app.listen(3000, () => {
  console.log("Server is running");
});
