"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inversify = require("inversify");

var _TYPES = _interopRequireDefault(require("./../../../TYPES"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;

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

var Controller = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_TYPES["default"].ResponseableDomain), _dec3 = (0, _inversify.inject)(_TYPES["default"].Updateable), _dec4 = (0, _inversify.inject)(_TYPES["default"].GeteableAll), _dec5 = (0, _inversify.inject)(_TYPES["default"].GeteableById), _dec6 = (0, _inversify.inject)(_TYPES["default"].Saveable), _dec7 = (0, _inversify.inject)(_TYPES["default"].AccountServiceableDomain), _dec8 = (0, _inversify.inject)(_TYPES["default"].BlueServiceableDomain), _dec9 = (0, _inversify.inject)(_TYPES["default"].CheckServiceableDomain), _dec10 = (0, _inversify.inject)(_TYPES["default"].InterestServiceableDomain), _dec11 = (0, _inversify.inject)(_TYPES["default"].InvestmentServiceableDomain), _dec12 = (0, _inversify.inject)(_TYPES["default"].LoanServiceableDomain), _dec13 = (0, _inversify.inject)(_TYPES["default"].MovementServiceableDomain), _dec14 = (0, _inversify.inject)(_TYPES["default"].TransferServiceableDomain), _dec15 = (0, _inversify.inject)(_TYPES["default"].UsdtServiceableDomain), _dec16 = (0, _inversify.inject)(_TYPES["default"].WireServiceableDomain), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);

    _initializerDefineProperty(this, "responserService", _descriptor, this);

    _initializerDefineProperty(this, "updateableService", _descriptor2, this);

    _initializerDefineProperty(this, "geteableAllService", _descriptor3, this);

    _initializerDefineProperty(this, "geteableByIdService", _descriptor4, this);

    _initializerDefineProperty(this, "saveableService", _descriptor5, this);

    _initializerDefineProperty(this, "accountService", _descriptor6, this);

    _initializerDefineProperty(this, "blueService", _descriptor7, this);

    _initializerDefineProperty(this, "checkService", _descriptor8, this);

    _initializerDefineProperty(this, "interestService", _descriptor9, this);

    _initializerDefineProperty(this, "investmentService", _descriptor10, this);

    _initializerDefineProperty(this, "loanService", _descriptor11, this);

    _initializerDefineProperty(this, "movementService", _descriptor12, this);

    _initializerDefineProperty(this, "transferService", _descriptor13, this);

    _initializerDefineProperty(this, "usdtService", _descriptor14, this);

    _initializerDefineProperty(this, "wireService", _descriptor15, this);
  }

  _createClass(Controller, [{
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id, data, model, idUser) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _this.updateableService.update(id, data, model, model, idUser).then(function (res) {
                              if (res && res.result !== undefined) {
                                _this.responserService = {
                                  result: res.result,
                                  message: res.message,
                                  error: res.error,
                                  status: res.status
                                };
                                resolve(_this.responserService);
                              } else {
                                _this.responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined',
                                  error: '',
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 2:
                            reject(_this.responserService);

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x5, _x6) {
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

      function update(_x, _x2, _x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, model) {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resolve, reject) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return _this2.geteableByIdService.getById(id, model, model).then(function (res) {
                              if (res && res.result !== undefined) {
                                _this2.responserService = {
                                  result: res,
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
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x9, _x10) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getById(_x7, _x8) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }, {
    key: "save",
    value: function () {
      var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data, model, idUser) {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve, reject) {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return _this3.saveableService.save(data, model, model, idUser).then(function (res) {
                              if (res && res.result !== undefined) {
                                _this3.responserService = {
                                  result: res.result,
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
                                reject(_this3.responserService);
                              }
                            })["catch"](function (err) {
                              _this3.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                              reject(_this3.responserService);
                            });

                          case 2:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x14, _x15) {
                    return _ref3.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function save(_x11, _x12, _x13) {
        return _save.apply(this, arguments);
      }

      return save;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(boxModel, accountModel, blueModel, checkModel, interestModel, investmentModel, loanModel, movementModel, transferModel, usdtModel, wireModel, project, match, sort, group, limit, skip) {
        var _this4 = this;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(resolve, reject) {
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            _context8.next = 2;
                            return _this4.geteableAllService.getAll(boxModel, project, match, sort, group, limit, skip).then( /*#__PURE__*/function () {
                              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(result) {
                                var boxList, accountList, blueList, checkList, interestList, investmentList, loanList, movementList, transferList, usdtList, wireList, accountMoneyPeso, accountMoneyDolar, accountMoneyUsdt, balanceMoneyPeso, balanceMoneyDolar, balanceMoneyUsdt, currentBalanceMoneyPeso, currentBalanceMoneyDolar, currentBalanceMoneyUsdt, dateBalanceMoneyPeso, dateBalanceMoneyDolar, dateBalanceMoneyUsdt, finalBalanceMoneyPeso, finalBalanceMoneyDolar, finalBalanceMoneyUsdt, blueMoneyPeso, blueMoneyDolar, blueMoneyUsdt, checkMoneyPeso, checkMoneyDolar, checkMoneyUsdt, interestMoneyPeso, interestMoneyDolar, interestMoneyUsdt, investmentMoneyPeso, investmentMoneyDolar, investmentMoneyUsdt, loanMoneyPeso, loanMoneyDolar, loanMoneyUsdt, movementMoneyPeso, movementMoneyDolar, movementMoneyUsdt, transferMoneyPeso, transferMoneyDolar, transferMoneyUsdt, usdtMoneyPeso, usdtMoneyDolar, usdtMoneyUsdt, wireMoneyPeso, wireMoneyDolar, wireMoneyUsdt;
                                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                                  while (1) {
                                    switch (_context7.prev = _context7.next) {
                                      case 0:
                                        if (!result) {
                                          _context7.next = 149;
                                          break;
                                        }

                                        boxList = [];
                                        accountList = [];
                                        blueList = [];
                                        checkList = [];
                                        interestList = [];
                                        investmentList = [];
                                        loanList = [];
                                        movementList = [];
                                        transferList = [];
                                        usdtList = [];
                                        wireList = [];
                                        accountMoneyPeso = 0;
                                        accountMoneyDolar = 0;
                                        accountMoneyUsdt = 0;
                                        balanceMoneyPeso = 0;
                                        balanceMoneyDolar = 0;
                                        balanceMoneyUsdt = 0;
                                        currentBalanceMoneyPeso = 0;
                                        currentBalanceMoneyDolar = 0;
                                        currentBalanceMoneyUsdt = 0;
                                        dateBalanceMoneyPeso = 0;
                                        dateBalanceMoneyDolar = 0;
                                        dateBalanceMoneyUsdt = 0;
                                        finalBalanceMoneyPeso = 0;
                                        finalBalanceMoneyDolar = 0;
                                        finalBalanceMoneyUsdt = 0;
                                        blueMoneyPeso = 0;
                                        blueMoneyDolar = 0;
                                        blueMoneyUsdt = 0;
                                        checkMoneyPeso = 0;
                                        checkMoneyDolar = 0;
                                        checkMoneyUsdt = 0;
                                        interestMoneyPeso = 0;
                                        interestMoneyDolar = 0;
                                        interestMoneyUsdt = 0;
                                        investmentMoneyPeso = 0;
                                        investmentMoneyDolar = 0;
                                        investmentMoneyUsdt = 0;
                                        loanMoneyPeso = 0;
                                        loanMoneyDolar = 0;
                                        loanMoneyUsdt = 0;
                                        movementMoneyPeso = 0;
                                        movementMoneyDolar = 0;
                                        movementMoneyUsdt = 0;
                                        transferMoneyPeso = 0;
                                        transferMoneyDolar = 0;
                                        transferMoneyUsdt = 0;
                                        usdtMoneyPeso = 0;
                                        usdtMoneyDolar = 0;
                                        usdtMoneyUsdt = 0;
                                        wireMoneyPeso = 0;
                                        wireMoneyDolar = 0;
                                        wireMoneyUsdt = 0;
                                        _context7.next = 56;
                                        return _this4.accountService.getAll(accountModel, {}, {
                                          operationType: {
                                            $ne: 'D'
                                          }
                                        }, {}, {}, 0, 0);

                                      case 56:
                                        accountList = _context7.sent.result;
                                        _context7.next = 59;
                                        return _this4.blueService.getAll(blueModel, {}, {
                                          operationType: {
                                            $ne: 'D'
                                          }
                                        }, {}, {}, 0, 0);

                                      case 59:
                                        blueList = _context7.sent.result;
                                        _context7.next = 62;
                                        return _this4.checkService.getAll(checkModel, {}, {
                                          operationType: {
                                            $ne: 'D'
                                          }
                                        }, {}, {}, 0, 0);

                                      case 62:
                                        checkList = _context7.sent.result;
                                        _context7.next = 65;
                                        return _this4.interestService.getAll(interestModel, {}, {
                                          operationType: {
                                            $ne: 'D'
                                          }
                                        }, {}, {}, 0, 0);

                                      case 65:
                                        interestList = _context7.sent.result;
                                        _context7.next = 68;
                                        return _this4.investmentService.getAll(investmentModel, {}, {
                                          operationType: {
                                            $ne: 'D'
                                          }
                                        }, {}, {}, 0, 0);

                                      case 68:
                                        investmentList = _context7.sent.result;
                                        _context7.next = 71;
                                        return _this4.loanService.getAll(loanModel, {}, {
                                          operationType: {
                                            $ne: 'D'
                                          }
                                        }, {}, {}, 0, 0);

                                      case 71:
                                        loanList = _context7.sent.result;
                                        _context7.next = 74;
                                        return _this4.movementService.getAll(movementModel, {}, {
                                          operationType: {
                                            $ne: 'D'
                                          }
                                        }, {}, {}, 0, 0);

                                      case 74:
                                        movementList = _context7.sent.result;
                                        _context7.next = 77;
                                        return _this4.transferService.getAll(transferModel, {}, {
                                          operationType: {
                                            $ne: 'D'
                                          }
                                        }, {}, {}, 0, 0);

                                      case 77:
                                        transferList = _context7.sent.result;
                                        _context7.next = 80;
                                        return _this4.usdtService.getAll(usdtModel, {}, {
                                          operationType: {
                                            $ne: 'D'
                                          }
                                        }, {}, {}, 0, 0);

                                      case 80:
                                        usdtList = _context7.sent.result;
                                        _context7.next = 83;
                                        return _this4.wireService.getAll(wireModel, {}, {
                                          operationType: {
                                            $ne: 'D'
                                          }
                                        }, {}, {}, 0, 0);

                                      case 83:
                                        wireList = _context7.sent.result;
                                        accountList.map(function (account) {
                                          if (account.moneyPeso !== undefined) accountMoneyPeso = accountMoneyPeso + account.moneyPeso;
                                          if (account.moneyDolar !== undefined) accountMoneyDolar = accountMoneyDolar + account.moneyDolar;
                                        });
                                        dateBalanceMoneyPeso = dateBalanceMoneyPeso + accountMoneyPeso;
                                        dateBalanceMoneyDolar = dateBalanceMoneyDolar + accountMoneyDolar;
                                        dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + accountMoneyUsdt;
                                        blueList.map(function (blue) {
                                          if (blue['totalClient'] !== undefined && blue.operation === 'VENTA') blueMoneyPeso = blueMoneyPeso + blue['totalClient'];
                                          if (blue['totalClient'] !== undefined && blue.operation === 'COMPRA') blueMoneyPeso = blueMoneyPeso - blue['totalClient'];
                                          if (blue.amount !== undefined && blue.operation === 'VENTA') blueMoneyDolar = blueMoneyDolar - blue.amount;
                                          if (blue.amount !== undefined && blue.operation === 'COMPRA') blueMoneyDolar = blueMoneyDolar + blue.amount;
                                        });
                                        dateBalanceMoneyPeso = dateBalanceMoneyPeso + blueMoneyPeso;
                                        dateBalanceMoneyDolar = dateBalanceMoneyDolar + blueMoneyDolar;
                                        dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + blueMoneyUsdt;
                                        checkList.map(function (check) {
                                          if (check['balance1'] !== undefined) checkMoneyPeso = checkMoneyPeso + check['balance1'];
                                          if (check['balance2'] !== undefined) checkMoneyPeso = checkMoneyPeso + check['balance2'];
                                        });
                                        dateBalanceMoneyPeso = dateBalanceMoneyPeso + checkMoneyPeso;
                                        dateBalanceMoneyDolar = dateBalanceMoneyDolar + checkMoneyDolar;
                                        dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + checkMoneyUsdt;
                                        interestList.map(function (interest) {
                                          if (interest.moneyPeso !== undefined) interestMoneyPeso = interestMoneyPeso + interest.moneyPeso;
                                          if (interest.moneyDolar !== undefined) interestMoneyDolar = interestMoneyDolar + interest.moneyDolar;
                                        });
                                        dateBalanceMoneyPeso = dateBalanceMoneyPeso + interestMoneyPeso;
                                        dateBalanceMoneyDolar = dateBalanceMoneyDolar + interestMoneyDolar;
                                        dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + interestMoneyUsdt;
                                        investmentList.map(function (investment) {
                                          if (investment.moneyPeso !== undefined) investmentMoneyPeso = investmentMoneyPeso + investment.moneyPeso;
                                          if (investment.moneyDolar !== undefined) investmentMoneyDolar = investmentMoneyDolar + investment.moneyDolar;
                                          if (investment.moneyUsdt !== undefined) investmentMoneyUsdt = investmentMoneyUsdt + investment.moneyUsdt;
                                        });
                                        dateBalanceMoneyPeso = dateBalanceMoneyPeso + investmentMoneyPeso;
                                        dateBalanceMoneyDolar = dateBalanceMoneyDolar + investmentMoneyDolar;
                                        dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + investmentMoneyUsdt;
                                        loanList.map(function (loan) {
                                          if (loan.moneyPeso !== undefined) loanMoneyPeso = loanMoneyPeso + loan.moneyPeso;
                                          if (loan.moneyDolar !== undefined) loanMoneyDolar = loanMoneyDolar + loan.moneyDolar;
                                        });
                                        dateBalanceMoneyPeso = dateBalanceMoneyPeso + loanMoneyPeso;
                                        dateBalanceMoneyDolar = dateBalanceMoneyDolar + loanMoneyDolar;
                                        dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + loanMoneyUsdt;
                                        movementList.map(function (movement) {
                                          if (movement.moneyPeso !== undefined) movementMoneyPeso = movementMoneyPeso + movement.moneyPeso;
                                          if (movement.moneyDolar !== undefined) movementMoneyDolar = movementMoneyDolar + movement.moneyDolar;
                                        });
                                        dateBalanceMoneyPeso = dateBalanceMoneyPeso + movementMoneyPeso;
                                        dateBalanceMoneyDolar = dateBalanceMoneyDolar + movementMoneyDolar;
                                        dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + movementMoneyUsdt;
                                        transferList.map(function (transfer) {
                                          if (transfer['payment'] !== undefined) transferMoneyPeso = transferMoneyPeso + transfer['payment'];
                                          if (transfer.extraction !== undefined) transferMoneyPeso = transferMoneyPeso + transfer.extraction;
                                        });
                                        dateBalanceMoneyPeso = dateBalanceMoneyPeso + transferMoneyPeso;
                                        dateBalanceMoneyDolar = dateBalanceMoneyDolar + transferMoneyDolar;
                                        dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + transferMoneyUsdt;
                                        usdtList.map(function (usdt) {
                                          if (usdt['totalClient'] !== undefined && usdt.operation === 'VENTA') usdtMoneyDolar = usdtMoneyDolar + usdt['totalClient'];
                                          if (usdt['totalClient'] !== undefined && usdt.operation === 'COMPRA') usdtMoneyDolar = usdtMoneyDolar - usdt['totalClient'];
                                          if (usdt.amount !== undefined && usdt.operation === 'VENTA') usdtMoneyUsdt = usdtMoneyUsdt - usdt.amount;
                                          if (usdt.amount !== undefined && usdt.operation === 'COMPRA') usdtMoneyUsdt = usdtMoneyUsdt + usdt.amount;
                                        });
                                        dateBalanceMoneyPeso = dateBalanceMoneyPeso + usdtMoneyPeso;
                                        dateBalanceMoneyDolar = dateBalanceMoneyDolar + usdtMoneyDolar;
                                        dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + usdtMoneyUsdt;
                                        wireList.map(function (wire) {});
                                        dateBalanceMoneyPeso = dateBalanceMoneyPeso + wireMoneyPeso;
                                        dateBalanceMoneyDolar = dateBalanceMoneyDolar + wireMoneyDolar;
                                        dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + wireMoneyUsdt;
                                        finalBalanceMoneyPeso = currentBalanceMoneyPeso + dateBalanceMoneyPeso;
                                        finalBalanceMoneyDolar = currentBalanceMoneyDolar + dateBalanceMoneyDolar;
                                        finalBalanceMoneyUsdt = currentBalanceMoneyUsdt + dateBalanceMoneyUsdt;
                                        boxList.push({
                                          _id: 'Saldo Inicial',
                                          boxList: 'Saldo Inicial',
                                          moneyPeso: currentBalanceMoneyPeso,
                                          moneyDolar: currentBalanceMoneyDolar,
                                          moneyUsdt: currentBalanceMoneyUsdt
                                        });
                                        boxList.push({
                                          _id: 'Operaciones de la fecha',
                                          boxList: 'Operaciones de la fecha',
                                          moneyPeso: dateBalanceMoneyPeso,
                                          moneyDolar: dateBalanceMoneyDolar,
                                          moneyUsdt: dateBalanceMoneyUsdt
                                        });
                                        boxList.push({
                                          _id: 'Saldo Final',
                                          boxList: 'Saldo Final',
                                          moneyPeso: finalBalanceMoneyPeso,
                                          moneyDolar: finalBalanceMoneyDolar,
                                          moneyUsdt: finalBalanceMoneyUsdt
                                        });
                                        boxList.push({
                                          _id: 'empty',
                                          moneyPeso: '---------------',
                                          moneyDolar: '---------------',
                                          moneyUsdt: '---------------'
                                        });
                                        boxList.push({
                                          _id: 'BLUE',
                                          boxList: 'BLUE',
                                          moneyPeso: blueMoneyPeso,
                                          moneyDolar: blueMoneyDolar,
                                          moneyUsdt: blueMoneyUsdt
                                        });
                                        boxList.push({
                                          _id: 'CHEQUES',
                                          boxList: 'CHEQUES',
                                          moneyPeso: checkMoneyPeso,
                                          moneyDolar: checkMoneyDolar,
                                          moneyUsdt: checkMoneyUsdt
                                        });
                                        boxList.push({
                                          _id: 'USDT',
                                          boxList: 'USDT',
                                          moneyPeso: usdtMoneyPeso,
                                          moneyDolar: usdtMoneyDolar,
                                          moneyUsdt: usdtMoneyUsdt
                                        });
                                        boxList.push({
                                          _id: 'De Transferencias',
                                          boxList: 'De Transferencias',
                                          moneyPeso: transferMoneyPeso,
                                          moneyDolar: transferMoneyDolar,
                                          moneyUsdt: transferMoneyUsdt
                                        });
                                        boxList.push({
                                          _id: 'GASTOS -INGRESOS',
                                          boxList: 'GASTOS -INGRESOS',
                                          moneyPeso: movementMoneyPeso,
                                          moneyDolar: movementMoneyDolar,
                                          moneyUsdt: movementMoneyUsdt
                                        });
                                        boxList.push({
                                          _id: 'PRESTAMOS',
                                          boxList: 'PRESTAMOS',
                                          moneyPeso: loanMoneyPeso,
                                          moneyDolar: loanMoneyDolar,
                                          moneyUsdt: loanMoneyUsdt
                                        });
                                        boxList.push({
                                          _id: 'INTERESES PAGADOS',
                                          boxList: 'INTERESES PAGADOS',
                                          moneyPeso: interestMoneyPeso,
                                          moneyDolar: interestMoneyDolar,
                                          moneyUsdt: interestMoneyUsdt
                                        });
                                        boxList.push({
                                          _id: 'INVERSIONES',
                                          boxList: 'INVERSIONES',
                                          moneyPeso: investmentMoneyPeso,
                                          moneyDolar: investmentMoneyDolar,
                                          moneyUsdt: investmentMoneyUsdt
                                        });
                                        boxList.push({
                                          _id: 'Cta CTES OPE',
                                          boxList: 'Cta CTES OPE',
                                          moneyPeso: accountMoneyPeso,
                                          moneyDolar: accountMoneyDolar,
                                          moneyUsdt: accountMoneyUsdt
                                        });
                                        boxList.push({
                                          _id: 'TT CABLES',
                                          boxList: 'TT CABLES',
                                          moneyPeso: wireMoneyPeso,
                                          moneyDolar: wireMoneyDolar,
                                          moneyUsdt: wireMoneyUsdt
                                        });
                                        boxList.push({
                                          _id: 'SALDO BANCOS/CAJA',
                                          boxList: 'SALDO BANCOS/CAJA',
                                          moneyPeso: balanceMoneyPeso,
                                          moneyDolar: balanceMoneyDolar,
                                          moneyUsdt: balanceMoneyUsdt
                                        });
                                        boxList.push({
                                          _id: 'emptyBox',
                                          moneyPeso: '---------------',
                                          moneyDolar: '---------------',
                                          moneyUsdt: '---------------'
                                        });
                                        boxList.push({
                                          _id: 'Total',
                                          boxList: 'Total',
                                          moneyPeso: balanceMoneyPeso,
                                          moneyDolar: balanceMoneyDolar,
                                          moneyUsdt: balanceMoneyUsdt
                                        });

                                        if (result.result[0] !== undefined) {
                                          result.result[0].items = boxList;
                                          result.result[0].count = boxList.length;
                                        } else {
                                          result.result = [];
                                          result.result.push({
                                            items: boxList,
                                            count: boxList.length
                                          });
                                        }

                                        _this4.responserService = {
                                          result: result.result,
                                          message: result.message,
                                          error: result.error,
                                          status: result.status
                                        };
                                        resolve(_this4.responserService);
                                        _context7.next = 150;
                                        break;

                                      case 149:
                                        _this4.responserService = {
                                          result: 'Nop',
                                          message: 'No existe result',
                                          error: 'obj.getAll()',
                                          status: 500
                                        };

                                      case 150:
                                      case "end":
                                        return _context7.stop();
                                    }
                                  }
                                }, _callee7);
                              }));

                              return function (_x35) {
                                return _ref5.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              _this4.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 2:
                            reject(_this4.responserService);

                          case 3:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x33, _x34) {
                    return _ref4.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function getAll(_x16, _x17, _x18, _x19, _x20, _x21, _x22, _x23, _x24, _x25, _x26, _x27, _x28, _x29, _x30, _x31, _x32) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }]);

  return Controller;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "responserService", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "updateableService", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "geteableAllService", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "geteableByIdService", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "saveableService", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "accountService", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "blueService", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "checkService", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "interestService", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "investmentService", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "loanService", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "movementService", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "transferService", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "usdtService", [_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "wireService", [_dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports["default"] = Controller;