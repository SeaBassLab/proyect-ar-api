"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var HttpException = function HttpException(status, message) {
  (0, _classCallCheck2["default"])(this, HttpException);
  //super(message.toString());
  this.status = status;
  this.message = message.toString();
};

exports["default"] = HttpException;