import mongoose from "mongoose";
const userLoginSchema = mongoose.Schema({
  username:String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userLoginSchema);
export default User;
