"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);
  }

  _createClass(Controller, [{
    key: "getBoardId",
    value: function () {
      var _getBoardId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(responserService, shortURL, key, token) {
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
                            _context.next = 2;
                            return _axios["default"].get('https://api.trello.com/1/boards/' + shortURL, {
                              params: {
                                key: key,
                                token: token
                              }
                            }).then(function (res) {
                              if (res !== undefined) {
                                responserService = {
                                  result: res.data.id,
                                  message: res.statusText,
                                  error: {},
                                  status: res.status
                                };

                                if (res.status == 200) {
                                  resolve(responserService);
                                } else {
                                  reject(responserService);
                                }
                              } else {
                                responserService = {
                                  result: {},
                                  message: 'No se pudo realizar la consulta',
                                  error: {},
                                  status: 500
                                };
                                reject(responserService);
                              }
                            })["catch"](function (res) {
                              responserService = {
                                result: {},
                                message: 'No se pudo obtener el board desde trello',
                                error: res,
                                status: 500
                              };
                              reject(responserService);
                            });

                          case 2:
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

      function getBoardId(_x, _x2, _x3, _x4) {
        return _getBoardId.apply(this, arguments);
      }

      return getBoardId;
    }()
  }, {
    key: "getListId",
    value: function () {
      var _getListId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(name, responserService, boardId, key, token) {
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
                            return _axios["default"].get("https://api.trello.com/1/boards/".concat(boardId, "/lists"), {
                              params: {
                                key: key,
                                token: token
                              }
                            }).then(function (res) {
                              if (res !== undefined) {
                                var resolveList = {
                                  id: '',
                                  name: ''
                                };
                                res.data.map(function (list) {
                                  if (list.name === name) {
                                    resolveList = list;
                                  }
                                });
                                responserService = {
                                  result: resolveList.id,
                                  message: res.statusText,
                                  error: {},
                                  status: res.status
                                };

                                if (res.status == 200) {
                                  resolve(responserService);
                                } else {
                                  reject(responserService);
                                }
                              } else {
                                responserService = {
                                  result: {},
                                  message: 'No se pudo realizar la consulta',
                                  error: {},
                                  status: 500
                                };
                                reject(responserService);
                              }
                            })["catch"](function (err) {
                              responserService = {
                                result: {},
                                message: 'No se pudo obtener el board desde trello',
                                error: err,
                                status: 500
                              };
                              reject(responserService);
                            });

                          case 2:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x12, _x13) {
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

      function getListId(_x7, _x8, _x9, _x10, _x11) {
        return _getListId.apply(this, arguments);
      }

      return getListId;
    }()
  }, {
    key: "sendCard",
    value: function () {
      var _sendCard = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(claimName, claimDescription, responserService, listId, key, token) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve, reject) {
                    var url;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            url = 'https://api.trello.com/1/cards';
                            url = url + '?';
                            url = url + 'name=' + claimName;
                            url = url + '&desc=' + claimDescription;
                            url = url + '&pos=top';
                            url = url + '&subscribed=true';
                            url = url + '&idList=' + listId;
                            url = url + '&keepFromSource=all';
                            url = url + '&key=' + key;
                            url = url + '&token=' + token;
                            _context5.next = 12;
                            return _axios["default"].post(url).then(function (res) {
                              if (res !== undefined) {
                                responserService = {
                                  result: res.data,
                                  message: res.statusText,
                                  error: {},
                                  status: res.status
                                };

                                if (res.status == 200) {
                                  resolve(responserService);
                                } else {
                                  reject(responserService);
                                }
                              } else {
                                responserService = {
                                  result: {},
                                  message: 'No se pudo realizar la consulta',
                                  error: {},
                                  status: 500
                                };
                                reject(responserService);
                              }
                            })["catch"](function (err) {
                              responserService = {
                                result: {},
                                message: 'No se pudo obtener el board desde trello',
                                error: err,
                                status: 500
                              };
                              reject(responserService);
                            });

                          case 12:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x20, _x21) {
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

      function sendCard(_x14, _x15, _x16, _x17, _x18, _x19) {
        return _sendCard.apply(this, arguments);
      }

      return sendCard;
    }()
  }, {
    key: "saveCard",
    value: function () {
      var _saveCard = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(labelId, responserService, cardId, key, token) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(resolve, reject) {
                    var url;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            url = "https://api.trello.com/1/cards/".concat(cardId, "/idLabels");
                            url = url + '?';
                            url = url + 'value=' + labelId;
                            url = url + '&key=' + key;
                            url = url + '&token=' + token;
                            _context7.next = 7;
                            return _axios["default"].post(url).then(function (res) {
                              if (res !== undefined) {
                                responserService = {
                                  result: res.data,
                                  message: res.statusText,
                                  error: {},
                                  status: res.status
                                };

                                if (res.status == 200) {
                                  resolve(responserService);
                                } else {
                                  reject(responserService);
                                }
                              } else {
                                responserService = {
                                  result: {},
                                  message: 'No se pudo realizar la consulta',
                                  error: {},
                                  status: 500
                                };
                                reject(responserService);
                              }
                            })["catch"](function (err) {
                              responserService = {
                                result: {},
                                message: 'No se pudo obtener el board desde trello',
                                error: err,
                                status: 500
                              };
                              reject(responserService);
                            });

                          case 7:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x27, _x28) {
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

      function saveCard(_x22, _x23, _x24, _x25, _x26) {
        return _saveCard.apply(this, arguments);
      }

      return saveCard;
    }()
  }, {
    key: "saveLabel",
    value: function () {
      var _saveLabel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(label, color, responserService, boardId, key, token) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(resolve, reject) {
                    var url;
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            url = "https://api.trello.com/1/labels";
                            url = url + '?';
                            url = url + 'name=' + label;
                            url = url + '&color=' + color;
                            url = url + '&idBoard=' + boardId;
                            url = url + '&key=' + key;
                            url = url + '&token=' + token;
                            _context9.next = 9;
                            return _axios["default"].post(url).then(function (res) {
                              if (res !== undefined) {
                                responserService = {
                                  result: res.data,
                                  message: res.statusText,
                                  error: {},
                                  status: res.status
                                };

                                if (res.status == 200) {
                                  resolve(responserService);
                                } else {
                                  reject(responserService);
                                }
                              } else {
                                responserService = {
                                  result: {},
                                  message: 'No se pudo realizar la consulta',
                                  error: {},
                                  status: 500
                                };
                                reject(responserService);
                              }
                            })["catch"](function (err) {
                              responserService = {
                                result: {},
                                message: 'No se pudo obtener el board desde trello',
                                error: err,
                                status: 500
                              };
                              reject(responserService);
                            });

                          case 9:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x35, _x36) {
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

      function saveLabel(_x29, _x30, _x31, _x32, _x33, _x34) {
        return _saveLabel.apply(this, arguments);
      }

      return saveLabel;
    }()
  }, {
    key: "getLabelId",
    value: function () {
      var _getLabelId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(name, responserService, boardId, key, token) {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(resolve, reject) {
                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            _context11.next = 2;
                            return _axios["default"].get("https://api.trello.com/1/boards/".concat(boardId, "/labels"), {
                              params: {
                                key: key,
                                token: token
                              }
                            }).then(function (res) {
                              if (res !== undefined) {
                                var isFind = false;
                                var resolveLabel = {
                                  id: '',
                                  name: ''
                                };
                                res.data.map(function (label) {
                                  if (label.name === name) {
                                    isFind = true;
                                    resolveLabel = label;
                                  }
                                });
                                responserService = {
                                  result: resolveLabel.id,
                                  message: res.statusText,
                                  error: {},
                                  status: res.status
                                };

                                if (res.status == 200) {
                                  if (!isFind) {
                                    responserService = {
                                      result: resolveLabel.id,
                                      message: res.statusText,
                                      error: {},
                                      status: 404
                                    };
                                  }

                                  resolve(responserService);
                                } else {
                                  reject(responserService);
                                }
                              } else {
                                responserService = {
                                  result: {},
                                  message: 'No se pudo realizar la consulta',
                                  error: {},
                                  status: 500
                                };
                                reject(responserService);
                              }
                            })["catch"](function (err) {
                              responserService = {
                                result: {},
                                message: 'No se pudo obtener el board desde trello',
                                error: err,
                                status: 500
                              };
                              reject(responserService);
                            });

                          case 2:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x42, _x43) {
                    return _ref6.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      function getLabelId(_x37, _x38, _x39, _x40, _x41) {
        return _getLabelId.apply(this, arguments);
      }

      return getLabelId;
    }()
  }]);

  return Controller;
}();

exports["default"] = Controller;