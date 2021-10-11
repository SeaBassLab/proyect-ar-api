"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Router = /*#__PURE__*/function () {
  function Router() {
    (0, _classCallCheck2["default"])(this, Router);
  }

  (0, _createClass2["default"])(Router, [{
    key: "init",
    value: function init(app, controllers) {
      controllers.forEach(function (controller) {
        app.use('/', controller.router);
      });
    }
  }]);
  return Router;
}();

exports["default"] = Router;