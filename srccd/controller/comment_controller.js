import { CommentServices } from "../services/commentService";
export class CommentController {
  static async postComment(req, res) {
    try {
      const { name, email, message } = req.body;
      const comment = {
        name: name,
        email: email,
        message: message,
      };
      const response = await CommentServices.postComment(
        comment,
        req.params.id
      );
      if (response !== true) {
        res.status(400).json({ response });
      } else {
        res.status(200).json({ message: "comment added to " + req.params.id });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  }
  static async viewComments(req, res) {
    try {
      const comments = await CommentServices.viewComments(req.params.id);
      res.status(200).json({ comments });
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: "No comments found" });
    }
  }

  static async viewSingleComment(req, res) {
    try {
      const comment = await CommentServices.viewSingleComment(
        req.params.bid,
        req.params.cid
      );
      res.status(200).json({ comment });
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: error });
    }
  }

  static async deleteComment(req, res) {
    try {
      await CommentServices.deleteComment(req.params.bid, req.params.cid);
      res.status(200).json({ message: "Comment Deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  }
}