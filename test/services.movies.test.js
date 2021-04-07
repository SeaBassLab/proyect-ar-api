const assert = require('assert');
const proxyquire = require('proxyquire');

const {
    MongoLibMock,
    getAllStub,
    getStub,
    createStub,
    updateStub,
    deleteStub
} = require('../utils/mocks/mongoLib');

const { moviesMock } = require('../utils/mocks/movies');

describe.only("services - movies", function () {
    const MoviesServices = proxyquire('../services/movies', {
        '../lib/mongo': MongoLibMock
    });

    const moviesService = new MoviesServices();

    describe("when getMovies method is called", async function() {
        it('should call the getall MongoLib method', async function () {
            await moviesService.getMovies({})
            assert.strictEqual(getAllStub.called, true);
        });

        it("should return an array of movies", async function() {
            const result = await moviesService.getMovies({})
            const expected = moviesMock;
            assert.deepStrictEqual(result, expected);
        });
    });
    describe("when getMovie method is called", async function() {
        it('should call the get MongoLib method', async function() {
            await moviesService.getMovie({})
            assert.strictEqual(getStub.called, true);
        });
        it("should return a movie", async function() {
            const result = await moviesService.getMovie({})
            const expected = moviesMock[0].id;
            assert.deepStrictEqual(result, expected);
        });
    });
    describe("when createMovie method is called", async function() {
        it('should call the create MongoLib method', async function() {
            await moviesService.createMovie({})
            assert.strictEqual(createStub.called, true);
        });
        it("should return a new movie", async function() {
            const result = await moviesService.createMovie({})
            const expected = moviesMock[0];
            assert.deepStrictEqual(result, expected);
        });
    });
    describe("when updateMovie method is called", async function() {
        it('should call the update MongoLib method', async function() {
            await moviesService.updateMovie({})
            assert.strictEqual(updateStub.called, true);
        });
        it("should return a updated movie", async function() {
            const result = await moviesService.updateMovie({})
            const expected = moviesMock[0] && moviesMock[0].id;
            assert.deepStrictEqual(result, expected);
        });
    });
    describe("when deleteMovie method is called", async function() {
        it('should call the delete MongoLib method', async function() {
            await moviesService.deleteMovie({})
            assert.strictEqual(deleteStub.called, true);
        });
        it("should return a movie id", async function() {
            const result = await moviesService.deleteMovie({})
            const expected = moviesMock[0].id;
            assert.deepStrictEqual(result, expected);
        });
    });
})