import express from "express";
import { MessageController } from "../../controller/message_controller";
import passport from "passport";
import Authenticator from "../../middleware/authmid";
const route = express.Router();
Authenticator()
route.post("/", MessageController.deliverMessage);
route.get("/", passport.authenticate("jwt",{session:false}),MessageController.viewMessages);
route.get("/:id",passport.authenticate("jwt",{session:false}), MessageController.viewSingleMessage);
route.delete("/:id",passport.authenticate("jwt",{session:false}), MessageController.deleteMessage);
export default route;
