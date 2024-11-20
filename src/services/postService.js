const Post = require("../models/Post");

const createPost = async (title, subTitle, tags, content) => {
  const post = new Post({ title, subTitle, tags, content });
  await post.save();
  return post;
};

const updatePost = async (id, title, subTitle, tags, content) => {
  const post = await Post.findById(id);
  if (!post) return null;

  post.title = title || post.title;
  post.subTitle = subTitle || post.subTitle;
  post.tags = tags || post.tags;
  post.content = content || post.content;
  
  await post.save(); 
  return post;
};

const deletePost = async (id) => {
  const post = await Post.findByIdAndDelete(id);

  if (!post) return null;
  
  return true;
};

const getAllPosts = async () => {
  return await Post.find();
};

const getPostById = async (id) => {
  return await Post.findById(id);
};

const getPostsByTag = async (tag) => {
  return await Post.find({ tags: { $in: [tag] } });
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getPostById,
  getPostsByTag,
};