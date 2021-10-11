"use strict";

require("dotenv/config");

var _TYPES = _interopRequireDefault(require("./TYPES"));

var _inversify = _interopRequireDefault(require("./inversify.config"));

var _Controller = _interopRequireDefault(require("./Presentation/Router/Controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const dot = require('dotenv').config({ path: './env' });
var routerApp = new _Controller["default"]();

var app = _inversify["default"].get(_TYPES["default"].Appeable);

app.run(routerApp);