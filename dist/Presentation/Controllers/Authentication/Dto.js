"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _classValidator = require("class-validator");

var _inversify = require("inversify");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2;

var Dto = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _classValidator.IsDefined)(), _dec3 = (0, _classValidator.ValidateIf)(function (o) {
  return o.email !== undefined;
}), _dec4 = (0, _classValidator.IsEmail)(), _dec5 = (0, _classValidator.IsString)(), _dec6 = (0, _classValidator.IsDefined)(), _dec7 = (0, _classValidator.ValidateIf)(function (o) {
  return o.password !== undefined;
}), _dec8 = (0, _classValidator.MinLength)(6), _dec9 = (0, _classValidator.IsString)(), _dec(_class = (_class2 = function Dto() {
  (0, _classCallCheck2["default"])(this, Dto);
  (0, _initializerDefineProperty2["default"])(this, "email", _descriptor, this);
  (0, _initializerDefineProperty2["default"])(this, "password", _descriptor2, this);
}, (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "email", [_dec2, _dec3, _dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "password", [_dec6, _dec7, _dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports["default"] = Dto;