"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _TYPES = _interopRequireDefault(require("./../../../TYPES"));

var _inversify = require("inversify");

require("reflect-metadata");

var _Model = _interopRequireDefault(require("./../../../Domain/Entities/Check/Model"));

var _Controller = _interopRequireDefault(require("./../../../Domain/Entities/Check/Controller"));

var _Dto = _interopRequireDefault(require("./../../../Domain/Entities/Check/Dto"));

var _Controller2 = _interopRequireDefault(require("./../../../Presentation/Controllers/Check/Controller"));

var container = new _inversify.Container();
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model["default"]()).whenTargetNamed(_TYPES["default"].Check);
container.bind(_TYPES["default"].Validable).to(_Dto["default"]).whenTargetNamed(_TYPES["default"].Check);
container.bind(_TYPES["default"].CheckInterface).toConstantValue(new _Dto["default"]());
container.bind(_TYPES["default"].CheckServiceableDomain).to(_Controller["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller2["default"]);
var _default = container;
exports["default"] = _default;