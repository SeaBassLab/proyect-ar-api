"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var multer = _interopRequireWildcard(require("multer"));

var _Dto = _interopRequireDefault(require("../../../Domain/Entities/Claim/Dto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Controller = /*#__PURE__*/function () {
  function Controller(router, validationProvider, authenticationMiddleware, connectionProvider, schema, controllerService, service, responserService, storage, uc, responserDomainService, trelloService) {
    var _this = this;

    _classCallCheck(this, Controller);

    _defineProperty(this, "path", '/claim');

    _defineProperty(this, "upload", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response, next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
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
                    message: 'No se realizo el upload del archivo',
                    status: 500,
                    error: 'No se realizo el upload del archivo'
                  };
                }

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

    _defineProperty(this, "getAllObjs", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, response, next) {
        var model, error, project, match, sort, group, limit, skip, recivedProject, recivedMatch, recivedSort, recivedGroup, recivedLimit, recivedSkip;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context2.sent;
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
                  _context2.next = 21;
                  break;
                }

                _context2.next = 19;
                return _this.service.getAll(_this.controllerService, model, project, match, sort, group, limit, skip).then(function (res) {
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
                _context2.next = 22;
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
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(this, "saveObj", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request, response, next) {
        var model, objData, id;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context3.sent;
                objData = request.body.claim;
                id = request.user._id;
                _context3.next = 7;
                return _this.uc.sendCardToTrello(_this.responserDomainService, _this.trelloService, objData.name, objData.description, request.database).then(function (res) {
                  console.log('NEW CARD: ' + res.result.shortUrl);
                })["catch"](function (err) {
                  console.log(err);
                });

              case 7:
                _context3.next = 9;
                return _this.service.save(objData, _this.controllerService, model, id).then(function (res) {
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

              case 9:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x7, _x8, _x9) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateObj", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(request, response, next) {
        var model, id, objData, idUser;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context5.sent;
                id = request.params.id;
                objData = request.body;
                idUser = request.user._id;
                _context5.next = 8;
                return _this.service.getById(id, model, _this.controllerService).then( /*#__PURE__*/function () {
                  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(res) {
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            if (!(res && res.result !== undefined)) {
                              _context4.next = 9;
                              break;
                            }

                            if (!(res.status === 200)) {
                              _context4.next = 6;
                              break;
                            }

                            _context4.next = 4;
                            return _this.service.update(id, objData, model, _this.controllerService, idUser).then(function (res) {
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
                            _context4.next = 7;
                            break;

                          case 6:
                            _this.responserService.res = {
                              result: res.result,
                              message: res.message,
                              status: res.status,
                              error: res.error
                            };

                          case 7:
                            _context4.next = 10;
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
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function (_x13) {
                    return _ref5.apply(this, arguments);
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
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x10, _x11, _x12) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(this, "deleteObj", /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(request, response, next) {
        var model, id, idUser;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context7.sent;
                id = request.params.id;
                idUser = request.user._id;
                _context7.next = 7;
                return _this.service.getById(id, model, _this.controllerService).then( /*#__PURE__*/function () {
                  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(getObjById) {
                    var obj;
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            if (!getObjById) {
                              _context6.next = 7;
                              break;
                            }

                            obj = getObjById.result;
                            obj.operationType = 'D';
                            _context6.next = 5;
                            return _this.service.update(id, obj, model, _this.controllerService, idUser).then(function (update) {
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
                            _context6.next = 8;
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

              case 7:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 8:
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

    this.router = router;
    this.validationProvider = validationProvider;
    this.authMid = authenticationMiddleware;
    this.connectionProvider = connectionProvider;
    this.schema = schema;
    this.controllerService = controllerService;
    this.service = service;
    this.responserService = responserService;
    this.storage = storage;
    this.uc = uc;
    this.responserDomainService = responserDomainService;
    this.trelloService = trelloService;
    this.initializeRoutes(this.validationProvider, this.storage);
  }

  _createClass(Controller, [{
    key: "initializeRoutes",
    value: function initializeRoutes(validationProvider, storage) {
      var upload = multer({
        storage: storage.getClaimStorage()
      });
      this.router.get(this.path, [this.authMid.authenticate], this.getAllObjs) //.get(`${this.path}/:id`, [this.authMid.authenticate], this.getObjById)
      .post("".concat(this.path, "/upload-file-claim/"), [this.authMid.authenticate, upload.single('image')], this.upload).post(this.path, [this.authMid.authenticate, validationProvider.validate(_Dto["default"])], this.saveObj).put("".concat(this.path, "/:id"), [this.authMid.authenticate, validationProvider.validate(_Dto["default"], true)], this.updateObj)["delete"]("".concat(this.path, "/:id"), [this.authMid.authenticate], this.deleteObj);
    }
  }]);

  return Controller;
}();

exports["default"] = Controller;