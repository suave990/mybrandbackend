import Message from "../model/Message";
import { MessageServices } from "../services/messageService";

export class MessageController {
  static async deliverMessage(req, res) {
    try {
      const { name, email, message } = req.body;
      const data = new Message({
        name: name,
        email: email,
        message: message,
      });
      const response = await MessageServices.sendMessage(data);
      if (response !== true) {
        return res.status(400).json({ response });
      } else {
        return res.status(200).json({ data });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  }

  static async viewMessages(req, res) {
    try {
      const messages = await MessageServices.viewMessages();
      res.status(200).json({ messages });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  }

  static async viewSingleMessage(req, res) {
    try {
      const message = await MessageServices.viewSingleMessage(req.params.id);
      res.status(200).json({ message });
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: error });
    }
  }

  static async deleteMessage(req, res) {
    try {
      await MessageServices.deleteMessage(req.params.id);
      res.status(200).json({ message: "Message deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  }
}
