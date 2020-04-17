// IMPORTS
const request = require('supertest')
const server = require('./server.js')

describe('Base BE Server', function() {
    it('should return 200 & type JSON', async function() {
        const res = await request(server).get('/');
        expect(res.status).toBe(200)
        expect(res.type).toMatch(/json/i)
        expect(res.body.API).toBe('BookShelf ROOT ROUTE working')
    })
})