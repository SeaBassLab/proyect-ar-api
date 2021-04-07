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
            request.get('/api/movies').expect(200, done);
        });

        it('should respond with the list of movies', function(done){
            request.get('/api/movies').end((err, res) => {
                assert.deepStrictEqual(res.body, {
                    data: moviesMock,
                    message: 'movies listed'
                });

                done();
            });
        });
    });
    describe('GET /movieId', function() {
        it('should respond with status 200', function(done){
            request.get('/api/movies/' + moviesMock[0].id).expect(200, done);
        });

        it('should respond with a movie', function(done){
            request.get('/api/movies/' + moviesMock[0].id).end((err, res) => {
                assert.deepStrictEqual(res.body, {
                    data: moviesMock[0].id,
                    message: 'movie retrieved'
                });

                done();
            });
        });
    });
    describe('POST /movies', function() {
        it('should respond with status 200', function(done){
            request.post('/api/movies').expect(201, done);
        });

        it('should respond with a new movie', function(done){
            request.post('/api/movies').end((err, res) => {
                assert.deepStrictEqual(res.body, {
                    data: moviesMock[0],
                    message: 'movie created'
                });

                done();
            });
        });
    });
    describe('PUT /movieId', function() {
        it('should respond with status 200', function(done){
            request.put('/api/movies/' + moviesMock[0].id).expect(200, done);
        });

        it('should respond with an updated movie', function(done){
            request.put('/api/movies/' + moviesMock[0].id).end((err, res) => {
                assert.deepStrictEqual(res.body, {
                    data: moviesMock[0],
                    message: 'movie updated'
                });

                done();
            });
        });
    });
    describe('DELETE /movieId', function() {
        it('should respond with status 200', function(done){
            request.delete('/api/movies/' + moviesMock[0].id).expect(200, done);
        });

        it('should respond with a movie deleted', function(done){
            request.delete('/api/movies/' + moviesMock[0].id).end((err, res) => {
                assert.deepStrictEqual(res.body, {
                    data: moviesMock[0].id,
                    message: 'movie deleted'
                });

                done();
            });
        });
    });
})