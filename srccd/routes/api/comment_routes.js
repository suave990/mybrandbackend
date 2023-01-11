import express from "express";
import { CommentController } from "../../controller/comment_controller";
import authLikeComment from "../../middleware/tokenmiddleware";
const route = express.Router();

route.post("/:id/comments", authLikeComment ,CommentController.postComment);
route.get("/:id/comments", CommentController.viewComments);
route.get("/:bid/comments/:cid", CommentController.viewSingleComment);
route.delete("/:bid/comments/:cid", CommentController.deleteComment);
export default route;
