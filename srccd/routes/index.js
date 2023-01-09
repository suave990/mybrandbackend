import express from "express";
import blog_routes from "./api/blog_routes";
import comment_routes from "./api/comment_routes";
import message_routes from "./api/message_routes";
import like_routes from "./api/like_routes";
import user_routes from "./api/user_routes";
import login_routes from "./authentication/login";

const routes = express.Router();

routes.use("/blogs", blog_routes);
routes.use("/blogs", comment_routes);
routes.use("/blogs", like_routes);
routes.use("/messages", message_routes);
routes.use("/users", user_routes);
routes.use(login_routes);
export default routes;
