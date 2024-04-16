const express = require("express");
const router = express.Router();
const app = express();
const Joi = require("joi");
const { db } = require("../services/db.js");
const { authRequired } = require("../services/auth.js");

// GET /
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/snake", authRequired, function (req, res, next) {
  console.log(req.user);
  res.render("snake", { result: { id: req.user.sub } });
});

module.exports = router;
