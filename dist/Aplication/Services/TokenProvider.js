"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var jwt = _interopRequireWildcard(require("jsonwebtoken"));

var _inversify = require("inversify");

var _config = _interopRequireDefault(require("../../config"));

var _dec, _class;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TokenProvider = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function () {
  function TokenProvider() {
    (0, _classCallCheck2["default"])(this, TokenProvider);
  }

  (0, _createClass2["default"])(TokenProvider, [{
    key: "createToken",
    value: function createToken(user, database) {
      var expiresIn = 600 * 600;
      var secret = _config["default"].TOKEN_SECRET;
      var data = {
        database: database,
        _id: user._id
      };
      var token = {
        expiresIn: expiresIn,
        token: jwt.sign(data, secret, {
          expiresIn: expiresIn
        })
      };
      return token;
    }
  }]);
  return TokenProvider;
}()) || _class);
exports["default"] = TokenProvider;