const express = require("express");
const pool = require("../db");
const router = express.Router();

// products


router.post("/create", (req, res, next) => {
    const values = [
      req.body.title,
      req.body.content,
      req.body.price,
      req.body.stock,
      req.body.image
    ];
    pool.query(
      "INSERT INTO products(title, content, price, stock, image, created_at) VALUES($1, $2, $3, $4,$5, NOW())",
      values,
      (q_err, q_res) => {
        if (q_err) return next(q_err);
        res.json({ msg: "Created :)" });
      }
    );
  });
  router.get("/allproducts", (req, res, next) => {
    pool.query(
      "SELECT * FROM products ORDER by created_at DESC",
      (q_err, q_res) => {
        if (q_err) return next(q_err);
        res.json(q_res.rows);
      }
    );
  });
  module.exports = router;
