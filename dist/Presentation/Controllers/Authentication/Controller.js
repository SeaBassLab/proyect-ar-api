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

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;

var Controller = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_TYPES["default"].Responseable), _dec3 = (0, _inversify.inject)(_TYPES["default"].GeteableModel), _dec4 = (0, _inversify.inject)(_TYPES["default"].Authenticable), _dec5 = (0, _inversify.inject)(_TYPES["default"].SessionServiceableDomain), _dec6 = (0, _inversify.inject)(_TYPES["default"].Schemable), _dec7 = (0, _inversify.named)(_TYPES["default"].User), _dec8 = (0, _inversify.inject)(_TYPES["default"].Schemable), _dec9 = (0, _inversify.named)(_TYPES["default"].Company), _dec10 = (0, _inversify.inject)(_TYPES["default"].Schemable), _dec11 = (0, _inversify.named)(_TYPES["default"].Session), _dec12 = (0, _inversify.inject)(_TYPES["default"].Schemable), _dec13 = (0, _inversify.named)(_TYPES["default"].Mail), _dec14 = (0, _inversify.inject)(_TYPES["default"].Schemable), _dec15 = (0, _inversify.named)(_TYPES["default"].Subscription), _dec16 = (0, _inversify.inject)(_TYPES["default"].Schemable), _dec17 = (0, _inversify.named)(_TYPES["default"].Permission), _dec18 = (0, _inversify.inject)(_TYPES["default"].Validable), _dec19 = (0, _inversify.named)(_TYPES["default"].Login), _dec20 = (0, _inversify.inject)(_TYPES["default"].Validable), _dec21 = (0, _inversify.named)(_TYPES["default"].User), _dec22 = (0, _inversify.inject)(_TYPES["default"].Validable), _dec23 = (0, _inversify.named)(_TYPES["default"].Session), _dec24 = (0, _inversify.inject)(_TYPES["default"].SessionInterface), _dec25 = (0, _inversify.inject)(_TYPES["default"].SessionBuilderable), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function Controller() {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Controller);
    (0, _defineProperty2["default"])(this, "router", _inversify2["default"].get(_TYPES["default"].Router));
    (0, _defineProperty2["default"])(this, "path", '/auth');
    (0, _defineProperty2["default"])(this, "validationProvider", _inversify2["default"].get(_TYPES["default"].Validateable));
    (0, _initializerDefineProperty2["default"])(this, "responserService", _descriptor, this);
    (0, _initializerDefineProperty2["default"])(this, "connectionProvider", _descriptor2, this);
    (0, _initializerDefineProperty2["default"])(this, "authenticationService", _descriptor3, this);
    (0, _initializerDefineProperty2["default"])(this, "sessionService", _descriptor4, this);
    (0, _initializerDefineProperty2["default"])(this, "userSchema", _descriptor5, this);
    (0, _initializerDefineProperty2["default"])(this, "companySchema", _descriptor6, this);
    (0, _initializerDefineProperty2["default"])(this, "sessionSchema", _descriptor7, this);
    (0, _initializerDefineProperty2["default"])(this, "mailSchema", _descriptor8, this);
    (0, _initializerDefineProperty2["default"])(this, "subscriptionSchema", _descriptor9, this);
    (0, _initializerDefineProperty2["default"])(this, "permissionSchema", _descriptor10, this);
    (0, _initializerDefineProperty2["default"])(this, "loginDto", _descriptor11, this);
    (0, _initializerDefineProperty2["default"])(this, "userDto", _descriptor12, this);
    (0, _initializerDefineProperty2["default"])(this, "sessionDto", _descriptor13, this);
    (0, _initializerDefineProperty2["default"])(this, "session", _descriptor14, this);
    (0, _initializerDefineProperty2["default"])(this, "sessionBuilder", _descriptor15, this);
    (0, _defineProperty2["default"])(this, "getPass", /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response, next) {
        var _this$responserServic, _this$responserServic2;

        var db, user, pass, userModel;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                db = request.params.db;
                user = request.params.user;
                pass = request.params.pass;
                console.log(user);
                console.log(pass);
                _context.next = 7;
                return _this.connectionProvider.getModel(db, _this.userSchema.name, _this.userSchema);

              case 7:
                userModel = _context.sent;

                if (!(db && db != '')) {
                  _context.next = 13;
                  break;
                }

                _context.next = 11;
                return _this.authenticationService.getPass(user, pass, userModel).then(function (res) {
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

              case 11:
                _context.next = 14;
                break;

              case 13:
                _this.responserService.res = {
                  result: {},
                  message: 'Falta indicar a que negocio pertenece',
                  status: 428,
                  error: 'Agregar el negocio al cual pertenece en la consulta'
                };

              case 14:
                if ((_this$responserServic = _this.responserService) !== null && _this$responserServic !== void 0 && (_this$responserServic2 = _this$responserServic.res) !== null && _this$responserServic2 !== void 0 && _this$responserServic2.status || {}) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 15:
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
    (0, _defineProperty2["default"])(this, "resetPass", /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(request, response, next) {
        var db, user, userModel, mailModel;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                db = request.params.db;
                user = request.params.user;
                _context2.next = 4;
                return _this.connectionProvider.getModel(db, _this.userSchema.name, _this.userSchema);

              case 4:
                userModel = _context2.sent;
                _context2.next = 7;
                return _this.connectionProvider.getModel(db, _this.mailSchema.name, _this.mailSchema);

              case 7:
                mailModel = _context2.sent;

                if (!(db && db != '')) {
                  _context2.next = 13;
                  break;
                }

                _context2.next = 11;
                return _this.authenticationService.resetPass(user, userModel, mailModel).then(function (res) {
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

              case 11:
                _context2.next = 14;
                break;

              case 13:
                _this.responserService.res = {
                  result: {},
                  message: 'Falta indicar a que negocio pertenece',
                  status: 428,
                  error: 'Agregar el negocio al cual pertenece en la consulta'
                };

              case 14:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 15:
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
    (0, _defineProperty2["default"])(this, "registrationFacebook", /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(request, response, next) {
        var userData, database, subscriptionModel, mailModel, sessionModel, companyModel, model;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userData = request.body;
                database = request.query.database;

                if (!((userData === null || userData === void 0 ? void 0 : userData.password) !== undefined && (userData === null || userData === void 0 ? void 0 : userData.password) !== '')) {
                  userData.password = 'asd123';
                }

                _context3.next = 5;
                return _this.connectionProvider.getModel(database, _this.subscriptionSchema.name, _this.subscriptionSchema);

              case 5:
                subscriptionModel = _context3.sent;
                _context3.next = 8;
                return _this.connectionProvider.getModel(database, _this.mailSchema.name, _this.mailSchema);

              case 8:
                mailModel = _context3.sent;
                _context3.next = 11;
                return _this.connectionProvider.getModel(database, _this.sessionSchema.name, _this.sessionSchema);

              case 11:
                sessionModel = _context3.sent;
                _context3.next = 14;
                return _this.connectionProvider.getModel(database, _this.companySchema.name, _this.companySchema);

              case 14:
                companyModel = _context3.sent;
                _context3.next = 17;
                return _this.connectionProvider.getModel(database, _this.userSchema.name, _this.userSchema);

              case 17:
                model = _context3.sent;

                if (!(database && database != '')) {
                  _context3.next = 23;
                  break;
                }

                _context3.next = 21;
                return _this.authenticationService.register(userData, database, model, companyModel, mailModel, subscriptionModel).then(function (res) {
                  if (res && res.result !== undefined) {
                    _this.responserService.res = {
                      result: res.result,
                      message: res.message,
                      status: res.status,
                      error: res.error
                    };

                    if (res.status == 200) {
                      _this.sessionBuilder.getInstance([sessionModel, res.result.user._id]);
                    }
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

              case 21:
                _context3.next = 24;
                break;

              case 23:
                _this.responserService.res = {
                  result: {},
                  message: 'Falta indicar a que negocio pertenece',
                  status: 428,
                  error: 'Agregar el negocio al cual pertenece en la consulta'
                };

              case 24:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 25:
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
    (0, _defineProperty2["default"])(this, "registrationGoogle", /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(request, response, next) {
        var userData, database, subscriptionModel, mailModel, sessionModel, companyModel, model;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                userData = request.body;
                database = request.query.database;

                if (!((userData === null || userData === void 0 ? void 0 : userData.password) !== undefined && (userData === null || userData === void 0 ? void 0 : userData.password) !== '')) {
                  userData.password = 'asd123';
                }

                _context4.next = 5;
                return _this.connectionProvider.getModel(database, _this.subscriptionSchema.name, _this.subscriptionSchema);

              case 5:
                subscriptionModel = _context4.sent;
                _context4.next = 8;
                return _this.connectionProvider.getModel(database, _this.mailSchema.name, _this.mailSchema);

              case 8:
                mailModel = _context4.sent;
                _context4.next = 11;
                return _this.connectionProvider.getModel(database, _this.sessionSchema.name, _this.sessionSchema);

              case 11:
                sessionModel = _context4.sent;
                _context4.next = 14;
                return _this.connectionProvider.getModel(database, _this.companySchema.name, _this.companySchema);

              case 14:
                companyModel = _context4.sent;
                _context4.next = 17;
                return _this.connectionProvider.getModel(database, _this.userSchema.name, _this.userSchema);

              case 17:
                model = _context4.sent;

                if (!(database && database != '')) {
                  _context4.next = 23;
                  break;
                }

                _context4.next = 21;
                return _this.authenticationService.register(userData, database, model, companyModel, mailModel, subscriptionModel).then(function (res) {
                  if (res && res.result !== undefined) {
                    _this.responserService.res = {
                      result: res.result,
                      message: res.message,
                      status: res.status,
                      error: res.error
                    };

                    if (res.status == 200) {
                      _this.sessionBuilder.getInstance([sessionModel, res.result.user._id]);
                    }
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

              case 21:
                _context4.next = 24;
                break;

              case 23:
                _this.responserService.res = {
                  result: {},
                  message: 'Falta indicar a que negocio pertenece',
                  status: 428,
                  error: 'Agregar el negocio al cual pertenece en la consulta'
                };

              case 24:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 25:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x10, _x11, _x12) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "registration", /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(request, response, next) {
        var userData, database, subscriptionModel, mailModel, sessionModel, companyModel, model;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                userData = request.body;
                database = request.query.database;
                _context5.next = 4;
                return _this.connectionProvider.getModel(database, _this.subscriptionSchema.name, _this.subscriptionSchema);

              case 4:
                subscriptionModel = _context5.sent;
                _context5.next = 7;
                return _this.connectionProvider.getModel(database, _this.mailSchema.name, _this.mailSchema);

              case 7:
                mailModel = _context5.sent;
                _context5.next = 10;
                return _this.connectionProvider.getModel(database, _this.sessionSchema.name, _this.sessionSchema);

              case 10:
                sessionModel = _context5.sent;
                _context5.next = 13;
                return _this.connectionProvider.getModel(database, _this.companySchema.name, _this.companySchema);

              case 13:
                companyModel = _context5.sent;
                _context5.next = 16;
                return _this.connectionProvider.getModel(database, _this.userSchema.name, _this.userSchema);

              case 16:
                model = _context5.sent;

                if (!(database && database != '')) {
                  _context5.next = 22;
                  break;
                }

                _context5.next = 20;
                return _this.authenticationService.register(userData, database, model, companyModel, mailModel, subscriptionModel).then(function (res) {
                  if (res && res.result !== undefined) {
                    _this.responserService.res = {
                      result: res.result,
                      message: res.message,
                      status: res.status,
                      error: res.error
                    };

                    if (res.status == 200) {
                      _this.sessionBuilder.getInstance([sessionModel, res.result.user._id]);
                    }
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

              case 20:
                _context5.next = 23;
                break;

              case 22:
                _this.responserService.res = {
                  result: {},
                  message: 'Falta indicar a que negocio pertenece',
                  status: 428,
                  error: 'Agregar el negocio al cual pertenece en la consulta'
                };

              case 23:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 24:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x13, _x14, _x15) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "registrationWithUser", /*#__PURE__*/function () {
      var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(request, response, next) {
        var userData, database, subscriptionModel, mailModel, sessionModel, companyModel, model;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                userData = request.body;
                database = request.query.database;
                _context6.next = 4;
                return _this.connectionProvider.getModel(database, _this.subscriptionSchema.name, _this.subscriptionSchema);

              case 4:
                subscriptionModel = _context6.sent;
                _context6.next = 7;
                return _this.connectionProvider.getModel(database, _this.mailSchema.name, _this.mailSchema);

              case 7:
                mailModel = _context6.sent;
                _context6.next = 10;
                return _this.connectionProvider.getModel(database, _this.sessionSchema.name, _this.sessionSchema);

              case 10:
                sessionModel = _context6.sent;
                _context6.next = 13;
                return _this.connectionProvider.getModel(database, _this.companySchema.name, _this.companySchema);

              case 13:
                companyModel = _context6.sent;
                _context6.next = 16;
                return _this.connectionProvider.getModel(database, _this.userSchema.name, _this.userSchema);

              case 16:
                model = _context6.sent;

                if (!(database && database != '')) {
                  _context6.next = 22;
                  break;
                }

                _context6.next = 20;
                return _this.authenticationService.registerWithUser(userData, database, model, companyModel, mailModel, subscriptionModel).then(function (res) {
                  if (res && res.result !== undefined) {
                    _this.responserService.res = {
                      result: res.result,
                      message: res.message,
                      status: res.status,
                      error: res.error
                    };

                    if (res.status == 200) {
                      _this.sessionBuilder.getInstance([sessionModel, res.result.user._id]);
                    }
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

              case 20:
                _context6.next = 23;
                break;

              case 22:
                _this.responserService.res = {
                  result: {},
                  message: 'Falta indicar a que negocio pertenece',
                  status: 428,
                  error: 'Agregar el negocio al cual pertenece en la consulta'
                };

              case 23:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 24:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x16, _x17, _x18) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "loggingIn", /*#__PURE__*/function () {
      var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(request, response, next) {
        var logInData, database, sessionModel, permissionModel;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                logInData = request.body;
                database = request.query.database;
                _context9.next = 4;
                return _this.connectionProvider.getModel(database, _this.sessionSchema.name, _this.sessionSchema);

              case 4:
                sessionModel = _context9.sent;
                _context9.next = 7;
                return _this.connectionProvider.getModel(database, _this.permissionSchema.name, _this.permissionSchema);

              case 7:
                permissionModel = _context9.sent;

                if (!(database && database != '')) {
                  _context9.next = 13;
                  break;
                }

                _context9.next = 11;
                return _this.connectionProvider.getModel(database, _this.userSchema.name, _this.userSchema).then( /*#__PURE__*/function () {
                  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(model) {
                    return _regenerator["default"].wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            _context8.next = 2;
                            return _this.authenticationService.login(logInData, database, model, permissionModel).then( /*#__PURE__*/function () {
                              var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(res) {
                                return _regenerator["default"].wrap(function _callee7$(_context7) {
                                  while (1) {
                                    switch (_context7.prev = _context7.next) {
                                      case 0:
                                        if (!(res && res.result !== undefined)) {
                                          _context7.next = 7;
                                          break;
                                        }

                                        _this.responserService.res = {
                                          result: res.result,
                                          message: res.message,
                                          status: res.status,
                                          error: res.error
                                        };

                                        if (!(res.status == 200)) {
                                          _context7.next = 5;
                                          break;
                                        }

                                        _context7.next = 5;
                                        return _this.sessionBuilder.getInstance([sessionModel, res.result.user._id]).then(function (responseBuilder) {
                                          if (responseBuilder && responseBuilder !== undefined) {
                                            if (responseBuilder.status === 200) {
                                              _this.session = responseBuilder.result;
                                              _this.responserService.res.result.session = _this.session;
                                            } else {
                                              _this.responserService.res = {
                                                result: res.result,
                                                message: res.message,
                                                status: res.status,
                                                error: res.error
                                              };
                                            }
                                          } else {
                                            _this.responserService.res = {
                                              result: 'Nop',
                                              message: 'La capa superior contesto undefined',
                                              error: '',
                                              status: 500
                                            };
                                          }
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

                              return function (_x23) {
                                return _ref9.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              _this.responserService.res = {
                                result: err.result,
                                message: err.message,
                                status: err.status,
                                error: err.error
                              };
                            });

                          case 2:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x22) {
                    return _ref8.apply(this, arguments);
                  };
                }())["catch"](function (err) {
                  _this.responserService.res = {
                    result: 'Nop',
                    message: 'Se rompio la libreria',
                    error: err,
                    status: 500
                  };
                });

              case 11:
                _context9.next = 14;
                break;

              case 13:
                _this.responserService.res = {
                  result: {},
                  message: 'Indicar a que db corresponde',
                  status: 428,
                  error: 'No se ha indicado la db'
                };

              case 14:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function (_x19, _x20, _x21) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "loggingInWithUser", /*#__PURE__*/function () {
      var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(request, response, next) {
        var logInData, database, sessionModel;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                logInData = request.body;
                database = request.query.database;
                _context12.next = 4;
                return _this.connectionProvider.getModel(database, _this.sessionSchema.name, _this.sessionSchema);

              case 4:
                sessionModel = _context12.sent;

                if (!(database && database != '')) {
                  _context12.next = 10;
                  break;
                }

                _context12.next = 8;
                return _this.connectionProvider.getModel(database, _this.userSchema.name, _this.userSchema).then( /*#__PURE__*/function () {
                  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(model) {
                    return _regenerator["default"].wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            _context11.next = 2;
                            return _this.authenticationService.loginWithUser(logInData, database, model).then( /*#__PURE__*/function () {
                              var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(res) {
                                return _regenerator["default"].wrap(function _callee10$(_context10) {
                                  while (1) {
                                    switch (_context10.prev = _context10.next) {
                                      case 0:
                                        if (!(res && res.result !== undefined)) {
                                          _context10.next = 7;
                                          break;
                                        }

                                        _this.responserService.res = {
                                          result: res.result,
                                          message: res.message,
                                          status: res.status,
                                          error: res.error
                                        };

                                        if (!(res.status == 200)) {
                                          _context10.next = 5;
                                          break;
                                        }

                                        _context10.next = 5;
                                        return _this.sessionBuilder.getInstance([sessionModel, res.result.user._id]).then(function (responseBuilder) {
                                          if (responseBuilder && responseBuilder !== undefined) {
                                            if (responseBuilder.status === 200) {
                                              _this.session = responseBuilder.result;
                                              _this.responserService.res.result.session = _this.session;
                                            } else {
                                              _this.responserService.res = {
                                                result: res.result,
                                                message: res.message,
                                                status: res.status,
                                                error: res.error
                                              };
                                            }
                                          } else {
                                            _this.responserService.res = {
                                              result: 'Nop',
                                              message: 'La capa superior contesto undefined',
                                              error: '',
                                              status: 500
                                            };
                                          }
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

                              return function (_x28) {
                                return _ref12.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              _this.responserService.res = {
                                result: err.result,
                                message: err.message,
                                status: err.status,
                                error: err.error
                              };
                            });

                          case 2:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x27) {
                    return _ref11.apply(this, arguments);
                  };
                }())["catch"](function (err) {
                  _this.responserService.res = {
                    result: 'Nop',
                    message: 'Se rompio la libreria',
                    error: err,
                    status: 500
                  };
                });

              case 8:
                _context12.next = 11;
                break;

              case 10:
                _this.responserService.res = {
                  result: {},
                  message: 'Indicar a que db corresponde',
                  status: 428,
                  error: 'No se ha indicado la db'
                };

              case 11:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 12:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      return function (_x24, _x25, _x26) {
        return _ref10.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "loggingInVerified", /*#__PURE__*/function () {
      var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(request, response, next) {
        var logInData, database, sessionModel;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                logInData = request.body;
                database = request.query.database;
                _context15.next = 4;
                return _this.connectionProvider.getModel(database, _this.sessionSchema.name, _this.sessionSchema);

              case 4:
                sessionModel = _context15.sent;

                if (!(database && database != '')) {
                  _context15.next = 10;
                  break;
                }

                _context15.next = 8;
                return _this.connectionProvider.getModel(database, _this.userSchema.name, _this.userSchema).then( /*#__PURE__*/function () {
                  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(model) {
                    return _regenerator["default"].wrap(function _callee14$(_context14) {
                      while (1) {
                        switch (_context14.prev = _context14.next) {
                          case 0:
                            _context14.next = 2;
                            return _this.authenticationService.loginVerified(logInData, database, model).then( /*#__PURE__*/function () {
                              var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(res) {
                                return _regenerator["default"].wrap(function _callee13$(_context13) {
                                  while (1) {
                                    switch (_context13.prev = _context13.next) {
                                      case 0:
                                        if (!(res && res.result !== undefined)) {
                                          _context13.next = 7;
                                          break;
                                        }

                                        _this.responserService.res = {
                                          result: res.result,
                                          message: res.message,
                                          status: res.status,
                                          error: res.error
                                        };

                                        if (!(res.status == 200)) {
                                          _context13.next = 5;
                                          break;
                                        }

                                        _context13.next = 5;
                                        return _this.sessionBuilder.getInstance([sessionModel, res.result.user._id]).then(function (responseBuilder) {
                                          if (responseBuilder && responseBuilder !== undefined) {
                                            if (responseBuilder.status === 200) {
                                              _this.session = responseBuilder.result;
                                              _this.responserService.res.result.session = _this.session;
                                            } else {
                                              _this.responserService.res = {
                                                result: res.result,
                                                message: res.message,
                                                status: res.status,
                                                error: res.error
                                              };
                                            }
                                          } else {
                                            _this.responserService.res = {
                                              result: 'Nop',
                                              message: 'La capa superior contesto undefined',
                                              error: '',
                                              status: 500
                                            };
                                          }
                                        });

                                      case 5:
                                        _context13.next = 8;
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
                                        return _context13.stop();
                                    }
                                  }
                                }, _callee13);
                              }));

                              return function (_x33) {
                                return _ref15.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              _this.responserService.res = {
                                result: err.result,
                                message: err.message,
                                status: err.status,
                                error: err.error
                              };
                            });

                          case 2:
                          case "end":
                            return _context14.stop();
                        }
                      }
                    }, _callee14);
                  }));

                  return function (_x32) {
                    return _ref14.apply(this, arguments);
                  };
                }())["catch"](function (err) {
                  _this.responserService.res = {
                    result: 'Nop',
                    message: 'Se rompio la libreria',
                    error: err,
                    status: 500
                  };
                });

              case 8:
                _context15.next = 11;
                break;

              case 10:
                _this.responserService.res = {
                  result: {},
                  message: 'Indicar a que db corresponde',
                  status: 428,
                  error: 'No se ha indicado la db'
                };

              case 11:
                if (_this.responserService.res.status) {
                  response.status(_this.responserService.res.status).send(_this.responserService.res);
                } else {
                  response.status(500).send(_this.responserService.res);
                }

              case 12:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }));

      return function (_x29, _x30, _x31) {
        return _ref13.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])(this, "loggingOut", function (request, response) {
      _this.responserService.res = {
        result: {
          user: {},
          token: {}
        },
        message: 'Fin de sesión exitoso',
        status: 200,
        error: ''
      };

      if (_this.responserService.res.status) {
        response.status(_this.responserService.res.status).send(_this.responserService.res);
      } else {
        response.status(500).send(_this.responserService.res);
      }
    });
    this.initializeRoutes(this.validationProvider);
  }

  (0, _createClass2["default"])(Controller, [{
    key: "initializeRoutes",
    value: function initializeRoutes(validationProvider) {
      this.router.get("".concat(this.path, "/get/:db/:user/:pass"), [], this.getPass);
      this.router.get("".concat(this.path, "/reset/:db/:user"), [], this.resetPass);
      this.router.post("".concat(this.path, "/registerfacebook"), [validationProvider.validate(this.userDto)], this.registrationFacebook);
      this.router.post("".concat(this.path, "/registergoogle"), [validationProvider.validate(this.userDto)], this.registrationGoogle);
      this.router.post("".concat(this.path, "/registerwithuser"), [validationProvider.validate(this.userDto)], this.registrationWithUser);
      this.router.post("".concat(this.path, "/register"), [validationProvider.validate(this.userDto)], this.registration);
      this.router.post("".concat(this.path, "/loginwithuser"), [validationProvider.validate(this.loginDto)], this.loggingInWithUser);
      this.router.post("".concat(this.path, "/loginverified"), [validationProvider.validate(this.loginDto)], this.loggingInVerified);
      this.router.post("".concat(this.path, "/login"), [validationProvider.validate(this.loginDto)], this.loggingIn);
      this.router.post("".concat(this.path, "/logout"), this.loggingOut);
    }
  }]);
  return Controller;
}(), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "responserService", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "connectionProvider", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "authenticationService", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "sessionService", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "userSchema", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "companySchema", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "sessionSchema", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "mailSchema", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "subscriptionSchema", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "permissionSchema", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "loginDto", [_dec18, _dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "userDto", [_dec20, _dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "sessionDto", [_dec22, _dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "session", [_dec24], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "sessionBuilder", [_dec25], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports["default"] = Controller;