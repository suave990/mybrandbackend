"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var postSchema = _mongoose["default"].Schema({
  title: String,
  content: String,
  image: String,
  comments: [{
    name: String,
    message: String,
    email: String
  }],
  likes: {
    likesNumber: {
      type: Number,
      "default": 0
    },
    user: []
  }
});
var Blog = _mongoose["default"].model("Blog", postSchema);
var _default = Blog;
exports["default"] = _default;