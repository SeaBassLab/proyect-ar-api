"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Afip = require('@afipsdk/afip.js');

var Controller = /*#__PURE__*/function () {
  function Controller(router, validationProvider, authenticationMiddleware, connectionProvider, schema, controllerService, service, responserService) {
    var _this = this;

    _classCallCheck(this, Controller);

    _defineProperty(this, "path", '/validate-afip');

    _defineProperty(this, "getAllObjs", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response, next) {
        var model, error, project, match, sort, group, limit, skip, recivedProject, recivedMatch, recivedSort, recivedGroup, recivedLimit, recivedSkip;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context.sent;
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
                  _context.next = 21;
                  break;
                }

                _context.next = 19;
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
                _context.next = 22;
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
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(this, "saveObj", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, response, next) {
        var id, config, afip, date, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // TODO arreglar todo esta mer
                // var model: Model<Document, {}> = await this.connectionProvider.getModel(
                // 	request.database,
                // 	this.schema.name,
                // 	this.schema
                // )
                // var objData: ObjInterface = request.body;
                // const id = request.user._id
                // await this.service.getAll( this.controllerService, model, {}, { name: objData.name, operationType: { $ne: 'D' } }, {}, {}, 0, 0)
                // 	.then( async (res: DomainResponseable) => {
                // 		let objs = res.result
                // 		if(objs.length <= 0) {
                // 			await this.service.save(objData, this.controllerService, model, id)
                // 				.then((res: DomainResponseable) => {
                // 					if(res && res.result !== undefined) {
                // 						this.responserService.res = {
                // 							result: res.result,
                // 							message: res.message,
                // 							status: res.status,
                // 							error: res.error
                // 						}
                // 					} else {
                // 						this.responserService.res = { result: 'Nop', message: 'La capa superior contesto undefined', error: '', status: 500 }
                // 					}
                // 				})
                // 				.catch((err: any) => {
                // 					this.responserService.res = { result: err.result, message: err.message, error: err.error, status: err.status }
                // 				})
                // 		} else { 
                // 			this.responserService.res = {
                // 				result: 'Nop',
                // 				message: 'No se pudo realizar el alta',
                // 				status: 428,
                // 				error: 'La entidad con los parametros solicitados, ya existe'
                // 			}
                // 		}
                // 	}).catch((err: any) => {
                // 		this.responserService.res = { result: err.result, message: err.message, error: err.error, status: err.status }
                // 	})
                //php in js

                /*
                let exec = require('child_process').exec
                let cmd = 'php /home/tomas/Documents/projects/inmo/api/src/Presentation/Controllers/ElectronicBilling/index.php'
                exec(cmd, function(error, stdout, stderr) {
                	response.status(200).send({
                		result: stdout,
                		message: 'paso',
                		status: 200,
                		error: stderr
                	})
                })
                		*/
                //afipsdk
                id = request.params.id;
                config = {
                  CUIT: 20293633240,
                  production: false,
                  cert: 'poscloud1.crt',
                  key: 'poscloud1.key',
                  res_folder: '/home/tomas/Documents/projects/inmo/api/',
                  ta_folder: '/home/tomas/Documents/projects/inmo/api'
                };
                afip = new Afip(config);
                date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0];
                data = {
                  'CantReg': 1,
                  // Cantidad de comprobantes a registrar
                  'PtoVta': 1,
                  // Punto de venta
                  'CbteTipo': 6,
                  // Tipo de comprobante (ver tipos disponibles) 
                  'Concepto': 1,
                  // Concepto del Comprobante: (1)Productos, (2)Servicios, (3)Productos y Servicios
                  'DocTipo': 99,
                  // Tipo de documento del comprador (99 consumidor final, ver tipos disponibles)
                  'DocNro': 0,
                  // Número de documento del comprador (0 consumidor final)
                  'CbteDesde': 4,
                  // Número de comprobante o numero del primer comprobante en caso de ser mas de uno
                  'CbteHasta': 4,
                  // Número de comprobante o numero del último comprobante en caso de ser mas de uno
                  'CbteFch': parseInt(date.replace(/-/g, '')),
                  // (Opcional) Fecha del comprobante (yyyymmdd) o fecha actual si es nulo
                  'ImpTotal': 121,
                  // Importe total del comprobante
                  'ImpTotConc': 0,
                  // Importe neto no gravado
                  'ImpNeto': 100,
                  // Importe neto gravado
                  'ImpOpEx': 0,
                  // Importe exento de IVA
                  'ImpIVA': 21,
                  //Importe total de IVA
                  'ImpTrib': 0,
                  //Importe total de tributos
                  'MonId': 'PES',
                  //Tipo de moneda usada en el comprobante (ver tipos disponibles)('PES' para pesos argentinos) 
                  'MonCotiz': 1,
                  // Cotización de la moneda usada (1 para pesos argentinos)  
                  'Iva': [// (Opcional) Alícuotas asociadas al comprobante
                  {
                    'Id': 5,
                    // Id del tipo de IVA (5 para 21%)(ver tipos disponibles) 
                    'BaseImp': 100,
                    // Base imponible
                    'Importe': 21 // Importe 

                  }]
                }; //await afip.ElectronicBilling.getDocumentTypes()

                _context2.next = 7;
                return afip.ElectronicBilling.getVoucherTypes().then(function (res) {
                  _this.responserService.res = {
                    result: res,
                    message: 'Respuesta de Afip',
                    status: 200,
                    error: ''
                  };
                })["catch"](function (err) {
                  _this.responserService.res = {
                    result: 'res',
                    message: 'Respuesta de Afip',
                    status: 200,
                    error: err.toString()
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
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateObj", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(request, response, next) {
        var model, id, objData, idUser;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context4.sent;
                id = request.params.id;
                objData = request.body;
                idUser = request.user._id;
                _context4.next = 8;
                return _this.service.getById(id, model, _this.controllerService).then( /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(res) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!(res && res.result !== undefined)) {
                              _context3.next = 9;
                              break;
                            }

                            if (!(res.status === 200)) {
                              _context3.next = 6;
                              break;
                            }

                            _context3.next = 4;
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
                            _context3.next = 7;
                            break;

                          case 6:
                            _this.responserService.res = {
                              result: res.result,
                              message: res.message,
                              status: res.status,
                              error: res.error
                            };

                          case 7:
                            _context3.next = 10;
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

              case 8:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 9:
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

    _defineProperty(this, "deleteObj", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(request, response, next) {
        var model, id, idUser;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this.connectionProvider.getModel(request.database, _this.schema.name, _this.schema);

              case 2:
                model = _context6.sent;
                id = request.params.id;
                idUser = request.user._id;
                _context6.next = 7;
                return _this.service.getById(id, model, _this.controllerService).then( /*#__PURE__*/function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(getObjById) {
                    var obj;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            if (!getObjById) {
                              _context5.next = 7;
                              break;
                            }

                            obj = getObjById.result;
                            obj.operationType = 'D';
                            _context5.next = 5;
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
                            _context5.next = 8;
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

              case 7:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 8:
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

  _createClass(Controller, [{
    key: "initializeRoutes",
    value: function initializeRoutes(validationProvider) {
      this.router //.get(this.path, [this.authMid.authenticate], this.getAllObjs)
      //.get(`${this.path}/:id`, [this.authMid.authenticate], this.getObjById)
      .post("".concat(this.path, "/:id"), [this.authMid.authenticate], this.saveObj).post('/electronicBilling', [], this.saveObj); //.put(`${this.path}/:id`, [this.authMid.authenticate, validationProvider.validate(Dto, true)], this.updateObj)
      //.delete(`${this.path}/:id`, [this.authMid.authenticate], this.deleteObj);
    }
  }]);

  return Controller;
}();

exports["default"] = Controller;