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

var _inversify = require("inversify");

var _TYPES = _interopRequireDefault(require("./../../../TYPES"));

var _axios = _interopRequireDefault(require("axios"));

var moment = _interopRequireWildcard(require("moment"));

require("moment/locale/es");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Afip = require('@afipsdk/afip.js');

var path = require('path');

var Controller = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_TYPES["default"].ResponseableDomain), _dec3 = (0, _inversify.inject)(_TYPES["default"].Updateable), _dec4 = (0, _inversify.inject)(_TYPES["default"].GeteableAll), _dec5 = (0, _inversify.inject)(_TYPES["default"].GeteableById), _dec6 = (0, _inversify.inject)(_TYPES["default"].Saveable), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function Controller() {
    (0, _classCallCheck2["default"])(this, Controller);
    (0, _initializerDefineProperty2["default"])(this, "responserService", _descriptor, this);
    (0, _initializerDefineProperty2["default"])(this, "updateableService", _descriptor2, this);
    (0, _initializerDefineProperty2["default"])(this, "geteableAllService", _descriptor3, this);
    (0, _initializerDefineProperty2["default"])(this, "geteableByIdService", _descriptor4, this);
    (0, _initializerDefineProperty2["default"])(this, "saveableService", _descriptor5, this);
  }

  (0, _createClass2["default"])(Controller, [{
    key: "validate",
    value: function () {
      var _validate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(data, paymentModel) {
        var _this = this;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
                    var electronicBilling, folder, config, afip;
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            electronicBilling = {
                              origin: data.origin,
                              comprobanteTipo: 6,
                              CUIT: data.CUIT,
                              totalPrice: data.price,
                              identificationType: 99,
                              identificationValue: 0
                            };
                            folder = path.join(__dirname, './../../../../');
                            config = {
                              CUIT: electronicBilling.CUIT,
                              production: false,
                              cert: '20356687567.crt',
                              key: '20356687567.key',
                              res_folder: folder,
                              ta_folder: folder
                            };
                            afip = new Afip(config);
                            _context3.next = 6;
                            return afip.ElectronicBilling.getLastVoucher(electronicBilling.origin, electronicBilling.comprobanteTipo).then( /*#__PURE__*/function () {
                              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(res) {
                                var date, FchVtoPago, FchServDesde, FchServHasta, data;
                                return _regenerator["default"].wrap(function _callee2$(_context2) {
                                  while (1) {
                                    switch (_context2.prev = _context2.next) {
                                      case 0:
                                        date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0];
                                        FchVtoPago = moment(new Date());
                                        FchServDesde = moment(new Date());
                                        FchServHasta = moment(new Date());
                                        data = {
                                          'CantReg': 1,
                                          // Cantidad de comprobantes a registrar
                                          'PtoVta': electronicBilling.origin,
                                          // Punto de venta
                                          'CbteTipo': electronicBilling.comprobanteTipo,
                                          // Tipo de comprobante (ver tipos disponibles) 
                                          'Concepto': 2,
                                          // Concepto del Comprobante: (1)Productos, (2)Servicios, (3)Productos y Servicios
                                          'DocTipo': electronicBilling.identificationType,
                                          // Tipo de documento del comprador (99 consumidor final, ver tipos disponibles)
                                          'DocNro': electronicBilling.identificationValue,
                                          // Número de documento del comprador (0 consumidor final)
                                          'CbteDesde': res + 1,
                                          // Número de comprobante o numero del primer comprobante en caso de ser mas de uno
                                          'CbteHasta': res + 1,
                                          // Número de comprobante o numero del último comprobante en caso de ser mas de uno
                                          'CbteFch': FchVtoPago.format('YYYYMMDD'),
                                          // (Opcional) Fecha del comprobante (yyyymmdd) o fecha actual si es nulo
                                          'ImpTotal': electronicBilling.totalPrice,
                                          // Importe total del comprobante
                                          'ImpTotConc': 0,
                                          // Importe neto no gravado
                                          'ImpNeto': _this.roundTo(electronicBilling.totalPrice * 100 / 121, 2),
                                          // Importe neto gravado
                                          'ImpOpEx': 0,
                                          // Importe exento de IVA
                                          'ImpIVA': _this.roundTo(electronicBilling.totalPrice * 21 / 121, 2),
                                          //Importe total de IVA
                                          'ImpTrib': 0,
                                          //Importe total de tributos
                                          'MonId': 'PES',
                                          //Tipo de moneda usada en el comprobante (ver tipos disponibles)('PES' para pesos argentinos) 
                                          'MonCotiz': 1,
                                          // Cotización de la moneda usada (1 para pesos argentinos)  
                                          'Iva': [// (Opcional) Alícuotas asociadas al comprobante
                                          {
                                            'Id': 5,
                                            // Id del tipo de IVA (5 para 21%)(ver tipos disponibles) 
                                            'BaseImp': _this.roundTo(electronicBilling.totalPrice * 100 / 121, 2),
                                            // Base imponible
                                            'Importe': _this.roundTo(electronicBilling.totalPrice * 21 / 121, 2) // Importe 

                                          }],
                                          'FchVtoPago': FchVtoPago.format('YYYYMMDD'),
                                          'FchServDesde': FchServDesde.format('YYYYMMDD'),
                                          'FchServHasta': FchServHasta.format('YYYYMMDD')
                                        };
                                        _context2.next = 7;
                                        return afip.ElectronicBilling.createNextVoucher(data).then( /*#__PURE__*/function () {
                                          var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(res) {
                                            return _regenerator["default"].wrap(function _callee$(_context) {
                                              while (1) {
                                                switch (_context.prev = _context.next) {
                                                  case 0:
                                                    console.log(res);
                                                    _this.responserService = {
                                                      result: res,
                                                      message: 'Successfully validate FE',
                                                      error: '',
                                                      status: 200
                                                    };
                                                    resolve(_this.responserService);

                                                  case 3:
                                                  case "end":
                                                    return _context.stop();
                                                }
                                              }
                                            }, _callee);
                                          }));

                                          return function (_x6) {
                                            return _ref3.apply(this, arguments);
                                          };
                                        }())["catch"](function (err) {
                                          _this.responserService = {
                                            result: res,
                                            message: 'Respuesta de Afip',
                                            status: 500,
                                            error: err.toString()
                                          };
                                          reject(_this.responserService);
                                        });

                                      case 7:
                                      case "end":
                                        return _context2.stop();
                                    }
                                  }
                                }, _callee2);
                              }));

                              return function (_x5) {
                                return _ref2.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              _this.responserService = {
                                result: 'res',
                                message: 'Respuesta de Afip',
                                status: 500,
                                error: err.toString()
                              };
                              reject(_this.responserService);
                            });

                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x3, _x4) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function validate(_x, _x2) {
        return _validate.apply(this, arguments);
      }

      return validate;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id, data, model, idUser) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(resolve, reject) {
                    return _regenerator["default"].wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return _this2.updateableService.update(id, data, model, model, idUser).then(function (res) {
                              if (res && res.result !== undefined) {
                                _this2.responserService = {
                                  result: res.result,
                                  message: res.message,
                                  error: res.error,
                                  status: res.status
                                };
                                resolve(_this2.responserService);
                              } else {
                                _this2.responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined',
                                  error: '',
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this2.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 2:
                            reject(_this2.responserService);

                          case 3:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x11, _x12) {
                    return _ref4.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function update(_x7, _x8, _x9, _x10) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(id, model) {
        var _this3 = this;

        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(resolve, reject) {
                    return _regenerator["default"].wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return _this3.geteableByIdService.getById(id, model, model).then(function (res) {
                              if (res && res.result !== undefined) {
                                _this3.responserService = {
                                  result: res,
                                  message: res.message,
                                  error: res.error,
                                  status: res.status
                                };
                                resolve(_this3.responserService);
                              } else {
                                _this3.responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined',
                                  error: '',
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this3.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 2:
                            reject(_this3.responserService);

                          case 3:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x15, _x16) {
                    return _ref5.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function getById(_x13, _x14) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }, {
    key: "save",
    value: function () {
      var _save = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(data, model, subscriptionModel, idUser) {
        var _this4 = this;

        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(resolve, reject) {
                    var subscription;
                    return _regenerator["default"].wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            subscription = {
                              start: Date.parse(new Date().toString()),
                              end: Date.parse(new Date().toString()) + 31104000000,
                              user: idUser
                            };

                            _this4.saveableService.save(subscription, subscriptionModel, subscriptionModel, idUser);

                            _context9.next = 4;
                            return _this4.saveableService.save(data, model, model, idUser).then(function (res) {
                              if (res && res.result !== undefined) {
                                _this4.responserService = {
                                  result: res.result,
                                  message: res.message,
                                  error: res.error,
                                  status: res.status
                                };
                                resolve(_this4.responserService);
                              } else {
                                _this4.responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined',
                                  error: '',
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this4.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 4:
                            reject(_this4.responserService);

                          case 5:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x21, _x22) {
                    return _ref6.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function save(_x17, _x18, _x19, _x20) {
        return _save.apply(this, arguments);
      }

      return save;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(model, project, match, sort, group, limit, skip) {
        var _this5 = this;

        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(resolve, reject) {
                    return _regenerator["default"].wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            _context13.next = 2;
                            return _this5.geteableAllService.getAll(model, project, match, sort, group, limit, skip).then( /*#__PURE__*/function () {
                              var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(result) {
                                return _regenerator["default"].wrap(function _callee12$(_context12) {
                                  while (1) {
                                    switch (_context12.prev = _context12.next) {
                                      case 0:
                                        if (!result) {
                                          _context12.next = 8;
                                          break;
                                        }

                                        if (!(limit !== 1)) {
                                          _context12.next = 4;
                                          break;
                                        }

                                        _context12.next = 4;
                                        return Promise.all(result.result.map( /*#__PURE__*/function () {
                                          var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(payment) {
                                            return _regenerator["default"].wrap(function _callee11$(_context11) {
                                              while (1) {
                                                switch (_context11.prev = _context11.next) {
                                                  case 0:
                                                    _context11.next = 2;
                                                    return _axios["default"].get('https://api.mercadopago.com/v1/payments/' + payment.idMeli, {
                                                      headers: {
                                                        'Content-Type': 'application/json',
                                                        'Authorization': 'Bearer TEST-220114329053901-022819-cc552419bc16f70b6c052a47dd7054e3-312985533'
                                                      }
                                                    }).then(function (paymentRes) {
                                                      payment.meli = paymentRes.data;
                                                    });

                                                  case 2:
                                                  case "end":
                                                    return _context11.stop();
                                                }
                                              }
                                            }, _callee11);
                                          }));

                                          return function (_x33) {
                                            return _ref9.apply(this, arguments);
                                          };
                                        }()));

                                      case 4:
                                        _this5.responserService = {
                                          result: result.result,
                                          message: result.message,
                                          error: result.error,
                                          status: result.status
                                        };
                                        resolve(_this5.responserService);
                                        _context12.next = 9;
                                        break;

                                      case 8:
                                        _this5.responserService = {
                                          result: 'Nop',
                                          message: 'No existe result',
                                          error: 'obj.getAll()',
                                          status: 500
                                        };

                                      case 9:
                                      case "end":
                                        return _context12.stop();
                                    }
                                  }
                                }, _callee12);
                              }));

                              return function (_x32) {
                                return _ref8.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              _this5.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 2:
                            reject(_this5.responserService);

                          case 3:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13);
                  }));

                  return function (_x30, _x31) {
                    return _ref7.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      function getAll(_x23, _x24, _x25, _x26, _x27, _x28, _x29) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "roundTo",
    value: function roundTo(value, places) {
      var power = Math.pow(10, places);
      return Math.round(value * power) / power;
    }
  }]);
  return Controller;
}(), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "responserService", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "updateableService", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "geteableAllService", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "geteableByIdService", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "saveableService", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports["default"] = Controller;