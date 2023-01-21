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
var _likeService = require("../services/likeService");
/*import { LikeServices } from "../services/likeService";
export default class LikesController {
  static async like(req, res) {
    try {
      // console.log(req.params.id)
      await LikeServices.addLike(req.params.id,res.locals.email);
      res.status(200).json({ message: "Blog Liked!!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });

    }
  }
  
}*/
var LikeController = /*#__PURE__*/function () {
  function LikeController() {
    (0, _classCallCheck2["default"])(this, LikeController);
  }
  (0, _createClass2["default"])(LikeController, null, [{
    key: "like",
    value: function () {
      var _like = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _likeService.LikeServices.like(req.params.id, res.locals.email);
              case 3:
                response = _context.sent;
                res.status(200).json({
                  likedBlog: response.data
                });
                _context.next = 11;
                break;
              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                res.status(500).json({
                  error: _context.t0
                });
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));
      function like(_x, _x2) {
        return _like.apply(this, arguments);
      }
      return like;
    }()
  }]);
  return LikeController;
}();
exports["default"] = LikeController;