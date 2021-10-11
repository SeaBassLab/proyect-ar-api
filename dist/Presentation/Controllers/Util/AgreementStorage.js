"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var multer = _interopRequireWildcard(require("multer"));

var fs = _interopRequireWildcard(require("fs"));

var _inversify = require("inversify");

var moment = _interopRequireWildcard(require("moment"));

var _dec, _class;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var path = require('path');

var Storage = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function () {
  function Storage() {
    _classCallCheck(this, Storage);
  }

  _createClass(Storage, [{
    key: "getAgreementStorage",
    value: function getAgreementStorage() {
      var plataform = process.platform;
      var path = '';

      if (plataform === 'linux') {
        path = '/home/some';
      } else {
        if (plataform === 'win32') {
          path = 'C:/temp/some';
        } else {
          console.log('Unrecognized platform. Files cannot be stored.');
        }
      }

      var storage = multer.diskStorage({
        destination: function destination(req, file, cb) {
          if (plataform === 'linux') {
            path = '/home/clients';
          } else {
            if (plataform === 'win32') {
              path = 'C:/temp/clients';
            } else {
              console.log('Unrecognized platform. Files cannot be stored.');
            }
          }

          if (req.database) {
            path = path + '/' + req.database + '/agreement';

            if (req.params.id) {
              path = path + '/' + req.params.id;
            }
          }

          fs.mkdirSync(path, {
            recursive: true
          });
          cb(null, path);
        },
        filename: function filename(req, file, cb) {
          var name = moment().format('YYYY-MM-DDTHH').toString() + '-' + file.originalname.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
          cb(null, name);
        }
      });
      return storage;
    }
  }, {
    key: "getCompanyStorage",
    value: function getCompanyStorage() {
      var plataform = process.platform;
      var pathA = '';

      if (plataform === 'linux') {
        pathA = path.join(__dirname, './../../../../uploads');
      } else {
        if (plataform === 'win32') {
          pathA = path.join(__dirname, './../../../../uploads');
        } else {
          console.log('Unrecognized platform. Files cannot be stored.');
        }
      }

      var storage = multer.diskStorage({
        destination: function destination(req, file, cb) {
          if (plataform === 'linux') {
            pathA = path.join(__dirname, './../../../../uploads');
          } else {
            if (plataform === 'win32') {
              pathA = path.join(__dirname, './../../../../uploads');
            } else {
              console.log('Unrecognized platform. Files cannot be stored.');
            }
          }

          fs.mkdirSync(pathA, {
            recursive: true
          });
          cb(null, pathA);
        },
        filename: function filename(req, file, cb) {
          var name = moment().format('YYYY-MM-DDTHH').toString() + '-' + file.originalname.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
          cb(null, name);
        }
      });
      return storage;
    }
  }, {
    key: "getPropertyStorage",
    value: function getPropertyStorage() {
      var plataform = process.platform;
      var path = '';

      if (plataform === 'linux') {
        path = '/home/some';
      } else {
        if (plataform === 'win32') {
          path = 'C:/temp/some';
        } else {
          console.log('Unrecognized platform. Files cannot be stored.');
        }
      }

      var storage = multer.diskStorage({
        destination: function destination(req, file, cb) {
          if (plataform === 'linux') {
            path = '/home/clients';
          } else {
            if (plataform === 'win32') {
              path = 'C:/temp/clients';
            } else {
              console.log('Unrecognized platform. Files cannot be stored.');
            }
          }

          if (req.database) {
            path = path + '/' + req.database + '/property';

            if (req.params.id) {
              path = path + '/' + req.params.id;
            }
          }

          fs.mkdirSync(path, {
            recursive: true
          });
          cb(null, path);
        },
        filename: function filename(req, file, cb) {
          var name = moment().format('YYYY-MM-DDTHH').toString() + '-' + file.originalname.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
          cb(null, name);
        }
      });
      return storage;
    }
  }, {
    key: "getClaimStorage",
    value: function getClaimStorage() {
      var plataform = process.platform;
      var path = '';

      if (plataform === 'linux') {
        path = '/home/some';
      } else {
        if (plataform === 'win32') {
          path = 'C:/temp/some';
        } else {
          console.log('Se intento uploadear un file in Claim, y...');
          console.log('Unrecognized platform. Files cannot be stored.');
        }
      }

      var storage = multer.diskStorage({
        destination: function destination(req, file, cb) {
          if (plataform === 'linux') {
            path = '/home/clients';
          } else {
            if (plataform === 'win32') {
              path = 'C:/temp/clients';
            } else {
              console.log('Se intento uploadear un file in Claim, y...');
              console.log('Unrecognized platform. Files cannot be stored.');
            }
          }

          if (req.database) {
            path = path + '/' + req.database + '/claim';
          }

          fs.mkdirSync(path, {
            recursive: true
          });
          cb(null, path);
        },
        filename: function filename(req, file, cb) {
          var name = moment().format('YYYY-MM-DDTHH').toString() + '-' + file.originalname.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
          cb(null, name);
        }
      });
      return storage;
    }
  }, {
    key: "getTransactionStorage",
    value: function getTransactionStorage() {
      var plataform = process.platform;
      var path = '';

      if (plataform === 'linux') {
        path = '/home/some';
      } else {
        if (plataform === 'win32') {
          path = 'C:/temp/some';
        } else {
          console.log('Unrecognized platform. Files cannot be stored.');
        }
      }

      var storage = multer.diskStorage({
        destination: function destination(req, file, cb) {
          if (plataform === 'linux') {
            path = '/home/clients';
          } else {
            if (plataform === 'win32') {
              path = 'C:/temp/clients';
            } else {
              console.log('Unrecognized platform. Files cannot be stored.');
            }
          }

          if (req.database) {
            path = path + '/' + req.database + '/transaction';

            if (req.params.folder) {
              path = path + '/' + req.params.folder;
            }
          }

          fs.mkdirSync(path, {
            recursive: true
          });
          cb(null, path);
        },
        filename: function filename(req, file, cb) {
          // var name: string = moment().format('YYYY-MM-DDTHH').toString() + '-' + file.originalname.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
          var name = req.params.name;
          cb(null, name);
        }
      });
      return storage;
    }
  }]);

  return Storage;
}()) || _class);
exports["default"] = Storage;