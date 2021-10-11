"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = require("mongoose");

var _inversify = require("inversify");

var _dec, _class, _class2, _temp;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ConnectionProvider = (_dec = (0, _inversify.injectable)(), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
  function ConnectionProvider() {
    (0, _classCallCheck2["default"])(this, ConnectionProvider);
  }

  (0, _createClass2["default"])(ConnectionProvider, [{
    key: "connect",
    value: function () {
      var _connect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(database) {
        var connection, uri;
        return _regenerator["default"].wrap(function _callee$(_context) {
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
      var _getModel = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(database, name, schema) {
        var model, connection;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
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
}(), (0, _defineProperty2["default"])(_class2, "connections", []), _temp)) || _class);
exports["default"] = ConnectionProvider;