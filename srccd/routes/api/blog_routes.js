import express from "express";
import  PostController from "../../controller/blog_controller";
import Blog from "../../model/Blog";
import Authenticator from "../../middleware/authmid";
import passport from "passport";
Authenticator()
const route = express.Router();
route.post("/",passport.authenticate("jwt",{session:false}), PostController.createPost);
route.get("/", PostController.viewPosts);
route.get("/:id", PostController.viewSinglePost);
route.delete("/:id", passport.authenticate("jwt",{session:false}),PostController.deletePost);
route.put("/:id", passport.authenticate("jwt",{session:false}),PostController.updatePost);
export default route;
