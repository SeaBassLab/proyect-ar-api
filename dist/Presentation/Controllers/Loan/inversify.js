"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _TYPES = _interopRequireDefault(require("./../../../TYPES"));

var _inversify = require("inversify");

require("reflect-metadata");

var _Model = _interopRequireDefault(require("./../../../Domain/Entities/Loan/Model"));

var _Controller = _interopRequireDefault(require("./../../../Domain/Entities/Loan/Controller"));

var _Dto = _interopRequireDefault(require("./../../../Domain/Entities/Loan/Dto"));

var _Controller2 = _interopRequireDefault(require("./../../../Presentation/Controllers/Loan/Controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var container = new _inversify.Container();
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model["default"]()).whenTargetNamed(_TYPES["default"].Loan);
container.bind(_TYPES["default"].Validable).to(_Dto["default"]).whenTargetNamed(_TYPES["default"].Loan);
container.bind(_TYPES["default"].LoanInterface).toConstantValue(new _Dto["default"]());
container.bind(_TYPES["default"].LoanServiceableDomain).to(_Controller["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller2["default"]);
var _default = container;
exports["default"] = _default;