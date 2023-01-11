import User from "../model/User";
import validateUser from "../validations/user_validations";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export default class UserServices {
  static async addUser(data) {
    const { error, value } = await validateUser(data);
    if (error.details.length > 2) {
      return error.details.map((detail) => detail.message);
    } else {
      const emailExist = await User.findOne({ email: data.email });
      if (emailExist) {
        return "Email exists";
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);
        data.password = hashedPassword;
        await data.save();
        return data;
      }
    }
  }

  static async login(data) {
    const { error, value } = await validateUser(data);
    if (error.details.length > 2) {
      return error.details.map((detail) => detail.message);
    } else {
      const user = await User.findOne({ email: data.email });
      //let token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
      if (!user) {
        return "Email incorrect";
      } else {
        let token = jwt.sign({ _id: user._id ,email:user.email ,name:user.name}, process.env.TOKEN_SECRET);
        const validPass = await bcrypt.compare(data.password, user.password);
        if (!validPass) {
          return "Password incorrect";
        } else {
          return token;
        }
      }
    }
  }
}
