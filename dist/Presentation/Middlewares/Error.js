"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = errorMiddleware;

function errorMiddleware(error, request, response, next) {
  var status = error.status || 500;
  var message = error.message || 'Something went wrong';
  var result = {
    message: message,
    status: status
  };
  response.status(status).send({
    result: 'asd'
  });
}