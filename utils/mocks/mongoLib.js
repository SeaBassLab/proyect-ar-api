const sinon = require('sinon');

const { moviesMock, filteredMoviesMock } = require('./movies');

const getAllStub = sinon.stub();
// movies = al nombre de la colección en mongoDB
getAllStub.withArgs('movies').resolves(moviesMock);

const tagQuery = { tags: { $in: ["Drama"] } }
getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMock("Drama"));

const getStub = sinon.stub().resolves(moviesMock[0].id);

const createStub = sinon.stub().resolves(moviesMock[0]);

const updateStub = sinon.stub().resolves(moviesMock[0].id, moviesMock[0]);

const deleteStub = sinon.stub().resolves(moviesMock[0].id)

class MongoLibMock {
    getAll(collection, query) {
        return getAllStub(collection, query);
    }

    get(collection, id) {
        return getStub(collection, id);
    }

    create(collection, data) {
        return createStub(collection, data);
    }

    update(collection, id, data) {
        return updateStub(collection, id, data);
    }

    delete(collection, id) {
        return deleteStub(collection, id);
    }
}

module.exports = {
    getAllStub,
    getStub,
    createStub,
    updateStub,
    deleteStub,
    MongoLibMock
}