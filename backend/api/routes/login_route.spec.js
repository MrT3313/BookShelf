// IMPORTS
const request = require('supertest')
const server = require('../server.js')

// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// __MAIN TEST SUITE__
describe('/login/', function() {
    describe('POST /', function() {
        // Before Each
        beforeEach(async function () {
            await KNEX_DB.raw(`
                TRUNCATE TABLE users RESTART IDENTITY CASCADE 
            `);
        });

        it('logs/ => Add book & return 200 JSON data w/ len(array) === 1', async function() {
            // Prepare Data
            const registerData = {
                "username": "jestTestUser_login",
                "email": "jestTestUser_login@example.com",
                "PLAINTEXT_pw": "jestTestUser_login"
            }
            // Make Test Request
            const addUser = await request(server)
                .post('/register/').send(registerData).set('Accept', 'application/json')
            expect(addUser.status).toBe(201)

            const loginData = {
                "type": "email",
                "email": "jestTestUser_login@example.com",
                "username": "jestTestUser_login",
                "PLAINTEXT_pw": "jestTestUser_login"
            }
            const login = await request(server)
                .post('/login/').send(loginData).set('Accept', 'application/json')

            expect(login.type).toMatch(/json/i)
        })
    })
})