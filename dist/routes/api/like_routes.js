"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _comment_controller = require("../../controller/comment_controller");
var _like_controller = _interopRequireDefault(require("../../controller/like_controller"));
var _tokenmiddleware = _interopRequireDefault(require("../../middleware/tokenmiddleware"));
var route = _express["default"].Router();
//console.log(LikeController)
route.post("/:id/like", _tokenmiddleware["default"], _like_controller["default"].like);
var _default = route;
exports["default"] = _default;