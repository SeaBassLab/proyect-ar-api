"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inversify = require("inversify");

var _TYPES = _interopRequireDefault(require("./../../../TYPES"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

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

var Controller = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_TYPES["default"].ResponseableDomain), _dec3 = (0, _inversify.inject)(_TYPES["default"].Updateable), _dec4 = (0, _inversify.inject)(_TYPES["default"].GeteableAll), _dec5 = (0, _inversify.inject)(_TYPES["default"].GeteableById), _dec6 = (0, _inversify.inject)(_TYPES["default"].Saveable), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);

    _initializerDefineProperty(this, "responserService", _descriptor, this);

    _initializerDefineProperty(this, "updateableService", _descriptor2, this);

    _initializerDefineProperty(this, "geteableAllService", _descriptor3, this);

    _initializerDefineProperty(this, "geteableByIdService", _descriptor4, this);

    _initializerDefineProperty(this, "saveableService", _descriptor5, this);
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
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(itemModel, purchaseModel, informationModel, project, match, sort, group, limit, skip) {
        var _this4 = this;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(resolve, reject) {
                    var storeList;
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            storeList = [];
                            _context9.next = 3;
                            return _this4.geteableAllService.getAll(itemModel, project, match, sort, group, limit, skip).then( /*#__PURE__*/function () {
                              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(result) {
                                var matchPurchase, matchInformation, item;
                                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                                  while (1) {
                                    switch (_context8.prev = _context8.next) {
                                      case 0:
                                        if (!result) {
                                          _context8.next = 19;
                                          break;
                                        }

                                        if (result.result !== undefined && result.result !== null && result.result[0] !== undefined && result.result[0].items !== undefined && Array.isArray(result.result[0].items) && result.result[0].items.length > 0) {
                                          result.result[0].items.map(function (item) {
                                            if (item.image !== undefined && item.image !== null && item.image !== '') {
                                              item.image = process.env.API + '/image/' + item.image;
                                            } else {
                                              item.image = process.env.API + '/image/silueta.png';
                                            }
                                          });
                                          result.result[0].items.map(function (item) {
                                            if (item._id !== undefined) {
                                              storeList.push({
                                                $oid: item._id
                                              });
                                            }
                                          });
                                        } else {// if(
                                          // 	result.result !== undefined &&
                                          // 	result.result !== null &&
                                          // 	Array.isArray(result.result) &&
                                          // 	result.result.length > 0
                                          // ) {
                                          // 	result.result.map((item: Item) => {
                                          // 		if(
                                          // 			item.image !== undefined &&
                                          // 			item.image !== null &&
                                          // 			item.image !== ''
                                          // 		) {
                                          // 			item.image = process.env.API + '/image/' + item.image
                                          // 		} else {
                                          // 			item.image = process.env.API + '/image/silueta.png'
                                          // 		}
                                          // 	})
                                          // }
                                        }

                                        if (!(result.result !== undefined && result.result !== null && result.result[0] !== undefined && result.result[0].items !== undefined && Array.isArray(result.result[0].items) && result.result[0].items.length > 0)) {
                                          _context8.next = 9;
                                          break;
                                        }

                                        matchPurchase = {
                                          item: {
                                            $in: storeList
                                          },
                                          operationType: {
                                            $ne: 'D'
                                          }
                                        };
                                        matchInformation = {
                                          item: {
                                            $in: storeList
                                          },
                                          isCheckout: true,
                                          operationType: {
                                            $ne: 'D'
                                          }
                                        };
                                        _context8.next = 7;
                                        return Promise.all(result.result[0].items.map( /*#__PURE__*/function () {
                                          var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(item) {
                                            var stock;
                                            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                                              while (1) {
                                                switch (_context7.prev = _context7.next) {
                                                  case 0:
                                                    stock = 0;
                                                    _context7.next = 3;
                                                    return _this4.geteableAllService.getAll(purchaseModel, {
                                                      _id: 1,
                                                      operationType: 1,
                                                      item: 1,
                                                      quantity: 1
                                                    }, matchPurchase, {}, {}, 0, 0).then(function (res) {
                                                      if (Array.isArray(res.result) && res.result.length > 0) {
                                                        res.result.map(function (purchase) {
                                                          if (item._id.toString() === purchase.item.toString()) {
                                                            stock = stock + purchase.quantity;
                                                          }
                                                        });
                                                      }
                                                    })["catch"](function (err) {
                                                      _this4.responserService = {
                                                        result: err.result,
                                                        message: err.message,
                                                        error: err.error,
                                                        status: err.status
                                                      };
                                                    });

                                                  case 3:
                                                    _context7.next = 5;
                                                    return _this4.geteableAllService.getAll(informationModel, {
                                                      _id: 1,
                                                      operationType: 1,
                                                      item: 1,
                                                      quantity: 1,
                                                      isCheckout: 1
                                                    }, matchInformation, {}, {}, 0, 0).then(function (res) {
                                                      if (Array.isArray(res.result) && res.result.length > 0) {
                                                        res.result.map(function (information) {
                                                          if (item._id.toString() === information.item.toString()) {
                                                            stock = stock - information.quantity;
                                                          }
                                                        });
                                                      }
                                                    })["catch"](function (err) {
                                                      _this4.responserService = {
                                                        result: err.result,
                                                        message: err.message,
                                                        error: err.error,
                                                        status: err.status
                                                      };
                                                    });

                                                  case 5:
                                                    item['quantity'] = stock;

                                                  case 6:
                                                  case "end":
                                                    return _context7.stop();
                                                }
                                              }
                                            }, _callee7);
                                          }));

                                          return function (_x28) {
                                            return _ref6.apply(this, arguments);
                                          };
                                        }()));

                                      case 7:
                                        _context8.next = 15;
                                        break;

                                      case 9:
                                        item = result.result;
                                        _context8.next = 12;
                                        return _this4.geteableAllService.getAll(purchaseModel, {
                                          _id: 1,
                                          operationType: 1,
                                          item: 1,
                                          quantity: 1
                                        }, {
                                          operationType: {
                                            $ne: 'D'
                                          },
                                          item: {
                                            $oid: item._id
                                          }
                                        }, {}, {}, 0, 0).then(function (res) {
                                          if (Array.isArray(res.result) && res.result.length > 0) {
                                            res.result.map(function (purchase) {
                                              item.stock = item.stock + purchase.quantity;
                                            });
                                          }
                                        })["catch"](function (err) {
                                          _this4.responserService = {
                                            result: err.result,
                                            message: err.message,
                                            error: err.error,
                                            status: err.status
                                          };
                                        });

                                      case 12:
                                        _context8.next = 14;
                                        return _this4.geteableAllService.getAll(informationModel, {
                                          _id: 1,
                                          operationType: 1,
                                          item: 1,
                                          quantity: 1
                                        }, {
                                          operationType: {
                                            $ne: 'D'
                                          },
                                          item: {
                                            $oid: item._id
                                          }
                                        }, {}, {}, 0, 0).then(function (res) {
                                          if (Array.isArray(res.result) && res.result.length > 0) {
                                            res.result.map(function (information) {
                                              item.stock = item.stock - information.quantity;
                                            });
                                          }
                                        })["catch"](function (err) {
                                          _this4.responserService = {
                                            result: err.result,
                                            message: err.message,
                                            error: err.error,
                                            status: err.status
                                          };
                                        });

                                      case 14:
                                        if (item.image !== undefined && item.image !== null && item.image !== '') {
                                          item.image = process.env.API + '/image/' + item.image;
                                        } else {
                                          item.image = process.env.API + '/image/silueta.png';
                                        }

                                      case 15:
                                        _this4.responserService = {
                                          result: result.result,
                                          message: result.message,
                                          error: result.error,
                                          status: result.status
                                        };
                                        resolve(_this4.responserService);
                                        _context8.next = 20;
                                        break;

                                      case 19:
                                        _this4.responserService = {
                                          result: 'Nop',
                                          message: 'No existe result',
                                          error: 'obj.getAll()',
                                          status: 500
                                        };

                                      case 20:
                                      case "end":
                                        return _context8.stop();
                                    }
                                  }
                                }, _callee8);
                              }));

                              return function (_x27) {
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

                          case 3:
                            reject(_this4.responserService);

                          case 4:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x25, _x26) {
                    return _ref4.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function getAll(_x16, _x17, _x18, _x19, _x20, _x21, _x22, _x23, _x24) {
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
})), _class2)) || _class);
exports["default"] = Controller;