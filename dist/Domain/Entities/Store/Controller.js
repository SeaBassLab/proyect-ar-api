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
                                  result: "Nop",
                                  message: "La capa superior contesto undefined",
                                  error: "",
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
                                  result: "Nop",
                                  message: "La capa superior contesto undefined",
                                  error: "",
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
                                  result: "Nop",
                                  message: "La capa superior contesto undefined",
                                  error: "",
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
    key: "getAllByType",
    value: function () {
      var _getAllByType = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(model, itemModel, type) {
        var _this4 = this;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(resolve, reject) {
                    var storeList, projectItem, matchItem, match;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            storeList = [];
                            projectItem = {
                              operationType: 1,
                              store: 1,
                              type: 1
                            };
                            matchItem = {
                              operationType: {
                                $ne: "D"
                              },
                              type: {
                                $oid: type
                              }
                            };
                            _context7.next = 5;
                            return _this4.geteableAllService.getAll(itemModel, projectItem, matchItem, {
                              name: 1
                            }, {}, 0, 0).then(function (res) {
                              res.result.map(function (item) {
                                if (item.store !== undefined) {
                                  storeList.push({
                                    $oid: item.store
                                  });
                                }
                              });
                            });

                          case 5:
                            match = {
                              _id: {
                                $in: storeList
                              }
                            };
                            _context7.next = 8;
                            return _this4.geteableAllService.getAll(model, {}, match, {}, {}, 0, 0).then(function (result) {
                              if (result) {
                                _this4.responserService = {
                                  result: result.result,
                                  message: result.message,
                                  error: result.error,
                                  status: result.status
                                };
                                resolve(_this4.responserService);
                              } else {
                                _this4.responserService = {
                                  result: "Nop",
                                  message: "No existe result",
                                  error: "obj.getAll()",
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

                          case 8:
                            reject(_this4.responserService);

                          case 9:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x19, _x20) {
                    return _ref4.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function getAllByType(_x16, _x17, _x18) {
        return _getAllByType.apply(this, arguments);
      }

      return getAllByType;
    }()
  }, {
    key: "getAllByStrain",
    value: function () {
      var _getAllByStrain = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(model, itemModel, strain) {
        var _this5 = this;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(resolve, reject) {
                    var storeList, projectItem, matchItem, match;
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            storeList = [];
                            projectItem = {
                              operationType: 1,
                              store: 1,
                              strain: 1
                            };
                            matchItem = {
                              operationType: {
                                $ne: "D"
                              },
                              strain: {
                                $oid: strain
                              }
                            };
                            _context9.next = 5;
                            return _this5.geteableAllService.getAll(itemModel, projectItem, matchItem, {
                              name: 1
                            }, {}, 0, 0).then(function (res) {
                              res.result.map(function (item) {
                                if (item.store !== undefined) {
                                  storeList.push({
                                    $oid: item.store
                                  });
                                }
                              });
                            });

                          case 5:
                            match = {
                              _id: {
                                $in: storeList
                              }
                            };
                            _context9.next = 8;
                            return _this5.geteableAllService.getAll(model, {}, match, {}, {}, 0, 0).then(function (result) {
                              if (result) {
                                _this5.responserService = {
                                  result: result.result,
                                  message: result.message,
                                  error: result.error,
                                  status: result.status
                                };
                                resolve(_this5.responserService);
                              } else {
                                _this5.responserService = {
                                  result: "Nop",
                                  message: "No existe result",
                                  error: "obj.getAll()",
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this5.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 8:
                            reject(_this5.responserService);

                          case 9:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x24, _x25) {
                    return _ref5.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function getAllByStrain(_x21, _x22, _x23) {
        return _getAllByStrain.apply(this, arguments);
      }

      return getAllByStrain;
    }()
  }, {
    key: "getAllWithItem",
    value: function () {
      var _getAllWithItem = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(model, itemModel, project, match, sort, group, limit, skip) {
        var _this6 = this;

        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(resolve, reject) {
                    var storeList;
                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            storeList = [];

                            if (!(limit === 0)) {
                              _context11.next = 4;
                              break;
                            }

                            _context11.next = 4;
                            return _this6.geteableAllService.getAll(itemModel, {
                              operationType: 1,
                              store: 1
                            }, {
                              operationType: {
                                $ne: "D"
                              }
                            }, {}, {}, 0, 0).then(function (res) {
                              res.result.map(function (item) {
                                if (item.store !== undefined) {
                                  storeList.push({
                                    $oid: item.store
                                  });
                                }
                              });
                            });

                          case 4:
                            match["_id"] = {
                              $in: storeList
                            };
                            _context11.next = 7;
                            return _this6.geteableAllService.getAll(model, project, match, sort, group, limit, skip).then(function (result) {
                              if (result) {
                                _this6.responserService = {
                                  result: result.result,
                                  message: result.message,
                                  error: result.error,
                                  status: result.status
                                };
                                resolve(_this6.responserService);
                              } else {
                                _this6.responserService = {
                                  result: "Nop",
                                  message: "No existe result",
                                  error: "obj.getAll()",
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this6.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 7:
                            reject(_this6.responserService);

                          case 8:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x34, _x35) {
                    return _ref6.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function getAllWithItem(_x26, _x27, _x28, _x29, _x30, _x31, _x32, _x33) {
        return _getAllWithItem.apply(this, arguments);
      }

      return getAllWithItem;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(model, project, match, sort, group, limit, skip) {
        var _this7 = this;

        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(resolve, reject) {
                    return regeneratorRuntime.wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            _context13.next = 2;
                            return _this7.geteableAllService.getAll(model, project, match, sort, group, limit, skip).then(function (result) {
                              if (result) {
                                _this7.responserService = {
                                  result: result.result,
                                  message: result.message,
                                  error: result.error,
                                  status: result.status
                                };
                                resolve(_this7.responserService);
                              } else {
                                _this7.responserService = {
                                  result: "Nop",
                                  message: "No existe result",
                                  error: "obj.getAll()",
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this7.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 2:
                            reject(_this7.responserService);

                          case 3:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13);
                  }));

                  return function (_x43, _x44) {
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

      function getAll(_x36, _x37, _x38, _x39, _x40, _x41, _x42) {
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