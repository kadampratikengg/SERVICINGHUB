// server/routes/blog.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

let posts = [
  { id: "p1", title: "Welcome to ServicingHub", content: "Demo post content", author: "system" },
];

router.get("/", (req, res) => {
  res.json({ posts });
});

router.get("/:id", (req, res) => {
  const p = posts.find((x) => x.id === req.params.id);
  if (!p) return res.status(404).json({ error: "not found" });
  res.json({ post: p });
});

router.post("/", auth, (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json({ error: "missing title/content" });
  const post = { id: Date.now().toString(), title, content, author: req.userId };
  posts.unshift(post);
  res.json({ post });
});

module.exports = router;
