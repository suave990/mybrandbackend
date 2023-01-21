"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _blog_routes = _interopRequireDefault(require("./api/blog_routes"));
var _comment_routes = _interopRequireDefault(require("./api/comment_routes"));
var _message_routes = _interopRequireDefault(require("./api/message_routes"));
var _like_routes = _interopRequireDefault(require("./api/like_routes"));
var _user_routes = _interopRequireDefault(require("./api/user_routes"));
var routes = _express["default"].Router();

//routes.use("/blogs", like_routes);
routes.use("/blogs", _blog_routes["default"]);
routes.use("/blogs", _comment_routes["default"]);
routes.use("/blogs", _like_routes["default"]);
routes.use("/messages", _message_routes["default"]);
routes.use("/users", _user_routes["default"]);
var _default = routes;
exports["default"] = _default;