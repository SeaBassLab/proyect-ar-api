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

var _Model = _interopRequireDefault(require("../Util/Model"));

var _inversify = require("inversify");

var _dec, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ENTITY_SCHEMA = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function (_Schema) {
  (0, _inherits2["default"])(ENTITY_SCHEMA, _Schema);

  var _super = _createSuper(ENTITY_SCHEMA);

  function ENTITY_SCHEMA() {
    var _this;

    (0, _classCallCheck2["default"])(this, ENTITY_SCHEMA);
    _this = _super.call(this, {
      name: {
        type: String,
        typed: 'string'
      },
      surname: {
        type: String,
        typed: 'string'
      },
      dni: {
        type: Number,
        typed: 'number'
      },
      email: {
        type: String,
        typed: 'string',
        lowercase: true
      },
      password: {
        type: String,
        typed: 'string'
      },
      enabled: {
        type: Boolean,
        typed: 'string',
        "default": false
      },
      token: {
        type: String,
        typed: 'string'
      },
      tokenExpiration: {
        type: Number,
        typed: 'string',
        "default": 1440
      },
      aceptTC: {
        type: Boolean,
        typed: 'boolean',
        "default": false
      },
      wingcoins: {
        type: Number,
        typed: 'number',
        "default": 0
      },
      phone: {
        type: Number,
        typed: 'number',
        "default": 0
      },
      image: {
        type: String,
        typed: 'string'
      },
      googleId: {
        type: String,
        typed: 'string'
      },
      verified: {
        type: Boolean,
        typed: 'boolean'
      },
      facebookId: {
        type: String,
        typed: 'string'
      },
      country: {
        type: String,
        typed: 'string'
      },
      city: {
        type: String,
        typed: 'string'
      },
      profession: {
        type: String,
        typed: 'string'
      },
      user: {
        type: String,
        typed: 'string'
      },
      rol: {
        ref: 'rol',
        typed: 'id',
        type: _Model["default"].Types.ObjectId
      },
      mailVerified: {
        type: Boolean,
        typed: 'boolean',
        "default": false
      },
      idMail: {
        type: String,
        typed: 'string'
      },
      survey: {
        type: String,
        typed: 'string'
      },
      sendAlert: {
        type: Boolean,
        typed: 'boolean',
        "default": false
      },
      process: {
        type: String,
        typed: 'string'
      },
      plan: {
        ref: "plan",
        typed: "id",
        type: _Model["default"].Types.ObjectId
      }
    }, {
      collection: 'user'
    });
    _this.name = 'user';
    return _this;
  }

  return ENTITY_SCHEMA;
}(_Model["default"])) || _class);
exports["default"] = ENTITY_SCHEMA;