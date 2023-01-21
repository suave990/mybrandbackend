"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _User = _interopRequireDefault(require("../model/User"));
var _userService = _interopRequireDefault(require("../services/userService"));
var UserController = /*#__PURE__*/function () {
  function UserController() {
    (0, _classCallCheck2["default"])(this, UserController);
  }
  (0, _createClass2["default"])(UserController, null, [{
    key: "userSignup",
    value: function () {
      var _userSignup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _req$body, username, email, password, data, _yield$UserServices$a, response, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password;
                data = new _User["default"]({
                  username: username,
                  email: email,
                  password: password
                });
                _context.next = 5;
                return _userService["default"].addUser(data);
              case 5:
                _yield$UserServices$a = _context.sent;
                response = _yield$UserServices$a.data;
                token = _yield$UserServices$a.token;
                if (!(response !== data && response !== "Email already exists")) {
                  _context.next = 12;
                  break;
                }
                return _context.abrupt("return", res.status(409).json({
                  response: response
                }));
              case 12:
                if (!(response == "Email already exists")) {
                  _context.next = 16;
                  break;
                }
                return _context.abrupt("return", res.status(500).json({
                  message: response
                }));
              case 16:
                return _context.abrupt("return", res.status(200).json({
                  data: data,
                  token: token
                }));
              case 17:
                _context.next = 23;
                break;
              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                res.status(500).json({
                  error: _context.t0
                });
              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 19]]);
      }));
      function userSignup(_x, _x2) {
        return _userSignup.apply(this, arguments);
      }
      return userSignup;
    }()
  }, {
    key: "userLogin",
    value: function () {
      var _userLogin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _req$body2, email, password, data, response;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
                data = new _User["default"]({
                  email: email,
                  password: password
                });
                _context2.next = 5;
                return _userService["default"].login(data);
              case 5:
                response = _context2.sent;
                if (!(response == "Unregistered Email")) {
                  _context2.next = 10;
                  break;
                }
                return _context2.abrupt("return", res.status(400).json({
                  message: "Unregistered Email"
                }));
              case 10:
                if (!(response == "Password incorrect")) {
                  _context2.next = 14;
                  break;
                }
                return _context2.abrupt("return", res.status(400).json({
                  message: "Password incorrect"
                }));
              case 14:
                return _context2.abrupt("return", res.status(200).json({
                  token: response
                }));
              case 15:
                _context2.next = 21;
                break;
              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
                return _context2.abrupt("return", res.status(500).json({
                  error: _context2.t0
                }));
              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 17]]);
      }));
      function userLogin(_x3, _x4) {
        return _userLogin.apply(this, arguments);
      }
      return userLogin;
    }()
  }, {
    key: "userInfo",
    value: function () {
      var _userInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                if (!res.locals.email) {
                  _context3.next = 5;
                  break;
                }
                return _context3.abrupt("return", res.status(200).json({
                  email: res.locals.email,
                  name: res.locals.name
                }));
              case 5:
                return _context3.abrupt("return", res.status(400).json({
                  message: "Unregistered Email"
                }));
              case 6:
                _context3.next = 12;
                break;
              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);
                return _context3.abrupt("return", res.status(500).json({
                  error: _context3.t0
                }));
              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }));
      function userInfo(_x5, _x6) {
        return _userInfo.apply(this, arguments);
      }
      return userInfo;
    }()
  }, {
    key: "users",
    value: function () {
      var _users = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var response;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                if (!res.locals.email) {
                  _context4.next = 8;
                  break;
                }
                _context4.next = 4;
                return _userService["default"].getall();
              case 4:
                response = _context4.sent;
                return _context4.abrupt("return", res.status(200).json(response));
              case 8:
                return _context4.abrupt("return", res.status(400).json({
                  message: "Unregistered Email"
                }));
              case 9:
                _context4.next = 15;
                break;
              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);
                return _context4.abrupt("return", res.status(500).json({
                  error: _context4.t0
                }));
              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 11]]);
      }));
      function users(_x7, _x8) {
        return _users.apply(this, arguments);
      }
      return users;
    }()
  }]);
  return UserController;
}();
exports.UserController = UserController;