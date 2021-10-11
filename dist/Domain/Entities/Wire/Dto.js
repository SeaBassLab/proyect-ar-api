"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _classValidator = require("class-validator");

var _inversify = require("inversify");

var _Dto = _interopRequireDefault(require("../Util/Dto"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var EntityDto = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _classValidator.IsString)({
  message: ' se debe seleccionar al menos una operación'
}), _dec3 = (0, _classValidator.IsNumber)({}, {
  message: ' se debe ingresar una cantidad de USD determinada'
}), _dec4 = (0, _classValidator.Min)(0, {
  message: ' el monto nominal (USD) no debe ser menor a cero'
}), _dec5 = (0, _classValidator.IsNumber)({}, {
  message: ' se debe ingresar un porcentaje determinado (%)'
}), _dec6 = (0, _classValidator.Min)(0, {
  message: ' el porcentaje (%) no debe ser menor a cero'
}), _dec7 = (0, _classValidator.IsNumber)({}, {
  message: ' se debe ingresar un porcentaje determinado (%)'
}), _dec8 = (0, _classValidator.Min)(0, {
  message: ' el porcentaje (%) no debe ser menor a cero'
}), _dec(_class = (_class2 = /*#__PURE__*/function (_DtoUtil) {
  (0, _inherits2["default"])(EntityDto, _DtoUtil);

  var _super = _createSuper(EntityDto);

  function EntityDto() {
    var _this;

    (0, _classCallCheck2["default"])(this, EntityDto);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "operation", _descriptor, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "amount", _descriptor2, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "exchangeRate", _descriptor3, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "commission", _descriptor4, (0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  return EntityDto;
}(_Dto["default"]), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "operation", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "amount", [_dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "exchangeRate", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "commission", [_dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports["default"] = EntityDto;