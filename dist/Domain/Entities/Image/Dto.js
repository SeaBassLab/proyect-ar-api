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

var _dec, _dec2, _class, _descriptor;

var EntityDto = (_dec = (0, _classValidator.IsDefined)(), _dec2 = (0, _classValidator.IsString)(), (_class = function EntityDto() {
  (0, _classCallCheck2["default"])(this, EntityDto);
  (0, _initializerDefineProperty2["default"])(this, "name", _descriptor, this);
}, (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "name", [_dec, _dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
exports["default"] = EntityDto;