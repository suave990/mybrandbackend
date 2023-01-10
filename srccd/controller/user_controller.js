import User from "../model/User";
import UserServices from "../services/userService";

export class UserController {
  static async userSignup(req, res) {
    try {
      const {username, email, password } = req.body;
      const data = new User({
        username: username,
        email: email,
        password: password,
      });
      const response = await UserServices.addUser(data);
      if (response !== data && response !== "Email already exists") {
        return res.status(400).json({ response });
      } else if (response == "Email already exists") {
        return res.status(500).json({ message: response });
      } else {
        return res.status(200).json({ data });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  }

  static async userLogin(req, res) {
    try {
      const { email, password } = req.body;
      const data = new User({
        email: email,
        password: password,
      });
      const response = await UserServices.login(data);
      if (response == "Unregistered Email") {
        return res.status(400).json({ message: "Unregistered Email" });
      } else if (response == "Password incorrect") {
        return res.status(400).json({ message: "Password incorrect" });
      } else {
        return res.status(200).json({ token: response });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error });
    }
  }
}
