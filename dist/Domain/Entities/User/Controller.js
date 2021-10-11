"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inversify = require("inversify");

var _bcryptjs = require("bcryptjs");

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
                            if (!(data.password !== undefined && data.password !== '')) {
                              _context.next = 4;
                              break;
                            }

                            _context.next = 3;
                            return (0, _bcryptjs.hash)(data.password, 10);

                          case 3:
                            data.password = _context.sent;

                          case 4:
                            _context.next = 6;
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
                                  status: 501
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

                          case 6:
                            reject(_this.responserService);

                          case 7:
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
    key: "hashPassword",
    value: function () {
      var _hashPassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(pass) {
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
                            return (0, _bcryptjs.hash)(pass, 10).then(function (res) {
                              if (res) {
                                _this2.responserService = {
                                  result: res,
                                  message: 'Consulta exitosa',
                                  error: '',
                                  status: 200
                                };
                                resolve(_this2.responserService);
                              } else {
                                _this2.responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior constesto undefined',
                                  error: '',
                                  status: 501
                                };
                              }
                            })["catch"](function (err) {
                              _this2.responserService = {
                                result: 'Nop',
                                message: 'No se pudo realizar el hasheo',
                                error: err,
                                status: 501
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

                  return function (_x8, _x9) {
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

      function hashPassword(_x7) {
        return _hashPassword.apply(this, arguments);
      }

      return hashPassword;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id, model) {
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
                            return _this3.geteableByIdService.getById(id, model, model).then(function (res) {
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
                                  status: 501
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
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x12, _x13) {
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

      function getById(_x10, _x11) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }, {
    key: "isEnable",
    value: function () {
      var _isEnable = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(id, model) {
        var _this4 = this;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(resolve, reject) {
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return _this4.geteableAllService.getById(id, model, model).then(function (res) {
                              if (res && res.result !== undefined) {
                                var user = res.result;
                                var _isEnable2 = false;
                                if (user.enabled) _isEnable2 = true;
                                _this4.responserService = {
                                  result: _isEnable2,
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
                                  status: 501
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

                          case 2:
                            reject(_this4.responserService);

                          case 3:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x16, _x17) {
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

      function isEnable(_x14, _x15) {
        return _isEnable.apply(this, arguments);
      }

      return isEnable;
    }()
  }, {
    key: "isMatch",
    value: function () {
      var _isMatch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(loginPass, userPass) {
        var _this5 = this;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(resolve, reject) {
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            _context9.next = 2;
                            return (0, _bcryptjs.compare)(loginPass, userPass).then(function (res) {
                              if (res !== undefined) {
                                var _isMatch2 = false;
                                if (res) _isMatch2 = true;
                                _this5.responserService = {
                                  result: _isMatch2,
                                  message: 'Consulta exitosa',
                                  error: '',
                                  status: 200
                                };
                                resolve(_this5.responserService);
                              } else {
                                _this5.responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined',
                                  error: '',
                                  status: 501
                                };
                              }
                            })["catch"](function (err) {
                              _this5.responserService = {
                                result: 'Nop',
                                message: err.message,
                                error: err,
                                status: 428
                              };
                            });

                          case 2:
                            reject(_this5.responserService);

                          case 3:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x20, _x21) {
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

      function isMatch(_x18, _x19) {
        return _isMatch.apply(this, arguments);
      }

      return isMatch;
    }()
  }, {
    key: "getUserByEmail",
    value: function () {
      var _getUserByEmail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(email, model, permissionModel) {
        var _this6 = this;

        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(resolve, reject) {
                    return regeneratorRuntime.wrap(function _callee12$(_context12) {
                      while (1) {
                        switch (_context12.prev = _context12.next) {
                          case 0:
                            _context12.next = 2;
                            return _this6.geteableAllService.getAll(model, {}, {
                              email: email,
                              operationType: {
                                $ne: 'D'
                              }
                            }, {}, {}, 1, 0).then( /*#__PURE__*/function () {
                              var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(res) {
                                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                                  while (1) {
                                    switch (_context11.prev = _context11.next) {
                                      case 0:
                                        if (res && res.result !== undefined) {
                                          _this6.responserService = {
                                            result: res.result,
                                            message: res.message,
                                            error: res.error,
                                            status: res.status
                                          };
                                          resolve(_this6.responserService);
                                        } else {
                                          _this6.responserService = {
                                            result: 'Nop',
                                            message: 'La capa superior contesto undefined',
                                            error: '',
                                            status: 500
                                          };
                                        }

                                      case 1:
                                      case "end":
                                        return _context11.stop();
                                    }
                                  }
                                }, _callee11);
                              }));

                              return function (_x27) {
                                return _ref7.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              _this6.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err,
                                status: err.status
                              };
                            });

                          case 2:
                            reject(_this6.responserService);

                          case 3:
                          case "end":
                            return _context12.stop();
                        }
                      }
                    }, _callee12);
                  }));

                  return function (_x25, _x26) {
                    return _ref6.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      function getUserByEmail(_x22, _x23, _x24) {
        return _getUserByEmail.apply(this, arguments);
      }

      return getUserByEmail;
    }()
  }, {
    key: "getUserByUser",
    value: function () {
      var _getUserByUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(user, model) {
        var _this7 = this;

        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(resolve, reject) {
                    return regeneratorRuntime.wrap(function _callee14$(_context14) {
                      while (1) {
                        switch (_context14.prev = _context14.next) {
                          case 0:
                            _context14.next = 2;
                            return _this7.geteableAllService.getAll(model, {}, {
                              user: user,
                              operationType: {
                                $ne: 'D'
                              }
                            }, {}, {}, 0, 0).then(function (res) {
                              if (res && res.result !== undefined) {
                                if (res.result.length > 0) {
                                  _this7.responserService = {
                                    result: res.result[0],
                                    message: 'Consulta exitosa',
                                    error: '',
                                    status: 200
                                  };
                                } else {
                                  _this7.responserService = {
                                    result: [],
                                    message: 'Consulta exitosa',
                                    error: 'No existe un usuario con ese email',
                                    status: 200
                                  };
                                }

                                resolve(_this7.responserService);
                              } else {
                                _this7.responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined',
                                  error: '',
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this7.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err,
                                status: err.status
                              };
                            });

                          case 2:
                            reject(_this7.responserService);

                          case 3:
                          case "end":
                            return _context14.stop();
                        }
                      }
                    }, _callee14);
                  }));

                  return function (_x30, _x31) {
                    return _ref8.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }));

      function getUserByUser(_x28, _x29) {
        return _getUserByUser.apply(this, arguments);
      }

      return getUserByUser;
    }()
  }, {
    key: "existUserWithThatEmail",
    value: function () {
      var _existUserWithThatEmail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(email, model) {
        var _this8 = this;

        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                return _context17.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(resolve, reject) {
                    return regeneratorRuntime.wrap(function _callee16$(_context16) {
                      while (1) {
                        switch (_context16.prev = _context16.next) {
                          case 0:
                            _context16.next = 2;
                            return _this8.geteableAllService.getAll(model, {}, {
                              email: email,
                              operationType: {
                                $ne: 'D'
                              }
                            }, {}, {}, 0, 0).then(function (res) {
                              if (res && res.result !== undefined) {
                                var exist = false;
                                if (res.result.length > 0) exist = true;
                                _this8.responserService = {
                                  result: exist,
                                  message: 'Consulta exitosa',
                                  error: '',
                                  status: 200
                                };
                                resolve(_this8.responserService);
                              } else {
                                _this8.responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined',
                                  error: '',
                                  status: 500
                                };
                              }

                              reject(_this8.responserService);
                            })["catch"](function (err) {
                              _this8.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err,
                                status: err.status
                              };
                              reject(_this8.responserService);
                            });

                          case 2:
                          case "end":
                            return _context16.stop();
                        }
                      }
                    }, _callee16);
                  }));

                  return function (_x34, _x35) {
                    return _ref9.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }));

      function existUserWithThatEmail(_x32, _x33) {
        return _existUserWithThatEmail.apply(this, arguments);
      }

      return existUserWithThatEmail;
    }()
  }, {
    key: "existUserWithThatUser",
    value: function () {
      var _existUserWithThatUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(user, model) {
        var _this9 = this;

        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                return _context19.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(resolve, reject) {
                    return regeneratorRuntime.wrap(function _callee18$(_context18) {
                      while (1) {
                        switch (_context18.prev = _context18.next) {
                          case 0:
                            _context18.next = 2;
                            return _this9.geteableAllService.getAll(model, {}, {
                              user: user,
                              operationType: {
                                $ne: 'D'
                              }
                            }, {}, {}, 0, 0).then(function (res) {
                              if (res && res.result !== undefined) {
                                var exist = false;
                                if (res.result.length > 0) exist = true;
                                _this9.responserService = {
                                  result: exist,
                                  message: 'Consulta exitosa',
                                  error: '',
                                  status: 200
                                };
                                resolve(_this9.responserService);
                              } else {
                                _this9.responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined',
                                  error: '',
                                  status: 500
                                };
                              }

                              reject(_this9.responserService);
                            })["catch"](function (err) {
                              _this9.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err,
                                status: err.status
                              };
                              reject(_this9.responserService);
                            });

                          case 2:
                          case "end":
                            return _context18.stop();
                        }
                      }
                    }, _callee18);
                  }));

                  return function (_x38, _x39) {
                    return _ref10.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }));

      function existUserWithThatUser(_x36, _x37) {
        return _existUserWithThatUser.apply(this, arguments);
      }

      return existUserWithThatUser;
    }()
  }, {
    key: "save",
    value: function () {
      var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(data, model, idUser) {
        var _this10 = this;

        var user;
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                user = data;
                user.enabled = true;
                return _context21.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(resolve, reject) {
                    return regeneratorRuntime.wrap(function _callee20$(_context20) {
                      while (1) {
                        switch (_context20.prev = _context20.next) {
                          case 0:
                            if (!idUser) {
                              _context20.next = 6;
                              break;
                            }

                            _context20.next = 3;
                            return _this10.saveableService.save(user, model, model, idUser).then(function (res) {
                              if (res && res.result !== undefined) {
                                _this10.responserService = {
                                  result: res.result,
                                  message: res.message,
                                  error: res.error,
                                  status: res.status
                                };
                                resolve(_this10.responserService);
                              } else {
                                _this10.responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined',
                                  error: '',
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this10.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 3:
                            reject(_this10.responserService);
                            _context20.next = 9;
                            break;

                          case 6:
                            _context20.next = 8;
                            return _this10.saveableService.save(user, model, model).then(function (res) {
                              if (res && res.result !== undefined) {
                                _this10.responserService = {
                                  result: res.result,
                                  message: res.message,
                                  error: res.error,
                                  status: res.status
                                };
                                resolve(_this10.responserService);
                              } else {
                                _this10.responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined',
                                  error: '',
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this10.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 8:
                            reject(_this10.responserService);

                          case 9:
                          case "end":
                            return _context20.stop();
                        }
                      }
                    }, _callee20);
                  }));

                  return function (_x43, _x44) {
                    return _ref11.apply(this, arguments);
                  };
                }()));

              case 3:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21);
      }));

      function save(_x40, _x41, _x42) {
        return _save.apply(this, arguments);
      }

      return save;
    }()
  }, {
    key: "saveWithUser",
    value: function () {
      var _saveWithUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(data, model, idUser) {
        var _this11 = this;

        var user;
        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                user = data;
                user.enabled = true;
                return _context23.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(resolve, reject) {
                    return regeneratorRuntime.wrap(function _callee22$(_context22) {
                      while (1) {
                        switch (_context22.prev = _context22.next) {
                          case 0:
                            if (!idUser) {
                              _context22.next = 6;
                              break;
                            }

                            _context22.next = 3;
                            return _this11.saveableService.save(user, model, model, idUser).then(function (res) {
                              if (res && res.result !== undefined) {
                                _this11.responserService = {
                                  result: res.result,
                                  message: res.message,
                                  error: res.error,
                                  status: res.status
                                };
                                resolve(_this11.responserService);
                              } else {
                                _this11.responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined',
                                  error: '',
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this11.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 3:
                            reject(_this11.responserService);
                            _context22.next = 9;
                            break;

                          case 6:
                            _context22.next = 8;
                            return _this11.saveableService.save(user, model, model).then(function (res) {
                              if (res && res.result !== undefined) {
                                _this11.responserService = {
                                  result: res.result,
                                  message: res.message,
                                  error: res.error,
                                  status: res.status
                                };
                                resolve(_this11.responserService);
                              } else {
                                _this11.responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined',
                                  error: '',
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this11.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 8:
                            reject(_this11.responserService);

                          case 9:
                          case "end":
                            return _context22.stop();
                        }
                      }
                    }, _callee22);
                  }));

                  return function (_x48, _x49) {
                    return _ref12.apply(this, arguments);
                  };
                }()));

              case 3:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23);
      }));

      function saveWithUser(_x45, _x46, _x47) {
        return _saveWithUser.apply(this, arguments);
      }

      return saveWithUser;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(model, project, match, sort, group, limit, skip) {
        var _this12 = this;

        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                return _context25.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(resolve, reject) {
                    return regeneratorRuntime.wrap(function _callee24$(_context24) {
                      while (1) {
                        switch (_context24.prev = _context24.next) {
                          case 0:
                            _context24.next = 2;
                            return _this12.geteableAllService.getAll(model, project, match, sort, group, limit, skip).then(function (result) {
                              if (result) {
                                _this12.responserService = {
                                  result: result.result,
                                  message: result.message,
                                  error: result.error,
                                  status: result.status
                                };
                                resolve(_this12.responserService);
                              } else {
                                _this12.responserService = {
                                  result: 'Nop',
                                  message: 'No existe result',
                                  error: 'obj.getAll()',
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this12.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 2:
                            reject(_this12.responserService);

                          case 3:
                          case "end":
                            return _context24.stop();
                        }
                      }
                    }, _callee24);
                  }));

                  return function (_x57, _x58) {
                    return _ref13.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25);
      }));

      function getAll(_x50, _x51, _x52, _x53, _x54, _x55, _x56) {
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