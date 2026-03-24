// hosts.js   can delete later

const express = require("express");
const router = express.Router();

// Home route
router.get("/", (req, res) => {
  res.send("Welcome to BlogPoint API");
});

// Get all posts
router.get("/posts", (req, res) => {
  res.json([
    { id: 1, title: "First Post", content: "This is a dummy post" },
    { id: 2, title: "Second Post", content: "Another dummy post" }
  ]);
});
// Update post
router.put("/posts/:id", (req, res) => {
  const postId = req.params.id;
  res.json({
    message: `Post ${postId} updated`,
    updatedData: req.body
  });
});

// Delete post
router.delete("/posts/:id", (req, res) => {
  const postId = req.params.id;
  res.json({
    message: `Post ${postId} deleted`
  });
});
// Get single post
router.get("/posts/:id", (req, res) => {
  const postId = req.params.id;
  res.json({
    id: postId,
    title: `Post ${postId}`,
    content: "Sample content"
  });
});

// Create post
router.post("/posts", (req, res) => {
  const newPost = req.body;
  res.status(201).json({
    message: "Post created successfully",
    post: newPost
  });
});



module.exports = router;
