"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inversify = require("inversify");

var mercadopago = _interopRequireWildcard(require("mercadopago"));

var _TYPES = _interopRequireDefault(require("./../../../TYPES"));

var _inversify2 = _interopRequireDefault(require("./../../../inversify.config"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

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

var Controller = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_TYPES["default"].ConnectionableProvider), _dec3 = (0, _inversify.inject)(_TYPES["default"].Responseable), _dec4 = (0, _inversify.inject)(_TYPES["default"].Validable), _dec5 = (0, _inversify.named)(_TYPES["default"].Payment), _dec6 = (0, _inversify.inject)(_TYPES["default"].Schemable), _dec7 = (0, _inversify.named)(_TYPES["default"].Payment), _dec8 = (0, _inversify.inject)(_TYPES["default"].Schemable), _dec9 = (0, _inversify.named)(_TYPES["default"].Subscription), _dec10 = (0, _inversify.inject)(_TYPES["default"].PaymentServiceableDomain), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function Controller() {
    var _this = this;

    _classCallCheck(this, Controller);

    _defineProperty(this, "router", _inversify2["default"].get(_TYPES["default"].Router));

    _defineProperty(this, "path", '/payment');

    _defineProperty(this, "validationProvider", _inversify2["default"].get(_TYPES["default"].Validateable));

    _defineProperty(this, "authMid", _inversify2["default"].get(_TYPES["default"].Authenticateable));

    _initializerDefineProperty(this, "connectionProvider", _descriptor, this);

    _initializerDefineProperty(this, "responserService", _descriptor2, this);

    _initializerDefineProperty(this, "dto", _descriptor3, this);

    _initializerDefineProperty(this, "schema", _descriptor4, this);

    _initializerDefineProperty(this, "subscriptionSchema", _descriptor5, this);

    _initializerDefineProperty(this, "service", _descriptor6, this);

    _defineProperty(this, "validate", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response, next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // var model: Model<Document, {}> = await this.connectionProvider.getModel('inmo', this.transactionSchema.name, this.transactionSchema)
                // var transactionTypeModel: Model<Document, {}> = await this.connectionProvider.getModel('inmo', this.transactionTypeSchema.name, this.transactionTypeSchema)
                // var personModel: Model<Document, {}> = await this.connectionProvider.getModel('inmo', this.personSchema.name, this.personSchema)
                // var vatConditionModel: Model<Document, {}> = await this.connectionProvider.getModel('inmo', this.vatConditionSchema.name, this.vatConditionSchema)
                // var originModel: Model<Document, {}> = await this.connectionProvider.getModel('inmo', this.originSchema.name, this.originSchema)
                // var companyModel: Model<Document, {}> = await this.connectionProvider.getModel('inmo', this.companySchema.name, this.companySchema)
                // const id = request.user._id
                // const id = '5e9ea6595c942a45a4c3bdde'
                // const idTransaction: string = request.params.id
                // await this.service.validate()
                // 	.then((res: DomainResponseable) => {
                // 		if(res && res.result !== undefined) {
                // 			this.responserService.res = {
                // 				result: res.result,
                // 				message: res.message,
                // 				status: res.status,
                // 				error: res.error
                // 			}
                // 		} else {
                // 			this.responserService.res = { result: 'Nop', message: 'La capa superior contesto undefined', error: '', status: 500 }
                // 		}
                // 	})
                // 	.catch((err: any) => {
                // 		this.responserService.res = { result: err.result, message: err.message, error: err.error, status: err.status }
                // 	})
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(this, "process_payment", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request, response, next) {
        var model, subscriptionModel, id, payment_data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context3.sent;
                _context3.next = 5;
                return _this.connectionProvider.getModel(request.database, _this.subscriptionSchema.name, _this.subscriptionSchema);

              case 5:
                subscriptionModel = _context3.sent;
                id = request.user._id;
                mercadopago.configurations.setAccessToken('TEST-220114329053901-022819-cc552419bc16f70b6c052a47dd7054e3-312985533');
                payment_data = {
                  transaction_amount: Number(request.body.transactionAmount),
                  token: request.body.token,
                  description: request.body.description,
                  installments: Number(request.body.installments),
                  payment_method_id: request.body.paymentMethodId,
                  issuer_id: request.body.issuer,
                  payer: {
                    email: request.body.email,
                    identification: {
                      type: request.body.docType,
                      number: request.body.docNumber
                    }
                  }
                };
                _context3.next = 11;
                return mercadopago.payment.save(payment_data).then( /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resReturn) {
                    var data;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            data = resReturn.response;
                            data.idMeli = data.id;
                            delete data.id;
                            _context2.next = 5;
                            return _this.service.save(resReturn.response, model, subscriptionModel, id).then(function (res) {
                              if (res && res.result !== undefined) {
                                _this.responserService.res = {
                                  result: res.result,
                                  message: res.message,
                                  status: res.status,
                                  error: res.error
                                };
                              } else {
                                _this.responserService.res = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined',
                                  error: '',
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this.responserService.res = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 5:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x7) {
                    return _ref3.apply(this, arguments);
                  };
                }())["catch"](function (error) {
                  console.log(error); // this.responserService.res = { result: 'Nop', message: 'La capa superior contesto undefined', error: '', status: 500 }
                  // response.status(error.status).send(error);
                });

              case 11:
                if (_this.responserService && _this.responserService.res && _this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getSchema", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(request, response, next) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this.responserService.res = {
                  result: _this.schema.obj,
                  message: 'Consulta exitosa',
                  status: 200,
                  error: ''
                };

                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x8, _x9, _x10) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getObjById", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(request, response, next) {
        var model, id, idUser;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context6.sent;
                id = request.params.id;
                idUser = request.user._id;
                _context6.next = 7;
                return _this.service.getById(id, model).then( /*#__PURE__*/function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(res) {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            if (res && res.result !== undefined) {
                              _this.responserService.res = {
                                result: res.result,
                                message: res.message,
                                status: res.status,
                                error: res.error
                              };
                            } else {
                              _this.responserService.res = {
                                result: 'Nop',
                                message: 'La capa superior contesto undefined',
                                error: '',
                                status: 500
                              };
                            }

                          case 1:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x14) {
                    return _ref6.apply(this, arguments);
                  };
                }())["catch"](function (err) {
                  _this.responserService.res = {
                    result: err.result,
                    message: err.message,
                    error: err.error,
                    status: err.status
                  };
                });

              case 7:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x11, _x12, _x13) {
        return _ref5.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getAllObjs", /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(request, response, next) {
        var model, error, project, match, sort, group, limit, skip, recivedProject, recivedMatch, recivedSort, recivedGroup, recivedLimit, recivedSkip;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context7.sent;
                project = {};
                match = {};
                sort = {};
                group = {};
                limit = 0;
                skip = 0;
                recivedProject = request.query.project;
                recivedMatch = request.query.match;
                recivedSort = request.query.sort;
                recivedGroup = request.query.group;
                recivedLimit = request.query.limit;
                recivedSkip = request.query.skip;

                if (request.query && request.query !== {}) {
                  if (request.query.project) {
                    try {
                      project = JSON.parse(recivedProject);
                    } catch (err) {
                      error = err;
                    }
                  }

                  if (request.query.match) {
                    try {
                      match = JSON.parse(recivedMatch);
                    } catch (err) {
                      error = err;
                    }
                  }

                  if (request.query.sort) {
                    try {
                      sort = JSON.parse(recivedSort);
                    } catch (err) {
                      error = err;
                    }
                  }

                  if (request.query.group) {
                    try {
                      group = JSON.parse(recivedGroup);
                    } catch (err) {
                      error = err;
                    }
                  }

                  if (request.query.limit) {
                    try {
                      limit = parseInt(recivedLimit, 10);
                    } catch (err) {
                      error = err;
                    }
                  }

                  if (request.query.skip) {
                    try {
                      skip = parseInt(recivedSkip, 10);
                    } catch (err) {
                      error = err;
                    }
                  }
                }

                if (error) {
                  _context7.next = 21;
                  break;
                }

                _context7.next = 19;
                return _this.service.getAll(model, project, match, sort, group, limit, skip).then(function (res) {
                  if (res && res.result !== undefined) {
                    if (res.result) {
                      _this.responserService.res = {
                        result: res.result,
                        message: res.message,
                        status: res.status,
                        error: res.error
                      };
                    } else {
                      _this.responserService.res = {
                        result: [],
                        message: 'No existe el res.result',
                        status: 500,
                        error: 'obj.getAllObjs()'
                      };
                    }
                  } else {
                    _this.responserService.res = {
                      result: [],
                      message: 'No existe el res',
                      status: 500,
                      error: 'obj.getAllObjs()'
                    };
                  }
                })["catch"](function (err) {
                  _this.responserService.res = {
                    result: err.result,
                    message: err.message,
                    status: err.status,
                    error: err.error
                  };
                });

              case 19:
                _context7.next = 22;
                break;

              case 21:
                _this.responserService.res = {
                  result: [],
                  message: 'No se puede realizar la consulta',
                  status: 428,
                  error: 'Error en los parametros enviados'
                };

              case 22:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 23:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x15, _x16, _x17) {
        return _ref7.apply(this, arguments);
      };
    }());

    _defineProperty(this, "saveObj", /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(request, response, next) {
        var model, subscriptionModel, objData, id;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context8.sent;
                _context8.next = 5;
                return _this.connectionProvider.getModel(request.database, _this.subscriptionSchema.name, _this.subscriptionSchema);

              case 5:
                subscriptionModel = _context8.sent;
                objData = request.body;
                id = request.user._id;
                _context8.next = 10;
                return _this.service.save(objData, model, subscriptionModel, id).then(function (res) {
                  if (res && res.result !== undefined) {
                    _this.responserService.res = {
                      result: res.result,
                      message: res.message,
                      status: res.status,
                      error: res.error
                    };
                  } else {
                    _this.responserService.res = {
                      result: 'Nop',
                      message: 'La capa superior contesto undefined',
                      error: '',
                      status: 500
                    };
                  }
                })["catch"](function (err) {
                  _this.responserService.res = {
                    result: err.result,
                    message: err.message,
                    error: err.error,
                    status: err.status
                  };
                });

              case 10:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x18, _x19, _x20) {
        return _ref8.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateObj", /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(request, response, next) {
        var model, id, objData, idUser;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context10.sent;
                id = request.params.id;
                objData = request.body;
                idUser = request.user._id;
                _context10.next = 8;
                return _this.service.getById(id, model).then( /*#__PURE__*/function () {
                  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(res) {
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            if (!(res && res.result !== undefined)) {
                              _context9.next = 9;
                              break;
                            }

                            if (!(res.status === 200)) {
                              _context9.next = 6;
                              break;
                            }

                            _context9.next = 4;
                            return _this.service.update(id, objData, model, idUser).then(function (res) {
                              if (res && res.result !== undefined) {
                                _this.responserService.res = {
                                  result: res.result,
                                  message: res.message,
                                  status: res.status,
                                  error: res.error
                                };
                              } else {
                                _this.responserService.res = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined',
                                  error: '',
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this.responserService.res = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 4:
                            _context9.next = 7;
                            break;

                          case 6:
                            _this.responserService.res = {
                              result: res.result,
                              message: res.message,
                              status: res.status,
                              error: res.error
                            };

                          case 7:
                            _context9.next = 10;
                            break;

                          case 9:
                            _this.responserService.res = {
                              result: 'Nop',
                              message: 'La capa superior contesto undefined',
                              error: '',
                              status: 500
                            };

                          case 10:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x24) {
                    return _ref10.apply(this, arguments);
                  };
                }())["catch"](function (err) {
                  _this.responserService.res = {
                    result: err.result,
                    message: err.message,
                    error: err.error,
                    status: err.status
                  };
                });

              case 8:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 9:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function (_x21, _x22, _x23) {
        return _ref9.apply(this, arguments);
      };
    }());

    _defineProperty(this, "deleteObj", /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(request, response, next) {
        var model, id, idUser;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context12.sent;
                id = request.params.id;
                idUser = request.user._id;
                _context12.next = 7;
                return _this.service.getById(id, model).then( /*#__PURE__*/function () {
                  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(getObjById) {
                    var obj;
                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            if (!getObjById) {
                              _context11.next = 7;
                              break;
                            }

                            obj = getObjById.result;
                            obj.operationType = 'D';
                            _context11.next = 5;
                            return _this.service.update(id, obj, model, idUser).then(function (update) {
                              if (update) {
                                _this.responserService.res = {
                                  result: update.result,
                                  message: update.message,
                                  error: update.error,
                                  status: update.status
                                };
                              } else {
                                _this.responserService.res = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined',
                                  error: '',
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this.responserService.res = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 5:
                            _context11.next = 8;
                            break;

                          case 7:
                            _this.responserService.res = {
                              result: 'Nop',
                              message: 'La capa superior contesto undefined',
                              error: '',
                              status: 500
                            };

                          case 8:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x28) {
                    return _ref12.apply(this, arguments);
                  };
                }())["catch"](function (err) {
                  _this.responserService.res = {
                    result: err.result,
                    message: err.message,
                    error: err.error,
                    status: err.status
                  };
                });

              case 7:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 8:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      return function (_x25, _x26, _x27) {
        return _ref11.apply(this, arguments);
      };
    }());

    this.initializeRoutes(this.validationProvider);
  }

  _createClass(Controller, [{
    key: "initializeRoutes",
    value: function initializeRoutes(validationProvider) {
      this.router.get(this.path, [this.authMid.authenticate], this.getAllObjs).get("".concat(this.path, "/schema"), [this.authMid.authenticate], this.getSchema).post('/validate-afip/:id', [], this.validate).get("".concat(this.path, "/:id"), [this.authMid.authenticate], this.getObjById).post("".concat(this.path, "/process"), [this.authMid.authenticate], this.process_payment).post(this.path, [this.authMid.authenticate, validationProvider.validate(this.dto)], this.saveObj).put("".concat(this.path, "/:id"), [this.authMid.authenticate, validationProvider.validate(this.dto, true)], this.updateObj)["delete"]("".concat(this.path, "/:id"), [this.authMid.authenticate], this.deleteObj);
    }
  }]);

  return Controller;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "connectionProvider", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "responserService", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dto", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "schema", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "subscriptionSchema", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "service", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports["default"] = Controller;