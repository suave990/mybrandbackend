import Blog from "../model/Blog";
import mongoose from 'mongoose'
//import  object from "joi";
let ObjectId = mongoose.Types;
export class LikeServices {
  static async like(id, email) { 
    console.log(email)
    const blog = await Blog.findOne({ _id: id });
    console.log(blog.likes)
    if (blog.likes.user.includes(email) == true) {
      let c = blog.likes.likesNumber -1 ;
      let b = blog.likes.user.filter((p) => p !== email);
      await Blog.findOneAndUpdate(
        { _id: id },
        { likes: { likesNumber: c, user: b } }
      );
      console.log(c)
    } else {
      let a = blog.likes.likesNumber + 1;
      let p = blog.likes.user;
      p.push(email);
      await Blog.findOneAndUpdate(
        { _id: id },
        { likes: { likesNumber: a, user: p } }
      );
      console.log(a)
    }

    const likedBlog = await Blog.findOne({ _id: id });

    return { type: "response", data: likedBlog };
  
  }
}