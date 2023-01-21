"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _Blog = _interopRequireDefault(require("../model/Blog"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _blog_validations = _interopRequireDefault(require("../validations/blog_validations"));
var ObjectId = _mongoose["default"].Types.ObjectId;
var BlogServices = /*#__PURE__*/function () {
  function BlogServices() {
    (0, _classCallCheck2["default"])(this, BlogServices);
  }
  (0, _createClass2["default"])(BlogServices, null, [{
    key: "createPost",
    value: function () {
      var _createPost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var _yield$validateBlogPo, error, value;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _blog_validations["default"])(data);
              case 2:
                _yield$validateBlogPo = _context.sent;
                error = _yield$validateBlogPo.error;
                value = _yield$validateBlogPo.value;
                if (!(error.details.length > 2)) {
                  _context.next = 9;
                  break;
                }
                return _context.abrupt("return", error.details.map(function (detail) {
                  return detail.message;
                }));
              case 9:
                _context.next = 11;
                return data.save();
              case 11:
                return _context.abrupt("return", true);
              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function createPost(_x) {
        return _createPost.apply(this, arguments);
      }
      return createPost;
    }()
  }, {
    key: "viewPosts",
    value: function () {
      var _viewPosts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var blogs;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _Blog["default"].find();
              case 2:
                blogs = _context2.sent;
                return _context2.abrupt("return", blogs);
              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function viewPosts() {
        return _viewPosts.apply(this, arguments);
      }
      return viewPosts;
    }()
  }, {
    key: "viewSinglePost",
    value: function () {
      var _viewSinglePost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        var blog;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _Blog["default"].findById(ObjectId(id));
              case 2:
                blog = _context3.sent;
                return _context3.abrupt("return", blog);
              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function viewSinglePost(_x2) {
        return _viewSinglePost.apply(this, arguments);
      }
      return viewSinglePost;
    }()
  }, {
    key: "deletePost",
    value: function () {
      var _deletePost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _Blog["default"].deleteOne({
                  _id: id
                });
              case 2:
                return _context4.abrupt("return", _context4.sent);
              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      function deletePost(_x3) {
        return _deletePost.apply(this, arguments);
      }
      return deletePost;
    }()
  }, {
    key: "updatePost",
    value: function () {
      var _updatePost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id, data) {
        var _yield$validateBlogPo2, error, value, blog;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _blog_validations["default"])(data);
              case 2:
                _yield$validateBlogPo2 = _context5.sent;
                error = _yield$validateBlogPo2.error;
                value = _yield$validateBlogPo2.value;
                if (!(error.details.length > 2)) {
                  _context5.next = 9;
                  break;
                }
                return _context5.abrupt("return", error.details.map(function (detail) {
                  return detail.message;
                }));
              case 9:
                _context5.next = 11;
                return _Blog["default"].findOne({
                  _id: id
                });
              case 11:
                blog = _context5.sent;
                if (data.title !== null) {
                  blog.title = data.title;
                }
                if (data.content !== null) {
                  blog.content = data.content;
                }
                if (data.image !== null) {
                  blog.image = data.image;
                }
                _context5.next = 17;
                return blog.save();
              case 17:
                return _context5.abrupt("return", true);
              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));
      function updatePost(_x4, _x5) {
        return _updatePost.apply(this, arguments);
      }
      return updatePost;
    }()
  }]);
  return BlogServices;
}();
exports["default"] = BlogServices;