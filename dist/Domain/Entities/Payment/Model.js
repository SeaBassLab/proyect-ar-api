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

var _mongoose = require("mongoose");

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