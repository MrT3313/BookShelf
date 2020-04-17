// IMPORTS
const request = require('supertest')
const server = require('../server.js')

// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// __MAIN TEST SUITE__
describe('/users/', function() {
    describe('GET /', function() {
        // Before Each
        beforeEach(async function () {
            await KNEX_DB.raw(`
                TRUNCATE TABLE users RESTART IDENTITY CASCADE 
            `);
        });

        it('users/all => Add user & get new user data', async function() {
            // Prepare Data
                const data = {
                    "username": "jestTestUser",
                    "email": "jestTestUser@example.com",
                    "PLAINTEXT_pw": "jestTestUser"
                }
            
            // Post Data
                const postUser = await request(server)
                    .post('/register/').send(data).set('Accept', 'application/json')
            
            // Get Posted Data
                const response = await request(server)
                    .get('/users/all')
    
                expect(response.body).toBeInstanceOf(Array)
                    expect(response.body).toHaveLength(1)
        })
    })

    describe("PUT /", function() {
        it('users/:userID => Update User Username / Email / Public Profile', async function() {
            const updateData = {
                "username": "jestUpdate",
                "email": "jestUpdate@example.com",
                "publicProfile": true
            }
            const response = await request(server)
                .put('/users/1').send(updateData).set('Accept', 'application/json')

            expect(response.body['username']).toEqual(updateData['username'])
            expect(response.body['email']).toEqual(updateData['email'])
            expect(response.body['publicProfile']).toEqual(updateData['publicProfile'])
        })
    })

    describe("DEL /", function(){
        it('users/:userID => Delete User', async function() {
            const response = await request(server)
                .delete('/users/1')

            expect(response.body).toHaveLength(0)
        })
    })
})