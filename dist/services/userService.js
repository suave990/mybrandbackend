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
var _User = _interopRequireDefault(require("../model/User"));
var _user_validations = _interopRequireDefault(require("../validations/user_validations"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var UserServices = /*#__PURE__*/function () {
  function UserServices() {
    (0, _classCallCheck2["default"])(this, UserServices);
  }
  (0, _createClass2["default"])(UserServices, null, [{
    key: "addUser",
    value: function () {
      var _addUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var _yield$validateUser, error, value, emailExist, salt, hashedPassword, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _user_validations["default"])(data);
              case 2:
                _yield$validateUser = _context.sent;
                error = _yield$validateUser.error;
                value = _yield$validateUser.value;
                if (!(error.details.length > 2)) {
                  _context.next = 9;
                  break;
                }
                return _context.abrupt("return", error.details.map(function (detail) {
                  return detail.message;
                }));
              case 9:
                _context.next = 11;
                return _User["default"].findOne({
                  email: data.email
                });
              case 11:
                emailExist = _context.sent;
                if (!emailExist) {
                  _context.next = 16;
                  break;
                }
                return _context.abrupt("return", "Email exists");
              case 16:
                _context.next = 18;
                return _bcrypt["default"].genSalt(10);
              case 18:
                salt = _context.sent;
                _context.next = 21;
                return _bcrypt["default"].hash(data.password, salt);
              case 21:
                hashedPassword = _context.sent;
                data.password = hashedPassword;
                _context.next = 25;
                return data.save();
              case 25:
                token = _jsonwebtoken["default"].sign({
                  _id: data._id,
                  email: data.email,
                  name: data.name
                }, process.env.TOKEN_SECRET);
                return _context.abrupt("return", {
                  data: data,
                  token: token
                });
              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function addUser(_x) {
        return _addUser.apply(this, arguments);
      }
      return addUser;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
        var _yield$validateUser2, error, value, user, token, validPass;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _user_validations["default"])(data);
              case 2:
                _yield$validateUser2 = _context2.sent;
                error = _yield$validateUser2.error;
                value = _yield$validateUser2.value;
                if (!(error.details.length > 2)) {
                  _context2.next = 9;
                  break;
                }
                return _context2.abrupt("return", error.details.map(function (detail) {
                  return detail.message;
                }));
              case 9:
                _context2.next = 11;
                return _User["default"].findOne({
                  email: data.email
                });
              case 11:
                user = _context2.sent;
                if (user) {
                  _context2.next = 16;
                  break;
                }
                return _context2.abrupt("return", "Unregistered Email");
              case 16:
                token = _jsonwebtoken["default"].sign({
                  _id: user._id,
                  email: user.email,
                  name: user.name
                }, process.env.TOKEN_SECRET);
                _context2.next = 19;
                return _bcrypt["default"].compare(data.password, user.password);
              case 19:
                validPass = _context2.sent;
                if (validPass) {
                  _context2.next = 24;
                  break;
                }
                return _context2.abrupt("return", "Password incorrect");
              case 24:
                return _context2.abrupt("return", token);
              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function login(_x2) {
        return _login.apply(this, arguments);
      }
      return login;
    }()
  }, {
    key: "getUser",
    value: function () {
      var _getUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log(data);
              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function getUser(_x3) {
        return _getUser.apply(this, arguments);
      }
      return getUser;
    }()
  }, {
    key: "getall",
    value: function () {
      var _getall = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var users;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _User["default"].find({});
              case 2:
                users = _context4.sent;
                return _context4.abrupt("return", users.map(function (user) {
                  return {
                    username: user.username,
                    email: user.email
                  };
                }));
              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      function getall() {
        return _getall.apply(this, arguments);
      }
      return getall;
    }()
  }]);
  return UserServices;
}();
exports["default"] = UserServices;