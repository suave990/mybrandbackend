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
var _blogService = _interopRequireDefault(require("../services/blogService"));
var PostController = /*#__PURE__*/function () {
  function PostController() {
    (0, _classCallCheck2["default"])(this, PostController);
  }
  (0, _createClass2["default"])(PostController, null, [{
    key: "createPost",
    value: function () {
      var _createPost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _req$body, title, content, image, data, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _req$body = req.body, title = _req$body.title, content = _req$body.content, image = _req$body.image;
                data = new _Blog["default"]({
                  title: title,
                  content: content,
                  image: image
                });
                _context.next = 5;
                return _blogService["default"].createPost(data);
              case 5:
                response = _context.sent;
                console.log(response);
                if (!(response !== true)) {
                  _context.next = 11;
                  break;
                }
                return _context.abrupt("return", res.status(400).json({
                  response: response
                }));
              case 11:
                return _context.abrupt("return", res.status(200).json(data));
              case 12:
                _context.next = 18;
                break;
              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                return _context.abrupt("return", res.status(500).json({
                  error: _context.t0
                }));
              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 14]]);
      }));
      function createPost(_x, _x2) {
        return _createPost.apply(this, arguments);
      }
      return createPost;
    }()
  }, {
    key: "viewPosts",
    value: function () {
      var _viewPosts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var blogs;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _blogService["default"].viewPosts();
              case 3:
                blogs = _context2.sent;
                return _context2.abrupt("return", res.status(200).json({
                  blogs: blogs
                }));
              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
                return _context2.abrupt("return", res.status(500).json({
                  error: _context2.t0
                }));
              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));
      function viewPosts(_x3, _x4) {
        return _viewPosts.apply(this, arguments);
      }
      return viewPosts;
    }()
  }, {
    key: "viewSinglePost",
    value: function () {
      var _viewSinglePost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var blog;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _blogService["default"].viewSinglePost(req.params.id);
              case 3:
                blog = _context3.sent;
                return _context3.abrupt("return", res.status(200).json({
                  blog: blog
                }));
              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);
                return _context3.abrupt("return", res.status(500).json({
                  error: _context3.t0
                }));
              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));
      function viewSinglePost(_x5, _x6) {
        return _viewSinglePost.apply(this, arguments);
      }
      return viewSinglePost;
    }()
  }, {
    key: "deletePost",
    value: function () {
      var _deletePost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _blogService["default"].deletePost(req.params.id);
              case 3:
                return _context4.abrupt("return", res.status(204).json({
                  message: "Blog Deleted"
                }));
              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);
                return _context4.abrupt("return", res.status(404).json({
                  error: _context4.t0
                }));
              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }));
      function deletePost(_x7, _x8) {
        return _deletePost.apply(this, arguments);
      }
      return deletePost;
    }()
  }, {
    key: "updatePost",
    value: function () {
      var _updatePost = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var data, response;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                data = new _Blog["default"]({});
                if (req.body.title) {
                  data.title = req.body.title;
                }
                if (req.body.content) {
                  data.content = req.body.content;
                }
                if (req.body.image) {
                  data.image = req.body.image;
                }
                _context5.next = 7;
                return _blogService["default"].updatePost(req.params.id, data);
              case 7:
                response = _context5.sent;
                if (!(response == true)) {
                  _context5.next = 12;
                  break;
                }
                return _context5.abrupt("return", res.status(200).json({
                  data: data
                }));
              case 12:
                return _context5.abrupt("return", res.status(400).json({
                  response: response
                }));
              case 13:
                _context5.next = 19;
                break;
              case 15:
                _context5.prev = 15;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0);
                return _context5.abrupt("return", res.status(500).json({
                  error: _context5.t0
                }));
              case 19:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 15]]);
      }));
      function updatePost(_x9, _x10) {
        return _updatePost.apply(this, arguments);
      }
      return updatePost;
    }()
  }]);
  return PostController;
}();
exports["default"] = PostController;