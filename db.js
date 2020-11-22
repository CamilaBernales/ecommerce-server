// const { Pool, Client } = require('pg')

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: 'root',
//   port: 5432,
// })



// module.exports = pool;

const { Client } = require("pg");
require("dotenv").config();

const connectionData = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
};
const client = new Client(connectionData);
module.exports = client;