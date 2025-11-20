const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.send("Register API OK");
});

router.post("/login", (req, res) => {
  res.send("Login API OK");
});

module.exports = router;
