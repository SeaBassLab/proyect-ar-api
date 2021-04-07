const assert = require('assert');

const MongoLib = require('../lib/mongo');

describe("lib - mongo", function () {

    const moviesService = new MongoLib();

    describe("when connect method is called", async function() {
        it('should call the connect MongoLib method', async function () {
            await moviesService.connect()
            assert.strictEqual(MongoLib.connection, true);
        });
    });
})