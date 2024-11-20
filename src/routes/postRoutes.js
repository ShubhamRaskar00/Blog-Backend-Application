const express = require("express");
const postController = require("../controllers/postController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/posts", auth, postController.createPost);
router.put("/posts/:id", auth, postController.updatePost);
router.delete("/posts/:id", auth, postController.deletePost);
router.get("/posts", auth, postController.getAllBlogPosts);
router.get("/posts/:id", auth, postController.getPost);
router.get("/posts/tag/:tag", auth, postController.getPostsByTag);

module.exports = router;
