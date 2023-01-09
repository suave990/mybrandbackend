import express from "express";
import  PostController from "../../controller/blog_controller";
import Blog from "../../model/Blog";

const route = express.Router();
console.log(PostController)
route.post("/", PostController.createPost);
route.get("/", PostController.viewPosts);
route.get("/:id", PostController.viewSinglePost);
route.delete("/:id", PostController.deletePost);
route.patch("/:id", PostController.updatePost);
export default route;
