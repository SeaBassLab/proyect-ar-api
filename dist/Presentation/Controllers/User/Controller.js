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

var _xlsx = _interopRequireDefault(require("xlsx"));

var _TYPES = _interopRequireDefault(require("./../../../TYPES"));

var _inversify2 = _interopRequireDefault(require("./../../../inversify.config"));

var _multer = _interopRequireDefault(require("multer"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;

var path = require('path');

var Controller = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_TYPES["default"].ConnectionableProvider), _dec3 = (0, _inversify.inject)(_TYPES["default"].Responseable), _dec4 = (0, _inversify.inject)(_TYPES["default"].Validable), _dec5 = (0, _inversify.named)(_TYPES["default"].User), _dec6 = (0, _inversify.inject)(_TYPES["default"].Schemable), _dec7 = (0, _inversify.named)(_TYPES["default"].User), _dec8 = (0, _inversify.inject)(_TYPES["default"].UserServiceableDomain), _dec9 = (0, _inversify.inject)(_TYPES["default"].Schemable), _dec10 = (0, _inversify.named)(_TYPES["default"].Company), _dec11 = (0, _inversify.inject)(_TYPES["default"].Schemable), _dec12 = (0, _inversify.named)(_TYPES["default"].Mail), _dec13 = (0, _inversify.inject)(_TYPES["default"].Schemable), _dec14 = (0, _inversify.named)(_TYPES["default"].Subscription), _dec15 = (0, _inversify.inject)(_TYPES["default"].CompanyServiceableDomain), _dec16 = (0, _inversify.inject)(_TYPES["default"].Authenticable), _dec17 = (0, _inversify.inject)(_TYPES["default"].Authenticable), _dec18 = (0, _inversify.inject)(_TYPES["default"].Controlleable), _dec(_class = (_class2 = /*#__PURE__*/function () {
  //TODO quitar esta dependencia
  function Controller() {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Controller);
    (0, _defineProperty2["default"])(this, "router", _inversify2["default"].get(_TYPES["default"].Router));
    (0, _defineProperty2["default"])(this, "path", '/user');
    (0, _defineProperty2["default"])(this, "validationProvider", _inversify2["default"].get(_TYPES["default"].Validateable));
    (0, _defineProperty2["default"])(this, "authMid", _inversify2["default"].get(_TYPES["default"].Authenticateable));
    (0, _initializerDefineProperty2["default"])(this, "connectionProvider", _descriptor, this);
    (0, _initializerDefineProperty2["default"])(this, "responserService", _descriptor2, this);
    (0, _initializerDefineProperty2["default"])(this, "dto", _descriptor3, this);
    (0, _initializerDefineProperty2["default"])(this, "schema", _descriptor4, this);
    (0, _initializerDefineProperty2["default"])(this, "service", _descriptor5, this);
    (0, _initializerDefineProperty2["default"])(this, "companySchema", _descriptor6, this);
    (0, _initializerDefineProperty2["default"])(this, "mailSchema", _descriptor7, this);
    (0, _initializerDefineProperty2["default"])(this, "subscriptionSchema", _descriptor8, this);
    (0, _initializerDefineProperty2["default"])(this, "companyService", _descriptor9, this);
    (0, _initializerDefineProperty2["default"])(this, "authenticationService", _descriptor10, this);
    (0, _initializerDefineProperty2["default"])(this, "tokenProvider", _descriptor11, this);
    (0, _initializerDefineProperty2["default"])(this, "controllerService", _descriptor12, this);
    (0, _defineProperty2["default"])(this, "storage", _inversify2["default"].get(_TYPES["default"].GeteableCompanyStorage));
    (0, _defineProperty2["default"])(this, "bulk", /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response, next) {
        var users, rol, database, subscriptionModel, mailModel, companyModel, model, workbook, sheet_name_list, wbJson;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                users = request.params.users;
                rol = request.params.rol;
                database = request.database;
                _context.next = 5;
                return _this.connectionProvider.getModel(database, _this.subscriptionSchema.name, _this.subscriptionSchema);

              case 5:
                subscriptionModel = _context.sent;
                _context.next = 8;
                return _this.connectionProvider.getModel(database, _this.mailSchema.name, _this.mailSchema);

              case 8:
                mailModel = _context.sent;
                _context.next = 11;
                return _this.connectionProvider.getModel(database, _this.companySchema.name, _this.companySchema);

              case 11:
                companyModel = _context.sent;
                _context.next = 14;
                return _this.connectionProvider.getModel(database, _this.schema.name, _this.schema);

              case 14:
                model = _context.sent;

                try {
                  workbook = _xlsx["default"].readFile(path.join(__dirname, './../../../../uploads/', users));
                  sheet_name_list = workbook.SheetNames;
                  wbJson = _xlsx["default"].utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

                  if (wbJson.length > 0) {
                    wbJson.map(function (row) {
                      var email = row.mail.toLowerCase();
                      var user = {
                        email: email,
                        password: 'infosanofi',
                        rol: rol
                      };

                      _this.service.getAll(model, {}, {
                        email: email,
                        operationType: {
                          $ne: 'D'
                        }
                      }, {}, {}, 0, 0).then(function (res) {
                        if (res !== undefined && res.result !== undefined) {
                          if (Array.isArray(res.result)) {
                            if (res.result.length === 0) {
                              _this.authenticationService.register(user, database, model, companyModel, mailModel, subscriptionModel).then(function (res) {
                                console.log('El mail ' + email + ' fue registrado con exito');
                              })["catch"](function (err) {
                                console.log(err);
                              });
                            } else {
                              console.log('El mail ' + email + ' ya existe');
                            }
                          }
                        }
                      })["catch"](function (err) {
                        console.log(err);
                      });
                    });
                  }

                  _this.responserService.res = {
                    result: null,
                    message: 'asd',
                    status: 200,
                    error: 'asd'
                  };
                } catch (e) {
                  _this.responserService.res = {
                    result: null,
                    message: 'Error en la lectura del archivo. Realizar un nuevo upload',
                    status: 428,
                    error: e.toString()
                  };
                }

                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 17:
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
    (0, _defineProperty2["default"])(this, "getSchema", /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(request, response, next) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
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
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "getObjById", /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(request, response, next) {
        var model, id, idUser;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context4.sent;
                id = request.params.id;
                idUser = request.user._id;
                _context4.next = 7;
                return _this.service.getById(id, model).then( /*#__PURE__*/function () {
                  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(res) {
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
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
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x10) {
                    return _ref4.apply(this, arguments);
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
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "upload", /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(request, response, next) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (request.file && request.file.filename) {
                  _this.responserService.res = {
                    result: request.file.filename,
                    message: 'Upload exitoso',
                    status: 200,
                    error: ''
                  };
                } else {
                  _this.responserService.res = {
                    result: 'Nop',
                    message: 'Algo sapó',
                    status: 500,
                    error: 'ni idea'
                  };
                }

                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 2:
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
    (0, _defineProperty2["default"])(this, "getAllObjs", /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(request, response, next) {
        var model, error, project, match, sort, group, limit, skip, recivedProject, recivedMatch, recivedSort, recivedGroup, recivedLimit, recivedSkip;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context6.sent;
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
                  _context6.next = 21;
                  break;
                }

                _context6.next = 19;
                return _this.service.getAll(model, project, match, sort, group, limit, skip).then(function (res) {
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

              case 19:
                _context6.next = 22;
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
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x14, _x15, _x16) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "saveObj", /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(request, response, next) {
        var model, companyModel, mailModel, subscriptionModel, objData, database;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context8.sent;
                _context8.next = 5;
                return _this.connectionProvider.getModel(request.database, _this.companySchema.name, _this.companySchema);

              case 5:
                companyModel = _context8.sent;
                _context8.next = 8;
                return _this.connectionProvider.getModel(request.database, _this.mailSchema.name, _this.mailSchema);

              case 8:
                mailModel = _context8.sent;
                _context8.next = 11;
                return _this.connectionProvider.getModel(request.database, _this.subscriptionSchema.name, _this.subscriptionSchema);

              case 11:
                subscriptionModel = _context8.sent;
                objData = request.body;
                database = request.database;
                objData.password = 'infosercome'; //TODO esto va mas abajo (revisar el register tmb, en el caso de que se baje)

                _context8.next = 17;
                return _this.service.getAll(model, {}, {
                  email: objData.email,
                  operationType: {
                    $ne: 'D'
                  }
                }, {}, {}, 0, 0).then( /*#__PURE__*/function () {
                  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(res) {
                    return _regenerator["default"].wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            if (!(res && res.result !== undefined)) {
                              _context7.next = 9;
                              break;
                            }

                            if (!(res.result.length === 0)) {
                              _context7.next = 6;
                              break;
                            }

                            _context7.next = 4;
                            return _this.authenticationService.register(objData, database, model, companyModel, mailModel, subscriptionModel).then(function (res) {
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
                                status: err.status,
                                error: err.error
                              };
                            });

                          case 4:
                            _context7.next = 7;
                            break;

                          case 6:
                            _this.responserService.res = {
                              result: 'Nop',
                              message: 'No se pudo realizar el alta',
                              status: 428,
                              error: 'La entidad con los parametros solicitados, ya existe'
                            };

                          case 7:
                            _context7.next = 10;
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
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x20) {
                    return _ref8.apply(this, arguments);
                  };
                }())["catch"](function (err) {
                  _this.responserService.res = {
                    result: err.result,
                    message: err.message,
                    error: err.error,
                    status: err.status
                  };
                });

              case 17:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 18:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x17, _x18, _x19) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "updateObj", /*#__PURE__*/function () {
      var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(request, response, next) {
        var model, id, objData, idUser;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
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
                delete objData.password;
                _context10.next = 9;
                return _this.service.getById(id, model).then( /*#__PURE__*/function () {
                  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(res) {
                    return _regenerator["default"].wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            if (!(res && res.result !== undefined)) {
                              _context9.next = 5;
                              break;
                            }

                            _context9.next = 3;
                            return _this.service.update(id, objData, model, idUser).then(function (update) {
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

                          case 3:
                            _context9.next = 6;
                            break;

                          case 5:
                            _this.responserService.res = {
                              result: 'Nop',
                              message: 'La capa superior contesto undefined',
                              error: '',
                              status: 500
                            };

                          case 6:
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

              case 9:
                if (_this.responserService.res) {
                  if (_this.responserService.res.status) {
                    response.status(_this.responserService.res.status).send(_this.responserService.res);
                  } else {
                    response.send(_this.responserService.res);
                  }
                } else {
                  _this.responserService.res = {
                    result: 'Nop',
                    message: 'No existe res',
                    error: '',
                    status: 500
                  };
                  response.send(_this.responserService.res);
                }

              case 10:
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
    (0, _defineProperty2["default"])(this, "deleteObj", /*#__PURE__*/function () {
      var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(request, response, next) {
        var model, id, idUser;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
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
                  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(getObjById) {
                    var obj;
                    return _regenerator["default"].wrap(function _callee11$(_context11) {
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
    this.initializeRoutes(this.validationProvider, this.storage);
  }

  (0, _createClass2["default"])(Controller, [{
    key: "initializeRoutes",
    value: function initializeRoutes(validationProvider, storage) {
      var upload = (0, _multer["default"])({
        storage: storage.getCompanyStorage()
      });
      this.router.get(this.path, [this.authMid.authenticate], this.getAllObjs).get("".concat(this.path, "/bulk/:users/:rol"), [this.authMid.authenticate], this.bulk).get("".concat(this.path, "/schema"), [this.authMid.authenticate], this.getSchema).get("".concat(this.path, "/:id"), [this.authMid.authenticate], this.getObjById).post('/image', [upload.single('image')], this.upload).post(this.path, [this.authMid.authenticate, validationProvider.validate(this.dto)], this.saveObj).put("".concat(this.path, "/:id"), [this.authMid.authenticate, validationProvider.validate(this.dto, true)], this.updateObj)["delete"]("".concat(this.path, "/:id"), [this.authMid.authenticate], this.deleteObj);
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
}), _descriptor6 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "companySchema", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "mailSchema", [_dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "subscriptionSchema", [_dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "companyService", [_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "authenticationService", [_dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "tokenProvider", [_dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "controllerService", [_dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports["default"] = Controller;