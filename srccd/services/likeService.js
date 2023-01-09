import Blog from "../model/Blog";

export class LikeServices {
  static async addLike(id) {
    const blog = await Blog.findOne({ _id: id });
    blog.likes++;
    return await blog.save();
  }

  static async removeLike(id) {
    const blog = await Blog.findOne({ _id: id });
    blog.likes--;
    return await blog.save();
  }
}
