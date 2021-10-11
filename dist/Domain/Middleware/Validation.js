"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classTransformer = require("class-transformer");

var _classValidator = require("class-validator");

var _inversify = require("inversify");

var _Responser = _interopRequireDefault(require("../../Presentation/Controllers/Util/Responser"));

var _dec, _class;

var Validation = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function () {
  function Validation() {
    (0, _classCallCheck2["default"])(this, Validation);
    this.responserService = new _Responser["default"]();
  }

  (0, _createClass2["default"])(Validation, [{
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