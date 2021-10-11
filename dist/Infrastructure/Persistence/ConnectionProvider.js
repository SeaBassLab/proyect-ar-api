"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _inversify = require("inversify");

var _dec, _class, _class2, _temp;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ConnectionProvider = (_dec = (0, _inversify.injectable)(), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
  function ConnectionProvider() {
    _classCallCheck(this, ConnectionProvider);
  }

  _createClass(ConnectionProvider, [{
    key: "connect",
    value: function () {
      var _connect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(database) {
        var connection, uri;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!database) {
                  _context.next = 15;
                  break;
                }

                connection = this.getConnection(database);

                if (connection) {
                  _context.next = 15;
                  break;
                }

                console.log('Creó conexión con base de datos: ' + database); // const uri: string = CONFIG.MONGO_URL + database;

                uri = process.env.CLUSTER + '/' + database + '?retryWrites=true&w=majority';
                _context.prev = 5;
                _context.next = 8;
                return (0, _mongoose.createConnection)(uri, {
                  useNewUrlParser: true,
                  useFindAndModify: false
                });

              case 8:
                connection = _context.sent;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](5);
                throw new Error().message = "Fail create mongose, create connection";

              case 14:
                ConnectionProvider.connections.push({
                  database: database,
                  connection: connection
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 11]]);
      }));

      function connect(_x) {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "getConnection",
    value: function getConnection(database) {
      var connection = null;

      if (ConnectionProvider.connections.length > 0) {
        if (database === undefined) {
          connection = ConnectionProvider.connections[0];
        } else {
          var _iterator = _createForOfIteratorHelper(ConnectionProvider.connections),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var c = _step.value;
              if (c.database === database) connection = c.connection;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      } else {
        this.connect(process.env.DB);
      }

      return connection;
    }
  }, {
    key: "getModel",
    value: function () {
      var _getModel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(database, name, schema) {
        var model, connection;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.connect(database);

              case 2:
                connection = this.getConnection(database);
                _context2.prev = 3;
                model = connection.model(name);
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](3);
                model = connection.model(name, schema);

              case 10:
                _context2.prev = 10;
                return _context2.abrupt("return", model);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 7, 10, 13]]);
      }));

      function getModel(_x2, _x3, _x4) {
        return _getModel.apply(this, arguments);
      }

      return getModel;
    }()
  }]);

  return ConnectionProvider;
}(), _defineProperty(_class2, "connections", []), _temp)) || _class);
exports["default"] = ConnectionProvider;