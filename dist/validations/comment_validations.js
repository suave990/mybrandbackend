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
var commentSchema = _joi["default"].object({
  message: _joi["default"].string().min(2).max(100).required()
});
var validateComment = validator(commentSchema);
var _default = validateComment;
exports["default"] = _default;