import Blog from "../model/Blog";
import mongoose from 'mongoose'
import { object } from "joi";
let ObjectId = mongoose.Types.ObjectId;
export class LikeServices {
  static async addLike(id) {
    const blog = await Blog.findOne({ _id: ObjectId(id) });
    blog.likes++;
    return await blog.save();
  }

  static async removeLike(id) {
    const blog = await Blog.findOne({ _id: ObjectId(id) });
    blog.likes--;
    return await blog.save();
  }
}
