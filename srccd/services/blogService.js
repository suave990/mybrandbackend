import Blog from "../model/Blog";
import validateBlogPost from "../validations/blog_validations";
export default class BlogServices {
  static async createBlog(data) {
    const { error, value } = await validateBlogPost(data);

    if (error.details.length > 2) {
      return error.details.map((detail) => detail.message);
    } else {
      await data.save();
      return true;
    }
  }
  static async viewPosts() {
    const blogs = await Blog.find();
    return blogs;
  }
  static async viewSinglePost(id) {
    const blog = await Blog.findOne({ _id: id });
    return blog;
  }
  static async deletePost(id) {
    return await Blog.deleteOne({ _id: id });
  }
  static async updatePost(id, data) {
    const { error, value } = await validateBlogPost(data);
    if (error.details.length > 2) {
      return error.details.map((detail) => detail.message);
    } else {
      const blog = await Blog.findOne({ _id: id });
      if (data.title !== null) {
        blog.title = data.title;
      }
      if (data.content !== null) {
        blog.content = data.content;
      }
      if (data.image !== null) {
        blog.image = data.image;
      }
      await blog.save();
      return true;
    }
  }
}
