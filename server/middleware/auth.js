// server/middleware/auth.js
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";

module.exports = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: "no_token" });
  const token = auth.split(" ")[1];
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.userId = data.id;
    next();
  } catch (e) {
    return res.status(401).json({ error: "invalid_token" });
  }
};
