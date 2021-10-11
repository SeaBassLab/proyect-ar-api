"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _inversify = require("inversify");

var _Model = _interopRequireDefault(require("../Util/Model"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ENTITY_SCHEMA = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function (_Schemable) {
  _inherits(ENTITY_SCHEMA, _Schemable);

  var _super = _createSuper(ENTITY_SCHEMA);

  function ENTITY_SCHEMA() {
    var _this;

    _classCallCheck(this, ENTITY_SCHEMA);

    var entity = 'business';
    _this = _super.call(this, {
      name: {
        type: String,
        typed: 'string'
      },
      area: {
        ref: 'area',
        typed: 'id',
        type: _mongoose.Schema.Types.ObjectId
      },
      address: {
        type: String,
        typed: 'string'
      },
      phone: {
        type: String,
        typed: 'string'
      },
      CUIT: {
        type: Number,
        typed: 'number'
      },
      agent: {
        ref: 'user',
        typed: 'id',
        type: _mongoose.Schema.Types.ObjectId
      },
      entity: {
        type: String,
        typed: entity
      }
    }, {
      collection: entity
    });
    _this.name = entity;
    return _this;
  }

  return ENTITY_SCHEMA;
}(_Model["default"])) || _class);
exports["default"] = ENTITY_SCHEMA;