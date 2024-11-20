const postService = require("../services/postService");

exports.createPost = async (req, res) => {
  try {
    const { title, subTitle, tags, content } = req.body;
    const post = await postService.createPost(title, subTitle, tags, content);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error creating post" });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, subTitle, tags, content } = req.body;
    const post = await postService.updatePost(id, title, subTitle, tags, content);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Error updating post" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await postService.deletePost(id);
    
    if (!result) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post" });
  }
};


exports.getAllBlogPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts" });
  }
};

exports.getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postService.getPostById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Error fetching post" });
  }
};

exports.getPostsByTag = async (req, res) => {
  const { tag } = req.params;
  try {
    const posts = await postService.getPostsByTag(tag);
    if (!posts || posts.length === 0) {
      return res.status(404).json({ message: "No posts found for this tag" });
    }
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts by tag" });
  }
};