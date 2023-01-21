"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _User = _interopRequireDefault(require("../model/User"));
var authLikeComment = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var bearerToken, token, verified, userEmail, userName, exists;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            bearerToken = req.header("Authorization");
            if (bearerToken) {
              _context.next = 6;
              break;
            }
            res.status(401).json({
              Message: "Please sign in"
            });
            _context.next = 14;
            break;
          case 6:
            token = bearerToken.split(" ")[1];
            verified = _jsonwebtoken["default"].verify(token, process.env.TOKEN_SECRET);
            userEmail = verified.email;
            userName = verified.name;
            _context.next = 12;
            return _User["default"].findOne({
              email: userEmail
            });
          case 12:
            exists = _context.sent;
            if (!exists) {
              res.status(401).json({
                message: "Please sign in"
              });
            } else {
              res.locals.email = userEmail;
              res.locals.name = userName;
              next();
            }
          case 14:
            _context.next = 20;
            break;
          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              error: _context.t0
            });
            console.log(_context.t0);
          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));
  return function authLikeComment(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var _default = authLikeComment;
exports["default"] = _default;