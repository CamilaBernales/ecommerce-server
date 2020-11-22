const express = require("express");
const pool = require("../db");
const router = express.Router();


router.post("/create", (req, res, next) => {
  console.log(req.body);
  const values = [
    req.body.title,
    req.body.content,
    req.body.image,
    req.body.category,
  ];
  console.log(values);
  pool.query(
    "INSERT INTO posts(title, content, image, category, created_at) VALUES($1, $2, $3, $4, NOW())",
    values,
    (q_err, q_res) => {
      if (q_err) return next(q_err);
      res.json({ msg: "Created :)" });
    }
  );
});

router.get("/allpost", (req, res, next) => {
  pool.query(
    "SELECT * FROM posts ORDER by created_at DESC",
    (q_err, q_res) => {
      if (q_err) return next(q_err);
      res.json(q_res.rows);
    }
  );
});
module.exports = router;
