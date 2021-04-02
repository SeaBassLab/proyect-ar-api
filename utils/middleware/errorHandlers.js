const { config } = require('../../config');

function withErrorStack(error, stack) {
    if (config.dev) {
        return { error, stack }
    }
}

function logErrors(err, req, res, next) {
    console.log(err);
    next(err);
}

function errorHandler(err, req, res, next) { // eslint-disable-line
    res.status(err, status || 500);
    res.json(withErrorStack(err.messege, err.stack));
}

module.exports = {
    logErrors,
    errorHandler
}