"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inversify = require("inversify");

var _TYPES = _interopRequireDefault(require("./../../../TYPES"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

var Builder = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_TYPES["default"].ResponseableDomain), _dec3 = (0, _inversify.inject)(_TYPES["default"].Saveable), _dec4 = (0, _inversify.inject)(_TYPES["default"].GeteableAll), _dec5 = (0, _inversify.inject)(_TYPES["default"].SessionInterface), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function Builder() {
    _classCallCheck(this, Builder);

    _initializerDefineProperty(this, "responserService", _descriptor, this);

    _initializerDefineProperty(this, "saveableService", _descriptor2, this);

    _initializerDefineProperty(this, "geteableAllService", _descriptor3, this);

    _initializerDefineProperty(this, "session", _descriptor4, this);
  }

  _createClass(Builder, [{
    key: "getInstance",
    value: function getInstance(requiered) {
      var _this = this;

      return new Promise( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve, reject) {
          var sessionModel, userId;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  //requiere el model de user, para buscar
                  //el id de user
                  sessionModel = requiered[0];
                  userId = requiered[1];
                  _context2.next = 4;
                  return _this.saveableService.save(_this.session, sessionModel, sessionModel, userId).then( /*#__PURE__*/function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                      var match;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
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
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "responserService", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "saveableService", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "geteableAllService", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "session", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports["default"] = Builder;