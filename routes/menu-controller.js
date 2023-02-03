const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Home page" });
});

router.post("/menu1", function (req, res, next) {
  res.send({ response: req.body.quote });
});

router.post("/menu2", function (req, res, next) {
  res.send({ response: req.body.quote });
});

module.exports = router;
