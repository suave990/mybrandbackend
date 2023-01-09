import { LikeServices } from "../services/likeService";
export default class LikesController {
  static async like(req, res) {
    try {
      await LikeServices.like(req.params.id);
      res.status(200).json({ message: "Blog Liked!!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  }
  static async dislike(req, res) {
    try {
      await LikeServices.dislike(req.params.id);
      res.status(200).json({ message: "Blog Unliked!!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  }
}
