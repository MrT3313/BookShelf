// IMPORTS
const request = require('supertest')
const server = require('../server.js')

describe('/books/', function() {
    describe('GET /all', function() {
        it('should return 200 & type JSON', async function() {
            const response = await request(server).get('/books/all');
            expect(response.status).toBe(200)
            expect(response.type).toMatch(/json/i)
            expect(response.body).toBeInstanceOf(Array)
        })
        expect(typeof {value: 'value'}).toBe('object');
        // it('should return 200 OK', function() {
        //     return request(server).get('/books/all').expect(200);
        // })
    })

    it.todo("GET /:bookID")
    it.todo("POST /")
    it.todo("PUT /:bookID")
    it.todo("DEL /:bookID")
})