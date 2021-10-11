"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpException = function HttpException(status, message) {
  _classCallCheck(this, HttpException);

  //super(message.toString());
  this.status = status;
  this.message = message.toString();
};

exports["default"] = HttpException;