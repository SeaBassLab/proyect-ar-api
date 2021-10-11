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

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

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
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id, data, model, idUser) {
        var _this = this;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
                    return _regenerator["default"].wrap(function _callee$(_context) {
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
      var _getById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, model) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
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
      var _save = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(data, model, idUser) {
        var _this3 = this;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(resolve, reject) {
                    return _regenerator["default"].wrap(function _callee5$(_context5) {
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
      var _getAllByType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(model, itemModel, type) {
        var _this4 = this;

        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(resolve, reject) {
                    var storeList, projectItem, matchItem, match;
                    return _regenerator["default"].wrap(function _callee7$(_context7) {
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
      var _getAllByStrain = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(model, itemModel, strain) {
        var _this5 = this;

        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(resolve, reject) {
                    var storeList, projectItem, matchItem, match;
                    return _regenerator["default"].wrap(function _callee9$(_context9) {
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
      var _getAllWithItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(model, itemModel, project, match, sort, group, limit, skip) {
        var _this6 = this;

        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(resolve, reject) {
                    var storeList;
                    return _regenerator["default"].wrap(function _callee11$(_context11) {
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
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(model, project, match, sort, group, limit, skip) {
        var _this7 = this;

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