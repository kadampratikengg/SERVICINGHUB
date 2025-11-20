// server/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blog");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

const prefix = process.env.API_PREFIX || "/api";
app.use(prefix + "/auth", authRoutes);
app.use(prefix + "/blog", blogRoutes);

// simple root
app.get("/", (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
