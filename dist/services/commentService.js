"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentServices = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _Blog = _interopRequireDefault(require("../model/Blog"));
var _comment_validations = _interopRequireDefault(require("../validations/comment_validations"));
var CommentServices = /*#__PURE__*/function () {
  function CommentServices() {
    (0, _classCallCheck2["default"])(this, CommentServices);
  }
  (0, _createClass2["default"])(CommentServices, null, [{
    key: "createComment",
    value: function () {
      var _createComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data, id) {
        var blog;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Blog["default"].findOne({
                  _id: id
                });
              case 2:
                blog = _context.sent;
                console.log(data.message);
                //  const { error} = validateComment(data.message);
                //  if (error.details.length > 1) {
                //  return { error: error.details}
                // }

                blog.comments.push(data);
                _context.next = 7;
                return blog.save();
              case 7:
                return _context.abrupt("return", true);
              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function createComment(_x, _x2) {
        return _createComment.apply(this, arguments);
      }
      return createComment;
    }()
  }, {
    key: "viewComments",
    value: function () {
      var _viewComments = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        var blog;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _Blog["default"].findOne({
                  _id: id
                });
              case 2:
                blog = _context2.sent;
                return _context2.abrupt("return", blog.comments);
              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function viewComments(_x3) {
        return _viewComments.apply(this, arguments);
      }
      return viewComments;
    }()
  }, {
    key: "viewSingleComment",
    value: function () {
      var _viewSingleComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(bid, cid) {
        var blog, comment;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _Blog["default"].findOne({
                  _id: bid
                });
              case 2:
                blog = _context3.sent;
                comment = blog.comments.find(function (comment) {
                  return comment.id == cid;
                });
                return _context3.abrupt("return", comment);
              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function viewSingleComment(_x4, _x5) {
        return _viewSingleComment.apply(this, arguments);
      }
      return viewSingleComment;
    }()
  }, {
    key: "deleteComment",
    value: function () {
      var _deleteComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(bid, cid) {
        var blog, newComments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _Blog["default"].findOne({
                  _id: bid
                });
              case 2:
                blog = _context4.sent;
                newComments = blog.comments.filter(function (comment) {
                  return comment.id != cid;
                });
                blog.comments = newComments;
                _context4.next = 7;
                return blog.save();
              case 7:
                return _context4.abrupt("return", _context4.sent);
              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      function deleteComment(_x6, _x7) {
        return _deleteComment.apply(this, arguments);
      }
      return deleteComment;
    }()
  }]);
  return CommentServices;
}();
exports.CommentServices = CommentServices;