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
  Employee.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
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
      console.log("success");
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
  // res.send("success")
});

app.post("/delete", (req, res) => {
  Employee.findByIdAndDelete(req.body.id)
    .then(data => {
      console.log(data);
      res.send("deleted");
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/update", (req, res) => {
  Employee.findByIdAndUpdate(req.body.id, {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    picture: req.body.picture,
    salary: req.body.salary,
    positon: req.body.position
  })
    .then(data => {
      console.log("updated");
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(8080, () => {
  console.log("Server is running");
});
