"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inversify = require("inversify");

var _TYPES = _interopRequireDefault(require("./../../../TYPES"));

var _inversify2 = _interopRequireDefault(require("./../../../inversify.config"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

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

var Controller = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_TYPES["default"].ConnectionableProvider), _dec3 = (0, _inversify.inject)(_TYPES["default"].Responseable), _dec4 = (0, _inversify.inject)(_TYPES["default"].Validable), _dec5 = (0, _inversify.named)(_TYPES["default"].Exam), _dec6 = (0, _inversify.inject)(_TYPES["default"].Schemable), _dec7 = (0, _inversify.named)(_TYPES["default"].Exam), _dec8 = (0, _inversify.inject)(_TYPES["default"].Schemable), _dec9 = (0, _inversify.named)(_TYPES["default"].Question), _dec10 = (0, _inversify.inject)(_TYPES["default"].ExamServiceableDomain), _dec11 = (0, _inversify.inject)(_TYPES["default"].QuestionServiceableDomain), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function Controller() {
    var _this = this;

    _classCallCheck(this, Controller);

    _defineProperty(this, "router", _inversify2["default"].get(_TYPES["default"].Router));

    _defineProperty(this, "path", '/exam');

    _defineProperty(this, "validationProvider", _inversify2["default"].get(_TYPES["default"].Validateable));

    _defineProperty(this, "authMid", _inversify2["default"].get(_TYPES["default"].Authenticateable));

    _initializerDefineProperty(this, "connectionProvider", _descriptor, this);

    _initializerDefineProperty(this, "responserService", _descriptor2, this);

    _initializerDefineProperty(this, "dto", _descriptor3, this);

    _initializerDefineProperty(this, "schema", _descriptor4, this);

    _initializerDefineProperty(this, "questionSchema", _descriptor5, this);

    _initializerDefineProperty(this, "service", _descriptor6, this);

    _initializerDefineProperty(this, "questionService", _descriptor7, this);

    _defineProperty(this, "getSchema", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response, next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
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
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getObjById", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request, response, next) {
        var model, id, idUser;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(res) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
                                result: 'Nop',
                                message: 'La capa superior contesto undefined',
                                error: '',
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

    _defineProperty(this, "getAllObjs", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(request, response, next) {
        var model, questionModel, error, project, match, sort, group, limit, skip, recivedProject, recivedMatch, recivedSort, recivedGroup, recivedLimit, recivedSkip;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context6.sent;
                _context6.next = 5;
                return _this.connectionProvider.getModel(request.database, _this.questionSchema.name, _this.questionSchema);

              case 5:
                questionModel = _context6.sent;
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
                  _context6.next = 24;
                  break;
                }

                _context6.next = 22;
                return _this.service.getAll(model, project, match, sort, group, limit, skip).then( /*#__PURE__*/function () {
                  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(res) {
                    var exam;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            if (!(res && res.result !== undefined)) {
                              _context5.next = 14;
                              break;
                            }

                            if (!res.result) {
                              _context5.next = 11;
                              break;
                            }

                            if (!(limit === 1)) {
                              _context5.next = 8;
                              break;
                            }

                            exam = res.result;
                            _context5.next = 6;
                            return _this.questionService.getAll(questionModel, {}, {
                              exam: {
                                $oid: res.result._id
                              }
                            }, {}, {}, 0, 0).then( /*#__PURE__*/function () {
                              var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(res) {
                                var questionList;
                                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                  while (1) {
                                    switch (_context4.prev = _context4.next) {
                                      case 0:
                                        questionList = res.result;
                                        _this.responserService.res = {
                                          result: {
                                            exam: exam,
                                            questionList: questionList
                                          },
                                          message: res.message,
                                          status: res.status,
                                          error: res.error
                                        };

                                      case 2:
                                      case "end":
                                        return _context4.stop();
                                    }
                                  }
                                }, _callee4);
                              }));

                              return function (_x12) {
                                return _ref6.apply(this, arguments);
                              };
                            }());

                          case 6:
                            _context5.next = 9;
                            break;

                          case 8:
                            _this.responserService.res = {
                              result: res.result,
                              message: res.message,
                              status: res.status,
                              error: res.error
                            };

                          case 9:
                            _context5.next = 12;
                            break;

                          case 11:
                            _this.responserService.res = {
                              result: [],
                              message: 'No existe el res.result',
                              status: 500,
                              error: 'obj.getAllObjs()'
                            };

                          case 12:
                            _context5.next = 15;
                            break;

                          case 14:
                            _this.responserService.res = {
                              result: [],
                              message: 'No existe el res',
                              status: 500,
                              error: 'obj.getAllObjs()'
                            };

                          case 15:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x11) {
                    return _ref5.apply(this, arguments);
                  };
                }())["catch"](function (err) {
                  _this.responserService.res = {
                    result: err.result,
                    message: err.message,
                    status: err.status,
                    error: err.error
                  };
                });

              case 22:
                _context6.next = 25;
                break;

              case 24:
                _this.responserService.res = {
                  result: [],
                  message: 'No se puede realizar la consulta',
                  status: 428,
                  error: 'Error en los parametros enviados'
                };

              case 25:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 26:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x8, _x9, _x10) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(this, "saveObj", /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(request, response, next) {
        var model, questionModel, objData, id, obj, questionList;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context7.sent;
                _context7.next = 5;
                return _this.connectionProvider.getModel(request.database, _this.questionSchema.name, _this.questionSchema);

              case 5:
                questionModel = _context7.sent;
                objData = request.body;
                id = request.user._id;
                obj = objData;
                questionList = obj.questionList;
                _context7.next = 12;
                return _this.service.save(objData, model, id).then(function (res) {
                  if (res && res.result !== undefined) {
                    var _id = res.result._id;
                    questionList.map(function (question) {
                      question.exam = _id;

                      _this.questionService.save(question, questionModel, id);
                    });
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

              case 12:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x13, _x14, _x15) {
        return _ref7.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateObj", /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(request, response, next) {
        var model, id, objData, idUser;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context9.sent;
                id = request.params.id;
                objData = request.body;
                idUser = request.user._id;
                _context9.next = 8;
                return _this.service.getById(id, model).then( /*#__PURE__*/function () {
                  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(res) {
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            if (!(res && res.result !== undefined)) {
                              _context8.next = 9;
                              break;
                            }

                            if (!(res.status === 200)) {
                              _context8.next = 6;
                              break;
                            }

                            _context8.next = 4;
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
                            _context8.next = 7;
                            break;

                          case 6:
                            _this.responserService.res = {
                              result: res.result,
                              message: res.message,
                              status: res.status,
                              error: res.error
                            };

                          case 7:
                            _context8.next = 10;
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
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x19) {
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

              case 8:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 9:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function (_x16, _x17, _x18) {
        return _ref8.apply(this, arguments);
      };
    }());

    _defineProperty(this, "deleteObj", /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(request, response, next) {
        var model, id, idUser;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context11.sent;
                id = request.params.id;
                idUser = request.user._id;
                _context11.next = 7;
                return _this.service.getById(id, model).then( /*#__PURE__*/function () {
                  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(getObjById) {
                    var obj;
                    return regeneratorRuntime.wrap(function _callee10$(_context10) {
                      while (1) {
                        switch (_context10.prev = _context10.next) {
                          case 0:
                            if (!getObjById) {
                              _context10.next = 7;
                              break;
                            }

                            obj = getObjById.result;
                            obj.operationType = 'D';
                            _context10.next = 5;
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
                            _context10.next = 8;
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
                            return _context10.stop();
                        }
                      }
                    }, _callee10);
                  }));

                  return function (_x23) {
                    return _ref11.apply(this, arguments);
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
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      return function (_x20, _x21, _x22) {
        return _ref10.apply(this, arguments);
      };
    }());

    this.initializeRoutes(this.validationProvider);
  }

  _createClass(Controller, [{
    key: "initializeRoutes",
    value: function initializeRoutes(validationProvider) {
      this.router.get(this.path, [this.authMid.authenticate], this.getAllObjs).get("".concat(this.path, "/schema"), [this.authMid.authenticate], this.getSchema).get("".concat(this.path, "/:id"), [this.authMid.authenticate], this.getObjById).post(this.path, [this.authMid.authenticate, validationProvider.validate(this.dto)], this.saveObj).put("".concat(this.path, "/:id"), [this.authMid.authenticate, validationProvider.validate(this.dto, true)], this.updateObj)["delete"]("".concat(this.path, "/:id"), [this.authMid.authenticate], this.deleteObj);
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
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "questionSchema", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "service", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "questionService", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports["default"] = Controller;