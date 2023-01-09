import express from "express";
import { CommentController } from "../../controller/comment_controller";
import  LikeController  from "../../controller/like_controller";

const route = express.Router();
//console.log(LikeController)
route.post("/:id/liketrue", LikeController.like);
route.post("/:id/likefalse", LikeController.dislike);

export default route;
