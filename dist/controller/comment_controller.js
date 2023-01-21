"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _commentService = require("../services/commentService");
var CommentController = /*#__PURE__*/function () {
  function CommentController() {
    (0, _classCallCheck2["default"])(this, CommentController);
  }
  (0, _createClass2["default"])(CommentController, null, [{
    key: "postComment",
    value: function () {
      var _postComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var message, comment, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                message = req.body.message;
                comment = {
                  name: res.locals.name,
                  email: res.locals.email,
                  message: message
                };
                _context.next = 5;
                return _commentService.CommentServices.createComment(comment, req.params.id);
              case 5:
                response = _context.sent;
                if (response !== true) {
                  res.status(400).json({
                    response: response
                  });
                } else {
                  res.status(200).json({
                    message: "comment added to " + req.params.id,
                    comment: comment
                  });
                }
                _context.next = 13;
                break;
              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                res.status(500).json({
                  error: _context.t0
                });
              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));
      function postComment(_x, _x2) {
        return _postComment.apply(this, arguments);
      }
      return postComment;
    }()
  }, {
    key: "viewComments",
    value: function () {
      var _viewComments = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var comments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _commentService.CommentServices.viewComments(req.params.id);
              case 3:
                comments = _context2.sent;
                res.status(200).json({
                  comments: comments
                });
                _context2.next = 11;
                break;
              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
                res.status(404).json({
                  message: "No comments found"
                });
              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));
      function viewComments(_x3, _x4) {
        return _viewComments.apply(this, arguments);
      }
      return viewComments;
    }()
  }, {
    key: "viewSingleComment",
    value: function () {
      var _viewSingleComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var comment;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _commentService.CommentServices.viewSingleComment(req.params.bid, req.params.cid);
              case 3:
                comment = _context3.sent;
                res.status(200).json({
                  comment: comment
                });
                _context3.next = 11;
                break;
              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);
                res.status(404).json({
                  error: _context3.t0
                });
              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));
      function viewSingleComment(_x5, _x6) {
        return _viewSingleComment.apply(this, arguments);
      }
      return viewSingleComment;
    }()
  }, {
    key: "deleteComment",
    value: function () {
      var _deleteComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _commentService.CommentServices.deleteComment(req.params.bid, req.params.cid);
              case 3:
                res.status(200).json({
                  message: "Comment Deleted"
                });
                _context4.next = 10;
                break;
              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);
                res.status(500).json({
                  error: _context4.t0
                });
              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }));
      function deleteComment(_x7, _x8) {
        return _deleteComment.apply(this, arguments);
      }
      return deleteComment;
    }()
  }]);
  return CommentController;
}();
exports.CommentController = CommentController;