"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

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

var moment = _interopRequireWildcard(require("moment"));

var _ConnectionProvider = _interopRequireDefault(require("./../../../Infrastructure/Persistence/ConnectionProvider"));

var _Responser = _interopRequireDefault(require("./Responser"));

var _dec, _class;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Controller = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function () {
  function Controller() {
    (0, _classCallCheck2["default"])(this, Controller);
    (0, _defineProperty2["default"])(this, "BSON", require('bson'));
    this.EJSON = this.BSON.EJSON;
    this.responserService = new _Responser["default"]();
    this.connectionProvider = new _ConnectionProvider["default"]();
  }

  (0, _createClass2["default"])(Controller, [{
    key: "search",
    value: function () {
      var _search2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(model, _search) {
        var _this = this;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!(model !== undefined)) {
                              _context.next = 5;
                              break;
                            }

                            _context.next = 3;
                            return model.find({
                              $text: {
                                $search: _search
                              }
                            }).then(function (result) {
                              var ret = [];
                              result.map(function (doc) {
                                if (doc.operationType !== 'D') ret.push(doc);
                              });
                              _this.responserService = {
                                result: ret,
                                message: 'Consulta exitosa',
                                error: '',
                                status: 200
                              };
                              resolve(_this.responserService);
                            })["catch"](function (err) {
                              _this.responserService = {
                                result: 'Nop',
                                message: 'No se pudo realizar la consulta',
                                error: err,
                                status: 500
                              };
                              reject(_this.responserService);
                            });

                          case 3:
                            _context.next = 7;
                            break;

                          case 5:
                            _this.responserService = {
                              result: 'Nop',
                              message: 'No se pudo realizar la consulta',
                              error: 'Some /entities/util/getAll/return/if(model)',
                              status: 500
                            };
                            reject(_this.responserService);

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x3, _x4) {
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

      function search(_x, _x2) {
        return _search2.apply(this, arguments);
      }

      return search;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(model) {
        var _this2 = this;

        var project,
            match,
            sort,
            group,
            limit,
            skip,
            _args5 = arguments;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                project = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
                match = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
                sort = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : {};
                group = _args5.length > 4 && _args5[4] !== undefined ? _args5[4] : {};
                limit = _args5.length > 5 && _args5[5] !== undefined ? _args5[5] : 0;
                skip = _args5.length > 6 && _args5[6] !== undefined ? _args5[6] : 0;
                return _context5.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
                    var queryAggregate, projectGroup, _i, _Object$keys, prop;

                    return _regenerator["default"].wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            queryAggregate = [];

                            if (Object.keys(project).length > 0) {
                              _this2.getLookups(queryAggregate, project, model);

                              if (Object.keys(sort).length > 0) queryAggregate.push({
                                $sort: sort
                              });
                              queryAggregate.push({
                                $project: project
                              });
                            } else {
                              if (Object.keys(sort).length > 0) queryAggregate.push({
                                $sort: sort
                              });
                            }

                            if (Object.keys(match).length > 0) queryAggregate.push({
                              $match: match
                            });
                            if (Object.keys(group).length > 0) queryAggregate.push({
                              $group: group
                            });

                            if (limit > 0) {
                              if (Object.keys(group).length > 0) {
                                projectGroup = "{ \"items\": { \"$slice\": [\"$items\", ".concat(skip, ", ").concat(limit, "] }");

                                for (_i = 0, _Object$keys = Object.keys(group); _i < _Object$keys.length; _i++) {
                                  prop = _Object$keys[_i];

                                  if (prop !== 'items') {
                                    projectGroup += ", \"".concat(prop, "\": 1");
                                  }
                                }

                                projectGroup += '}';
                                queryAggregate.push({
                                  $project: JSON.parse(projectGroup)
                                });
                              } else {
                                queryAggregate.push({
                                  $limit: limit
                                });
                                queryAggregate.push({
                                  $skip: skip
                                });
                              }
                            }

                            queryAggregate = _this2.EJSON.parse(JSON.stringify(queryAggregate));
                            if (queryAggregate.length === 0) queryAggregate.push({
                              $limit: 10
                            });

                            if (!(model !== undefined)) {
                              _context4.next = 12;
                              break;
                            }

                            _context4.next = 10;
                            return model.aggregate(queryAggregate).then( /*#__PURE__*/function () {
                              var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(result) {
                                return _regenerator["default"].wrap(function _callee3$(_context3) {
                                  while (1) {
                                    switch (_context3.prev = _context3.next) {
                                      case 0:
                                        // console.log(result);
                                        // console.log(model.collection.name);
                                        if (result.length === 0) {
                                          if (limit === 1) {
                                            _this2.responserService = {
                                              result: {},
                                              message: 'Consulta exitosa',
                                              error: '',
                                              status: 200
                                            };
                                          } else {
                                            _this2.responserService = {
                                              result: [],
                                              message: 'Consulta exitosa',
                                              error: '',
                                              status: 200
                                            };
                                          }
                                        } else {
                                          if (limit === 1) {
                                            _this2.responserService = {
                                              result: result[0],
                                              message: 'Consulta exitosa',
                                              error: '',
                                              status: 200
                                            };
                                          } else {
                                            _this2.responserService = {
                                              result: result,
                                              message: 'Consulta exitosa',
                                              error: '',
                                              status: 200
                                            };
                                          }
                                        }

                                        resolve(_this2.responserService);

                                      case 2:
                                      case "end":
                                        return _context3.stop();
                                    }
                                  }
                                }, _callee3);
                              }));

                              return function (_x8) {
                                return _ref3.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              _this2.responserService = {
                                result: 'Nop',
                                message: 'No se pudo realizar la consulta',
                                error: err,
                                status: 500
                              };
                              reject(_this2.responserService);
                            });

                          case 10:
                            _context4.next = 14;
                            break;

                          case 12:
                            // console.log(project)
                            // console.log(match)
                            // console.log(sort)
                            // console.log(group)
                            // console.log(limit)
                            // console.log(skip)
                            _this2.responserService = {
                              result: 'Nop',
                              message: 'No se pudo realizar la consulta',
                              error: 'Some /entities/util/getAll/return/if(model)',
                              status: 500
                            };
                            reject(_this2.responserService);

                          case 14:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function (_x6, _x7) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getAll(_x5) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "getLookups",
    value: function getLookups(queryAggregate, project, model) {
      // RELACIÓN PRIMER NIVEL
      var schemaLvl1 = model.schema;

      for (var _i2 = 0, _Object$keys2 = Object.keys(schemaLvl1.paths); _i2 < _Object$keys2.length; _i2++) {
        var keyLvl1 = _Object$keys2[_i2];

        if (schemaLvl1.paths[keyLvl1].instance === 'ObjectID' && schemaLvl1.paths[keyLvl1].options.ref) {
          // BUSCAMOS RELACIÓN UNO A UNO
          if (this.searchPropertyOfArray(project, "".concat(keyLvl1, ".")) || this.searchPropertyOfArray(project, "".concat(keyLvl1, "_"))) {
            queryAggregate.push({
              $lookup: {
                from: schemaLvl1.paths[keyLvl1].options.ref,
                foreignField: '_id',
                localField: keyLvl1,
                as: keyLvl1
              }
            });
            queryAggregate.push({
              $unwind: {
                path: "$".concat(keyLvl1),
                preserveNullAndEmptyArrays: true
              }
            }); // RELACIÓN SIGUIENTE NIVEL

            this.getNextLvl(queryAggregate, project, schemaLvl1, schemaLvl1.paths[keyLvl1].options.ref, keyLvl1, keyLvl1, model);
          }
        } else if (schemaLvl1.paths[keyLvl1].instance === 'Array' && schemaLvl1.paths[keyLvl1].schemaOptions.id && schemaLvl1.paths[keyLvl1].options.type[0].ref) {
          // BUSCAMOS ARRAY DE ID
          if (this.searchPropertyOfArray(project, "".concat(keyLvl1, ".")) || this.searchPropertyOfArray(project, "".concat(keyLvl1, "_"))) {
            queryAggregate.push({
              $lookup: {
                from: schemaLvl1.paths[keyLvl1].options.type[0].ref,
                foreignField: '_id',
                localField: keyLvl1,
                as: keyLvl1
              }
            }); // RELACIÓN SIGUIENTE NIVEL

            this.getNextLvl(queryAggregate, project, schemaLvl1, schemaLvl1.paths[keyLvl1].options.type[0].ref, keyLvl1, keyLvl1, model);
          }
        } else if (schemaLvl1.paths[keyLvl1].instance === 'Array' && !schemaLvl1.paths[keyLvl1].schemaOptions.id) {
          // BUSCAMOS OBJETO DENTRO DEL ARRAY
          for (var _i3 = 0, _Object$keys3 = Object.keys(schemaLvl1.paths[keyLvl1].options.type[0]); _i3 < _Object$keys3.length; _i3++) {
            var attr = _Object$keys3[_i3];

            if (schemaLvl1.paths[keyLvl1].options.type[0][attr].ref) {
              if (this.searchPropertyOfArray(project, "".concat(keyLvl1, ".").concat(attr, ".")) || this.searchPropertyOfArray(project, "".concat(keyLvl1, ".").concat(attr, "_"))) {
                queryAggregate.push({
                  $lookup: {
                    from: schemaLvl1.paths[keyLvl1].options.type[0][attr].ref,
                    foreignField: '_id',
                    localField: "".concat(keyLvl1, ".").concat(attr),
                    as: "".concat(keyLvl1, ".").concat(attr)
                  }
                }); // RELACIÓN SIGUIENTE NIVEL

                this.getNextLvl(queryAggregate, project, schemaLvl1, schemaLvl1.paths[keyLvl1].options.type[0][attr].ref, keyLvl1, keyLvl1, model);
              }
            }
          }
        }
      }

      return;
    }
  }, {
    key: "getNextLvl",
    value: function getNextLvl(queryAggregate, project, schemaLastLvl, ref, lastKey, keyNew, model) {
      var countRelations = 0;

      if (schemaLastLvl.paths[keyNew]) {
        var schemaLvl = model.schema;

        for (var _i4 = 0, _Object$keys4 = Object.keys(schemaLvl.paths); _i4 < _Object$keys4.length; _i4++) {
          var key = _Object$keys4[_i4];

          if (schemaLvl.paths[key].instance === 'ObjectID' && schemaLvl.paths[key].options.ref) {
            if (this.searchPropertyOfArray(project, "".concat(lastKey, ".").concat(key, "."))) {
              queryAggregate.push({
                $lookup: {
                  from: schemaLvl.paths[key].options.ref,
                  foreignField: '_id',
                  localField: "".concat(lastKey, ".").concat(key),
                  as: "".concat(lastKey, ".").concat(key)
                }
              });
              queryAggregate.push({
                $unwind: {
                  path: "$".concat("".concat(lastKey, ".").concat(key)),
                  preserveNullAndEmptyArrays: true
                }
              }); // RELACIÓN SIGUIENTE NIVEL

              countRelations++;
              this.getNextLvl(queryAggregate, project, schemaLvl, schemaLvl.paths[key].options.ref, "".concat(lastKey, ".").concat(key), key, model);
            }
          } else if (schemaLvl.paths[key].instance === 'Array' && schemaLvl.paths[key].schemaOptions.id && schemaLvl.paths[key].options.type[0].ref) {
            // BUSCAMOS ARRAY DE ID
            if (this.searchPropertyOfArray(project, "".concat(lastKey, ".").concat(key, ".")) || this.searchPropertyOfArray(project, "".concat(lastKey, ".").concat(key, "_"))) {
              queryAggregate.push({
                $lookup: {
                  from: schemaLvl.paths[key].options.type[0].ref,
                  foreignField: '_id',
                  localField: "".concat(lastKey, ".").concat(key),
                  as: "".concat(lastKey, ".").concat(key)
                }
              }); // RELACIÓN SIGUIENTE NIVEL

              countRelations++;
              this.getNextLvl(queryAggregate, project, schemaLvl, schemaLvl.paths[key].options.ref, "".concat(lastKey, ".").concat(key), key, model);
            }
          } else if (schemaLvl.paths[key].instance === 'Array' && !schemaLvl.paths[key].schemaOptions.id) {
            // BUSCAMOS OBJETO DENTRO DEL ARRAY
            for (var _i5 = 0, _Object$keys5 = Object.keys(schemaLvl.paths["".concat(key)].options.type[0]); _i5 < _Object$keys5.length; _i5++) {
              var attr = _Object$keys5[_i5];

              if (schemaLvl.paths["".concat(key)].options.type[0][attr].ref) {
                if (this.searchPropertyOfArray(project, "".concat(lastKey, ".").concat(key, ".").concat(attr, ".")) || this.searchPropertyOfArray(project, "".concat(lastKey, ".").concat(key, ".").concat(attr, "_"))) {
                  queryAggregate.push({
                    $lookup: {
                      from: schemaLvl.paths["".concat(key)].options.type[0][attr].ref,
                      foreignField: '_id',
                      localField: "".concat(lastKey, ".").concat(key, ".").concat(attr),
                      as: "".concat(lastKey, ".").concat(key, ".").concat(attr)
                    }
                  }); // RELACIÓN SIGUIENTE NIVEL

                  countRelations++;
                  this.getNextLvl(queryAggregate, project, schemaLvl, schemaLvl.paths[key].options.ref, "".concat(lastKey, ".").concat(key), key, model);
                }
              }
            }
          }
        }
      }

      if (countRelations === 0) {
        return;
      }
    }
  }, {
    key: "searchPropertyOfArray",
    value: function searchPropertyOfArray(json, value) {
      var n = false;

      for (var _i6 = 0, _Object$keys6 = Object.keys(json); _i6 < _Object$keys6.length; _i6++) {
        var a = _Object$keys6[_i6];
        if (!n) n = a.includes(value);
      }

      return n;
    } // public async getAll(
    // 	model: Model<Document, {}>,
    // 	project: {} = {},
    // 	match: {} = {},
    // 	sort: {} = {},
    // 	group: {} = {},
    // 	limit: number = 0,
    // 	skip: number = 0
    // ): Promise<Responseable> {
    // 	return new Promise<Responseable>( async (resolve, reject) => {
    // 		let queryAggregate = [];
    // 		let refs: {
    // 			ref: {},
    // 			name: string
    // 		}[] = []
    // 		// console.log(Object.keys(model.schema.obj))
    // 		// console.log(model.collection.name);
    // 	if(model !== undefined){
    // 		Object.keys(model.schema.obj).map(key => {
    // 			Object.keys(model.schema.obj[key]).map(key2 => {
    // 				if(key2 === 'ref') {
    // 					refs.push({
    // 						ref: model.schema.obj[key],
    // 						name: key
    // 					})
    // 				}
    // 			})
    // 		})
    // 	}
    // 		let lookups: {}[] = []
    // 		refs.map((item: {
    // 			ref: {
    // 				ref: string
    // 			},
    // 			name: string
    // 		}) => {
    // 			lookups.push({
    // 				look: {
    // 					from: item.ref.ref,
    // 					localField: item.name,
    // 					foreignField: "_id",
    // 					as: item.name + 'Ref'
    // 				},
    // 				unwin: {
    // 					path: '$' + item.name + 'Ref',
    // 					preserveNullAndEmptyArrays: true
    // 				}
    // 			})
    // 		})
    // 		if (Object.keys(project).length > 0) {
    // 			var relations = new TablesRelations()
    // 			var propertyExist: boolean = false
    // 			var guaranteePropertyExist: boolean = false
    // 			var guaranteePersonExist: boolean = false
    // 			var servicesExist: boolean = false
    // 			var pricingExist: boolean = false
    // 			var roomsExist: boolean = false
    // 			Object.keys(project).map((key: string) => {
    // 				if(key.includes('property')) {
    // 					if(key.includes('property.')) {
    // 						if (relations.exist(key)) {
    // 							queryAggregate.push({ $lookup: { from: relations.getRelations(key).table, foreignField: '_id', localField: relations.getRelations(key).localField, as: relations.getRelations(key).localField } });
    // 							queryAggregate.push({ $unwind: { path: '$' + relations.getRelations(key).localField, preserveNullAndEmptyArrays: true } });
    // 						}
    // 					} else {
    // 						delete project[key]
    // 						propertyExist = true
    // 					}
    // 				} else {
    // 					if (key.includes('guaranteeProperty')) {
    // 						delete project[key]
    // 						guaranteePropertyExist = true
    // 					} else {
    // 						if (key.includes('guaranteePerson')) {
    // 							delete project[key]
    // 							guaranteePersonExist = true
    // 						} else {
    // 							if (key.includes('services')) {
    // 								delete project[key]
    // 								servicesExist = true
    // 							} else {
    // 								if (key.includes('pricing')) {
    // 									delete project[key]
    // 									pricingExist = true
    // 								} else {
    // 									if (key.includes('rooms')) {
    // 										delete project[key]
    // 										roomsExist = true
    // 									} else {
    // 										if (relations.exist(key)) {
    // 											queryAggregate.push({ $lookup: { from: relations.getRelations(key).table, foreignField: '_id', localField: relations.getRelations(key).localField, as: relations.getRelations(key).localField } });
    // 											queryAggregate.push({ $unwind: { path: '$' + relations.getRelations(key).localField, preserveNullAndEmptyArrays: true } });
    // 										}
    // 									}
    // 								}
    // 							}
    // 						}
    // 					}
    // 				}
    // 			})
    // 			if(propertyExist) {
    // 				project = {
    // 					...project,
    // 					property: 1,
    // 					properties: 1
    // 				}
    // 				queryAggregate.push({ $lookup: { from: relations.getRelations('property').table, foreignField: '_id', localField: relations.getRelations('property').localField, as: 'properties' } });
    // 			}
    // 			if(guaranteePropertyExist) {
    // 				project = {
    // 					...project,
    // 					guaranteeProperty: 1
    // 				}
    // 				queryAggregate.push({ $lookup: { from: relations.getRelations('guaranteeProperty').table, foreignField: '_id', localField: relations.getRelations('guaranteeProperty').localField, as: 'guaranteeProperty' } });
    // 			}
    // 			if(guaranteePersonExist) {
    // 				project = {
    // 					...project,
    // 					guaranteePerson: 1
    // 				}
    // 				queryAggregate.push({ $lookup: { from: relations.getRelations('guaranteePerson').table, foreignField: '_id', localField: relations.getRelations('guaranteePerson').localField, as: 'guaranteePerson' } });
    // 			}
    // 			if(servicesExist) {
    // 				project = {
    // 					...project,
    // 					services: 1,
    // 					servicesAux: 1
    // 				}
    // 				queryAggregate.push({ $lookup: { from: relations.getRelations('service').table, foreignField: '_id', localField: relations.getRelations('service').localField, as: 'servicesAux' } });
    // 			}
    // 			if(pricingExist) {
    // 				project = {
    // 					...project,
    // 					pricing: 1,
    // 					pricingAux: 1
    // 				}
    // 				queryAggregate.push({ $lookup: { from: relations.getRelations('pricing').table, foreignField: '_id', localField: relations.getRelations('pricing').localField, as: 'pricingAux' } });
    // 			}
    // 			if(pricingExist) {
    // 				project = {
    // 					...project,
    // 					rooms: 1,
    // 					roomsAux: 1
    // 				}
    // 				queryAggregate.push({ $lookup: { from: relations.getRelations('rooms').table, foreignField: '_id', localField: 'rooms.type', as: 'roomsAux' } });
    // 			}
    // 			if (Object.keys(sort).length > 0) queryAggregate.push({ $sort: sort });
    // 			queryAggregate.push({ $project: project });
    // 		} else {
    // 			if (Object.keys(sort).length > 0) queryAggregate.push({ $sort: sort });
    // 		}
    // 		lookups.map((look: {
    // 			look: {},
    // 			unwin: {}
    // 		}) => {
    // 			queryAggregate.push({
    // 				$lookup: look.look
    // 			})
    // 			queryAggregate.push({
    // 				$unwind: look.unwin
    // 			})
    // 		})
    // 		if (Object.keys(match).length > 0) queryAggregate.push({ $match: match });
    // 		if (Object.keys(group).length > 0) queryAggregate.push({ $group: group });
    // 		if (limit > 0) queryAggregate.push({ $limit: limit });
    // 		if (skip > 0)	queryAggregate.push({ $skip: skip });
    // 		try {
    // 			queryAggregate = this.EJSON.parse(JSON.stringify(queryAggregate));
    // 		} catch(e) {
    // 			console.log(e);
    // 		}
    // 		if (queryAggregate.length === 0) queryAggregate.push({ $limit: 10 });
    // 		if(model !== undefined) {
    // 			await model.aggregate(queryAggregate)
    // 				.then(async (result: any) => {
    // 					// model.populate([], {})
    // 					// model.createIndexes
    // 					if(result.length === 0) {
    // 						if(limit === 1) {
    // 							this.responserService = { result: {}, message: 'Consulta exitosa', error: '', status: 200 }
    // 						} else {
    // 							this.responserService = { result: [], message: 'Consulta exitosa', error: '', status: 200 }
    // 						}
    // 					} else {
    // 						if(limit === 1) {
    // 							this.responserService = { result: result[0], message: 'Consulta exitosa', error: '', status: 200 }
    // 						} else {
    // 							this.responserService = { result: result, message: 'Consulta exitosa', error: '', status: 200 }
    // 						}
    // 					}
    // 					//console.log(result)
    // 					resolve(this.responserService)
    // 				}).catch((err: any) => {
    // 					this.responserService = { result: 'Nop', message: 'No se pudo realizar la consulta', error: err, status: 500 }
    // 					reject(this.responserService)
    // 				});
    // 		} else {
    // 			this.responserService = { result: 'Nop', message: 'No se pudo realizar la consulta', error: 'Some /entities/util/getAll/return/if(model)', status: 500 }
    // 			reject(this.responserService)
    // 		}
    // 	});
    // }

  }, {
    key: "getById",
    value: function () {
      var _getById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(id, model, userModel) {
        var _this3 = this;

        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(resolve, reject) {
                    return _regenerator["default"].wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            if (!_mongoose.Types.ObjectId.isValid(id)) {
                              _context6.next = 5;
                              break;
                            }

                            _context6.next = 3;
                            return model.findById(id).then(function (res) {
                              if (res) {
                                _this3.responserService = {
                                  result: res,
                                  message: 'Consulta exitosa',
                                  error: '',
                                  status: 200
                                };
                                resolve(_this3.responserService);
                              } else {
                                _this3.responserService = {
                                  result: 'Nop',
                                  message: 'No se pudo realizar la consulta',
                                  error: 'No existe res',
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this3.responserService = {
                                result: 'Nop',
                                message: 'La libreria no pudo buscar el objeto por _id',
                                error: err,
                                status: 500
                              };
                            });

                          case 3:
                            _context6.next = 6;
                            break;

                          case 5:
                            _this3.responserService = {
                              result: 'Nop',
                              message: 'El id enviado no es de tipo _id, segun la libreria',
                              error: '',
                              status: 428
                            };

                          case 6:
                            reject(_this3.responserService);

                          case 7:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }));

                  return function (_x12, _x13) {
                    return _ref4.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getById(_x9, _x10, _x11) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }, {
    key: "save",
    value: function () {
      var _save = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(objData, model, userModel, idUser) {
        var _this4 = this;

        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(resolve, reject) {
                    var createdObj;
                    return _regenerator["default"].wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            if (Object.keys(objData).length > 0) {
                              Object.keys(objData).map(function (key) {
                                if (typeof objData[key] === 'number') {
                                  objData[key] = _this4.roundTo(objData[key], 2);
                                }
                              });
                            }

                            delete objData._id; // console.log('save: ' + model.modelName)
                            // console.log(objData)

                            // console.log('save: ' + model.modelName)
                            // console.log(objData)
                            if (idUser) {
                              objData.creationUser = idUser;
                            } //TODO quitar esta dependencia


                            //TODO quitar esta dependencia
                            objData.creationDate = moment().format('YYYY-MM-DDTHH:mm:ssZ');
                            objData.operationType = 'C';

                            try {
                              createdObj = new model(_objectSpread({}, objData));
                            } catch (err) {
                              _this4.responserService = {
                                result: 'Nop',
                                message: 'La libreria no pudo crear el nuevo documento',
                                error: err,
                                status: 500
                              };
                              reject(_this4.responserService);
                            }

                            _context9.next = 8;
                            return createdObj.save().then( /*#__PURE__*/function () {
                              var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(res) {
                                return _regenerator["default"].wrap(function _callee8$(_context8) {
                                  while (1) {
                                    switch (_context8.prev = _context8.next) {
                                      case 0:
                                        if (!res) {
                                          _context8.next = 5;
                                          break;
                                        }

                                        _context8.next = 3;
                                        return _this4.getById(res._id, model, userModel).then(function (result) {
                                          if (result) {
                                            var obj = result.result; // console.log(obj)

                                            // console.log(obj)
                                            _this4.responserService = {
                                              result: obj,
                                              message: result.message,
                                              error: result.error,
                                              status: result.status
                                            };
                                            resolve(_this4.responserService);
                                          } else {
                                            _this4.responserService = {
                                              result: 'Nop',
                                              message: 'La capa superior contesto undefined',
                                              error: '',
                                              status: 500
                                            };
                                          }
                                        })["catch"](function (err) {
                                          _this4.responserService = {
                                            result: err.result,
                                            message: err.message,
                                            error: err.error,
                                            status: err.status
                                          };
                                        });

                                      case 3:
                                        _context8.next = 6;
                                        break;

                                      case 5:
                                        _this4.responserService = {
                                          result: 'Nop',
                                          message: 'La capa superior contesto undefined',
                                          error: '',
                                          status: 500
                                        };

                                      case 6:
                                      case "end":
                                        return _context8.stop();
                                    }
                                  }
                                }, _callee8);
                              }));

                              return function (_x20) {
                                return _ref6.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              console.log(err.message);
                              _this4.responserService = {
                                result: 'Nop',
                                message: err.message,
                                error: err,
                                status: 500
                              };
                            });

                          case 8:
                            reject(_this4.responserService);

                          case 9:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x18, _x19) {
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

      function save(_x14, _x15, _x16, _x17) {
        return _save.apply(this, arguments);
      }

      return save;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(id, objData, model, userModel, idUser) {
        var _this5 = this;

        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(resolve, reject) {
                    return _regenerator["default"].wrap(function _callee12$(_context12) {
                      while (1) {
                        switch (_context12.prev = _context12.next) {
                          case 0:
                            objData.updateUser = idUser;
                            objData.updateDate = moment().format('YYYY-MM-DDTHH:mm:ssZ');

                            if (objData.operationType !== 'D') {
                              objData.operationType = 'U';
                            }

                            _context12.next = 5;
                            return _this5.getById(id, model, userModel).then(function (res) {
                              if (res && res.result) {
                                objData.creationUser = res.result.creationUser;
                                objData.creationDate = res.result.creationDate;
                              } else {
                                _this5.responserService = {
                                  result: 'Nop',
                                  message: 'La capa superior contesto undefined, 505',
                                  error: 'La respuesta no existe',
                                  status: 500
                                };
                              }
                            })["catch"](function (err) {
                              _this5.responserService = {
                                result: err.result,
                                message: err.message,
                                error: err.error,
                                status: err.status
                              };
                            });

                          case 5:
                            _context12.next = 7;
                            return model.findByIdAndUpdate(id, objData, {
                              "new": true
                            }).then( /*#__PURE__*/function () {
                              var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(doc) {
                                return _regenerator["default"].wrap(function _callee11$(_context11) {
                                  while (1) {
                                    switch (_context11.prev = _context11.next) {
                                      case 0:
                                        if (!doc) {
                                          _context11.next = 5;
                                          break;
                                        }

                                        _context11.next = 3;
                                        return _this5.getById(doc._id, model, userModel).then(function (res) {
                                          if (res && res.result) {
                                            var obj = res.result; // console.log(obj)

                                            // console.log(obj)
                                            _this5.responserService = {
                                              result: {
                                                _id: obj._id
                                              },
                                              message: res.message,
                                              error: res.error,
                                              status: res.status
                                            };
                                            resolve(_this5.responserService);
                                          } else {
                                            _this5.responserService = {
                                              result: 'Nop',
                                              message: 'La capa superior contesto undefined, 506',
                                              error: 'La respuesta no existe',
                                              status: 500
                                            };
                                          }
                                        })["catch"](function (err) {
                                          _this5.responserService = {
                                            result: err.result,
                                            message: err.message,
                                            error: err.error,
                                            status: err.status
                                          };
                                        });

                                      case 3:
                                        _context11.next = 6;
                                        break;

                                      case 5:
                                        _this5.responserService = {
                                          result: 'Nop',
                                          message: 'La libreria no contesto la consulta',
                                          error: 'La respuesta no existe',
                                          status: 500
                                        };

                                      case 6:
                                      case "end":
                                        return _context11.stop();
                                    }
                                  }
                                }, _callee11);
                              }));

                              return function (_x28) {
                                return _ref8.apply(this, arguments);
                              };
                            }())["catch"](function (err) {
                              if (err.code === 11000) {
                                _this5.responserService = {
                                  result: 'Nop',
                                  message: 'La entidad con los parametros solicitados, ya existe',
                                  status: 428,
                                  error: err.errmsg
                                };
                              } else {
                                _this5.responserService = {
                                  result: 'Nop',
                                  message: 'La libreria no pudo realizar la busqueda y modificacion. Fijate que te olvidaste de pedir el id de uno de los atributos en el typehead, que a su vez, son otra entidad. Otra causa puede ser que quisiste realizar un registro que tiene una relacion, pero el registro no existe. Esto es porque no elegiste nada del dropdown.',
                                  error: err,
                                  status: 500
                                };
                              }
                            });

                          case 7:
                            reject(_this5.responserService);

                          case 8:
                          case "end":
                            return _context12.stop();
                        }
                      }
                    }, _callee12);
                  }));

                  return function (_x26, _x27) {
                    return _ref7.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      function update(_x21, _x22, _x23, _x24, _x25) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "roundTo",
    value: function roundTo(value, places) {
      var power = Math.pow(10, places);
      return Math.round(value * power) / power;
    }
  }]);
  return Controller;
}()) || _class);
exports["default"] = Controller;