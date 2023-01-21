"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _user_controller = require("../../controller/user_controller");
var _tokenmiddleware = _interopRequireDefault(require("../../middleware/tokenmiddleware"));
var route = _express["default"].Router();
route.post("/signup", _user_controller.UserController.userSignup);
route.post("/login", _user_controller.UserController.userLogin);
route.get("/user", _tokenmiddleware["default"], _user_controller.UserController.userInfo);
route.get("/", _tokenmiddleware["default"], _user_controller.UserController.users);
var _default = route;
exports["default"] = _default;