"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var nodemailer = _interopRequireWildcard(require("nodemailer"));

var _inversify = require("inversify");

var _TYPES = _interopRequireDefault(require("./../../TYPES"));

var _dec, _dec2, _class, _class2, _descriptor;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

var SendMail = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_TYPES["default"].ResponseableDomain), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function SendMail() {
    _classCallCheck(this, SendMail);

    _initializerDefineProperty(this, "responserService", _descriptor, this);
  }

  _createClass(SendMail, [{
    key: "sendMail",
    value: function () {
      var _sendMail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(to, text, from, pass, subject) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                    var existError, errorMsj;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            existError = false;
                            errorMsj = '';

                            if (existError) {
                              _context.next = 6;
                              break;
                            }

                            _this.send(from, pass, to, subject, text).then(function (idMsg) {
                              // console.log(idMsg)
                              // console.log(to)
                              var msj = 'Se envió un mail de verificación a: ' + to + '. Si no lo encuentras, revisa tu bandeja de spam.';
                              _this.responserService = {
                                result: msj,
                                message: 'Consulta exitosa',
                                error: '',
                                status: 200
                              };
                              resolve(_this.responserService);
                            })["catch"](function (errors) {
                              _this.responserService = {
                                result: 'No se envio el mail 1',
                                message: errors.toString(),
                                error: errors,
                                status: 500
                              };
                              reject(_this.responserService);
                              return;
                            });

                            _context.next = 9;
                            break;

                          case 6:
                            _this.responserService = {
                              result: 'No se envio el mail 2',
                              message: 'Existen errores',
                              error: errorMsj,
                              status: 500
                            };
                            reject(_this.responserService);
                            return _context.abrupt("return");

                          case 9:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x6, _x7) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function sendMail(_x, _x2, _x3, _x4, _x5) {
        return _sendMail.apply(this, arguments);
      }

      return sendMail;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(from, pass, to, subject, text) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resolve, reject) {
                    var transporter;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            transporter = nodemailer.createTransport({
                              host: "smtp.gmail.com",
                              port: 587,
                              secure: false,
                              auth: {
                                user: from,
                                pass: pass
                              }
                            });

                            try {
                              transporter.verify( /*#__PURE__*/function () {
                                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(error, success) {
                                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                    while (1) {
                                      switch (_context3.prev = _context3.next) {
                                        case 0:
                                          if (!success) {
                                            _context3.next = 5;
                                            break;
                                          }

                                          _context3.next = 3;
                                          return transporter.sendMail({
                                            from: from,
                                            to: to,
                                            subject: subject,
                                            text: text,
                                            html: text
                                          }).then(function (info) {
                                            if (info !== undefined) {
                                              // console.log("Message %s send", info.messageId);
                                              resolve(info.messageId);
                                            }
                                          })["catch"](function (err) {
                                            // console.log(err.toString())
                                            reject(err);
                                          });

                                        case 3:
                                          _context3.next = 6;
                                          break;

                                        case 5:
                                          // console.log(error.toString())
                                          reject(error);

                                        case 6:
                                        case "end":
                                          return _context3.stop();
                                      }
                                    }
                                  }, _callee3);
                                }));

                                return function (_x15, _x16) {
                                  return _ref3.apply(this, arguments);
                                };
                              }());
                            } catch (err) {
                              // console.log(err.toString())
                              reject(err);
                            }

                          case 2:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function (_x13, _x14) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function send(_x8, _x9, _x10, _x11, _x12) {
        return _send.apply(this, arguments);
      }

      return send;
    }()
  }]);

  return SendMail;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "responserService", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports["default"] = SendMail;