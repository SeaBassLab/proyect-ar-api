"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classValidator = require("class-validator");

var _inversify = require("inversify");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

var Dto = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _classValidator.IsDefined)(), _dec3 = (0, _classValidator.ValidateIf)(function (o) {
  return o.email !== undefined;
}), _dec4 = (0, _classValidator.IsEmail)(), _dec5 = (0, _classValidator.IsString)(), _dec6 = (0, _classValidator.IsDefined)(), _dec7 = (0, _classValidator.ValidateIf)(function (o) {
  return o.password !== undefined;
}), _dec8 = (0, _classValidator.MinLength)(6), _dec9 = (0, _classValidator.IsString)(), _dec(_class = (_class2 = function Dto() {
  _classCallCheck(this, Dto);

  _initializerDefineProperty(this, "email", _descriptor, this);

  _initializerDefineProperty(this, "password", _descriptor2, this);
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "email", [_dec2, _dec3, _dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "password", [_dec6, _dec7, _dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports["default"] = Dto;