const express = require('express');
const app = express();
const debug = require('debug')('app:server')

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

const {
  logErrors,
  errorHandler,
  wrapErrors
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body parser
app.use(express.json());

// routes
moviesApi(app);

// Catch 404
app.use(notFoundHandler);

// Error middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
    debug(`Listening http://localhost:${config.port}`)
  }
);