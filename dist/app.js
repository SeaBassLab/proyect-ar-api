"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _inversify = require("inversify");

require("reflect-metadata");

var _TYPES = _interopRequireDefault(require("./TYPES"));

var _Error = _interopRequireDefault(require("./Presentation/Middlewares/Error"));

var _dec, _dec2, _class, _class2, _descriptor;

var App = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.multiInject)(_TYPES["default"].Routeable), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function App() {
    (0, _classCallCheck2["default"])(this, App);
    (0, _defineProperty2["default"])(this, "app", (0, _express["default"])());
    (0, _initializerDefineProperty2["default"])(this, "controllers", _descriptor, this);
    this.initializeMiddlewares();
    this.initializeErrorHandling();
  }

  (0, _createClass2["default"])(App, [{
    key: "run",
    value: function () {
      var _run = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(router) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.listen();
                router.init(this.app, this.controllers);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function run(_x) {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }, {
    key: "listen",
    value: function listen() {
      var port = process.env.PORT;

      if (port === undefined || port === null) {
        port = '3030';
      }

      this.app.listen(parseInt(port, 10), function () {
        console.log("Server is running in port " + port);
      });
    }
  }, {
    key: "getServer",
    value: function getServer() {
      return this.app;
    }
  }, {
    key: "initializeMiddlewares",
    value: function initializeMiddlewares() {
      this.app.use(_bodyParser["default"].urlencoded({
        extended: true
      }));
      this.app.use(_bodyParser["default"].json());
      this.app.use((0, _cookieParser["default"])());
      this.app.use('*', (0, _cors["default"])());
    }
  }, {
    key: "initializeErrorHandling",
    value: function initializeErrorHandling() {
      this.app.use(_Error["default"]);
    }
  }]);
  return App;
}(), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "controllers", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
})), _class2)) || _class);
exports["default"] = App;