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
var messageSchema = _joi["default"].object({
  name: _joi["default"].string().min(3).max(30).required(),
  email: _joi["default"].string().email().required(),
  hiring: _joi["default"]["boolean"]()["default"](false),
  description: _joi["default"].string().min(10).max(50),
  message: _joi["default"].string().required()
});
var validateMessage = validator(messageSchema);
var _default = validateMessage;
exports["default"] = _default;