"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _blog_controller = _interopRequireDefault(require("../../controller/blog_controller"));
var _Blog = _interopRequireDefault(require("../../model/Blog"));
var _authmid = _interopRequireDefault(require("../../middleware/authmid"));
var _passport = _interopRequireDefault(require("passport"));
(0, _authmid["default"])();
var route = _express["default"].Router();
route.post("/", _passport["default"].authenticate("jwt", {
  session: false
}), _blog_controller["default"].createPost);
route.get("/", _blog_controller["default"].viewPosts);
route.get("/:id", _blog_controller["default"].viewSinglePost);
route["delete"]("/:id", _passport["default"].authenticate("jwt", {
  session: false
}), _blog_controller["default"].deletePost);
route.put("/:id", _passport["default"].authenticate("jwt", {
  session: false
}), _blog_controller["default"].updatePost);
var _default = route;
exports["default"] = _default;