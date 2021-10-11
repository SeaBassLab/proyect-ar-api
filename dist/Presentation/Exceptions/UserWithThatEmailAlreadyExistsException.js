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

var _HttpException2 = _interopRequireDefault(require("./HttpException"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UserWithThatEmailAlreadyExistsException = /*#__PURE__*/function (_HttpException) {
  (0, _inherits2["default"])(UserWithThatEmailAlreadyExistsException, _HttpException);

  var _super = _createSuper(UserWithThatEmailAlreadyExistsException);

  function UserWithThatEmailAlreadyExistsException(email) {
    (0, _classCallCheck2["default"])(this, UserWithThatEmailAlreadyExistsException);
    return _super.call(this, 400, "User with email ".concat(email, " already exists"));
  }

  return UserWithThatEmailAlreadyExistsException;
}(_HttpException2["default"]);

exports["default"] = UserWithThatEmailAlreadyExistsException;