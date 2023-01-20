/*import { LikeServices } from "../services/likeService";
export default class LikesController {
  static async like(req, res) {
    try {
      // console.log(req.params.id)
      await LikeServices.addLike(req.params.id,res.locals.email);
      res.status(200).json({ message: "Blog Liked!!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });

    }
  }
  
}*/

import { LikeServices } from "../services/likeService";
export default class LikeController {
  static async like(req, res) {
    try {
      const response = await LikeServices.like(req.params.id, res.locals.email);
       res.status(200).json({ likedBlog: response.data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  }
}