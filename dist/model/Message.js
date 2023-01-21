"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var messageSchema = _mongoose["default"].Schema({
  name: String,
  email: String,
  message: String
});
var Message = _mongoose["default"].model("Message", messageSchema);
var _default = Message;
exports["default"] = _default;