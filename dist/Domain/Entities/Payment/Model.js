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

    var entity = 'payment';
    _this = _super.call(this, {
      collectorWingcamp: {
        ref: 'user',
        typed: 'id',
        type: _mongoose.Schema.Types.ObjectId
      },
      payerWingascamp: {
        ref: 'user',
        typed: 'id',
        type: _mongoose.Schema.Types.ObjectId
      },
      amountMeli: {
        type: String,
        typed: 'string'
      },
      discountMeli: {
        type: String,
        typed: 'string'
      },
      totalMeli: {
        type: String,
        typed: 'string'
      },
      operationNumberMeli: {
        type: String,
        typed: 'string'
      },
      statusMeli: {
        type: String,
        typed: 'string'
      },
      ejectMeli: {
        type: Date,
        typed: 'date'
      },
      paymentMethodMeli: {
        type: String,
        typed: 'string'
      },
      barcodeMeli: {
        type: String,
        typed: 'string'
      },
      transactionNumbreMeli: {
        type: String,
        typed: 'string'
      },
      finalCollectorMeli: {
        type: String,
        typed: 'string'
      },
      idMeli: {
        type: Number,
        typed: 'number'
      },
      // date_created: {
      // 	type: Date,
      // 	typed: 'date'
      // },
      // date_approved: {
      // 	type: Date,
      // 	typed: 'date'
      // },
      // date_last_updated: {
      // 	type: Date,
      // 	typed: 'date'
      // },
      // date_of_expiration: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // money_release_date: {
      // 	type: Date,
      // 	typed: 'date'
      // },
      // operation_type: {
      // 	type: String,
      // 	typed: 'string'
      // },
      // issuer_id: {
      // 	type: String,
      // 	typed: 'string'
      // },
      // payment_method_id: {
      // 	type: String,
      // 	typed: 'string'
      // },
      // payment_type_id: {
      // 	type: String,
      // 	typed: 'string'
      // },
      // status: {
      // 	type: String,
      // 	typed: 'string'
      // },
      // status_detail: {
      // 	type: String,
      // 	typed: 'string'
      // },
      // currency_id: {
      // 	type: String,
      // 	typed: 'string'
      // },
      // live_mode: {
      // 	type: Boolean,
      // 	typed: 'boolean'
      // },
      // sponsor_id: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // authorization_code: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // money_release_schema: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // taxes_amount: {
      // 	type: Number,
      // 	typed: 'number'
      // },
      // counter_currency: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // brand_id: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // shipping_amount: {
      // 	type: Number,
      // 	typed: 'number'
      // },
      // pos_id: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // store_id: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // integrator_id: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // platform_id: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // corporation_id: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // collector_id: {
      // 	type: Number,
      // 	typed: 'number'
      // },
      // payer: {
      // 	type: Schema.Types.Mixed,
      // 	typed: 'object'
      // },
      // marketplace_owner: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // metadata: {
      // 	type: Schema.Types.Mixed,
      // 	typed: 'object'
      // },
      // additional_info: {
      // 	type: Schema.Types.Mixed,
      // 	typed: 'object'
      // },
      // order: {
      // 	type: Schema.Types.Mixed,
      // 	typed: 'object'
      // },
      // external_reference: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // transaction_amount: {
      // 	type: Number,
      // 	typed: 'number'
      // },
      // transaction_amount_refunded: {
      // 	type: Number,
      // 	typed: 'number'
      // },
      // coupon_amount: {
      // 	type: Number,
      // 	typed: 'number'
      // },
      // differential_pricing_id: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // deduction_schema: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // installments: {
      // 	type: Number,
      // 	typed: 'number'
      // },
      // transaction_details: {
      // 	type: Schema.Types.Mixed,
      // 	typed: 'object'
      // },
      // fee_details: [{
      // 	type: Schema.Types.Mixed,
      // 	typed: 'object'
      // }],
      // charges_details: [{
      // 	type: Schema.Types.Mixed,
      // 	typed: 'object'
      // }],
      // captured: {
      // 	type: Boolean,
      // 	typed: 'boolean'
      // },
      // binary_mode: {
      // 	type: Boolean,
      // 	typed: 'boolean'
      // },
      // call_for_authorize_id: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // statement_descriptor: {
      // 	type: String,
      // 	typed: 'string'
      // },
      // card: {
      // 	type: Schema.Types.Mixed,
      // 	typed: 'object'
      // },
      // notification_url: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // refunds: [{
      // 	type: Schema.Types.Mixed,
      // 	typed: 'object'
      // }],
      // processing_mode: {
      // 	type: String,
      // 	typed: 'string'
      // },
      // merchant_account_id: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // merchant_number: {
      // 	type: String,
      // 	typed: 'string',
      // 	default: null
      // },
      // acquirer_reconciliation: [{
      // 	type: Schema.Types.Mixed,
      // 	typed: 'object'
      // }],
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