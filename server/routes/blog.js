// server/routes/blog.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Upload directory
const uploadDir = "uploads/blogs";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// In-memory DB
let posts = [];

// GET all
router.get("/", (req, res) => {
  res.json({ posts });
});

// GET one
router.get("/:id", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  if (!post) return res.status(404).json({ error: "not_found" });

  res.json({ post });
});

// CREATE
router.post("/", auth, upload.single("image"), (req, res) => {
  const { title, author, content, category } = req.body;

  if (!title || !author || !content || !category) {
    return res.status(400).json({ error: "missing_fields" });
  }

  const newPost = {
    id: Date.now().toString(),
    title,
    author,
    content,
    category,
    image: req.file ? `/uploads/blogs/${req.file.filename}` : null,
    date: new Date().toISOString(),
  };

  posts.unshift(newPost);
  res.json({ post: newPost });
});

module.exports = router;
