"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var CookieProvider = /*#__PURE__*/function () {
  function CookieProvider() {
    (0, _classCallCheck2["default"])(this, CookieProvider);
  }

  (0, _createClass2["default"])(CookieProvider, [{
    key: "createCookie",
    value: function createCookie(token) {
      var cookie = "Authorization=".concat(token.token, "; path=/; HttpOnly; Max-Age=").concat(token.expiresIn);
      return cookie;
    }
  }]);
  return CookieProvider;
}();

exports["default"] = CookieProvider;