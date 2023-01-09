import Message from "../model/Message";
import validateMessage from "../validations/message_validations";
export class MessageServices {
  static async sendMessage(data) {
    const { error, value } = await validateMessage(data);

    if (error.details.length > 2) {
      return error.details.map((detail) => detail.message);
    } else {
      await data.save();
      return true;
    }
  }

  static async viewMessages() {
    const messages = await Message.find();
    return messages;
  }

  static async viewSingleMessage(id) {
    const message = await Message.findOne({ _id: id });
    return message;
  }

  static async deleteMessage(id) {
    return await Message.deleteOne({ _id: id });
  }
}
