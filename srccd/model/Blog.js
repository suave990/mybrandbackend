import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  title: String,
  content: String,
  image: String,
  comments: [{ name: String, message: String, email: String }],
  likes: Number,
});

const Blog = mongoose.model("Blog", postSchema);
export default Blog;
