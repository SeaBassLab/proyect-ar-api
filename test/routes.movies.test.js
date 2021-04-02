const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies.js');
const testServer = require('../utils/testServer');

describe('routes - movies', function () {
    const route = proxyquire('../routes/movies', {
        '../services/movies': MoviesServiceMock
    });

    const request = testServer(route);
    describe('GET /movies', function() {
        it('should respond with status 200', function(done){
            request.get('/api/movies').expext(200, done);
        })
    })
})