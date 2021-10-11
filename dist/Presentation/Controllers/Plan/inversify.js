"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _TYPES = _interopRequireDefault(require("./../../../TYPES"));

var _inversify = require("inversify");

require("reflect-metadata");

var _Model = _interopRequireDefault(require("./../../../Domain/Entities/Plan/Model"));

var _Controller = _interopRequireDefault(require("./../../../Domain/Entities/Plan/Controller"));

var _Dto = _interopRequireDefault(require("./../../../Domain/Entities/Plan/Dto"));

var _Controller2 = _interopRequireDefault(require("./../../../Presentation/Controllers/Plan/Controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var container = new _inversify.Container();
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model["default"]()).whenTargetNamed(_TYPES["default"].Plan);
container.bind(_TYPES["default"].Validable).to(_Dto["default"]).whenTargetNamed(_TYPES["default"].Plan);
container.bind(_TYPES["default"].PlanInterface).toConstantValue(new _Dto["default"]());
container.bind(_TYPES["default"].PlanServiceableDomain).to(_Controller["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller2["default"]);
var _default = container;
exports["default"] = _default;