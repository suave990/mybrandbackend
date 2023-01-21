"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _Message = _interopRequireDefault(require("../model/Message"));
var _messageService = require("../services/messageService");
var MessageController = /*#__PURE__*/function () {
  function MessageController() {
    (0, _classCallCheck2["default"])(this, MessageController);
  }
  (0, _createClass2["default"])(MessageController, null, [{
    key: "deliverMessage",
    value: function () {
      var _deliverMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _req$body, name, email, message, data, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _req$body = req.body, name = _req$body.name, email = _req$body.email, message = _req$body.message;
                data = new _Message["default"]({
                  name: name,
                  email: email,
                  message: message
                });
                _context.next = 5;
                return _messageService.MessageServices.sendMessage(data);
              case 5:
                response = _context.sent;
                if (!(response !== true)) {
                  _context.next = 10;
                  break;
                }
                return _context.abrupt("return", res.status(400).json({
                  response: response
                }));
              case 10:
                return _context.abrupt("return", res.status(200).json({
                  data: data
                }));
              case 11:
                _context.next = 17;
                break;
              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                res.status(500).json({
                  error: _context.t0
                });
              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 13]]);
      }));
      function deliverMessage(_x, _x2) {
        return _deliverMessage.apply(this, arguments);
      }
      return deliverMessage;
    }()
  }, {
    key: "viewMessages",
    value: function () {
      var _viewMessages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var messages;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _messageService.MessageServices.viewMessages();
              case 3:
                messages = _context2.sent;
                res.status(200).json({
                  messages: messages
                });
                _context2.next = 11;
                break;
              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
                res.status(500).json({
                  error: _context2.t0
                });
              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));
      function viewMessages(_x3, _x4) {
        return _viewMessages.apply(this, arguments);
      }
      return viewMessages;
    }()
  }, {
    key: "viewSingleMessage",
    value: function () {
      var _viewSingleMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var message;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _messageService.MessageServices.viewSingleMessage(req.params.id);
              case 3:
                message = _context3.sent;
                res.status(200).json({
                  message: message
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
      function viewSingleMessage(_x5, _x6) {
        return _viewSingleMessage.apply(this, arguments);
      }
      return viewSingleMessage;
    }()
  }, {
    key: "deleteMessage",
    value: function () {
      var _deleteMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _messageService.MessageServices.deleteMessage(req.params.id);
              case 3:
                res.status(200).json({
                  message: "Message deleted"
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
      function deleteMessage(_x7, _x8) {
        return _deleteMessage.apply(this, arguments);
      }
      return deleteMessage;
    }()
  }]);
  return MessageController;
}();
exports.MessageController = MessageController;