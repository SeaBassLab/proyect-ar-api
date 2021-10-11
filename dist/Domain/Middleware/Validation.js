"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classTransformer = require("class-transformer");

var _classValidator = require("class-validator");

var _inversify = require("inversify");

var _Responser = _interopRequireDefault(require("../../Presentation/Controllers/Util/Responser"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Validation = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function () {
  function Validation() {
    _classCallCheck(this, Validation);

    this.responserService = new _Responser["default"]();
  }

  _createClass(Validation, [{
    key: "validate",
    value: function validate(type, skip) {
      var _this = this;

      var skipMissingProperties = false;
      if (skip) skipMissingProperties = true;
      return function (req, res, next) {
        if (req.body.origin === false) delete req.body.origin;
        if (req.body.cashBox === false) delete req.body.cashBox;
        (0, _classValidator.validate)((0, _classTransformer.plainToClass)(type, req.body), {
          skipMissingProperties: skipMissingProperties
        }).then(function (errors) {
          if (errors.length > 0) {
            var message = 'Errores: ';
            message = message + errors.map(function (error) {
              return Object.values(error.constraints);
            }).join(', '); // console.log(errors);

            _this.responserService.res = {
              result: 'Nop',
              message: message,
              error: errors,
              status: 428
            }; // console.log(this.responserService.res)

            res.status(_this.responserService.res.status).send(_this.responserService.res);
          } else {
            next();
          }
        })["catch"](function (err) {
          _this.responserService.res = {
            result: 'Nop',
            message: 'Algo paso',
            error: err,
            status: 500
          };
          console.log('validation');
          res.status(_this.responserService.res.status).send(_this.responserService.res);
        });
      };
    }
  }]);

  return Validation;
}()) || _class);
exports["default"] = Validation;