"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _morgan = _interopRequireDefault(require("morgan"));
require("dotenv/config");
var _routes = _interopRequireDefault(require("./routes"));
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swagger = _interopRequireDefault(require("../swagger"));
var app = (0, _express["default"])();
app.use((0, _cors["default"])({
  origin: "*"
}));
app.use(_express["default"].json());
app.use((0, _morgan["default"])("dev"));
var port = process.env.PORT || 5000;
try {
  _mongoose["default"].set("strictQuery", false);
  _mongoose["default"].connect(process.env.DB_URL, {
    useNewUrlParser: true
  });
  console.log("Database connection successfull");
  app.use("/", _routes["default"]);
  app.use('/api-docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
  app.use("*", function (req, res) {
    res.status(404).json({
      message: "Resource Not Found"
    });
  });
  app.listen(port, function () {
    console.log("Server is running on port " + port);
  });
} catch (error) {
  console.log(error);
}
var _default = app;
exports["default"] = _default;