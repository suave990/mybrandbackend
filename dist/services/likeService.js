"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LikeServices = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _Blog = _interopRequireDefault(require("../model/Blog"));
var _mongoose = _interopRequireDefault(require("mongoose"));
//import  object from "joi";
//let ObjectId = mongoose.Types;
var ObjectId = _mongoose["default"].Types.ObjectId;
var LikeServices = /*#__PURE__*/function () {
  function LikeServices() {
    (0, _classCallCheck2["default"])(this, LikeServices);
  }
  (0, _createClass2["default"])(LikeServices, null, [{
    key: "like",
    value: function () {
      var _like = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id, email) {
        var blog, c, b, a, p, likedBlog;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(id);
                _context.next = 3;
                return _Blog["default"].findById(ObjectId(id));
              case 3:
                blog = _context.sent;
                console.log(blog.likes);
                if (!(blog.likes.user.includes(email) == true)) {
                  _context.next = 13;
                  break;
                }
                c = blog.likes.likesNumber - 1;
                b = blog.likes.user.filter(function (p) {
                  return p !== email;
                });
                _context.next = 10;
                return _Blog["default"].findOneAndUpdate({
                  _id: ObjectId(id)
                }, {
                  likes: {
                    likesNumber: c,
                    user: b
                  }
                });
              case 10:
                console.log(c);
                _context.next = 19;
                break;
              case 13:
                a = blog.likes.likesNumber + 1;
                p = blog.likes.user;
                p.push(email);
                _context.next = 18;
                return _Blog["default"].findOneAndUpdate({
                  _id: ObjectId(id)
                }, {
                  likes: {
                    likesNumber: a,
                    user: p
                  }
                });
              case 18:
                console.log(a);
              case 19:
                _context.next = 21;
                return _Blog["default"].findById(ObjectId(id));
              case 21:
                likedBlog = _context.sent;
                return _context.abrupt("return", {
                  type: "response",
                  data: likedBlog
                });
              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function like(_x, _x2) {
        return _like.apply(this, arguments);
      }
      return like;
    }()
  }]);
  return LikeServices;
}();
exports.LikeServices = LikeServices;