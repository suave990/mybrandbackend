"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageServices = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _Message = _interopRequireDefault(require("../model/Message"));
var _message_validations = _interopRequireDefault(require("../validations/message_validations"));
var MessageServices = /*#__PURE__*/function () {
  function MessageServices() {
    (0, _classCallCheck2["default"])(this, MessageServices);
  }
  (0, _createClass2["default"])(MessageServices, null, [{
    key: "sendMessage",
    value: function () {
      var _sendMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var _yield$validateMessag, error, value;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _message_validations["default"])(data);
              case 2:
                _yield$validateMessag = _context.sent;
                error = _yield$validateMessag.error;
                value = _yield$validateMessag.value;
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
      function sendMessage(_x) {
        return _sendMessage.apply(this, arguments);
      }
      return sendMessage;
    }()
  }, {
    key: "viewMessages",
    value: function () {
      var _viewMessages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var messages;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _Message["default"].find();
              case 2:
                messages = _context2.sent;
                return _context2.abrupt("return", messages);
              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function viewMessages() {
        return _viewMessages.apply(this, arguments);
      }
      return viewMessages;
    }()
  }, {
    key: "viewSingleMessage",
    value: function () {
      var _viewSingleMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
        var message;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _Message["default"].findOne({
                  _id: id
                });
              case 2:
                message = _context3.sent;
                return _context3.abrupt("return", message);
              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function viewSingleMessage(_x2) {
        return _viewSingleMessage.apply(this, arguments);
      }
      return viewSingleMessage;
    }()
  }, {
    key: "deleteMessage",
    value: function () {
      var _deleteMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _Message["default"].deleteOne({
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
      function deleteMessage(_x3) {
        return _deleteMessage.apply(this, arguments);
      }
      return deleteMessage;
    }()
  }]);
  return MessageServices;
}();
exports.MessageServices = MessageServices;