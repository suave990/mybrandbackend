import express from "express";
import { CommentController } from "../../controller/comment_controller";
import  LikeController  from "../../controller/like_controller";
import authLikeComment from "../../middleware/tokenmiddleware";
const route = express.Router();
//console.log(LikeController)
route.post("/:id/like",authLikeComment, LikeController.like);


export default route;
