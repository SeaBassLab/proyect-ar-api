"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var multer = _interopRequireWildcard(require("multer"));

var _Dto = _interopRequireDefault(require("../../../Domain/Entities/Image/Dto"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//TODO resolver esta dependencia
var Controller = /*#__PURE__*/function () {
  function Controller(router, validationProvider, authenticationMiddleware, connectionProvider, schema, controllerService, service, responserService) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Controller);
    (0, _defineProperty2["default"])(this, "destination", 'uploads/');
    (0, _defineProperty2["default"])(this, "path", '/image');
    (0, _defineProperty2["default"])(this, "upload", /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response, next) {
        var asd;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                asd = false;
                console.log('asdasd');
                if (request.file) asd = true;
                response.send({
                  received: asd
                }); // function uploadImage(req, res, next) {
                // 	initConnectionDB(req.session.database);
                // 	var articleId = req.params.id;
                // 	if (req.file) {
                // 	 Article.findById(articleId, (err, article) => {
                // 		if (err) {
                // 		 fileController.writeLog(req, res, next, 500, err);
                // 		 return res.status(500).send(constants.ERR_SERVER);
                // 		} else {
                // 		 var imageToDelete = article.picture;
                // 		 Article.findByIdAndUpdate(articleId, { docs: req.file.originalname.normalize('NFD').replace(/[\u0300-\u036f]/g, "") }, (err, articleUpdated) => {
                // 			if (err) {
                // 			 fileController.writeLog(req, res, next, 500, err);
                // 			 return res.status(500).send(constants.ERR_SERVER);
                // 			} else {
                // 			 deleteImage(imageToDelete, req.session.database)
                // 			 getArticle(req, res, next, articleUpdated._id);
                // 			}
                // 		 });
                // 		}
                // 	 });
                // 	} else {
                // 	 fileController.writeLog(req, res, next, 404, constants.NO_IMAGEN_FOUND);
                // 	 return res.status(404).send(constants.NO_IMAGEN_FOUND);
                // 	}
                // }

              case 4:
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
    (0, _defineProperty2["default"])(this, "getAllObjs", /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(request, response, next) {
        var model, error, project, match, sort, group, limit, skip, recivedProject, recivedMatch, recivedSort, recivedGroup, recivedLimit, recivedSkip;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
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
    (0, _defineProperty2["default"])(this, "saveObj", /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(request, response, next) {
        var model, objData, id;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context4.sent;
                objData = request.body;
                id = request.user._id;
                _context4.next = 7;
                return _this.service.getAll(_this.controllerService, model, {}, {
                  name: objData.name,
                  operationType: {
                    $ne: 'D'
                  }
                }, {}, {}, 0, 0).then( /*#__PURE__*/function () {
                  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(res) {
                    var objs;
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            objs = res.result;

                            if (!(objs.length <= 0)) {
                              _context3.next = 6;
                              break;
                            }

                            _context3.next = 4;
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

                          case 4:
                            _context3.next = 7;
                            break;

                          case 6:
                            _this.responserService.res = {
                              result: 'Nop',
                              message: 'No se pudo realizar el alta',
                              status: 428,
                              error: 'La entidad con los parametros solicitados, ya existe'
                            };

                          case 7:
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
    (0, _defineProperty2["default"])(this, "updateObj", /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(request, response, next) {
        var model, id, objData, idUser;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context6.sent;
                id = request.params.id;
                objData = request.body;
                idUser = request.user._id;
                _context6.next = 8;
                return _this.service.getById(id, model, _this.controllerService).then( /*#__PURE__*/function () {
                  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(res) {
                    return _regenerator["default"].wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            if (!(res && res.result !== undefined)) {
                              _context5.next = 9;
                              break;
                            }

                            if (!(res.status === 200)) {
                              _context5.next = 6;
                              break;
                            }

                            _context5.next = 4;
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
                            _context5.next = 7;
                            break;

                          case 6:
                            _this.responserService.res = {
                              result: res.result,
                              message: res.message,
                              status: res.status,
                              error: res.error
                            };

                          case 7:
                            _context5.next = 10;
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
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x14) {
                    return _ref6.apply(this, arguments);
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
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x11, _x12, _x13) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "deleteObj", /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(request, response, next) {
        var model, id, idUser;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context8.sent;
                id = request.params.id;
                idUser = request.user._id;
                _context8.next = 7;
                return _this.service.getById(id, model, _this.controllerService).then( /*#__PURE__*/function () {
                  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(getObjById) {
                    var obj;
                    return _regenerator["default"].wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            if (!getObjById) {
                              _context7.next = 7;
                              break;
                            }

                            obj = getObjById.result;
                            obj.operationType = 'D';
                            _context7.next = 5;
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
                            _context7.next = 8;
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
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x18) {
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

              case 7:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 8:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x15, _x16, _x17) {
        return _ref7.apply(this, arguments);
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
    this.initializeRoutes(this.validationProvider);
  }

  (0, _createClass2["default"])(Controller, [{
    key: "initializeRoutes",
    value: function initializeRoutes(validationProvider) {
      var storage = multer.diskStorage({
        destination: function destination(req, file, cb) {
          cb(null, '/home/uploads/' + req.database);
        },
        filename: function filename(req, file, cb) {
          cb(null, file.originalname.normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
        }
      });
      var upload = multer({
        storage: storage
      });
      console.log('asdasd');
      this.router.post(this.path, [this.authMid.authenticate, upload.single('image')], this.upload);
    }
  }, {
    key: "initializeRoute",
    value: function initializeRoute(validationProvider) {
      this.router.get(this.path, [this.authMid.authenticate], this.getAllObjs) //.get(`${this.path}/:id`, [this.authMid.authenticate], this.getObjById)
      .post(this.path, [this.authMid.authenticate, validationProvider.validate(_Dto["default"])], this.saveObj).put("".concat(this.path, "/:id"), [this.authMid.authenticate, validationProvider.validate(_Dto["default"], true)], this.updateObj)["delete"]("".concat(this.path, "/:id"), [this.authMid.authenticate], this.deleteObj);
    }
  }]);
  return Controller;
}();

exports["default"] = Controller;