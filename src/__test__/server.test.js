const supertest = require('supertest');
const app = require('../server/server');
const request = supertest(app);

describe('Testing get request for /all', () => {

    test('Testing if the response is returned', async(done) => {
        const response = await request.get('/all');
        expect(response.status).toBe(200);
        done();
    })

})