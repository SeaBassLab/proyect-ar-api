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

var _inversify2 = _interopRequireDefault(require("./../../../inversify.config"));

var _Dto = _interopRequireDefault(require("../../../Domain/Entities/Strain/Dto"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

var Controller = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_TYPES["default"].ConnectionableProvider), _dec3 = (0, _inversify.inject)(_TYPES["default"].Responseable), _dec4 = (0, _inversify.inject)(_TYPES["default"].Validable), _dec5 = (0, _inversify.named)(_TYPES["default"].Strain), _dec6 = (0, _inversify.inject)(_TYPES["default"].Schemable), _dec7 = (0, _inversify.named)(_TYPES["default"].Strain), _dec8 = (0, _inversify.inject)(_TYPES["default"].StrainServiceableDomain), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function Controller() {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Controller);
    (0, _defineProperty2["default"])(this, "router", _inversify2["default"].get(_TYPES["default"].Router));
    (0, _defineProperty2["default"])(this, "path", "/strain");
    (0, _defineProperty2["default"])(this, "validationProvider", _inversify2["default"].get(_TYPES["default"].Validateable));
    (0, _defineProperty2["default"])(this, "authMid", _inversify2["default"].get(_TYPES["default"].Authenticateable));
    (0, _initializerDefineProperty2["default"])(this, "connectionProvider", _descriptor, this);
    (0, _initializerDefineProperty2["default"])(this, "responserService", _descriptor2, this);
    (0, _initializerDefineProperty2["default"])(this, "dto", _descriptor3, this);
    (0, _initializerDefineProperty2["default"])(this, "schema", _descriptor4, this);
    (0, _initializerDefineProperty2["default"])(this, "service", _descriptor5, this);
    (0, _defineProperty2["default"])(this, "getSchema", /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response, next) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.responserService.res = {
                  result: _this.schema.obj,
                  message: "Consulta exitosa",
                  status: 200,
                  error: ""
                };

                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 2:
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
    (0, _defineProperty2["default"])(this, "getObjById", /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(request, response, next) {
        var model, id, idUser;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context3.sent;
                id = request.params.id;
                idUser = request.user._id;
                _context3.next = 7;
                return _this.service.getById(id, model).then( /*#__PURE__*/function () {
                  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(res) {
                    return _regenerator["default"].wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
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
                                result: "Nop",
                                message: "La capa superior contesto undefined",
                                error: "",
                                status: 500
                              };
                            }

                          case 1:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x7) {
                    return _ref3.apply(this, arguments);
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
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "getAllObjs", /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(request, response, next) {
        var model, error, project, match, sort, group, limit, skip, recivedProject, recivedMatch, recivedSort, recivedGroup, recivedLimit, recivedSkip;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context4.sent;
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
                  _context4.next = 21;
                  break;
                }

                _context4.next = 19;
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
                        message: "No existe el res.result",
                        status: 500,
                        error: "obj.getAllObjs()"
                      };
                    }
                  } else {
                    _this.responserService.res = {
                      result: [],
                      message: "No existe el res",
                      status: 500,
                      error: "obj.getAllObjs()"
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
                _context4.next = 22;
                break;

              case 21:
                _this.responserService.res = {
                  result: [],
                  message: "No se puede realizar la consulta",
                  status: 428,
                  error: "Error en los parametros enviados"
                };

              case 22:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 23:
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
    (0, _defineProperty2["default"])(this, "saveObj", /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(request, response, next) {
        var model, objData, id;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context5.sent;
                objData = request.body;
                id = request.user._id;
                _context5.next = 7;
                return _this.service.save(objData, model, id).then(function (res) {
                  if (res && res.result !== undefined) {
                    _this.responserService.res = {
                      result: res.result,
                      message: res.message,
                      status: res.status,
                      error: res.error
                    };
                  } else {
                    _this.responserService.res = {
                      result: "Nop",
                      message: "La capa superior contesto undefined",
                      error: "",
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

              case 7:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x11, _x12, _x13) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "updateObj", /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(request, response, next) {
        var model, id, objData, idUser;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context7.sent;
                id = request.params.id;
                objData = request.body;
                idUser = request.user._id;
                _context7.next = 8;
                return _this.service.getById(id, model).then( /*#__PURE__*/function () {
                  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(res) {
                    return _regenerator["default"].wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            if (!(res && res.result !== undefined)) {
                              _context6.next = 9;
                              break;
                            }

                            if (!(res.status === 200)) {
                              _context6.next = 6;
                              break;
                            }

                            _context6.next = 4;
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
                                  result: "Nop",
                                  message: "La capa superior contesto undefined",
                                  error: "",
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
                            _context6.next = 7;
                            break;

                          case 6:
                            _this.responserService.res = {
                              result: res.result,
                              message: res.message,
                              status: res.status,
                              error: res.error
                            };

                          case 7:
                            _context6.next = 10;
                            break;

                          case 9:
                            _this.responserService.res = {
                              result: "Nop",
                              message: "La capa superior contesto undefined",
                              error: "",
                              status: 500
                            };

                          case 10:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }));

                  return function (_x17) {
                    return _ref7.apply(this, arguments);
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
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x14, _x15, _x16) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "deleteObj", /*#__PURE__*/function () {
      var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(request, response, next) {
        var model, id, idUser;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context9.sent;
                id = request.params.id;
                idUser = request.user._id;
                _context9.next = 7;
                return _this.service.getById(id, model).then( /*#__PURE__*/function () {
                  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(getObjById) {
                    var obj;
                    return _regenerator["default"].wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            if (!getObjById) {
                              _context8.next = 7;
                              break;
                            }

                            obj = getObjById.result;
                            obj.operationType = "D";
                            _context8.next = 5;
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
                                  result: "Nop",
                                  message: "La capa superior contesto undefined",
                                  error: "",
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
                            _context8.next = 8;
                            break;

                          case 7:
                            _this.responserService.res = {
                              result: "Nop",
                              message: "La capa superior contesto undefined",
                              error: "",
                              status: 500
                            };

                          case 8:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x21) {
                    return _ref9.apply(this, arguments);
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
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function (_x18, _x19, _x20) {
        return _ref8.apply(this, arguments);
      };
    }());
    this.initializeRoutes(this.validationProvider);
  }

  (0, _createClass2["default"])(Controller, [{
    key: "initializeRoutes",
    value: function initializeRoutes(validationProvider) {
      this.router.get(this.path, [this.authMid.authenticate], this.getAllObjs).get("".concat(this.path, "/schema"), [this.authMid.authenticate], this.getSchema).get("".concat(this.path, "/:id"), [this.authMid.authenticate], this.getObjById).post(this.path, [this.authMid.authenticate, validationProvider.validate(_Dto["default"])], this.saveObj).put("".concat(this.path, "/:id"), [this.authMid.authenticate, validationProvider.validate(_Dto["default"], true)], this.updateObj)["delete"]("".concat(this.path, "/:id"), [this.authMid.authenticate], this.deleteObj);
    }
  }]);
  return Controller;
}(), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "connectionProvider", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "responserService", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "dto", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "schema", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "service", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports["default"] = Controller;