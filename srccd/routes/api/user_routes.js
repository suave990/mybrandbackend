import express from "express";
import { UserController } from "../../controller/user_controller";
const route = express.Router();
route.post("/signup", UserController.userSignup);
route.post("/login", UserController.userLogin);
export default route;
