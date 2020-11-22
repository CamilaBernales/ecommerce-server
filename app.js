const express = require("express");
const client = require("./db")
var app = express();
require("dotenv").config();


client.connect();


app.listen(4000, function () {
  console.log("Server is running.. on Port 4000");
});
