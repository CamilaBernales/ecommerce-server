const { Pool } = require("pg");
require("dotenv").config();

const connectionData = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
};
const pool = new Pool(connectionData);
module.exports = pool;