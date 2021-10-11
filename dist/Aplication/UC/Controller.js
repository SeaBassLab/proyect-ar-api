"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var moment = _interopRequireWildcard(require("moment"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);
  }

  _createClass(Controller, [{
    key: "makeEffectiveAgreement",
    value: function () {
      var _makeEffectiveAgreement = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(transactionTypeId, agreementId, agreementStatusId, originId, responserService, agreementService, agreementUpdateService, agreementStatusService, personService, propertyService, serviceService, transactionService, movementOfServiceSaveService, transactionTypeService, originService, serviceTypeService, personTypeService, userService, vatConditionService, movementOfServiceService, increaseBalance, agreementModel, agreementStatusModel, personModel, propertyModel, serviceModel, transactionModel, movementOfServiceModel, transactionTypeModel, originModel, serviceTypeModel, personTypeModel, userModel, vatConditionModel, controller, idUser) {
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(resolve, reject) {
                    var agreement, agreementStatus, agreementStatusReceived, transactionType, lessee, contractType, properties, startDate, endDate, duration, numberOftransaction, services, serviceLocation, transaction, transactionList, movementOfservice, movementsOfService, origin, number, letter, agreementType, serivicesIds, personType, adjustmentPercentage, adjustmentFrecuency, expirationDay, invoiceNumber, vatCondition, companyId, company, project, match, _match, _match2;

                    return regeneratorRuntime.wrap(function _callee15$(_context15) {
                      while (1) {
                        switch (_context15.prev = _context15.next) {
                          case 0:
                            duration = 1;
                            numberOftransaction = 0;
                            transactionList = [];
                            movementsOfService = [];
                            serivicesIds = [];

                            if (!originId) {
                              _context15.next = 40;
                              break;
                            }

                            project = {
                              _id: 1,
                              'company._id': 1,
                              number: 1
                            };
                            match = {
                              _id: {
                                $oid: originId
                              }
                            };
                            _context15.next = 10;
                            return originService.getAll(controller, originModel, project, match, {}, {}, 1, 0).then(function (res) {
                              if (res && res.result !== undefined && res.result.company !== undefined) {
                                origin = res.result;
                                companyId = res.result.company._id;
                              } else {
                                responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined 23 1',
                                  error: '',
                                  status: 500
                                };
                                reject(responserService);
                                return;
                              }
                            })["catch"](function (err) {
                              console.log(err);
                              responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                              reject(responserService);
                              return;
                            });

                          case 10:
                            if (!transactionTypeId) {
                              _context15.next = 35;
                              break;
                            }

                            _match = {
                              _id: {
                                $oid: transactionTypeId
                              }
                            };
                            _context15.next = 14;
                            return transactionTypeService.getAll(controller, transactionTypeModel, {}, _match, {}, {}, 1, 0).then(function (res) {
                              if (res && res.result !== undefined) {
                                transactionType = res.result; // TODO resolver esto (sea cual sea el tipo de transaccion, se coloca en autonumeracion= false, para que el metodo de cerrar contrato defina cuales van a ser los numeros de las siguientes facturas.)

                                // TODO resolver esto (sea cual sea el tipo de transaccion, se coloca en autonumeracion= false, para que el metodo de cerrar contrato defina cuales van a ser los numeros de las siguientes facturas.)
                                transactionType.automaticNumbering = false;
                              } else {
                                responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined 2',
                                  error: '',
                                  status: 500
                                };
                                reject(responserService);
                                return;
                              }
                            })["catch"](function (err) {
                              responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                              reject(responserService);
                              return;
                            });

                          case 14:
                            _context15.t0 = transactionType.accountingSeat;
                            _context15.next = _context15.t0 === 'credit' ? 17 : _context15.t0 === 'debit' ? 27 : _context15.t0 === 'nothing' ? 28 : 30;
                            break;

                          case 17:
                            if (!(agreementId && agreementStatusId)) {
                              _context15.next = 23;
                              break;
                            }

                            _match2 = {
                              _id: {
                                $oid: agreementId
                              }
                            };
                            _context15.next = 21;
                            return agreementService.getAll(controller, agreementModel, {}, _match2, {}, {}, 1, 0).then( /*#__PURE__*/function () {
                              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(res) {
                                var _match3, updateAgreement;

                                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                                  while (1) {
                                    switch (_context14.prev = _context14.next) {
                                      case 0:
                                        if (!(res && res.result !== undefined)) {
                                          _context14.next = 47;
                                          break;
                                        }

                                        agreement = res.result;

                                        if (!(agreement.services.length <= 0)) {
                                          _context14.next = 6;
                                          break;
                                        }

                                        responserService = {
                                          result: 'Nop',
                                          message: 'Sin servicios',
                                          error: 'El contrato recibido no posee servicios',
                                          status: 428
                                        };
                                        reject(responserService);
                                        return _context14.abrupt("return");

                                      case 6:
                                        if (!agreement.agreementStatus) {
                                          _context14.next = 12;
                                          break;
                                        }

                                        _match3 = {
                                          _id: {
                                            $oid: agreement.agreementStatus.toString()
                                          }
                                        };
                                        _context14.next = 10;
                                        return agreementStatusService.getAll(controller, agreementStatusModel, {}, _match3, {}, {}, 1, 0).then(function (res) {
                                          if (res && res.result !== undefined) {
                                            agreementStatus = res.result;
                                          } else {
                                            responserService = {
                                              result: 'Nop',
                                              message: 'La capa superior contesto undefined 3',
                                              error: '',
                                              status: 500
                                            };
                                            reject(responserService);
                                            return;
                                          }
                                        })["catch"](function (err) {
                                          responserService = {
                                            result: err.result,
                                            message: err.message,
                                            error: err.error,
                                            status: err.status
                                          };
                                          reject(responserService);
                                          return;
                                        });

                                      case 10:
                                        _context14.next = 15;
                                        break;

                                      case 12:
                                        responserService = {
                                          result: 'Nop',
                                          message: 'El contrato encontrado no posee un estado de contrato existente',
                                          error: 'Se deben ingresar un id de un contrato con un estado de contrato existente',
                                          status: 428
                                        };
                                        reject(responserService);
                                        return _context14.abrupt("return");

                                      case 15:
                                        _match2 = {
                                          _id: {
                                            $oid: agreementStatusId
                                          }
                                        };
                                        _context14.next = 18;
                                        return agreementStatusService.getAll(controller, agreementStatusModel, {}, _match2, {}, {}, 1, 0).then(function (res) {
                                          if (res && res.result !== undefined) {
                                            agreementStatusReceived = res.result;
                                          } else {
                                            responserService = {
                                              result: 'Nop',
                                              message: 'La capa superior contesto undefined 4',
                                              error: '',
                                              status: 500
                                            };
                                            reject(responserService);
                                            return;
                                          }
                                        })["catch"](function (err) {
                                          responserService = {
                                            result: err.result,
                                            message: err.message,
                                            error: err.error,
                                            status: err.status
                                          };
                                          reject(responserService);
                                          return;
                                        });

                                      case 18:
                                        if (!agreementStatusReceived) {
                                          _context14.next = 42;
                                          break;
                                        }

                                        if (!agreementStatusReceived.generateInvoices) {
                                          _context14.next = 37;
                                          break;
                                        }

                                        if (!agreementStatus) {
                                          _context14.next = 32;
                                          break;
                                        }

                                        if (agreementStatus.generateInvoices) {
                                          _context14.next = 27;
                                          break;
                                        }

                                        updateAgreement = {
                                          agreementStatus: agreementStatusReceived
                                        };
                                        _context14.next = 25;
                                        return agreementUpdateService.update(agreement._id, updateAgreement, agreementModel, controller, idUser, agreementStatusModel).then( /*#__PURE__*/function () {
                                          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(res) {
                                            var _match4, _match5, servicesHidrate, agreementServices, totalTransaction, dates, endDates, year, month, i, myDate, starDateTransaction, lastDayOfMonth, endDateTransaction, _project, sort, priceAux, period, adjust, movementList, movementOfServiceListList, asd;

                                            return regeneratorRuntime.wrap(function _callee13$(_context13) {
                                              while (1) {
                                                switch (_context13.prev = _context13.next) {
                                                  case 0:
                                                    if (!(res && res.result !== undefined)) {
                                                      _context13.next = 81;
                                                      break;
                                                    }

                                                    _match4 = {
                                                      _id: {
                                                        $oid: res.result._id
                                                      }
                                                    };
                                                    _context13.next = 4;
                                                    return agreementService.getAll(controller, agreementModel, {}, _match4, {}, {}, 1, 0).then(function (res) {
                                                      if (res && res.result !== undefined) {
                                                        agreement = res.result;
                                                      } else {
                                                        responserService = {
                                                          result: 'Nop',
                                                          message: 'La capa superior contesto undefined 5',
                                                          error: '',
                                                          status: 500
                                                        };
                                                        reject(responserService);
                                                        return;
                                                      }
                                                    })["catch"](function (err) {
                                                      responserService = {
                                                        result: err.result,
                                                        message: err.message,
                                                        error: err.error,
                                                        status: err.status
                                                      };
                                                      reject(responserService);
                                                      return;
                                                    });

                                                  case 4:
                                                    if (!(agreement.lessee && agreement.adjustmentPercentage && agreement.adjustmentFrecuency && agreement.expirationDay && agreement.invoiceNumber && agreement.property && agreement.startDate && agreement.endDate && agreement.services)) {
                                                      _context13.next = 76;
                                                      break;
                                                    }

                                                    _match5 = {
                                                      _id: {
                                                        $oid: agreement.lessee.toString()
                                                      }
                                                    };
                                                    _context13.next = 8;
                                                    return personService.getAll(controller, personModel, {}, _match5, {}, {}, 1, 0).then( /*#__PURE__*/function () {
                                                      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(res) {
                                                        var _match6;

                                                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                                          while (1) {
                                                            switch (_context2.prev = _context2.next) {
                                                              case 0:
                                                                if (!(res && res.result !== undefined)) {
                                                                  _context2.next = 7;
                                                                  break;
                                                                }

                                                                lessee = res.result;
                                                                _match6 = {
                                                                  _id: {
                                                                    $oid: lessee.vatCondition.toString()
                                                                  }
                                                                };
                                                                _context2.next = 5;
                                                                return vatConditionService.getAll(controller, vatConditionModel, {}, _match6, {}, {}, 1, 0).then( /*#__PURE__*/function () {
                                                                  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                                                                    return regeneratorRuntime.wrap(function _callee$(_context) {
                                                                      while (1) {
                                                                        switch (_context.prev = _context.next) {
                                                                          case 0:
                                                                            if (!(res && res.result !== undefined)) {
                                                                              _context.next = 5;
                                                                              break;
                                                                            }

                                                                            vatCondition = res.result;
                                                                            letter = vatCondition.letter;
                                                                            _context.next = 8;
                                                                            break;

                                                                          case 5:
                                                                            responserService = {
                                                                              result: 'Nop',
                                                                              message: 'La capa superior contesto undefined 6',
                                                                              error: '',
                                                                              status: 500
                                                                            };
                                                                            reject(responserService);
                                                                            return _context.abrupt("return");

                                                                          case 8:
                                                                          case "end":
                                                                            return _context.stop();
                                                                        }
                                                                      }
                                                                    }, _callee);
                                                                  }));

                                                                  return function (_x42) {
                                                                    return _ref5.apply(this, arguments);
                                                                  };
                                                                }())["catch"](function (err) {
                                                                  responserService = {
                                                                    result: err.result,
                                                                    message: err.message,
                                                                    error: err.error,
                                                                    status: err.status
                                                                  };
                                                                  reject(responserService);
                                                                  return;
                                                                });

                                                              case 5:
                                                                _context2.next = 10;
                                                                break;

                                                              case 7:
                                                                responserService = {
                                                                  result: 'Nop',
                                                                  message: 'La capa superior contesto undefined 7',
                                                                  error: '',
                                                                  status: 500
                                                                };
                                                                reject(responserService);
                                                                return _context2.abrupt("return");

                                                              case 10:
                                                              case "end":
                                                                return _context2.stop();
                                                            }
                                                          }
                                                        }, _callee2);
                                                      }));

                                                      return function (_x41) {
                                                        return _ref4.apply(this, arguments);
                                                      };
                                                    }())["catch"](function (err) {
                                                      responserService = {
                                                        result: err.result,
                                                        message: err.message,
                                                        error: err.error,
                                                        status: err.status
                                                      };
                                                      reject(responserService);
                                                      return;
                                                    });

                                                  case 8:
                                                    adjustmentPercentage = agreement.adjustmentPercentage;
                                                    adjustmentFrecuency = agreement.adjustmentFrecuency;
                                                    expirationDay = agreement.expirationDay;
                                                    invoiceNumber = agreement.invoiceNumber;

                                                    if (!(agreement.property.length > 0)) {
                                                      _context13.next = 18;
                                                      break;
                                                    }

                                                    _context13.next = 15;
                                                    return Promise.all(agreement.property.map( /*#__PURE__*/function () {
                                                      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(property) {
                                                        var match, propertyAux;
                                                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                                          while (1) {
                                                            switch (_context3.prev = _context3.next) {
                                                              case 0:
                                                                match = {
                                                                  _id: {
                                                                    $oid: property.property.toString()
                                                                  }
                                                                };
                                                                _context3.next = 3;
                                                                return propertyService.getAll(controller, propertyModel, {}, match, {}, {}, 1, 0).then(function (res) {
                                                                  if (res && res.result !== undefined) {
                                                                    if (res.status === 200) {
                                                                      propertyAux = res.result;
                                                                    }
                                                                  } else {
                                                                    responserService = {
                                                                      result: 'Nop',
                                                                      message: 'La capa superior contesto undefined 8',
                                                                      error: '',
                                                                      status: 500
                                                                    };
                                                                    reject(responserService);
                                                                    return;
                                                                  }
                                                                })["catch"](function (err) {
                                                                  responserService = {
                                                                    result: err.result,
                                                                    message: err.message,
                                                                    error: err.error,
                                                                    status: err.status
                                                                  };
                                                                  reject(responserService);
                                                                  return;
                                                                });

                                                              case 3:
                                                                return _context3.abrupt("return", propertyAux);

                                                              case 4:
                                                              case "end":
                                                                return _context3.stop();
                                                            }
                                                          }
                                                        }, _callee3);
                                                      }));

                                                      return function (_x43) {
                                                        return _ref6.apply(this, arguments);
                                                      };
                                                    }()));

                                                  case 15:
                                                    properties = _context13.sent;
                                                    _context13.next = 21;
                                                    break;

                                                  case 18:
                                                    responserService = {
                                                      result: 'Nop',
                                                      message: 'Contrato incompleto',
                                                      error: 'El contrato no posee propiedades',
                                                      status: 428
                                                    };
                                                    reject(responserService);
                                                    return _context13.abrupt("return");

                                                  case 21:
                                                    startDate = agreement.startDate;
                                                    endDate = agreement.endDate;

                                                    if (!(agreement && agreement.services && agreement.services.length > 0)) {
                                                      _context13.next = 27;
                                                      break;
                                                    }

                                                    agreement.services.map(function (service) {
                                                      serivicesIds.push(service.service.toString());
                                                    });
                                                    _context13.next = 30;
                                                    break;

                                                  case 27:
                                                    responserService = {
                                                      result: 'Nop',
                                                      message: 'Contrato incompleto',
                                                      error: 'El contrato no posee servicios',
                                                      status: 428
                                                    };
                                                    reject(responserService);
                                                    return _context13.abrupt("return");

                                                  case 30:
                                                    _context13.next = 32;
                                                    return Promise.all(serivicesIds.map( /*#__PURE__*/function () {
                                                      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
                                                        var project, match, serviceHidrate;
                                                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                                          while (1) {
                                                            switch (_context4.prev = _context4.next) {
                                                              case 0:
                                                                project = {
                                                                  _id: 1,
                                                                  name: 1,
                                                                  'serviceType._id': 1,
                                                                  'serviceType.invoicing': 1
                                                                };
                                                                match = {
                                                                  _id: {
                                                                    $oid: id
                                                                  }
                                                                };
                                                                _context4.next = 4;
                                                                return serviceService.getAll(controller, serviceModel, project, match, {}, {}, 1, 0).then(function (res) {
                                                                  if (res && res.result !== undefined) {
                                                                    if (res.status === 200) {
                                                                      serviceHidrate = res.result;

                                                                      if (res.result.serviceType.invoicing) {
                                                                        serviceLocation = {
                                                                          service: res.result,
                                                                          price: 0
                                                                        };
                                                                      }
                                                                    }
                                                                  } else {
                                                                    responserService = {
                                                                      result: 'Nop',
                                                                      message: 'La capa superior contesto undefined 9',
                                                                      error: '',
                                                                      status: 500
                                                                    };
                                                                    reject(responserService);
                                                                    return;
                                                                  }
                                                                })["catch"](function (err) {
                                                                  responserService = {
                                                                    result: err.result,
                                                                    message: err.message,
                                                                    error: err.error,
                                                                    status: err.status
                                                                  };
                                                                  reject(responserService);
                                                                  return;
                                                                });

                                                              case 4:
                                                                return _context4.abrupt("return", serviceHidrate);

                                                              case 5:
                                                              case "end":
                                                                return _context4.stop();
                                                            }
                                                          }
                                                        }, _callee4);
                                                      }));

                                                      return function (_x44) {
                                                        return _ref7.apply(this, arguments);
                                                      };
                                                    }()));

                                                  case 32:
                                                    servicesHidrate = _context13.sent;
                                                    _context13.next = 35;
                                                    return Promise.all(servicesHidrate.map( /*#__PURE__*/function () {
                                                      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(serviceHidrate) {
                                                        var serviceReturn;
                                                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                                          while (1) {
                                                            switch (_context5.prev = _context5.next) {
                                                              case 0:
                                                                serviceReturn = {
                                                                  service: null,
                                                                  price: 0
                                                                };
                                                                agreement.services.map(function (service) {
                                                                  if (serviceHidrate._id.toString() === service.service.toString()) {
                                                                    serviceReturn = {
                                                                      service: serviceHidrate,
                                                                      price: service.price
                                                                    };
                                                                  }
                                                                });
                                                                return _context5.abrupt("return", serviceReturn);

                                                              case 3:
                                                              case "end":
                                                                return _context5.stop();
                                                            }
                                                          }
                                                        }, _callee5);
                                                      }));

                                                      return function (_x45) {
                                                        return _ref8.apply(this, arguments);
                                                      };
                                                    }()));

                                                  case 35:
                                                    agreementServices = _context13.sent;
                                                    agreement.services = agreementServices;
                                                    totalTransaction = 0;
                                                    dates = [];
                                                    endDates = [];

                                                    if (!(adjustmentFrecuency > invoiceNumber)) {
                                                      _context13.next = 44;
                                                      break;
                                                    }

                                                    responserService = {
                                                      result: 'Nop',
                                                      message: 'La frecuencia de ajuste es mayor a la cantidad de facturas',
                                                      error: 'La frecuencia de ajuste debe ser menor o igual a la cantidad de facturas',
                                                      status: 428
                                                    };
                                                    reject(responserService);
                                                    return _context13.abrupt("return");

                                                  case 44:
                                                    year = moment(startDate).year();
                                                    month = moment(startDate).month() - 1;

                                                    while (totalTransaction < invoiceNumber) {
                                                      for (i = 0; i < adjustmentFrecuency; i++) {
                                                        if (totalTransaction < invoiceNumber) {
                                                          month = month + 1;
                                                          myDate = moment(year.toString() + '-' + '1' + '-' + expirationDay.toString() + '-' + 20 + ':' + 59 + ':' + 59, 'YYYY-MM-DDTHH:mm:ssZ', false).set('month', month).format();
                                                          starDateTransaction = moment(year.toString() + '-' + '1' + '-' + '1' + '-' + 20 + ':' + 59 + ':' + 59, 'YYYY-MM-DDTHH:mm:ssZ', false).set('month', month).format();
                                                          lastDayOfMonth = moment(year.toString() + '-' + '1' + '-' + '1' + '-' + 20 + ':' + 59 + ':' + 59, 'YYYY-MM-DDTHH:mm:ssZ', false).set('month', month).endOf('month').date();
                                                          endDateTransaction = moment(year.toString() + '-' + '1' + '-' + lastDayOfMonth.toString() + '-' + 20 + ':' + 59 + ':' + 59, 'YYYY-MM-DDTHH:mm:ssZ', false).set('month', month).format();
                                                          endDates.push(new Date(myDate));
                                                          dates.push({
                                                            expirationDate: new Date(myDate),
                                                            date: new Date(starDateTransaction),
                                                            starDate: new Date(starDateTransaction),
                                                            endDate: new Date(endDateTransaction)
                                                          });
                                                          totalTransaction = totalTransaction + 1;

                                                          if (month === 11) {
                                                            month = -1;
                                                            year = year + 1;
                                                          }
                                                        }
                                                      }
                                                    }

                                                    company = origin.company;
                                                    _project = {
                                                      _id: 1,
                                                      company: 1,
                                                      origin: 1,
                                                      letter: 1,
                                                      number: 1,
                                                      operationType: 1
                                                    };
                                                    _match5 = {
                                                      company: {
                                                        $oid: company._id
                                                      },
                                                      origin: origin.number,
                                                      letter: letter,
                                                      operationType: {
                                                        $ne: 'D'
                                                      }
                                                    };
                                                    sort = {
                                                      number: -1
                                                    };
                                                    _context13.next = 53;
                                                    return transactionService.getAll(controller, transactionModel, _project, _match5, sort, {}, 1, 0).then(function (res) {
                                                      if (res && res.result !== undefined) {
                                                        if (res.result.number) {
                                                          number = res.result.number;
                                                        } else {
                                                          number = 0;
                                                        }
                                                      } else {
                                                        responserService = {
                                                          result: 'Nop',
                                                          message: 'La capa superior contesto undefined 10',
                                                          error: '',
                                                          status: 500
                                                        };
                                                        reject(responserService);
                                                      }
                                                    })["catch"](function (err) {
                                                      responserService = {
                                                        result: err.result,
                                                        message: err.message,
                                                        error: err.error,
                                                        status: err.status
                                                      };
                                                      reject(responserService);
                                                    });

                                                  case 53:
                                                    priceAux = 0;
                                                    agreement.services.map(function (service) {
                                                      priceAux = priceAux + service.price;
                                                    });
                                                    period = agreement.adjustmentFrecuency;
                                                    adjust = 1 + agreement.adjustmentPercentage / 100;
                                                    dates.map(function (dateAux) {
                                                      number = number + 1;

                                                      if (period < 1) {
                                                        period = agreement.adjustmentFrecuency;
                                                        priceAux = priceAux * adjust;
                                                      }

                                                      period = period - 1;
                                                      transactionList.push({
                                                        _id: null,
                                                        person: lessee,
                                                        agreement: agreement,
                                                        date: dateAux.date,
                                                        startDate: dateAux.starDate,
                                                        endDate: dateAux.endDate,
                                                        expirationDate: dateAux.expirationDate,
                                                        totalPrice: priceAux,
                                                        balance: priceAux,
                                                        transactionType: transactionType,
                                                        origin: origin.number,
                                                        number: number,
                                                        letter: letter,
                                                        CAE: '',
                                                        expirationCAE: null,
                                                        operationType: 'C',
                                                        company: origin.company
                                                      });
                                                    });
                                                    _context13.next = 60;
                                                    return Promise.all(transactionList.map( /*#__PURE__*/function () {
                                                      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(transaction) {
                                                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                                          while (1) {
                                                            switch (_context6.prev = _context6.next) {
                                                              case 0:
                                                                _context6.next = 2;
                                                                return transactionService.save(transaction, controller, transactionModel, idUser).then(function (res) {
                                                                  if (res && res.result !== undefined) {
                                                                    transaction._id = res.result._id;
                                                                  } else {
                                                                    responserService = {
                                                                      result: 'Nop',
                                                                      message: 'La capa superior contesto undefined 11',
                                                                      error: '',
                                                                      status: 500
                                                                    };
                                                                    reject(responserService);
                                                                    return;
                                                                  }
                                                                })["catch"](function (err) {
                                                                  responserService = {
                                                                    result: err.result,
                                                                    message: err.message,
                                                                    error: err.error,
                                                                    status: err.status
                                                                  };
                                                                  reject(responserService);
                                                                  return;
                                                                });

                                                              case 2:
                                                              case "end":
                                                                return _context6.stop();
                                                            }
                                                          }
                                                        }, _callee6);
                                                      }));

                                                      return function (_x46) {
                                                        return _ref9.apply(this, arguments);
                                                      };
                                                    }()));

                                                  case 60:
                                                    _context13.next = 62;
                                                    return Promise.all(transactionList.map( /*#__PURE__*/function () {
                                                      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(transaction) {
                                                        var movementOfserviceListb;
                                                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                                                          while (1) {
                                                            switch (_context8.prev = _context8.next) {
                                                              case 0:
                                                                _context8.next = 2;
                                                                return Promise.all(agreement.services.map( /*#__PURE__*/function () {
                                                                  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(service) {
                                                                    var movementOfServiceReturn;
                                                                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                                                                      while (1) {
                                                                        switch (_context7.prev = _context7.next) {
                                                                          case 0:
                                                                            if (!(service.service && service.price !== undefined && service.price >= 0)) {
                                                                              _context7.next = 7;
                                                                              break;
                                                                            }

                                                                            movementOfservice = {
                                                                              _id: null,
                                                                              transaction: transaction._id,
                                                                              startDate: transaction.startDate,
                                                                              endDate: transaction.endDate,
                                                                              expirationDate: transaction.expirationDate,
                                                                              service: service.service,
                                                                              price: service.price,
                                                                              balanceCanceled: 0,
                                                                              refundable: false,
                                                                              operationType: 'C'
                                                                            };
                                                                            _context7.next = 4;
                                                                            return movementOfServiceSaveService.save(movementOfservice, controller, movementOfServiceModel, idUser, transactionModel, transaction._id, transactionService, controller).then(function (res) {
                                                                              if (res && res.result !== undefined) {
                                                                                movementOfServiceReturn = res.result._id;
                                                                              } else {
                                                                                responserService = {
                                                                                  result: 'Nop',
                                                                                  message: 'La capa superior contesto undefined 12',
                                                                                  error: '',
                                                                                  status: 500
                                                                                };
                                                                                reject(responserService);
                                                                                return;
                                                                              }
                                                                            })["catch"](function (err) {
                                                                              responserService = {
                                                                                result: err.result,
                                                                                message: err.message,
                                                                                error: err.error,
                                                                                status: err.status
                                                                              };
                                                                              reject(responserService);
                                                                              return;
                                                                            });

                                                                          case 4:
                                                                            return _context7.abrupt("return", movementOfServiceReturn);

                                                                          case 7:
                                                                            responserService = {
                                                                              result: 'Nop',
                                                                              message: 'Contrato incompleto',
                                                                              error: 'Faltan los servicios',
                                                                              status: 428
                                                                            };
                                                                            reject(responserService);
                                                                            return _context7.abrupt("return");

                                                                          case 10:
                                                                          case "end":
                                                                            return _context7.stop();
                                                                        }
                                                                      }
                                                                    }, _callee7);
                                                                  }));

                                                                  return function (_x48) {
                                                                    return _ref11.apply(this, arguments);
                                                                  };
                                                                }()));

                                                              case 2:
                                                                movementOfserviceListb = _context8.sent;
                                                                return _context8.abrupt("return", movementOfserviceListb);

                                                              case 4:
                                                              case "end":
                                                                return _context8.stop();
                                                            }
                                                          }
                                                        }, _callee8);
                                                      }));

                                                      return function (_x47) {
                                                        return _ref10.apply(this, arguments);
                                                      };
                                                    }()));

                                                  case 62:
                                                    movementList = _context13.sent;
                                                    _context13.next = 65;
                                                    return Promise.all(movementList.map( /*#__PURE__*/function () {
                                                      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(movementListAux) {
                                                        var movementOfServiceListGet;
                                                        return regeneratorRuntime.wrap(function _callee10$(_context10) {
                                                          while (1) {
                                                            switch (_context10.prev = _context10.next) {
                                                              case 0:
                                                                _context10.next = 2;
                                                                return Promise.all(movementListAux.map( /*#__PURE__*/function () {
                                                                  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(movementOfServiceId) {
                                                                    var movementOfService, match;
                                                                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                                                                      while (1) {
                                                                        switch (_context9.prev = _context9.next) {
                                                                          case 0:
                                                                            match = {
                                                                              _id: {
                                                                                $oid: movementOfServiceId
                                                                              }
                                                                            };
                                                                            _context9.next = 3;
                                                                            return movementOfServiceService.getAll(controller, movementOfServiceModel, {}, match, {}, {}, 1, 0).then(function (res) {
                                                                              if (res && res.result !== undefined) {
                                                                                if (res.status === 200) {
                                                                                  movementOfService = res.result;
                                                                                }
                                                                              } else {
                                                                                responserService = {
                                                                                  result: 'Nop',
                                                                                  message: 'La capa superior contesto undefined 8',
                                                                                  error: '',
                                                                                  status: 500
                                                                                };
                                                                                reject(responserService);
                                                                                return;
                                                                              }
                                                                            })["catch"](function (err) {
                                                                              responserService = {
                                                                                result: err.result,
                                                                                message: err.message,
                                                                                error: err.error,
                                                                                status: err.status
                                                                              };
                                                                              reject(responserService);
                                                                              return;
                                                                            });

                                                                          case 3:
                                                                            return _context9.abrupt("return", movementOfService);

                                                                          case 4:
                                                                          case "end":
                                                                            return _context9.stop();
                                                                        }
                                                                      }
                                                                    }, _callee9);
                                                                  }));

                                                                  return function (_x50) {
                                                                    return _ref13.apply(this, arguments);
                                                                  };
                                                                }()));

                                                              case 2:
                                                                movementOfServiceListGet = _context10.sent;
                                                                return _context10.abrupt("return", movementOfServiceListGet);

                                                              case 4:
                                                              case "end":
                                                                return _context10.stop();
                                                            }
                                                          }
                                                        }, _callee10);
                                                      }));

                                                      return function (_x49) {
                                                        return _ref12.apply(this, arguments);
                                                      };
                                                    }()));

                                                  case 65:
                                                    movementOfServiceListList = _context13.sent;
                                                    period = agreement.adjustmentFrecuency;
                                                    adjust = 1;
                                                    movementOfServiceListList.map(function (movementOfServiceList) {
                                                      if (period < 1) {
                                                        period = agreement.adjustmentFrecuency;
                                                        adjust = adjust * (1 + agreement.adjustmentPercentage / 100);
                                                      }

                                                      period = period - 1;
                                                      movementOfServiceList.map(function (movementOfService) {
                                                        movementOfService.price = movementOfService.price * adjust;
                                                      });
                                                    });
                                                    _context13.next = 71;
                                                    return Promise.all(movementOfServiceListList.map( /*#__PURE__*/function () {
                                                      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(movementOfServiceList) {
                                                        var asd;
                                                        return regeneratorRuntime.wrap(function _callee12$(_context12) {
                                                          while (1) {
                                                            switch (_context12.prev = _context12.next) {
                                                              case 0:
                                                                _context12.next = 2;
                                                                return Promise.all(movementOfServiceList.map( /*#__PURE__*/function () {
                                                                  var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(movementOfService) {
                                                                    var asd, id;
                                                                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                                                                      while (1) {
                                                                        switch (_context11.prev = _context11.next) {
                                                                          case 0:
                                                                            id = movementOfService._id;
                                                                            delete movementOfService._id;
                                                                            _context11.next = 4;
                                                                            return movementOfServiceService.update(id, movementOfService, movementOfServiceModel, controller, idUser).then(function (res) {
                                                                              if (res && res.result !== undefined) {
                                                                                if (res.status === 200) {
                                                                                  asd = res.result._id;
                                                                                }
                                                                              } else {
                                                                                responserService = {
                                                                                  result: 'Nop',
                                                                                  message: 'La capa superior contesto undefined 8',
                                                                                  error: '',
                                                                                  status: 500
                                                                                };
                                                                                reject(responserService);
                                                                                return;
                                                                              }
                                                                            })["catch"](function (err) {
                                                                              responserService = {
                                                                                result: err.result,
                                                                                message: err.message,
                                                                                error: err.error,
                                                                                status: err.status
                                                                              };
                                                                              reject(responserService);
                                                                              return;
                                                                            });

                                                                          case 4:
                                                                            return _context11.abrupt("return", asd);

                                                                          case 5:
                                                                          case "end":
                                                                            return _context11.stop();
                                                                        }
                                                                      }
                                                                    }, _callee11);
                                                                  }));

                                                                  return function (_x52) {
                                                                    return _ref15.apply(this, arguments);
                                                                  };
                                                                }()));

                                                              case 2:
                                                                asd = _context12.sent;
                                                                return _context12.abrupt("return", asd);

                                                              case 4:
                                                              case "end":
                                                                return _context12.stop();
                                                            }
                                                          }
                                                        }, _callee12);
                                                      }));

                                                      return function (_x51) {
                                                        return _ref14.apply(this, arguments);
                                                      };
                                                    }()));

                                                  case 71:
                                                    asd = _context13.sent;
                                                    responserService = {
                                                      result: '',
                                                      message: 'Generación exitosa de contratos',
                                                      error: '',
                                                      status: 200
                                                    };
                                                    resolve(responserService);
                                                    _context13.next = 79;
                                                    break;

                                                  case 76:
                                                    responserService = {
                                                      result: 'Nop',
                                                      message: 'Contrato incompleto',
                                                      error: 'Se deben completar los campos: inquilino, ajuste de precio de contrato, frecuencia de ajuste, dia de vencimiento de factura, numero de facturas, tipo de contrato, propiedades, fecha de inicio, fecha de fin, o los servicios.',
                                                      status: 428
                                                    };
                                                    reject(responserService);
                                                    return _context13.abrupt("return");

                                                  case 79:
                                                    _context13.next = 84;
                                                    break;

                                                  case 81:
                                                    responserService = {
                                                      result: 'Nop',
                                                      message: 'La capa superior contesto undefined 13',
                                                      error: '',
                                                      status: 500
                                                    };
                                                    reject(responserService);
                                                    return _context13.abrupt("return");

                                                  case 84:
                                                  case "end":
                                                    return _context13.stop();
                                                }
                                              }
                                            }, _callee13);
                                          }));

                                          return function (_x40) {
                                            return _ref3.apply(this, arguments);
                                          };
                                        }())["catch"](function (err) {
                                          responserService = {
                                            result: err.result,
                                            message: err.message,
                                            error: err.error,
                                            status: err.status
                                          };
                                          reject(responserService);
                                          return;
                                        });

                                      case 25:
                                        _context14.next = 30;
                                        break;

                                      case 27:
                                        responserService = {
                                          result: 'Nop',
                                          message: 'No admite facturacion',
                                          error: 'El estado de contrato del contrato recibido, no admite facturacion, porque ya fue generada.',
                                          status: 428
                                        };
                                        reject(responserService);
                                        return _context14.abrupt("return");

                                      case 30:
                                        _context14.next = 35;
                                        break;

                                      case 32:
                                        responserService = {
                                          result: 'Nop',
                                          message: 'No existe el estado de contrato del contrato recibido',
                                          error: 'Se deben ingresar un identificador de contrato que posea un estado de contrato valido',
                                          status: 428
                                        };
                                        reject(responserService);
                                        return _context14.abrupt("return");

                                      case 35:
                                        _context14.next = 40;
                                        break;

                                      case 37:
                                        responserService = {
                                          result: 'Nop',
                                          message: 'No admite facturacion',
                                          error: 'El estado de contrato al cual se quiere cambiar el contrato, no admite facturacion.',
                                          status: 428
                                        };
                                        reject(responserService);
                                        return _context14.abrupt("return");

                                      case 40:
                                        _context14.next = 45;
                                        break;

                                      case 42:
                                        responserService = {
                                          result: 'Nop',
                                          message: 'No existe el estado de contrato recibido',
                                          error: 'Se deben ingresar un identificador de estado de contrato valido',
                                          status: 428
                                        };
                                        reject(responserService);
                                        return _context14.abrupt("return");

                                      case 45:
                                        _context14.next = 50;
                                        break;

                                      case 47:
                                        responserService = {
                                          result: 'Nop',
                                          message: 'La capa superior contesto undefined 14',
                                          error: '',
                                          status: 500
                                        };
                                        reject(responserService);
                                        return _context14.abrupt("return");

                                      case 50:
                                      case "end":
                                        return _context14.stop();
                                    }
                                  }
                                }, _callee14);
                              }));

                              return function (_x39) {
                                return _ref2.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                              reject(responserService);
                              return;
                            });

                          case 21:
                            _context15.next = 26;
                            break;

                          case 23:
                            responserService = {
                              result: 'Nop',
                              message: 'Faltan los ids',
                              error: 'Se deben ingresar ids validos de contrato, del tipo de transaccion, y del estado de contrato',
                              status: 428
                            };
                            reject(responserService);
                            return _context15.abrupt("return");

                          case 26:
                            return _context15.abrupt("break", 33);

                          case 27:
                            return _context15.abrupt("break", 33);

                          case 28:
                            console.log('nothing');
                            return _context15.abrupt("break", 33);

                          case 30:
                            responserService = {
                              result: 'Nop',
                              message: 'Tipo de transaccion invalida',
                              error: 'El tipo de transaccion enviado, posee un valor en la variable generate, invalido.',
                              status: 428
                            };
                            reject(responserService);
                            return _context15.abrupt("return");

                          case 33:
                            _context15.next = 38;
                            break;

                          case 35:
                            responserService = {
                              result: 'Nop',
                              message: 'Identificador de tipo de transaccion inexistente',
                              error: 'No se recibio un identificador de tipo de transaccion valido',
                              status: 428
                            };
                            reject(responserService);
                            return _context15.abrupt("return");

                          case 38:
                            _context15.next = 43;
                            break;

                          case 40:
                            responserService = {
                              result: 'Nop',
                              message: 'Identificador de punto de venta inexistente',
                              error: 'No se recibio un identificador de punto de venta valido',
                              status: 428
                            };
                            reject(responserService);
                            return _context15.abrupt("return");

                          case 43:
                          case "end":
                            return _context15.stop();
                        }
                      }
                    }, _callee15);
                  }));

                  return function (_x37, _x38) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }));

      function makeEffectiveAgreement(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10, _x11, _x12, _x13, _x14, _x15, _x16, _x17, _x18, _x19, _x20, _x21, _x22, _x23, _x24, _x25, _x26, _x27, _x28, _x29, _x30, _x31, _x32, _x33, _x34, _x35, _x36) {
        return _makeEffectiveAgreement.apply(this, arguments);
      }

      return makeEffectiveAgreement;
    }()
  }, {
    key: "debitTransaction",
    value: function () {
      var _debitTransaction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(movementOfCashs, transactionCreditIds, transactionTypeDebitId, responserService, controller, idUser, movementOfCashSaveService, transactionTransactionSaveService, transactionService, cashBoxTypeService, cashBoxService, userService, transactionTypeService, personService, movementOfCashModel, transactionTransactionModel, transactionModel, cashBoxTypeModel, cashBoxModel, userModel, transactionTypeModel, personModel) {
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                return _context22.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(resolve, reject) {
                    var movementOfCashsReceived, transactionCredits, transactionTypeDebit, transactionDebit, personTransactionDebit, totalPriceTransactionDebit, totalPriceTransactionCredit, transactionDebitId, transactionTransactionIds, match, transactionCreditAux, _match7;

                    return regeneratorRuntime.wrap(function _callee21$(_context21) {
                      while (1) {
                        switch (_context21.prev = _context21.next) {
                          case 0:
                            movementOfCashsReceived = movementOfCashs;
                            totalPriceTransactionDebit = 0;
                            totalPriceTransactionCredit = 0;

                            if (!transactionCreditIds) {
                              _context21.next = 57;
                              break;
                            }

                            _context21.next = 6;
                            return Promise.all(transactionCreditIds.map( /*#__PURE__*/function () {
                              var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(transactionCreditId) {
                                var match, transactionReturn;
                                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                                  while (1) {
                                    switch (_context17.prev = _context17.next) {
                                      case 0:
                                        match = {
                                          _id: {
                                            $oid: transactionCreditId
                                          }
                                        };
                                        _context17.next = 3;
                                        return transactionService.getAll(controller, transactionModel, {}, match, {}, {}, 1, 0).then(function (res) {
                                          if (res && res.result !== undefined) {
                                            if (res.status === 200) {
                                              transactionReturn = res.result;
                                            } else {
                                              responserService = {
                                                result: res.result,
                                                message: res.message,
                                                error: res.error,
                                                status: res.status
                                              };
                                              reject(responserService);
                                              return;
                                            }
                                          } else {
                                            responserService = {
                                              result: 'Nop',
                                              message: 'La capa superior contesto undefined 15',
                                              error: '',
                                              status: 500
                                            };
                                            reject(responserService);
                                            return;
                                          }
                                        })["catch"](function (err) {
                                          responserService = {
                                            result: err.result,
                                            message: err.message,
                                            error: err.error,
                                            status: err.status
                                          };
                                          reject(responserService);
                                          return;
                                        });

                                      case 3:
                                        return _context17.abrupt("return", transactionReturn);

                                      case 4:
                                      case "end":
                                        return _context17.stop();
                                    }
                                  }
                                }, _callee17);
                              }));

                              return function (_x77) {
                                return _ref17.apply(this, arguments);
                              };
                            }()));

                          case 6:
                            transactionCredits = _context21.sent;
                            movementOfCashs.map(function (movementOfCash) {
                              if (movementOfCash && movementOfCash.amount && movementOfCash.amount > 0) {
                                totalPriceTransactionDebit = totalPriceTransactionDebit + movementOfCash.amount;
                              }
                            });
                            transactionCredits.map(function (transactionCredit) {
                              if (transactionCredit && transactionCredit.balance && transactionCredit.balance > 0) {
                                totalPriceTransactionCredit = totalPriceTransactionCredit + transactionCredit.balance;
                              }
                            });

                            if (!(totalPriceTransactionCredit <= totalPriceTransactionDebit)) {
                              _context21.next = 46;
                              break;
                            }

                            if (!transactionTypeDebitId) {
                              _context21.next = 16;
                              break;
                            }

                            match = {
                              _id: {
                                $oid: transactionTypeDebitId
                              }
                            };
                            _context21.next = 14;
                            return transactionTypeService.getAll(controller, transactionTypeModel, {}, match, {}, {}, 1, 0).then(function (res) {
                              if (res && res.result !== undefined) {
                                if (res.status === 200) {
                                  transactionTypeDebit = res.result;
                                } else {
                                  responserService = {
                                    result: res.result,
                                    message: res.message,
                                    error: res.error,
                                    status: res.status
                                  };
                                  reject(responserService);
                                  return;
                                }
                              } else {
                                responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined 16',
                                  error: '',
                                  status: 500
                                };
                                reject(responserService);
                                return;
                              }
                            })["catch"](function (err) {
                              responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                              reject(responserService);
                              return;
                            });

                          case 14:
                            _context21.next = 19;
                            break;

                          case 16:
                            responserService = {
                              result: 'Nop',
                              message: 'Identificador de tipo de transaccion de debito inexistente',
                              error: 'No se recibio un identificador de tipo de transaccion de debito valido',
                              status: 428
                            };
                            reject(responserService);
                            return _context21.abrupt("return");

                          case 19:
                            if (!(transactionCredits && transactionCredits.length > 0)) {
                              _context21.next = 41;
                              break;
                            }

                            transactionCreditAux = transactionCredits[0];
                            _match7 = {
                              _id: {
                                $oid: transactionCreditAux.person
                              }
                            };
                            _context21.next = 24;
                            return personService.getAll(controller, personModel, {}, _match7, {}, {}, 1, 0).then(function (res) {
                              if (res && res.result !== undefined) {
                                if (res.status === 200) {
                                  personTransactionDebit = res.result;
                                } else {
                                  responserService = {
                                    result: res.result,
                                    message: res.message,
                                    error: res.error,
                                    status: res.status
                                  };
                                  reject(responserService);
                                  return;
                                }
                              } else {
                                responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined 17',
                                  error: '',
                                  status: 500
                                };
                                reject(responserService);
                                return;
                              }
                            })["catch"](function (err) {
                              responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                              reject(responserService);
                              return;
                            });

                          case 24:
                            // TODO arreglar los campos origin y company y letter
                            transactionDebit = {
                              _id: '',
                              person: personTransactionDebit,
                              transactionType: transactionTypeDebit,
                              number: 0,
                              totalPrice: totalPriceTransactionDebit,
                              date: null,
                              startDate: null,
                              endDate: null,
                              operationType: '',
                              company: null,
                              origin: 1,
                              letter: 'C'
                            };
                            _context21.next = 27;
                            return transactionService.save(transactionDebit, controller, transactionModel, idUser).then(function (res) {
                              if (res && res.result !== undefined) {
                                if (res.status === 200) {
                                  transactionDebitId = res.result._id;
                                } else {
                                  responserService = {
                                    result: res.result,
                                    message: res.message,
                                    error: res.error,
                                    status: res.status
                                  };
                                  reject(responserService);
                                  return;
                                }
                              } else {
                                responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined 18',
                                  error: '',
                                  status: 500
                                };
                                reject(responserService);
                                return;
                              }
                            })["catch"](function (err) {
                              responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                              reject(responserService);
                              return;
                            });

                          case 27:
                            _match7 = {
                              _id: {
                                $oid: transactionDebitId
                              }
                            };
                            _context21.next = 30;
                            return transactionService.getAll(controller, transactionModel, {}, _match7, {}, {}, 1, 0).then(function (res) {
                              if (res && res.result !== undefined) {
                                if (res.status === 200) {
                                  transactionDebit = res.result;
                                } else {
                                  responserService = {
                                    result: res.result,
                                    message: res.message,
                                    error: res.error,
                                    status: res.status
                                  };
                                  reject(responserService);
                                  return;
                                }
                              } else {
                                responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined 19',
                                  error: '',
                                  status: 500
                                };
                                reject(responserService);
                                return;
                              }
                            })["catch"](function (err) {
                              responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                              reject(responserService);
                              return;
                            });

                          case 30:
                            _context21.next = 32;
                            return Promise.all(transactionCredits.map( /*#__PURE__*/function () {
                              var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(transactionCredit) {
                                var transactionTransactionAux, transactionTransactionIdReturn;
                                return regeneratorRuntime.wrap(function _callee18$(_context18) {
                                  while (1) {
                                    switch (_context18.prev = _context18.next) {
                                      case 0:
                                        transactionTransactionAux = {
                                          _id: '',
                                          credit: transactionCredit,
                                          debit: transactionDebit,
                                          balance: 0,
                                          operationType: ''
                                        };
                                        _context18.next = 3;
                                        return transactionTransactionSaveService.save(transactionTransactionAux, controller, transactionTransactionModel, transactionModel, idUser).then(function (res) {
                                          if (res && res.result !== undefined) {
                                            if (res.status === 200) {
                                              transactionTransactionIdReturn = res.result._id;
                                            } else {
                                              responserService = {
                                                result: res.result,
                                                message: res.message,
                                                error: res.error,
                                                status: res.status
                                              };
                                              reject(responserService);
                                              return;
                                            }
                                          } else {
                                            responserService = {
                                              result: 'Nop',
                                              message: 'La capa superior contesto undefined 20',
                                              error: '',
                                              status: 500
                                            };
                                            reject(responserService);
                                            return;
                                          }
                                        })["catch"](function (err) {
                                          responserService = {
                                            result: err.result,
                                            message: err.message,
                                            error: err.error,
                                            status: err.status
                                          };
                                          reject(responserService);
                                          return;
                                        });

                                      case 3:
                                        return _context18.abrupt("return", transactionTransactionIdReturn);

                                      case 4:
                                      case "end":
                                        return _context18.stop();
                                    }
                                  }
                                }, _callee18);
                              }));

                              return function (_x78) {
                                return _ref18.apply(this, arguments);
                              };
                            }()));

                          case 32:
                            transactionTransactionIds = _context21.sent;
                            transactionCredits.map( /*#__PURE__*/function () {
                              var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(transactionCredit) {
                                var transactionIdReturn;
                                return regeneratorRuntime.wrap(function _callee19$(_context19) {
                                  while (1) {
                                    switch (_context19.prev = _context19.next) {
                                      case 0:
                                        transactionCredit.balance = 0;
                                        _context19.next = 3;
                                        return transactionService.update(transactionCredit._id, transactionCredit, transactionModel, controller, idUser).then(function (res) {
                                          if (res && res.result !== undefined) {
                                            if (res.status === 200) {
                                              transactionIdReturn = res.result;
                                            } else {
                                              responserService = {
                                                result: res.result,
                                                message: res.message,
                                                error: res.error,
                                                status: res.status
                                              };
                                              reject(responserService);
                                              return;
                                            }
                                          } else {
                                            responserService = {
                                              result: 'Nop',
                                              message: 'La capa superior contesto undefined 21',
                                              error: '',
                                              status: 500
                                            };
                                            reject(responserService);
                                            return;
                                          }
                                        })["catch"](function (err) {
                                          responserService = {
                                            result: err.result,
                                            message: err.message,
                                            error: err.error,
                                            status: err.status
                                          };
                                          reject(responserService);
                                          return;
                                        });

                                      case 3:
                                        return _context19.abrupt("return", transactionIdReturn);

                                      case 4:
                                      case "end":
                                        return _context19.stop();
                                    }
                                  }
                                }, _callee19);
                              }));

                              return function (_x79) {
                                return _ref19.apply(this, arguments);
                              };
                            }());
                            _context21.next = 36;
                            return Promise.all(movementOfCashs.map( /*#__PURE__*/function () {
                              var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(movementOfCash) {
                                var movementOfCashAux, movementOfCashIdReturn;
                                return regeneratorRuntime.wrap(function _callee20$(_context20) {
                                  while (1) {
                                    switch (_context20.prev = _context20.next) {
                                      case 0:
                                        movementOfCashAux = {
                                          _id: '',
                                          transaction: transactionDebit,
                                          paymentMethod: movementOfCash.paymentMethod,
                                          cashBox: movementOfCash.cashBox,
                                          amount: movementOfCash.amount,
                                          operationType: ''
                                        };
                                        _context20.next = 3;
                                        return movementOfCashSaveService.save(movementOfCashAux, controller, movementOfCashModel, idUser, transactionCreditIds, transactionService, cashBoxTypeService, cashBoxService, userService, transactionModel, cashBoxTypeModel, cashBoxModel, userModel, controller).then(function (res) {
                                          if (res && res.result !== undefined) {
                                            if (res.status === 200) {
                                              movementOfCashIdReturn = res.result._id;
                                            } else {
                                              responserService = {
                                                result: res.result,
                                                message: res.message,
                                                error: res.error,
                                                status: res.status
                                              };
                                              reject(responserService);
                                              return;
                                            }
                                          } else {
                                            responserService = {
                                              result: 'Nop',
                                              message: 'La capa superior contesto undefined 22',
                                              error: '',
                                              status: 500
                                            };
                                            reject(responserService);
                                            return;
                                          }
                                        })["catch"](function (err) {
                                          responserService = {
                                            result: err.result,
                                            message: err.message,
                                            error: err.error,
                                            status: err.status
                                          };
                                          reject(responserService);
                                          return;
                                        });

                                      case 3:
                                        return _context20.abrupt("return", movementOfCashIdReturn);

                                      case 4:
                                      case "end":
                                        return _context20.stop();
                                    }
                                  }
                                }, _callee20);
                              }));

                              return function (_x80) {
                                return _ref20.apply(this, arguments);
                              };
                            }()));

                          case 36:
                            responserService = {
                              result: {
                                _id: transactionDebit._id
                              },
                              message: 'Consulta exitosa',
                              error: '',
                              status: 200
                            };
                            reject(responserService);
                            return _context21.abrupt("return");

                          case 41:
                            responserService = {
                              result: 'Nop',
                              message: 'Transacciones de credito inexistentes',
                              error: 'No existen transacciones de credito para debitar',
                              status: 428
                            };
                            reject(responserService);
                            return _context21.abrupt("return");

                          case 44:
                            _context21.next = 55;
                            break;

                          case 46:
                            if (!(totalPriceTransactionCredit < totalPriceTransactionDebit)) {
                              _context21.next = 52;
                              break;
                            }

                            responserService = {
                              result: 'Nop',
                              message: 'Montos de debe y haber diferentes',
                              error: 'El total de credito a pagar, es menor que la cantidad de debito a cobrar',
                              status: 428
                            };
                            reject(responserService);
                            return _context21.abrupt("return");

                          case 52:
                            responserService = {
                              result: 'Nop',
                              message: 'Montos de debe y haber diferentes',
                              error: 'El total de credito a pagar, es mayor que la cantidad de debito a cobrar',
                              status: 428
                            };
                            reject(responserService);
                            return _context21.abrupt("return");

                          case 55:
                            _context21.next = 60;
                            break;

                          case 57:
                            responserService = {
                              result: 'Nop',
                              message: 'Identificadores de transaccion de credito inexistente',
                              error: 'No se recibio ningun identificador de transaccion de credito valido',
                              status: 428
                            };
                            reject(responserService);
                            return _context21.abrupt("return");

                          case 60:
                          case "end":
                            return _context21.stop();
                        }
                      }
                    }, _callee21);
                  }));

                  return function (_x75, _x76) {
                    return _ref16.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22);
      }));

      function debitTransaction(_x53, _x54, _x55, _x56, _x57, _x58, _x59, _x60, _x61, _x62, _x63, _x64, _x65, _x66, _x67, _x68, _x69, _x70, _x71, _x72, _x73, _x74) {
        return _debitTransaction.apply(this, arguments);
      }

      return debitTransaction;
    }()
  }, {
    key: "sendCardToTrello",
    value: function () {
      var _sendCardToTrello = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(responserService, trelloService, claimName, claimDescription, database) {
        return regeneratorRuntime.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                return _context32.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(resolve, reject) {
                    var shortURL, key, token, keyColo, tokenColo, listName, boardId, listId, cardId;
                    return regeneratorRuntime.wrap(function _callee31$(_context31) {
                      while (1) {
                        switch (_context31.prev = _context31.next) {
                          case 0:
                            shortURL = 'uKfT7lDS';
                            key = '9540e14f03a44a295564e04cdc0eeef1';
                            token = 'c68839bba6173f20d0aba1c6366d5a1b7360c4a0602108e31e4cbaddede9a98d';
                            keyColo = '6fe243c6fdd64eb6266af30e9538e623';
                            tokenColo = 'cd4972acad0d6eacc5b7a57ac686de8479d494cca779b61b7ebc309bf8288112';
                            listName = 'SOPORTE';
                            boardId = '';
                            listId = '';
                            cardId = '';
                            _context31.next = 11;
                            return trelloService.getBoardId(responserService, shortURL, key, token).then( /*#__PURE__*/function () {
                              var _ref22 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(res) {
                                return regeneratorRuntime.wrap(function _callee30$(_context30) {
                                  while (1) {
                                    switch (_context30.prev = _context30.next) {
                                      case 0:
                                        if (!(res !== undefined && res.result !== undefined)) {
                                          _context30.next = 6;
                                          break;
                                        }

                                        boardId = res.result;
                                        _context30.next = 4;
                                        return trelloService.getListId(listName, responserService, boardId, key, token).then( /*#__PURE__*/function () {
                                          var _ref23 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(res) {
                                            return regeneratorRuntime.wrap(function _callee29$(_context29) {
                                              while (1) {
                                                switch (_context29.prev = _context29.next) {
                                                  case 0:
                                                    if (!(res !== undefined && res.result !== undefined)) {
                                                      _context29.next = 6;
                                                      break;
                                                    }

                                                    listId = res.result;
                                                    _context29.next = 4;
                                                    return trelloService.sendCard(claimName, claimDescription, responserService, listId, key, token).then( /*#__PURE__*/function () {
                                                      var _ref24 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(res) {
                                                        return regeneratorRuntime.wrap(function _callee28$(_context28) {
                                                          while (1) {
                                                            switch (_context28.prev = _context28.next) {
                                                              case 0:
                                                                if (!(res !== undefined && res.result !== undefined)) {
                                                                  _context28.next = 8;
                                                                  break;
                                                                }

                                                                if (res.status === 200) cardId = res.result.id;
                                                                responserService = {
                                                                  result: res.result,
                                                                  message: res.message,
                                                                  error: res.error,
                                                                  status: res.status
                                                                }; //await trelloService.saveLabel(database, 'blue', responserService, boardId, key, token)

                                                                _context28.next = 5;
                                                                return trelloService.getLabelId(database, responserService, boardId, key, token).then( /*#__PURE__*/function () {
                                                                  var _ref25 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(res) {
                                                                    return regeneratorRuntime.wrap(function _callee27$(_context27) {
                                                                      while (1) {
                                                                        switch (_context27.prev = _context27.next) {
                                                                          case 0:
                                                                            if (!(res !== undefined && res.result !== undefined)) {
                                                                              _context27.next = 14;
                                                                              break;
                                                                            }

                                                                            if (!(res.status === 200)) {
                                                                              _context27.next = 6;
                                                                              break;
                                                                            }

                                                                            _context27.next = 4;
                                                                            return trelloService.saveCard(res.result, responserService, cardId, key, token).then( /*#__PURE__*/function () {
                                                                              var _ref26 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(res) {
                                                                                return regeneratorRuntime.wrap(function _callee23$(_context23) {
                                                                                  while (1) {
                                                                                    switch (_context23.prev = _context23.next) {
                                                                                      case 0:
                                                                                        if (res !== undefined && res.result !== undefined) {
                                                                                          if (res.status !== 200) console.log(res);
                                                                                        } else {
                                                                                          console.log(res);
                                                                                        }

                                                                                      case 1:
                                                                                      case "end":
                                                                                        return _context23.stop();
                                                                                    }
                                                                                  }
                                                                                }, _callee23);
                                                                              }));

                                                                              return function (_x92) {
                                                                                return _ref26.apply(this, arguments);
                                                                              };
                                                                            }())["catch"](function (err) {
                                                                              console.log(err);
                                                                            });

                                                                          case 4:
                                                                            _context27.next = 12;
                                                                            break;

                                                                          case 6:
                                                                            if (!(res.status === 404)) {
                                                                              _context27.next = 11;
                                                                              break;
                                                                            }

                                                                            _context27.next = 9;
                                                                            return trelloService.saveLabel(database, 'blue', responserService, boardId, key, token).then( /*#__PURE__*/function () {
                                                                              var _ref27 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(res) {
                                                                                return regeneratorRuntime.wrap(function _callee26$(_context26) {
                                                                                  while (1) {
                                                                                    switch (_context26.prev = _context26.next) {
                                                                                      case 0:
                                                                                        _context26.next = 2;
                                                                                        return trelloService.getLabelId(database, responserService, boardId, key, token).then( /*#__PURE__*/function () {
                                                                                          var _ref28 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(res) {
                                                                                            return regeneratorRuntime.wrap(function _callee25$(_context25) {
                                                                                              while (1) {
                                                                                                switch (_context25.prev = _context25.next) {
                                                                                                  case 0:
                                                                                                    if (!(res !== undefined && res.result !== undefined)) {
                                                                                                      _context25.next = 6;
                                                                                                      break;
                                                                                                    }

                                                                                                    if (!(res.status === 200)) {
                                                                                                      _context25.next = 4;
                                                                                                      break;
                                                                                                    }

                                                                                                    _context25.next = 4;
                                                                                                    return trelloService.saveCard(res.result, responserService, cardId, key, token).then( /*#__PURE__*/function () {
                                                                                                      var _ref29 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(res) {
                                                                                                        return regeneratorRuntime.wrap(function _callee24$(_context24) {
                                                                                                          while (1) {
                                                                                                            switch (_context24.prev = _context24.next) {
                                                                                                              case 0:
                                                                                                                if (res !== undefined && res.result !== undefined) {
                                                                                                                  if (res.status !== 200) console.log(res);
                                                                                                                } else {
                                                                                                                  console.log(res);
                                                                                                                }

                                                                                                              case 1:
                                                                                                              case "end":
                                                                                                                return _context24.stop();
                                                                                                            }
                                                                                                          }
                                                                                                        }, _callee24);
                                                                                                      }));

                                                                                                      return function (_x95) {
                                                                                                        return _ref29.apply(this, arguments);
                                                                                                      };
                                                                                                    }())["catch"](function (err) {
                                                                                                      console.log(err);
                                                                                                    });

                                                                                                  case 4:
                                                                                                    _context25.next = 7;
                                                                                                    break;

                                                                                                  case 6:
                                                                                                    console.log(res);

                                                                                                  case 7:
                                                                                                  case "end":
                                                                                                    return _context25.stop();
                                                                                                }
                                                                                              }
                                                                                            }, _callee25);
                                                                                          }));

                                                                                          return function (_x94) {
                                                                                            return _ref28.apply(this, arguments);
                                                                                          };
                                                                                        }())["catch"](function (err) {
                                                                                          console.log(err);
                                                                                        });

                                                                                      case 2:
                                                                                      case "end":
                                                                                        return _context26.stop();
                                                                                    }
                                                                                  }
                                                                                }, _callee26);
                                                                              }));

                                                                              return function (_x93) {
                                                                                return _ref27.apply(this, arguments);
                                                                              };
                                                                            }());

                                                                          case 9:
                                                                            _context27.next = 12;
                                                                            break;

                                                                          case 11:
                                                                            console.log(res);

                                                                          case 12:
                                                                            _context27.next = 15;
                                                                            break;

                                                                          case 14:
                                                                            console.log(res);

                                                                          case 15:
                                                                          case "end":
                                                                            return _context27.stop();
                                                                        }
                                                                      }
                                                                    }, _callee27);
                                                                  }));

                                                                  return function (_x91) {
                                                                    return _ref25.apply(this, arguments);
                                                                  };
                                                                }())["catch"](function (err) {
                                                                  console.log(err);
                                                                });

                                                              case 5:
                                                                if (res.status === 200) {
                                                                  resolve(responserService);
                                                                } else {
                                                                  reject(responserService);
                                                                }

                                                                _context28.next = 10;
                                                                break;

                                                              case 8:
                                                                responserService = {
                                                                  result: 'Nop',
                                                                  message: 'Error en api/src/Aplication/UC/Controller.ts/Controller/sendCardToTrello().sendCard()',
                                                                  error: '',
                                                                  status: 500
                                                                };
                                                                reject(responserService);

                                                              case 10:
                                                              case "end":
                                                                return _context28.stop();
                                                            }
                                                          }
                                                        }, _callee28);
                                                      }));

                                                      return function (_x90) {
                                                        return _ref24.apply(this, arguments);
                                                      };
                                                    }())["catch"](function (err) {
                                                      responserService = {
                                                        result: err.result,
                                                        message: err.message,
                                                        error: err.error,
                                                        status: err.status
                                                      };
                                                      reject(responserService);
                                                    });

                                                  case 4:
                                                    _context29.next = 8;
                                                    break;

                                                  case 6:
                                                    responserService = {
                                                      result: 'Nop',
                                                      message: 'Error en api/src/Aplication/UC/Controller.ts/Controller/sendCardToTrello().getListId()',
                                                      error: '',
                                                      status: 500
                                                    };
                                                    reject(responserService);

                                                  case 8:
                                                  case "end":
                                                    return _context29.stop();
                                                }
                                              }
                                            }, _callee29);
                                          }));

                                          return function (_x89) {
                                            return _ref23.apply(this, arguments);
                                          };
                                        }())["catch"](function (err) {
                                          responserService = {
                                            result: err.result,
                                            message: err.message,
                                            error: err.error,
                                            status: err.status
                                          };
                                          reject(responserService);
                                        });

                                      case 4:
                                        _context30.next = 8;
                                        break;

                                      case 6:
                                        responserService = {
                                          result: 'Nop',
                                          message: 'Error en api/src/Aplication/UC/Controller.ts/Controller/sendCardToTrello().getBoardId()',
                                          error: '',
                                          status: 500
                                        };
                                        reject(responserService);

                                      case 8:
                                      case "end":
                                        return _context30.stop();
                                    }
                                  }
                                }, _callee30);
                              }));

                              return function (_x88) {
                                return _ref22.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                              reject(responserService);
                            });

                          case 11:
                          case "end":
                            return _context31.stop();
                        }
                      }
                    }, _callee31);
                  }));

                  return function (_x86, _x87) {
                    return _ref21.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32);
      }));

      function sendCardToTrello(_x81, _x82, _x83, _x84, _x85) {
        return _sendCardToTrello.apply(this, arguments);
      }

      return sendCardToTrello;
    }()
  }]);

  return Controller;
}();

exports["default"] = Controller;