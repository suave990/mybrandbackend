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
var userSchema = _joi["default"].object({
  email: _joi["default"].string().email().required(),
  password: _joi["default"].string().required()
});
var validateUser = validator(userSchema);
var _default = validateUser;
exports["default"] = _default;