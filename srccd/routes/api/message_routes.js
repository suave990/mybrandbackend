import express from "express";
import { MessageController } from "../../controller/message_controller";
const route = express.Router();

route.post("/", MessageController.deliverMessage);
route.get("/", MessageController.viewMessages);
route.get("/:id", MessageController.viewSingleMessage);
route.delete("/:id", MessageController.deleteMessage);
export default route;
