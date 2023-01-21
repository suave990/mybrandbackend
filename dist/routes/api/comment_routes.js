"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _comment_controller = require("../../controller/comment_controller");
var _tokenmiddleware = _interopRequireDefault(require("../../middleware/tokenmiddleware"));
var route = _express["default"].Router();
route.post("/:id/comments", _tokenmiddleware["default"], _comment_controller.CommentController.postComment);
route.get("/:id/comments", _comment_controller.CommentController.viewComments);
route.get("/:bid/comments/:cid", _comment_controller.CommentController.viewSingleComment);
route["delete"]("/:bid/comments/:cid", _comment_controller.CommentController.deleteComment);
var _default = route;
exports["default"] = _default;