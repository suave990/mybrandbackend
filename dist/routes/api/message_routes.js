"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _message_controller = require("../../controller/message_controller");
var _passport = _interopRequireDefault(require("passport"));
var _authmid = _interopRequireDefault(require("../../middleware/authmid"));
var route = _express["default"].Router();
(0, _authmid["default"])();
route.post("/", _message_controller.MessageController.deliverMessage);
route.get("/", _passport["default"].authenticate("jwt", {
  session: false
}), _message_controller.MessageController.viewMessages);
route.get("/:id", _passport["default"].authenticate("jwt", {
  session: false
}), _message_controller.MessageController.viewSingleMessage);
route["delete"]("/:id", _passport["default"].authenticate("jwt", {
  session: false
}), _message_controller.MessageController.deleteMessage);
var _default = route;
exports["default"] = _default;