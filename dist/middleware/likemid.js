"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var authLike = function authLike(req, res, next) {
  try {
    var bearerToken = req.header("Authorization");
    if (!bearerToken) {
      res.status(401).json({
        Message: "Please sign in"
      });
    } else {
      var token = bearerToken.split(" ")[1];
      var verified = _jsonwebtoken["default"].verify(token, process.env.TOK_SECRET);
      var userEmail = verified.email;
      res.locals.email = userEmail;
      next();
    }
  } catch (error) {
    res.status(500).json({
      error: error
    });
    console.log(error);
  }
};
var _default = authLike;
exports["default"] = _default;