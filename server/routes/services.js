// server/routes/services.js
const express = require("express");
const router = express.Router();

const services = [
  { id: 1, name: "DevOps" },
  { id: 2, name: "Cloud Services" },
  { id: 3, name: "Web Development" },
  { id: 4, name: "Security" },
];

router.get("/", (req, res) => {
  res.json({ services });
});

module.exports = router;
