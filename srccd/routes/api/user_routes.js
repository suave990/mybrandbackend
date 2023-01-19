import express from "express";
import { UserController } from "../../controller/user_controller";
import authLikeComment from "../../middleware/tokenmiddleware";
const route = express.Router();
route.post("/signup", UserController.userSignup);
route.post("/login", UserController.userLogin);
route.get("/user",authLikeComment,UserController.userInfo);
route.get("/",authLikeComment,UserController.users)
export default route;
