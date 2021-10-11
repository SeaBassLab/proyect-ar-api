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

var _TYPES = _interopRequireDefault(require("./../../TYPES"));

var _UserToken = _interopRequireDefault(require("./UserToken"));

var _Responser = _interopRequireDefault(require("../../Domain/Entities/Util/Responser"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

var Authentication = (_dec = (0, _inversify.injectable)(), _dec2 = (0, _inversify.inject)(_TYPES["default"].UserServiceableDomain), _dec3 = (0, _inversify.inject)(_TYPES["default"].SubscriptionServiceableDomain), _dec4 = (0, _inversify.inject)(_TYPES["default"].CompanyServiceableDomain), _dec5 = (0, _inversify.inject)(_TYPES["default"].CreateableToken), _dec6 = (0, _inversify.inject)(_TYPES["default"].Controlleable), _dec7 = (0, _inversify.inject)(_TYPES["default"].SendeableMail), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function Authentication() {
    (0, _classCallCheck2["default"])(this, Authentication);
    (0, _initializerDefineProperty2["default"])(this, "userService", _descriptor, this);
    (0, _initializerDefineProperty2["default"])(this, "subscriptionService", _descriptor2, this);
    (0, _initializerDefineProperty2["default"])(this, "companyService", _descriptor3, this);
    (0, _initializerDefineProperty2["default"])(this, "tokenProvider", _descriptor4, this);
    (0, _initializerDefineProperty2["default"])(this, "controllerService", _descriptor5, this);
    (0, _initializerDefineProperty2["default"])(this, "sendMailController", _descriptor6, this);
  }

  (0, _createClass2["default"])(Authentication, [{
    key: "getPass",
    value: function () {
      var _getPass = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(user, pass, userModel) {
        var _this = this;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(resolve, reject) {
                    var responserService;
                    return _regenerator["default"].wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            responserService = new _Responser["default"]();
                            _context5.next = 3;
                            return _this.userService.existUserWithThatUser(user, userModel).then( /*#__PURE__*/function () {
                              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(res) {
                                return _regenerator["default"].wrap(function _callee4$(_context4) {
                                  while (1) {
                                    switch (_context4.prev = _context4.next) {
                                      case 0:
                                        if (!(res && res.result !== undefined)) {
                                          _context4.next = 9;
                                          break;
                                        }

                                        if (!res.result) {
                                          _context4.next = 6;
                                          break;
                                        }

                                        _context4.next = 4;
                                        return _this.userService.hashPassword(pass).then( /*#__PURE__*/function () {
                                          var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(res) {
                                            var hash;
                                            return _regenerator["default"].wrap(function _callee3$(_context3) {
                                              while (1) {
                                                switch (_context3.prev = _context3.next) {
                                                  case 0:
                                                    if (!(res !== undefined && res.result !== undefined)) {
                                                      _context3.next = 6;
                                                      break;
                                                    }

                                                    hash = res.result;
                                                    _context3.next = 4;
                                                    return _this.controllerService.getAll(userModel, {}, {
                                                      operationType: {
                                                        $ne: 'D'
                                                      },
                                                      user: user
                                                    }, {}, {}, 1, 0).then( /*#__PURE__*/function () {
                                                      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(res) {
                                                        var _id;

                                                        return _regenerator["default"].wrap(function _callee2$(_context2) {
                                                          while (1) {
                                                            switch (_context2.prev = _context2.next) {
                                                              case 0:
                                                                if (!(res !== undefined && res.result !== undefined)) {
                                                                  _context2.next = 6;
                                                                  break;
                                                                }

                                                                _id = res.result._id;
                                                                _context2.next = 4;
                                                                return _this.controllerService.update(_id, {
                                                                  password: hash
                                                                }, userModel, userModel, _id).then( /*#__PURE__*/function () {
                                                                  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(res) {
                                                                    return _regenerator["default"].wrap(function _callee$(_context) {
                                                                      while (1) {
                                                                        switch (_context.prev = _context.next) {
                                                                          case 0:
                                                                            if (res !== undefined && res.result !== undefined) {
                                                                              responserService = {
                                                                                result: 'Gestión exitosa',
                                                                                message: 'Muy bien! Has recuperado tu contraseña! Continúa con tu experiencia Wingcamp!',
                                                                                error: '',
                                                                                status: 200
                                                                              };
                                                                              resolve(responserService);
                                                                            } else {
                                                                              responserService = {
                                                                                result: 'Nop',
                                                                                message: 'La capa superior contesto undefined',
                                                                                error: '',
                                                                                status: 500
                                                                              };
                                                                            }

                                                                          case 1:
                                                                          case "end":
                                                                            return _context.stop();
                                                                        }
                                                                      }
                                                                    }, _callee);
                                                                  }));

                                                                  return function (_x9) {
                                                                    return _ref5.apply(this, arguments);
                                                                  };
                                                                }())["catch"](function (e) {
                                                                  responserService = {
                                                                    result: e.result,
                                                                    message: e.message,
                                                                    error: e.error,
                                                                    status: e.status
                                                                  };
                                                                });

                                                              case 4:
                                                                _context2.next = 7;
                                                                break;

                                                              case 6:
                                                                responserService = {
                                                                  result: 'Nop',
                                                                  message: 'La capa superior contesto undefined',
                                                                  error: '',
                                                                  status: 500
                                                                };

                                                              case 7:
                                                              case "end":
                                                                return _context2.stop();
                                                            }
                                                          }
                                                        }, _callee2);
                                                      }));

                                                      return function (_x8) {
                                                        return _ref4.apply(this, arguments);
                                                      };
                                                    }())["catch"](function (e) {
                                                      responserService = {
                                                        result: e.result,
                                                        message: e.message,
                                                        error: e.error,
                                                        status: e.status
                                                      };
                                                    });

                                                  case 4:
                                                    _context3.next = 7;
                                                    break;

                                                  case 6:
                                                    responserService = {
                                                      result: 'Nop',
                                                      message: 'La capa superior contesto undefined',
                                                      error: '',
                                                      status: 500
                                                    };

                                                  case 7:
                                                  case "end":
                                                    return _context3.stop();
                                                }
                                              }
                                            }, _callee3);
                                          }));

                                          return function (_x7) {
                                            return _ref3.apply(this, arguments);
                                          };
                                        }())["catch"](function (e) {
                                          responserService = {
                                            result: e.result,
                                            message: e.message,
                                            error: e.error,
                                            status: e.status
                                          };
                                        });

                                      case 4:
                                        _context4.next = 7;
                                        break;

                                      case 6:
                                        responserService = {
                                          result: 'Nop',
                                          message: 'El usuario: ' + user + ', no se encuentra en nuestra base de datos.',
                                          error: 'No se encontraron los datos',
                                          status: 404
                                        };

                                      case 7:
                                        _context4.next = 10;
                                        break;

                                      case 9:
                                        responserService = {
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

                              return function (_x6) {
                                return _ref2.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 3:
                            reject(responserService);

                          case 4:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x4, _x5) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getPass(_x, _x2, _x3) {
        return _getPass.apply(this, arguments);
      }

      return getPass;
    }()
  }, {
    key: "resetPass",
    value: function () {
      var _resetPass = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(user, userModel, mailModel) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(resolve, reject) {
                    var responserService;
                    return _regenerator["default"].wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            responserService = new _Responser["default"]();
                            _context8.next = 3;
                            return _this2.userService.existUserWithThatUser(user, userModel).then( /*#__PURE__*/function () {
                              var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(res) {
                                return _regenerator["default"].wrap(function _callee7$(_context7) {
                                  while (1) {
                                    switch (_context7.prev = _context7.next) {
                                      case 0:
                                        if (res && res.result !== undefined) {
                                          if (res.result) {
                                            _this2.controllerService.getAll(userModel, {}, {
                                              operationType: {
                                                $ne: 'D'
                                              },
                                              user: user
                                            }, {}, {}, 1, 0).then(function (res) {
                                              var _res$result, _res$result2, _res$result3;

                                              var api = process.env.API;
                                              var front = process.env.FRONT;
                                              var to = (res === null || res === void 0 ? void 0 : (_res$result = res.result) === null || _res$result === void 0 ? void 0 : _res$result.email) || '';
                                              var url = front + '/newpass/' + (res === null || res === void 0 ? void 0 : (_res$result2 = res.result) === null || _res$result2 === void 0 ? void 0 : _res$result2.user) || '';
                                              url = url + '/' + (res === null || res === void 0 ? void 0 : (_res$result3 = res.result) === null || _res$result3 === void 0 ? void 0 : _res$result3.password) || '';
                                              var logo = api + '/image/logo.png';
                                              var header = api + '/image/header.png';

                                              _this2.controllerService.getAll(mailModel, {}, {
                                                operationType: {
                                                  $ne: 'D'
                                                },
                                                enabled: true
                                              }, {}, {}, 1, 0).then(function (res) {
                                                if (res.result !== undefined) {
                                                  var _res$result4, _res$result5;

                                                  var from = (res === null || res === void 0 ? void 0 : (_res$result4 = res.result) === null || _res$result4 === void 0 ? void 0 : _res$result4.from) || '';
                                                  var pass = (res === null || res === void 0 ? void 0 : (_res$result5 = res.result) === null || _res$result5 === void 0 ? void 0 : _res$result5.pass) || '';

                                                  if (from !== '' && pass !== '') {
                                                    _this2.sendMailController.sendMail(to, "<!DOCTYPE html>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<html lang=\"en\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<head>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<meta charset=\"UTF-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<title>\xA1Bienvenido/a a tu experiencia WingCamp!</title>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<link href=\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap\" rel=\"stylesheet\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Font Awesome JS -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<script defer src=\"https://use.fontawesome.com/releases/v5.0.13/js/solid.js\" integrity=\"sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ\" crossorigin=\"anonymous\"></script>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<script defer src=\"https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js\" integrity=\"sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY\" crossorigin=\"anonymous\"></script>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</head>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<body style=\"font-family: 'Quicksand', 'Arial', sans-serif !important; background-color:white; margin: 0;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<header class=\"mail-header\" style=\"background-image: url(".concat(header, "); background-size: cover; background-repeat: no-repeat; color: white; min-height: 120px; display: flex; align-items: center; justify-content: center;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>           \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h1>\xA1Hola, ").concat(user, "!</h1>                   \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</header>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<section style=\"padding: 0px 30px; color: #383838;\">\n\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"font-weight-bold mb-3\">\xA1Bienvenido/a a tu experiencia WingCamp!</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <p>Queremos ayudarte con la recuperaci\xF3n de tu contrase\xF1a. Te compartimos el siguiente Check list a completar para facilitarnos la creaci\xF1on de tu primer curso: <a href=\"#\">Formulario inicial</a></p> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Para finalizar nuestro proceso de recuperaci\xF3n de contrase\xF1a, hac\xE9 click <a href=\"").concat(url, "\">aqu\xED</a>.</p>\n\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"text-center mt-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Tambi\xE9n pod\xE9s contactarte con nosotros mediante nuestros canales de atenci\xF3n:</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span><a href=\"tel:0810-220-0127\">0810-220-0127 //</a></span>  <span><a href=\"tel:0810-220-0127\">+54 011 1522354332 //</a></span>     <span><a href=\"mailto:info@wingcamp.com\" target=\"blank\">info@wingcamp.com</a></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"display: flex; justify-content: center; margin: 50px 0px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=").concat(logo, "  alt=\"\">\n\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"margin: 0px 20px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"transition: .4s;\" href=\"https://www.instagram.com/wingcamp/\" target=\"blank\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"instagram.svg\" alt=\"\" style=\"width: 20px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"transition: .4s;\" href=\"https://www.facebook.com/WingCamp/\" target=\"blank\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"facebook-f-brands.svg\" alt=\"\" style=\"width: 15px; margin: 0px 5px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"transition: .4s;\" href=\"https://www.youtube.com/channel/UC7v6eKmTcYz-RUWBnDd0nFA/videos?view_as=subscriber\" target=\"blank\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"youtube-brands.svg\" alt=\"\" style=\"width: 25px;   fill: #5600c2 !important;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>             \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<script src=\"https://kit.fontawesome.com/5cae25724c.js\" crossorigin=\"anonymous\"></script>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</body>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</html>"), from, pass, 'Wingcamp - Recuperación de contraseña').then(function (res) {
                                                      console.log(res);
                                                    })["catch"](function (err) {
                                                      console.log(err);
                                                    });
                                                  } else {
                                                    console.log('from or pass is undefined. Not send mail, send meil to reset pass');
                                                  }
                                                }
                                              })["catch"](function (err) {
                                                console.log(err);
                                              });
                                            })["catch"](function (err) {
                                              console.log(err);
                                            });

                                            responserService = {
                                              result: 'Gestión exitosa',
                                              message: 'Revisa tu casilla de correo. Te enviamos un link para que puedas resetear tu contraseña.',
                                              error: '',
                                              status: 200
                                            };
                                            resolve(responserService);
                                          } else {
                                            responserService = {
                                              result: 'Nop',
                                              message: 'El usuario: ' + user + ', no se encuentra en nuestra base de datos.',
                                              error: 'No se encontraron los datos',
                                              status: 404
                                            };
                                          }
                                        } else {
                                          responserService = {
                                            result: 'Nop',
                                            message: 'La capa superior contesto undefined',
                                            error: '',
                                            status: 500
                                          };
                                        }

                                      case 1:
                                      case "end":
                                        return _context7.stop();
                                    }
                                  }
                                }, _callee7);
                              }));

                              return function (_x15) {
                                return _ref7.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 3:
                            reject(responserService);

                          case 4:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x13, _x14) {
                    return _ref6.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function resetPass(_x10, _x11, _x12) {
        return _resetPass.apply(this, arguments);
      }

      return resetPass;
    }()
  }, {
    key: "register",
    value: function () {
      var _register = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(userData, database, model, companyModel, mailModel, subscriptionModel) {
        var _this3 = this;

        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(resolve, reject) {
                    var responserService, register, companyId;
                    return _regenerator["default"].wrap(function _callee14$(_context14) {
                      while (1) {
                        switch (_context14.prev = _context14.next) {
                          case 0:
                            responserService = new _Responser["default"]();
                            register = new _UserToken["default"]();
                            companyId = '';
                            _context14.next = 5;
                            return _this3.userService.existUserWithThatEmail(userData.email, model).then( /*#__PURE__*/function () {
                              var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(res) {
                                return _regenerator["default"].wrap(function _callee13$(_context13) {
                                  while (1) {
                                    switch (_context13.prev = _context13.next) {
                                      case 0:
                                        if (!(res && res.result !== undefined)) {
                                          _context13.next = 9;
                                          break;
                                        }

                                        if (res.result) {
                                          _context13.next = 6;
                                          break;
                                        }

                                        _context13.next = 4;
                                        return _this3.userService.hashPassword(userData.password).then( /*#__PURE__*/function () {
                                          var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(res) {
                                            return _regenerator["default"].wrap(function _callee12$(_context12) {
                                              while (1) {
                                                switch (_context12.prev = _context12.next) {
                                                  case 0:
                                                    if (!(res && res.result !== undefined)) {
                                                      _context12.next = 8;
                                                      break;
                                                    }

                                                    userData.password = res.result;
                                                    _context12.next = 4;
                                                    return _this3.companyService.getAll(companyModel, {}, {
                                                      name: database,
                                                      operationType: {
                                                        $ne: 'D'
                                                      }
                                                    }, {}, {}, 0, 0).then( /*#__PURE__*/function () {
                                                      var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(res) {
                                                        return _regenerator["default"].wrap(function _callee11$(_context11) {
                                                          while (1) {
                                                            switch (_context11.prev = _context11.next) {
                                                              case 0:
                                                                if (!(res && res.result !== undefined)) {
                                                                  _context11.next = 6;
                                                                  break;
                                                                }

                                                                if (!(res.result.length === 0)) {
                                                                  _context11.next = 4;
                                                                  break;
                                                                }

                                                                _context11.next = 4;
                                                                return _this3.companyService.save({
                                                                  name: database
                                                                }, companyModel).then( /*#__PURE__*/function () {
                                                                  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(res) {
                                                                    return _regenerator["default"].wrap(function _callee10$(_context10) {
                                                                      while (1) {
                                                                        switch (_context10.prev = _context10.next) {
                                                                          case 0:
                                                                            if (res && res.result !== undefined) {
                                                                              responserService = {
                                                                                result: res.result,
                                                                                message: res.message,
                                                                                error: res.error,
                                                                                status: res.status
                                                                              };

                                                                              if (res.status === 200) {
                                                                                companyId = res.result._id;
                                                                              }
                                                                            } else {
                                                                              responserService = {
                                                                                result: 'Nop',
                                                                                message: 'La capa superior contesto undefined',
                                                                                error: '',
                                                                                status: 500
                                                                              };
                                                                            }

                                                                          case 1:
                                                                          case "end":
                                                                            return _context10.stop();
                                                                        }
                                                                      }
                                                                    }, _callee10);
                                                                  }));

                                                                  return function (_x27) {
                                                                    return _ref12.apply(this, arguments);
                                                                  };
                                                                }());

                                                              case 4:
                                                                _context11.next = 7;
                                                                break;

                                                              case 6:
                                                                responserService = {
                                                                  result: 'Nop',
                                                                  message: 'La capa superior contesto undefined',
                                                                  error: '',
                                                                  status: 500
                                                                };

                                                              case 7:
                                                              case "end":
                                                                return _context11.stop();
                                                            }
                                                          }
                                                        }, _callee11);
                                                      }));

                                                      return function (_x26) {
                                                        return _ref11.apply(this, arguments);
                                                      };
                                                    }())["catch"](function (err) {
                                                      responserService = {
                                                        result: err.result,
                                                        message: err.message,
                                                        error: err.error,
                                                        status: err.status
                                                      };
                                                    });

                                                  case 4:
                                                    _context12.next = 6;
                                                    return _this3.userService.save(userData, model).then(function (res) {
                                                      if (res && res.result !== undefined) {
                                                        var _register$user;

                                                        register.user = res.result;
                                                        register.user.password = undefined;
                                                        register.token = _this3.tokenProvider.createToken(register.user, database);
                                                        responserService = {
                                                          result: {
                                                            user: register.user,
                                                            token: register.token,
                                                            company: companyId
                                                          },
                                                          message: 'Registro exitoso',
                                                          error: '',
                                                          status: 200
                                                        };
                                                        var to = (register === null || register === void 0 ? void 0 : (_register$user = register.user) === null || _register$user === void 0 ? void 0 : _register$user.email) || '';

                                                        _this3.controllerService.getAll(mailModel, {}, {
                                                          operationType: {
                                                            $ne: 'D'
                                                          },
                                                          enabled: true
                                                        }, {}, {}, 1, 0).then(function (res) {
                                                          if (res.result !== undefined) {
                                                            var from = res.result.from;
                                                            var pass = res.result.pass;

                                                            if (from !== undefined && pass !== undefined) {
                                                              _this3.sendMailController.sendMail(to, 'para validar este registro, ingrese a esta direccion', from, pass, 'subject').then(function (res) {
                                                                console.log(res);
                                                              })["catch"](function (err) {
                                                                console.log(err);
                                                              });
                                                            } else {
                                                              console.log('from or pass is undefined. Not send mail');
                                                            }
                                                          }
                                                        })["catch"](function (err) {
                                                          console.log(err);
                                                        });

                                                        var now = Date.parse(new Date().toString());
                                                        var subscription = {
                                                          start: now,
                                                          end: now + 2592000000,
                                                          creationUser: register.user._id,
                                                          creationDate: new Date(),
                                                          user: register.user._id,
                                                          operationType: 'C'
                                                        };

                                                        _this3.subscriptionService.save(subscription, subscriptionModel, register.user._id);

                                                        resolve(responserService);
                                                      } else {
                                                        responserService = {
                                                          result: 'Nop',
                                                          message: 'La capa superior contesto undefined',
                                                          error: '',
                                                          status: 500
                                                        };
                                                      }
                                                    })["catch"](function (err) {
                                                      responserService = {
                                                        result: err.result,
                                                        message: err.message,
                                                        error: err.error,
                                                        status: err.status
                                                      };
                                                    });

                                                  case 6:
                                                    _context12.next = 9;
                                                    break;

                                                  case 8:
                                                    responserService = {
                                                      result: 'Nop',
                                                      message: 'La capa superior contesto undefined',
                                                      error: '',
                                                      status: 500
                                                    };

                                                  case 9:
                                                  case "end":
                                                    return _context12.stop();
                                                }
                                              }
                                            }, _callee12);
                                          }));

                                          return function (_x25) {
                                            return _ref10.apply(this, arguments);
                                          };
                                        }())["catch"](function (err) {
                                          responserService = {
                                            result: err.result,
                                            message: err.message,
                                            error: err.error,
                                            status: err.status
                                          };
                                        });

                                      case 4:
                                        _context13.next = 7;
                                        break;

                                      case 6:
                                        responserService = {
                                          result: 'Nop',
                                          message: 'El email ' + userData.email + ' ya se encuentra registrado',
                                          error: 'Duplicaion de datos',
                                          status: 428
                                        };

                                      case 7:
                                        _context13.next = 10;
                                        break;

                                      case 9:
                                        responserService = {
                                          result: 'Nop',
                                          message: 'La capa superior contesto undefined',
                                          error: '',
                                          status: 500
                                        };

                                      case 10:
                                      case "end":
                                        return _context13.stop();
                                    }
                                  }
                                }, _callee13);
                              }));

                              return function (_x24) {
                                return _ref9.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 5:
                            reject(responserService);

                          case 6:
                          case "end":
                            return _context14.stop();
                        }
                      }
                    }, _callee14);
                  }));

                  return function (_x22, _x23) {
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

      function register(_x16, _x17, _x18, _x19, _x20, _x21) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: "registerWithUser",
    value: function () {
      var _registerWithUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(userData, database, model, companyModel, mailModel, subscriptionModel) {
        var _this4 = this;

        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(resolve, reject) {
                    var responserService, register, companyId;
                    return _regenerator["default"].wrap(function _callee20$(_context20) {
                      while (1) {
                        switch (_context20.prev = _context20.next) {
                          case 0:
                            responserService = new _Responser["default"]();
                            register = new _UserToken["default"]();
                            companyId = '';
                            _context20.next = 5;
                            return _this4.userService.existUserWithThatUser(userData.user, model).then( /*#__PURE__*/function () {
                              var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(res) {
                                return _regenerator["default"].wrap(function _callee19$(_context19) {
                                  while (1) {
                                    switch (_context19.prev = _context19.next) {
                                      case 0:
                                        if (!(res && res.result !== undefined)) {
                                          _context19.next = 9;
                                          break;
                                        }

                                        if (res.result) {
                                          _context19.next = 6;
                                          break;
                                        }

                                        _context19.next = 4;
                                        return _this4.userService.hashPassword(userData.password).then( /*#__PURE__*/function () {
                                          var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(res) {
                                            return _regenerator["default"].wrap(function _callee18$(_context18) {
                                              while (1) {
                                                switch (_context18.prev = _context18.next) {
                                                  case 0:
                                                    if (!(res && res.result !== undefined)) {
                                                      _context18.next = 9;
                                                      break;
                                                    }

                                                    userData.password = res.result;
                                                    _context18.next = 4;
                                                    return _this4.companyService.getAll(companyModel, {}, {
                                                      name: database,
                                                      operationType: {
                                                        $ne: 'D'
                                                      }
                                                    }, {}, {}, 0, 0).then( /*#__PURE__*/function () {
                                                      var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(res) {
                                                        return _regenerator["default"].wrap(function _callee17$(_context17) {
                                                          while (1) {
                                                            switch (_context17.prev = _context17.next) {
                                                              case 0:
                                                                if (!(res && res.result !== undefined)) {
                                                                  _context17.next = 6;
                                                                  break;
                                                                }

                                                                if (!(res.result.length === 0)) {
                                                                  _context17.next = 4;
                                                                  break;
                                                                }

                                                                _context17.next = 4;
                                                                return _this4.companyService.save({
                                                                  name: database
                                                                }, companyModel).then( /*#__PURE__*/function () {
                                                                  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(res) {
                                                                    return _regenerator["default"].wrap(function _callee16$(_context16) {
                                                                      while (1) {
                                                                        switch (_context16.prev = _context16.next) {
                                                                          case 0:
                                                                            if (res && res.result !== undefined) {
                                                                              responserService = {
                                                                                result: res.result,
                                                                                message: res.message,
                                                                                error: res.error,
                                                                                status: res.status
                                                                              };

                                                                              if (res.status === 200) {
                                                                                companyId = res.result._id;
                                                                              }
                                                                            } else {
                                                                              responserService = {
                                                                                result: 'Nop',
                                                                                message: 'La capa superior contesto undefined',
                                                                                error: '',
                                                                                status: 500
                                                                              };
                                                                            }

                                                                          case 1:
                                                                          case "end":
                                                                            return _context16.stop();
                                                                        }
                                                                      }
                                                                    }, _callee16);
                                                                  }));

                                                                  return function (_x39) {
                                                                    return _ref17.apply(this, arguments);
                                                                  };
                                                                }());

                                                              case 4:
                                                                _context17.next = 7;
                                                                break;

                                                              case 6:
                                                                responserService = {
                                                                  result: 'Nop',
                                                                  message: 'La capa superior contesto undefined',
                                                                  error: '',
                                                                  status: 500
                                                                };

                                                              case 7:
                                                              case "end":
                                                                return _context17.stop();
                                                            }
                                                          }
                                                        }, _callee17);
                                                      }));

                                                      return function (_x38) {
                                                        return _ref16.apply(this, arguments);
                                                      };
                                                    }())["catch"](function (err) {
                                                      responserService = {
                                                        result: err.result,
                                                        message: err.message,
                                                        error: err.error,
                                                        status: err.status
                                                      };
                                                    });

                                                  case 4:
                                                    userData['idMail'] = userData.password;
                                                    _context18.next = 7;
                                                    return _this4.userService.saveWithUser(userData, model).then(function (res) {
                                                      if (res && res.result !== undefined) {
                                                        var _register$user2;

                                                        register.user = res.result;
                                                        register.user.password = undefined;
                                                        register.token = _this4.tokenProvider.createToken(register.user, database);
                                                        responserService = {
                                                          result: {
                                                            user: register.user,
                                                            token: register.token,
                                                            company: companyId
                                                          },
                                                          message: 'Registro exitoso',
                                                          error: '',
                                                          status: 200
                                                        };
                                                        var path = process.env.API;
                                                        var to = (register === null || register === void 0 ? void 0 : (_register$user2 = register.user) === null || _register$user2 === void 0 ? void 0 : _register$user2.email) || '';
                                                        var url = path + '/verified/' + userData.user + '/' + userData.password;
                                                        var logo = path + '/image/logo.png';
                                                        var header = path + '/image/header.png';

                                                        _this4.controllerService.getAll(mailModel, {}, {
                                                          operationType: {
                                                            $ne: 'D'
                                                          },
                                                          enabled: true
                                                        }, {}, {}, 1, 0).then(function (res) {
                                                          if (res.result !== undefined) {
                                                            var from = res.result.from;
                                                            var pass = res.result.pass;

                                                            if (from !== undefined && pass !== undefined) {
                                                              _this4.sendMailController.sendMail(to, "<!DOCTYPE html>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<html lang=\"en\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<head>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<meta charset=\"UTF-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<title>\xA1Bienvenido/a a tu experiencia WingCamp!</title>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<link href=\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap\" rel=\"stylesheet\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Font Awesome JS -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<script defer src=\"https://use.fontawesome.com/releases/v5.0.13/js/solid.js\" integrity=\"sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ\" crossorigin=\"anonymous\"></script>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<script defer src=\"https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js\" integrity=\"sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY\" crossorigin=\"anonymous\"></script>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</head>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<body style=\"font-family: 'Quicksand', 'Arial', sans-serif !important; background-color:white; margin: 0;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<header class=\"mail-header\" style=\"background-image: url(".concat(header, "); background-size: cover; background-repeat: no-repeat; color: white; min-height: 120px; display: flex; align-items: center; justify-content: center;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>           \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h1>\xA1Hola, ").concat(userData.user, "!</h1>                   \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</header>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<section style=\"padding: 0px 30px; color: #383838;\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"font-weight-bold mb-3\">\xA1Bienvenido/a a tu experiencia WingCamp!</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <p>Queremos ayudarte con la configuraci\xF3n inicial de tu cuenta. Te compartimos el siguiente Check list a completar para facilitarnos la creaci\xF1on de tu primer curso: <a href=\"#\">Formulario inicial</a></p> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Para finalizar nuestro proceso de Alta de cuenta, hac\xE9 click <a href=\"").concat(url, "\">aqu\xED</a>.</p>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"font-weight: bold; text-align: center; margin: 40px 0px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Dentro de las pr\xF3ximas 24 hs. un ejecutivo de atenci\xF3n a usuarios se comunicar\xE1 con vos.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"text-center mt-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Tambi\xE9n pod\xE9s contactarte con nosotros mediante nuestros canales de atenci\xF3n:</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span><a href=\"tel:0810-220-0127\">0810-220-0127 //</a></span>  <span><a href=\"tel:0810-220-0127\">+54 011 1522354332 //</a></span>     <span><a href=\"mailto:info@wingcamp.com\" target=\"blank\">info@wingcamp.com</a></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"display: flex; justify-content: center; margin: 50px 0px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=").concat(logo, "  alt=\"\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"margin: 0px 20px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"transition: .4s;\" href=\"https://www.instagram.com/wingcamp/\" target=\"blank\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"instagram.svg\" alt=\"\" style=\"width: 20px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"transition: .4s;\" href=\"https://www.facebook.com/WingCamp/\" target=\"blank\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"facebook-f-brands.svg\" alt=\"\" style=\"width: 15px; margin: 0px 5px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"transition: .4s;\" href=\"https://www.youtube.com/channel/UC7v6eKmTcYz-RUWBnDd0nFA/videos?view_as=subscriber\" target=\"blank\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"youtube-brands.svg\" alt=\"\" style=\"width: 25px;   fill: #5600c2 !important;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>             \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</section>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<script src=\"https://kit.fontawesome.com/5cae25724c.js\" crossorigin=\"anonymous\"></script>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</body>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</html>"), from, pass, 'subject').then(function (res) {
                                                                console.log(res);
                                                              })["catch"](function (err) {
                                                                console.log(err);
                                                              });
                                                            } else {
                                                              console.log('from or pass is undefined. Not send mail');
                                                            }
                                                          }
                                                        })["catch"](function (err) {
                                                          console.log(err);
                                                        });

                                                        var now = Date.parse(new Date().toString());
                                                        var subscription = {
                                                          start: now,
                                                          // end: now + 2592000000,
                                                          end: now + 120000,
                                                          // end: now,
                                                          creationUser: register.user._id,
                                                          creationDate: new Date(),
                                                          user: register.user._id,
                                                          operationType: 'C'
                                                        };

                                                        _this4.subscriptionService.save(subscription, subscriptionModel, register.user._id);

                                                        resolve(responserService);
                                                      } else {
                                                        responserService = {
                                                          result: 'Nop',
                                                          message: 'La capa superior contesto undefined',
                                                          error: '',
                                                          status: 500
                                                        };
                                                      }
                                                    })["catch"](function (err) {
                                                      responserService = {
                                                        result: err.result,
                                                        message: err.message,
                                                        error: err.error,
                                                        status: err.status
                                                      };
                                                    });

                                                  case 7:
                                                    _context18.next = 10;
                                                    break;

                                                  case 9:
                                                    responserService = {
                                                      result: 'Nop',
                                                      message: 'La capa superior contesto undefined',
                                                      error: '',
                                                      status: 500
                                                    };

                                                  case 10:
                                                  case "end":
                                                    return _context18.stop();
                                                }
                                              }
                                            }, _callee18);
                                          }));

                                          return function (_x37) {
                                            return _ref15.apply(this, arguments);
                                          };
                                        }())["catch"](function (err) {
                                          responserService = {
                                            result: err.result,
                                            message: err.message,
                                            error: err.error,
                                            status: err.status
                                          };
                                        });

                                      case 4:
                                        _context19.next = 7;
                                        break;

                                      case 6:
                                        responserService = {
                                          result: 'Nop',
                                          message: 'El usuario ' + userData.user + ' ya se encuentra registrado',
                                          error: 'Duplicaion de datos',
                                          status: 428
                                        };

                                      case 7:
                                        _context19.next = 10;
                                        break;

                                      case 9:
                                        responserService = {
                                          result: 'Nop',
                                          message: 'La capa superior contesto undefined',
                                          error: '',
                                          status: 500
                                        };

                                      case 10:
                                      case "end":
                                        return _context19.stop();
                                    }
                                  }
                                }, _callee19);
                              }));

                              return function (_x36) {
                                return _ref14.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 5:
                            reject(responserService);

                          case 6:
                          case "end":
                            return _context20.stop();
                        }
                      }
                    }, _callee20);
                  }));

                  return function (_x34, _x35) {
                    return _ref13.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21);
      }));

      function registerWithUser(_x28, _x29, _x30, _x31, _x32, _x33) {
        return _registerWithUser.apply(this, arguments);
      }

      return registerWithUser;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(loginData, database, model, permissionModel) {
        var _this5 = this;

        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                return _context26.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(resolve, reject) {
                    var responserService, login;
                    return _regenerator["default"].wrap(function _callee25$(_context25) {
                      while (1) {
                        switch (_context25.prev = _context25.next) {
                          case 0:
                            responserService = new _Responser["default"]();
                            login = new _UserToken["default"]();
                            _context25.next = 4;
                            return _this5.userService.existUserWithThatEmail(loginData.email, model).then( /*#__PURE__*/function () {
                              var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(res) {
                                return _regenerator["default"].wrap(function _callee24$(_context24) {
                                  while (1) {
                                    switch (_context24.prev = _context24.next) {
                                      case 0:
                                        if (!(res && res.result !== undefined)) {
                                          _context24.next = 9;
                                          break;
                                        }

                                        if (!res.result) {
                                          _context24.next = 6;
                                          break;
                                        }

                                        _context24.next = 4;
                                        return _this5.userService.getUserByEmail(loginData.email, model, permissionModel).then( /*#__PURE__*/function () {
                                          var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(res) {
                                            return _regenerator["default"].wrap(function _callee23$(_context23) {
                                              while (1) {
                                                switch (_context23.prev = _context23.next) {
                                                  case 0:
                                                    if (!(res && res.result !== undefined)) {
                                                      _context23.next = 6;
                                                      break;
                                                    }

                                                    login.user = res.result;
                                                    _context23.next = 4;
                                                    return _this5.userService.isMatch(loginData.password, login.user.password).then( /*#__PURE__*/function () {
                                                      var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(res) {
                                                        return _regenerator["default"].wrap(function _callee22$(_context22) {
                                                          while (1) {
                                                            switch (_context22.prev = _context22.next) {
                                                              case 0:
                                                                if (!(res && res.result !== undefined)) {
                                                                  _context22.next = 9;
                                                                  break;
                                                                }

                                                                if (!res.result) {
                                                                  _context22.next = 6;
                                                                  break;
                                                                }

                                                                _context22.next = 4;
                                                                return _this5.userService.isEnable(login.user._id, model).then(function (res) {
                                                                  if (res && res.result !== undefined) {
                                                                    if (res.result) {
                                                                      login.user.password = undefined;
                                                                      login.token = _this5.tokenProvider.createToken(login.user, database);
                                                                      responserService = {
                                                                        result: {
                                                                          user: login.user,
                                                                          token: login.token
                                                                        },
                                                                        message: 'Bienvenido ' + login.user.email,
                                                                        error: '',
                                                                        status: 200
                                                                      };
                                                                      resolve(responserService);
                                                                    } else {
                                                                      responserService = {
                                                                        result: 'Nop',
                                                                        message: 'El usuario no ha sido autorizado',
                                                                        error: 'El usuario no ha sido autorizado',
                                                                        status: 423
                                                                      };
                                                                    }
                                                                  } else {
                                                                    responserService = {
                                                                      result: 'Nop',
                                                                      message: 'La capa superior contesto undefined3',
                                                                      error: '',
                                                                      status: 500
                                                                    };
                                                                  }
                                                                })["catch"](function (err) {
                                                                  responserService = {
                                                                    result: err.result,
                                                                    message: err.message,
                                                                    error: err.error,
                                                                    status: err.status
                                                                  };
                                                                });

                                                              case 4:
                                                                _context22.next = 7;
                                                                break;

                                                              case 6:
                                                                responserService = {
                                                                  result: 'Nop',
                                                                  message: 'Password incorrecta',
                                                                  error: 'La contraseña ingresada es incorrecta',
                                                                  status: 403
                                                                };

                                                              case 7:
                                                                _context22.next = 10;
                                                                break;

                                                              case 9:
                                                                responserService = {
                                                                  result: 'Nop',
                                                                  message: 'La capa superior contesto undefined1',
                                                                  error: '',
                                                                  status: 500
                                                                };

                                                              case 10:
                                                              case "end":
                                                                return _context22.stop();
                                                            }
                                                          }
                                                        }, _callee22);
                                                      }));

                                                      return function (_x48) {
                                                        return _ref21.apply(this, arguments);
                                                      };
                                                    }())["catch"](function (err) {
                                                      responserService = {
                                                        result: err.result,
                                                        message: err.message,
                                                        error: err.error,
                                                        status: err.status
                                                      };
                                                    });

                                                  case 4:
                                                    _context23.next = 7;
                                                    break;

                                                  case 6:
                                                    responserService = {
                                                      result: 'Nop',
                                                      message: 'No existe usuario con el email: ' + loginData.email,
                                                      error: 'No existe usuario con el email: ' + loginData.email,
                                                      status: 404
                                                    };

                                                  case 7:
                                                  case "end":
                                                    return _context23.stop();
                                                }
                                              }
                                            }, _callee23);
                                          }));

                                          return function (_x47) {
                                            return _ref20.apply(this, arguments);
                                          };
                                        }())["catch"](function (err) {
                                          responserService = {
                                            result: err.result,
                                            message: err.message,
                                            error: err.error,
                                            status: err.status
                                          };
                                        });

                                      case 4:
                                        _context24.next = 7;
                                        break;

                                      case 6:
                                        responserService = {
                                          result: 'Nop',
                                          message: 'No existe usuario con el email: ' + loginData.email,
                                          error: 'No existe usuario con el email: ' + loginData.email,
                                          status: 404
                                        };

                                      case 7:
                                        _context24.next = 10;
                                        break;

                                      case 9:
                                        responserService = {
                                          result: 'Nop',
                                          message: 'La capa superior contesto undefined2',
                                          error: '',
                                          status: 500
                                        };

                                      case 10:
                                      case "end":
                                        return _context24.stop();
                                    }
                                  }
                                }, _callee24);
                              }));

                              return function (_x46) {
                                return _ref19.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 4:
                            reject(responserService);

                          case 5:
                          case "end":
                            return _context25.stop();
                        }
                      }
                    }, _callee25);
                  }));

                  return function (_x44, _x45) {
                    return _ref18.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26);
      }));

      function login(_x40, _x41, _x42, _x43) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "loginWithUser",
    value: function () {
      var _loginWithUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee31(loginData, database, model) {
        var _this6 = this;

        return _regenerator["default"].wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                return _context31.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee30(resolve, reject) {
                    var responserService, login;
                    return _regenerator["default"].wrap(function _callee30$(_context30) {
                      while (1) {
                        switch (_context30.prev = _context30.next) {
                          case 0:
                            responserService = new _Responser["default"]();
                            login = new _UserToken["default"]();
                            _context30.next = 4;
                            return _this6.userService.existUserWithThatUser(loginData.user, model).then( /*#__PURE__*/function () {
                              var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29(res) {
                                return _regenerator["default"].wrap(function _callee29$(_context29) {
                                  while (1) {
                                    switch (_context29.prev = _context29.next) {
                                      case 0:
                                        if (!(res && res.result !== undefined)) {
                                          _context29.next = 9;
                                          break;
                                        }

                                        if (!res.result) {
                                          _context29.next = 6;
                                          break;
                                        }

                                        _context29.next = 4;
                                        return _this6.userService.getUserByUser(loginData.user, model).then( /*#__PURE__*/function () {
                                          var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28(res) {
                                            return _regenerator["default"].wrap(function _callee28$(_context28) {
                                              while (1) {
                                                switch (_context28.prev = _context28.next) {
                                                  case 0:
                                                    if (!(res && res.result !== undefined)) {
                                                      _context28.next = 6;
                                                      break;
                                                    }

                                                    login.user = res.result;
                                                    _context28.next = 4;
                                                    return _this6.userService.isMatch(loginData.password, login.user.password).then( /*#__PURE__*/function () {
                                                      var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27(res) {
                                                        return _regenerator["default"].wrap(function _callee27$(_context27) {
                                                          while (1) {
                                                            switch (_context27.prev = _context27.next) {
                                                              case 0:
                                                                if (!(res && res.result !== undefined)) {
                                                                  _context27.next = 9;
                                                                  break;
                                                                }

                                                                if (!res.result) {
                                                                  _context27.next = 6;
                                                                  break;
                                                                }

                                                                _context27.next = 4;
                                                                return _this6.userService.isEnable(login.user._id, model).then(function (res) {
                                                                  if (res && res.result !== undefined) {
                                                                    if (res.result) {
                                                                      login.user.password = undefined;
                                                                      login.token = _this6.tokenProvider.createToken(login.user, database);
                                                                      responserService = {
                                                                        result: {
                                                                          user: login.user,
                                                                          token: login.token
                                                                        },
                                                                        message: 'Bienvenido ' + login.user.user,
                                                                        error: '',
                                                                        status: 200
                                                                      };
                                                                      resolve(responserService);
                                                                    } else {
                                                                      responserService = {
                                                                        result: 'Nop',
                                                                        message: 'El usuario no ha sido autorizado',
                                                                        error: 'El usuario no ha sido autorizado',
                                                                        status: 423
                                                                      };
                                                                    }
                                                                  } else {
                                                                    responserService = {
                                                                      result: 'Nop',
                                                                      message: 'La capa superior contesto undefined3',
                                                                      error: '',
                                                                      status: 500
                                                                    };
                                                                  }
                                                                })["catch"](function (err) {
                                                                  responserService = {
                                                                    result: err.result,
                                                                    message: err.message,
                                                                    error: err.error,
                                                                    status: err.status
                                                                  };
                                                                });

                                                              case 4:
                                                                _context27.next = 7;
                                                                break;

                                                              case 6:
                                                                responserService = {
                                                                  result: 'Nop',
                                                                  message: 'Password incorrecta',
                                                                  error: 'La contraseña ingresada es incorrecta',
                                                                  status: 403
                                                                };

                                                              case 7:
                                                                _context27.next = 10;
                                                                break;

                                                              case 9:
                                                                responserService = {
                                                                  result: 'Nop',
                                                                  message: 'La capa superior contesto undefined1',
                                                                  error: '',
                                                                  status: 500
                                                                };

                                                              case 10:
                                                              case "end":
                                                                return _context27.stop();
                                                            }
                                                          }
                                                        }, _callee27);
                                                      }));

                                                      return function (_x56) {
                                                        return _ref25.apply(this, arguments);
                                                      };
                                                    }())["catch"](function (err) {
                                                      responserService = {
                                                        result: err.result,
                                                        message: err.message,
                                                        error: err.error,
                                                        status: err.status
                                                      };
                                                    });

                                                  case 4:
                                                    _context28.next = 7;
                                                    break;

                                                  case 6:
                                                    responserService = {
                                                      result: 'Nop',
                                                      message: 'No existe usuario: ' + loginData.user,
                                                      error: 'No existe usuario con el email: ' + loginData.user,
                                                      status: 404
                                                    };

                                                  case 7:
                                                  case "end":
                                                    return _context28.stop();
                                                }
                                              }
                                            }, _callee28);
                                          }));

                                          return function (_x55) {
                                            return _ref24.apply(this, arguments);
                                          };
                                        }())["catch"](function (err) {
                                          responserService = {
                                            result: err.result,
                                            message: err.message,
                                            error: err.error,
                                            status: err.status
                                          };
                                        });

                                      case 4:
                                        _context29.next = 7;
                                        break;

                                      case 6:
                                        responserService = {
                                          result: 'Nop',
                                          message: 'No existe usuario: ' + loginData.user,
                                          error: 'No existe usuario: ' + loginData.user,
                                          status: 404
                                        };

                                      case 7:
                                        _context29.next = 10;
                                        break;

                                      case 9:
                                        responserService = {
                                          result: 'Nop',
                                          message: 'La capa superior contesto undefined2',
                                          error: '',
                                          status: 500
                                        };

                                      case 10:
                                      case "end":
                                        return _context29.stop();
                                    }
                                  }
                                }, _callee29);
                              }));

                              return function (_x54) {
                                return _ref23.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 4:
                            reject(responserService);

                          case 5:
                          case "end":
                            return _context30.stop();
                        }
                      }
                    }, _callee30);
                  }));

                  return function (_x52, _x53) {
                    return _ref22.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31);
      }));

      function loginWithUser(_x49, _x50, _x51) {
        return _loginWithUser.apply(this, arguments);
      }

      return loginWithUser;
    }()
  }, {
    key: "loginVerified",
    value: function () {
      var _loginVerified = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee34(loginData, database, model) {
        var _this7 = this;

        return _regenerator["default"].wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                return _context34.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee33(resolve, reject) {
                    var responserService, login;
                    return _regenerator["default"].wrap(function _callee33$(_context33) {
                      while (1) {
                        switch (_context33.prev = _context33.next) {
                          case 0:
                            responserService = new _Responser["default"]();
                            login = new _UserToken["default"]();
                            console.log(loginData);
                            _context33.next = 5;
                            return _this7.controllerService.getAll(model, {}, {
                              user: loginData.password
                            }, {}, {}, 1, 0).then( /*#__PURE__*/function () {
                              var _ref27 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee32(res) {
                                return _regenerator["default"].wrap(function _callee32$(_context32) {
                                  while (1) {
                                    switch (_context32.prev = _context32.next) {
                                      case 0:
                                        console.log(res);

                                        if (!(res && res.result !== undefined)) {
                                          _context32.next = 7;
                                          break;
                                        }

                                        login.user = res.result;
                                        _context32.next = 5;
                                        return _this7.userService.isEnable(login.user._id, model).then(function (res) {
                                          if (res && res.result !== undefined) {
                                            if (res.result) {
                                              login.user.password = undefined;
                                              login.token = _this7.tokenProvider.createToken(login.user, database);
                                              responserService = {
                                                result: {
                                                  user: login.user,
                                                  token: login.token
                                                },
                                                message: 'Bienvenido ' + login.user.user,
                                                error: '',
                                                status: 200
                                              };
                                              resolve(responserService);
                                            } else {
                                              responserService = {
                                                result: 'Nop',
                                                message: 'El usuario no ha sido autorizado',
                                                error: 'El usuario no ha sido autorizado',
                                                status: 423
                                              };
                                            }
                                          } else {
                                            responserService = {
                                              result: 'Nop',
                                              message: 'La capa superior contesto undefined3',
                                              error: '',
                                              status: 500
                                            };
                                          }
                                        })["catch"](function (err) {
                                          responserService = {
                                            result: err.result,
                                            message: err.message,
                                            error: err.error,
                                            status: err.status
                                          };
                                        });

                                      case 5:
                                        _context32.next = 8;
                                        break;

                                      case 7:
                                        responserService = {
                                          result: 'Nop',
                                          message: 'No existe usuario.',
                                          error: 'No existe usuario.',
                                          status: 404
                                        };

                                      case 8:
                                      case "end":
                                        return _context32.stop();
                                    }
                                  }
                                }, _callee32);
                              }));

                              return function (_x62) {
                                return _ref27.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 5:
                            reject(responserService);

                          case 6:
                          case "end":
                            return _context33.stop();
                        }
                      }
                    }, _callee33);
                  }));

                  return function (_x60, _x61) {
                    return _ref26.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34);
      }));

      function loginVerified(_x57, _x58, _x59) {
        return _loginVerified.apply(this, arguments);
      }

      return loginVerified;
    }()
  }]);
  return Authentication;
}(), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "userService", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "subscriptionService", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "companyService", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "tokenProvider", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "controllerService", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "sendMailController", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports["default"] = Authentication;