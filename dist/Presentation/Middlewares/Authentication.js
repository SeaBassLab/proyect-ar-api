"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var jwt = _interopRequireWildcard(require("jsonwebtoken"));

var _inversify = require("inversify");

var _inversify2 = _interopRequireDefault(require("./../../inversify.config"));

var _TYPES = _interopRequireDefault(require("./../../TYPES"));

var _config = _interopRequireDefault(require("../../utils/config"));

var _Model = _interopRequireDefault(require("../../Domain/Entities/User/Model"));

var _Model2 = _interopRequireDefault(require("../../Domain/Entities/Session/Model"));

var _ConnectionProvider = _interopRequireDefault(require("../../Infrastructure/Persistence/ConnectionProvider"));

var _Responser = _interopRequireDefault(require("../Controllers/Util/Responser"));

var _Controller = _interopRequireDefault(require("../../Domain/Entities/Util/Controller"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Authentication = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function () {
  function Authentication() {
    _classCallCheck(this, Authentication);

    _defineProperty(this, "responserService", _inversify2["default"].get(_TYPES["default"].Responseable));

    _defineProperty(this, "userSchema", _inversify2["default"].getNamed(_TYPES["default"].Schemable, _TYPES["default"].User));

    _defineProperty(this, "sessionSchema", _inversify2["default"].getNamed(_TYPES["default"].Schemable, _TYPES["default"].User));

    _defineProperty(this, "updateableService", _inversify2["default"].get(_TYPES["default"].Updateable));

    _defineProperty(this, "geteableAllService", _inversify2["default"].get(_TYPES["default"].GeteableAll));

    _defineProperty(this, "connectionProvider", _inversify2["default"].get(_TYPES["default"].ConnectionableProvider));

    _defineProperty(this, "geteableByIdService", _inversify2["default"].get(_TYPES["default"].GeteableById));
  }

  _createClass(Authentication, [{
    key: "authenticate",
    value: function () {
      var _authenticate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request, response, next) {
        var responserService, nextBool, token, secret, verificationResponse, id, database, userSchema, sessionSchema, userModel, sessionModel, controllerService;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                responserService = new _Responser["default"]();
                nextBool = false;

                if (!(request.headers && request.headers.authorization)) {
                  _context3.next = 25;
                  break;
                }

                token = request.headers.authorization.replace(/['"]+/g, ''); // let session = request.headers.session
                // console.log(session)

                secret = _config["default"].TOKEN_SECRET;

                try {
                  verificationResponse = jwt.verify(token, secret);
                } catch (err) {
                  responserService.res = {
                    result: 'Nop',
                    message: 'Vuelva a iniciar sesión',
                    error: err,
                    status: 401
                  };
                }

                if (!(verificationResponse && verificationResponse._id && verificationResponse.database)) {
                  _context3.next = 22;
                  break;
                }

                id = verificationResponse._id;
                database = verificationResponse.database;
                userSchema = new _Model["default"]();
                sessionSchema = new _Model2["default"]();
                _context3.next = 13;
                return new _ConnectionProvider["default"]().getModel(database, userSchema.name, userSchema);

              case 13:
                userModel = _context3.sent;
                _context3.next = 16;
                return new _ConnectionProvider["default"]().getModel(database, sessionSchema.name, sessionSchema);

              case 16:
                sessionModel = _context3.sent;
                controllerService = new _Controller["default"]();
                _context3.next = 20;
                return controllerService.getById(id, userModel, userModel).then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(res) {
                    var user, match;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!(res && res.result !== undefined)) {
                              _context2.next = 15;
                              break;
                            }

                            user = res.result;

                            if (!user.enabled) {
                              _context2.next = 12;
                              break;
                            }

                            request.user = user;
                            request.database = database;
                            nextBool = true;
                            match = {
                              creationUser: {
                                $oid: user._id
                              }
                            };
                            _context2.next = 9;
                            return controllerService.getAll(sessionModel, {}, match, {}, {}, 1, 0).then( /*#__PURE__*/function () {
                              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                  while (1) {
                                    switch (_context.prev = _context.next) {
                                      case 0:
                                        _context.next = 2;
                                        return controllerService.update(res.result._id, {}, sessionModel, sessionModel, user._id);

                                      case 2:
                                      case "end":
                                        return _context.stop();
                                    }
                                  }
                                }, _callee);
                              }));

                              return function (_x5) {
                                return _ref2.apply(this, arguments);
                              };
                            }());

                          case 9:
                            next();
                            _context2.next = 13;
                            break;

                          case 12:
                            responserService.res = {
                              result: 'Nop',
                              message: 'Usuario bloqueado',
                              error: 'El usuario con el que intenta loguearse está bloqueado',
                              status: 423
                            };

                          case 13:
                            _context2.next = 16;
                            break;

                          case 15:
                            responserService.res = {
                              result: 'Nop',
                              message: 'La capa superior contesto undefined',
                              error: '',
                              status: 500
                            };

                          case 16:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x4) {
                    return _ref.apply(this, arguments);
                  };
                }())["catch"](function (err) {
                  responserService.res = {
                    result: err.result,
                    message: err.message,
                    error: err.error,
                    status: err.status
                  };
                });

              case 20:
                _context3.next = 23;
                break;

              case 22:
                responserService.res = {
                  result: 'Nop',
                  message: 'Credenciales inválidas',
                  error: 'La credenciales se han vencido',
                  status: 401
                };

              case 23:
                _context3.next = 26;
                break;

              case 25:
                responserService.res = {
                  result: 'Nop',
                  message: 'Vuelva a iniciar sesión',
                  error: 'Credenciales no provistas',
                  status: 401
                };

              case 26:
                if (!nextBool) {
                  response.status(responserService.res.status).send(responserService.res);
                }

              case 27:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function authenticate(_x, _x2, _x3) {
        return _authenticate.apply(this, arguments);
      }

      return authenticate;
    }()
  }]);

  return Authentication;
}()) || _class);
exports["default"] = Authentication;