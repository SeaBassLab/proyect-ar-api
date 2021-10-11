"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

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

var nodemailer = _interopRequireWildcard(require("nodemailer"));

var _inversify = require("inversify");

var _TYPES = _interopRequireDefault(require("./../../TYPES"));

var _dec, _dec2, _class, _class2, _descriptor;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SendMail = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_TYPES["default"].ResponseableDomain), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function SendMail() {
    (0, _classCallCheck2["default"])(this, SendMail);
    (0, _initializerDefineProperty2["default"])(this, "responserService", _descriptor, this);
  }

  (0, _createClass2["default"])(SendMail, [{
    key: "sendMail",
    value: function () {
      var _sendMail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(to, text, from, pass, subject) {
        var _this = this;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
                    var existError, errorMsj;
                    return _regenerator["default"].wrap(function _callee$(_context) {
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
      var _send = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(from, pass, to, subject, text) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
                    var transporter;
                    return _regenerator["default"].wrap(function _callee4$(_context4) {
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
                                var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(error, success) {
                                  return _regenerator["default"].wrap(function _callee3$(_context3) {
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
}(), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "responserService", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports["default"] = SendMail;