import Blog from "../model/Blog";
import validateComment from "../validations/comment_validations";
export class CommentServices {
  static async createComment(data, id) {
    const blog = await Blog.findOne({ _id: id });
    console.log(data.message)
    //  const { error} = validateComment(data.message);
    //  if (error.details.length > 1) {
    //  return { error: error.details}
    // }
   
    blog.comments.push(data);
    await blog.save();
    return true;
  }

  static async viewComments(id) {
    const blog = await Blog.findOne({ _id: id });
    return blog.comments;
  }
  static async viewSingleComment(bid, cid) {
    const blog = await Blog.findOne({ _id: bid });
    const comment = blog.comments.find((comment) => comment.id == cid);
    return comment;
  }
  static async deleteComment(bid, cid) {
    const blog = await Blog.findOne({ _id: bid });
    const newComments = blog.comments.filter((comment) => comment.id != cid);
    blog.comments = newComments;
    return await blog.save();
  }
}
