const express = require("express");
const pool = require("./db");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const morgan = require("morgan");
//create server
const app = express();

app.use(cors());
app.use(cookieParser())
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: false}));

pool.connect();

app.use("/api/post", require("./routes/post"));
app.use("/api/product", require("./routes/product"));


app.listen(4000, function () {
  console.log("Server is running.. on Port 4000");
});
