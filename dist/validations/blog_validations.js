"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _joi = _interopRequireDefault(require("joi"));
var validator = function validator(schema) {
  return function (payload) {
    return schema.validate(payload, {
      abortEarly: false
    });
  };
};
var blogSchema = _joi["default"].object({
  title: _joi["default"].string().min(0).max(40).required(),
  content: _joi["default"].string().min(1).required(),
  image: _joi["default"].string().required()
});
var validateBlogPost = validator(blogSchema);
var _default = validateBlogPost;
exports["default"] = _default;