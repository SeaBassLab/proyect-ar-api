"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _TYPES = _interopRequireDefault(require("./../../../TYPES"));

var _inversify = require("inversify");

require("reflect-metadata");

var _Model = _interopRequireDefault(require("./../../../Domain/Entities/Section/Model"));

var _Controller = _interopRequireDefault(require("./../../../Domain/Entities/Section/Controller"));

var _Dto = _interopRequireDefault(require("./../../../Domain/Entities/Section/Dto"));

var _Controller2 = _interopRequireDefault(require("./../../../Presentation/Controllers/Section/Controller"));

var container = new _inversify.Container();
container.bind(_TYPES["default"].Schemable).toConstantValue(new _Model["default"]()).whenTargetNamed(_TYPES["default"].Section);
container.bind(_TYPES["default"].Validable).to(_Dto["default"]).whenTargetNamed(_TYPES["default"].Section);
container.bind(_TYPES["default"].SectionInterface).toConstantValue(new _Dto["default"]());
container.bind(_TYPES["default"].SectionServiceableDomain).to(_Controller["default"]);
container.bind(_TYPES["default"].Routeable).to(_Controller2["default"]);
var _default = container;
exports["default"] = _default;