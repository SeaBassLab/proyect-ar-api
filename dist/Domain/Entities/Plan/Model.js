"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inversify = require("inversify");

var _Model = _interopRequireDefault(require("../Util/Model"));

var _dec, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ENTITY_SCHEMA = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function (_Schemable) {
  (0, _inherits2["default"])(ENTITY_SCHEMA, _Schemable);

  var _super = _createSuper(ENTITY_SCHEMA);

  function ENTITY_SCHEMA() {
    var _this;

    (0, _classCallCheck2["default"])(this, ENTITY_SCHEMA);
    var entity = "plan";
    _this = _super.call(this, {
      name: {
        type: String,
        typed: "string"
      },
      amount: {
        type: Number,
        typed: "number"
      },
      discount: {
        type: Number,
        typed: "number"
      },
      id: {
        type: String,
        typed: "string"
      },
      wineCategory: {
        type: String,
        typed: "string"
      },
      sale: {
        type: Number,
        typed: "number"
      },
      ship: {
        type: Number,
        typed: "number"
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