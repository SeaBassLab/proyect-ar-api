"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ClaimType = exports.ClaimPriority = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Model = _interopRequireDefault(require("../Util/Model"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ENTITY_SCHEMA = /*#__PURE__*/function (_Schemable) {
  (0, _inherits2["default"])(ENTITY_SCHEMA, _Schemable);

  var _super = _createSuper(ENTITY_SCHEMA);

  function ENTITY_SCHEMA() {
    var _this;

    (0, _classCallCheck2["default"])(this, ENTITY_SCHEMA);
    _this = _super.call(this, {
      name: {
        type: String
      },
      description: {
        type: String
      },
      type: {
        type: String,
        "enum": [ClaimType.Err, ClaimType.Implementation, ClaimType.Improvement, ClaimType.Suggestion],
        "default": ClaimType.Suggestion
      },
      priority: {
        type: String,
        "enum": [ClaimPriority.Half, ClaimPriority.High, ClaimPriority.Low],
        "default": ClaimPriority.Low
      },
      author: {
        type: String
      },
      email: {
        type: String
      },
      listName: {
        type: String
      },
      file: {
        type: String
      }
    });
    _this.name = 'claim';
    return _this;
  }

  return ENTITY_SCHEMA;
}(_Model["default"]);

exports["default"] = ENTITY_SCHEMA;
var ClaimPriority;
exports.ClaimPriority = ClaimPriority;

(function (ClaimPriority) {
  ClaimPriority[ClaimPriority["High"] = "Alta"] = "High";
  ClaimPriority[ClaimPriority["Half"] = "Media"] = "Half";
  ClaimPriority[ClaimPriority["Low"] = "Baja"] = "Low";
})(ClaimPriority || (exports.ClaimPriority = ClaimPriority = {}));

var ClaimType;
exports.ClaimType = ClaimType;

(function (ClaimType) {
  ClaimType[ClaimType["Suggestion"] = "Sugerencia"] = "Suggestion";
  ClaimType[ClaimType["Improvement"] = "Mejora"] = "Improvement";
  ClaimType[ClaimType["Err"] = "Error"] = "Err";
  ClaimType[ClaimType["Implementation"] = "Nueva Implementación"] = "Implementation";
})(ClaimType || (exports.ClaimType = ClaimType = {}));