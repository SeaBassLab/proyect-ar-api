"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var permissions = {};
var entities = ['Permission', 'Rol', 'User', 'Blue', 'Usdt', 'Wire', 'Investment', 'Transfer', 'Check', 'Account', 'Movement', 'Interest', 'Loan', 'Box', 'Tag', 'Section'];
entities.map(function (entity, index) {
  permissions["create".concat(entity)] = index.toString() + '.1';
  permissions["delete".concat(entity)] = index.toString() + '.2';
  permissions["update".concat(entity)] = index.toString() + '.3';
  permissions["list".concat(entity)] = index.toString() + '.4';
  permissions["view".concat(entity)] = index.toString() + '.5';
  permissions["viewList".concat(entity)] = index.toString() + '.6';
  permissions["viewCreate".concat(entity)] = index.toString() + '.7';
});
permissions['viewHome'] = '999.1';
var _default = {
  TOKEN_SECRET: process.env.JWT_SECRET || 'TESTINMO',
  LIC_PASSWORD: process.env.LIC_SECRET || 'TESTINMOLIC',
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/',
  CLUSTER: 'mongodb+srv://monty:some_pass@cluster0.vzota.mongodb.net',
  PERMISSIONS: permissions
};
exports["default"] = _default;