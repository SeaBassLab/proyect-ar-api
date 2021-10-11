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

var _inversify = require("inversify");

var _TYPES = _interopRequireDefault(require("./../../../TYPES"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

var Builder = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_TYPES["default"].ResponseableDomain), _dec3 = (0, _inversify.inject)(_TYPES["default"].Saveable), _dec4 = (0, _inversify.inject)(_TYPES["default"].GeteableAll), _dec5 = (0, _inversify.inject)(_TYPES["default"].SessionInterface), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function Builder() {
    (0, _classCallCheck2["default"])(this, Builder);
    (0, _initializerDefineProperty2["default"])(this, "responserService", _descriptor, this);
    (0, _initializerDefineProperty2["default"])(this, "saveableService", _descriptor2, this);
    (0, _initializerDefineProperty2["default"])(this, "geteableAllService", _descriptor3, this);
    (0, _initializerDefineProperty2["default"])(this, "session", _descriptor4, this);
  }

  (0, _createClass2["default"])(Builder, [{
    key: "getInstance",
    value: function getInstance(requiered) {
      var _this = this;

      return new Promise( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
          var sessionModel, userId;
          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  //requiere el model de user, para buscar
                  //el id de user
                  sessionModel = requiered[0];
                  userId = requiered[1];
                  _context2.next = 4;
                  return _this.saveableService.save(_this.session, sessionModel, sessionModel, userId).then( /*#__PURE__*/function () {
                    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(res) {
                      var match;
                      return _regenerator["default"].wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              if (!(res && res.result !== undefined)) {
                                _context.next = 11;
                                break;
                              }

                              _this.responserService = {
                                result: res.result,
                                message: res.message,
                                error: res.error,
                                status: res.status
                              };

                              if (!(res.status === 200)) {
                                _context.next = 8;
                                break;
                              }

                              match = {
                                _id: {
                                  $oid: res.result._id
                                }
                              };
                              _context.next = 6;
                              return _this.geteableAllService.getAll(sessionModel, {}, match, {}, {}, 1, 0).then(function (res) {
                                _this.responserService = {
                                  result: res.result,
                                  message: res.message,
                                  error: res.error,
                                  status: res.status
                                };

                                if (res.status === 200) {
                                  resolve(_this.responserService);
                                } else {
                                  reject(_this.responserService);
                                }
                              })["catch"](function (err) {
                                _this.responserService = {
                                  result: err.result,
                                  message: err.message,
                                  error: err.error,
                                  status: err.status
                                };
                                reject(_this.responserService);
                              });

                            case 6:
                              _context.next = 9;
                              break;

                            case 8:
                              reject(_this.responserService);

                            case 9:
                              _context.next = 13;
                              break;

                            case 11:
                              _this.responserService = {
                                result: 'Nop',
                                message: 'La capa superior contesto undefined',
                                error: '',
                                status: 500
                              };
                              reject(_this.responserService);

                            case 13:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x3) {
                      return _ref2.apply(this, arguments);
                    };
                  }())["catch"](function (err) {
                    _this.responserService = {
                      result: err.result,
                      message: err.message,
                      error: err.error,
                      status: err.status
                    };
                    reject(_this.responserService);
                  });

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }]);
  return Builder;
}(), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "responserService", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "saveableService", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "geteableAllService", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "session", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports["default"] = Builder;