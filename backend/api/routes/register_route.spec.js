// IMPORTS
const request = require('supertest')
const server = require('../server.js')

// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// __MAIN TEST SUITE__
describe('/users/', function() {
    describe('POST /', function() {
        // Before Each
        beforeEach(async function () {
            await KNEX_DB.raw(`
                TRUNCATE TABLE users RESTART IDENTITY CASCADE 
            `);
        });

        it('register/ => Add user & return 200 JSON data w/ len(array) === 1', async function() {
            // Prepare Data
            const data = {
                "username": "jestTestUser_register",
                "email": "jestTestUser_register@example.com",
                "PLAINTEXT_pw": "jestTestUser_register"
            }
            // Make Test Request
            const response = await request(server)
                .post('/register/').send(data).set('Accept', 'application/json')
    
            expect(response.body['message']).toEqual('Successful Registration')
            expect(response.status).toBe(201)
        })
    })
})