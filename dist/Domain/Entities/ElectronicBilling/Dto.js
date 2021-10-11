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

var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

var EntityDto = (_dec = (0, _classValidator.IsDefined)(), _dec2 = (0, _classValidator.IsDefined)(), _dec3 = (0, _classValidator.IsDefined)(), _dec4 = (0, _classValidator.IsDefined)(), (_class = function EntityDto() {
  (0, _classCallCheck2["default"])(this, EntityDto);
  (0, _initializerDefineProperty2["default"])(this, "totalPrice", _descriptor, this);
  (0, _initializerDefineProperty2["default"])(this, "origin", _descriptor2, this);
  (0, _initializerDefineProperty2["default"])(this, "letter", _descriptor3, this);
  (0, _initializerDefineProperty2["default"])(this, "CUIT", _descriptor4, this);
}, (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "totalPrice", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "origin", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "letter", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "CUIT", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
exports["default"] = EntityDto;