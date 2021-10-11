"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  TOKEN_SECRET: process.env.JWT_SECRET || 'TESTINMO',
  LIC_PASSWORD: process.env.LIC_SECRET || 'TESTINMOLIC'
};
exports["default"] = _default;