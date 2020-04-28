// IMPORTS
const request = require('supertest')
const server = require('../server.js')

// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// __MAIN TEST SUITE__
describe('/ranks/', function() {
    describe('POST /', function() {
        // Before Each
        beforeEach(async function () {
            await KNEX_DB.raw(`
                TRUNCATE TABLE completedbooks, books, users, ranks RESTART IDENTITY CASCADE 
            `);
        });

        it('ranks/ => Add Rank & return 200 JSON data w/ len(array) === 1', async function() {
            // Prepare Data
            const userData = {
                "username": "jestTestUser_logs",
                "email": "jestTestUser_logs@example.com",
                "PLAINTEXT_pw": "jestTestUser_logs"
            }
            const bookData = {
                "title": "BLAHH",
                "author": "BLAHH"
            } 
            const logData = {
                "userID": 1,
                "bookID": 1
            }
            const rankData = {
                "logID": 1,
                "rank": 100
            }
            // Make Test Request
            const adduser = await request(server)
                .post('/register/').send(userData).set('Accept', 'application/json')
            expect(adduser.status).toBe(201)

            const addBook = await request(server)
                .post('/books/').send(bookData).set('Accept', 'application/json')
            expect(addBook.status).toBe(200)

            const addLog = await request(server)
                .post('/logs/').send(logData).set('Accept', 'application/json')
            expect(addLog.status).toBe(200)

            const addRank = await request(server)
                .post('/ranks/').send(rankData).set('Accept', 'application/json')
            expect(addRank.type).toMatch(/json/i)
            expect(addRank.body).toHaveLength(1)
        })
    })

    describe('GET/', function() {
        it('ranks/all => return 200 JSON data w/ len(array) === 1', async function() {
            const response = await request(server)
                .get('/ranks/all');
                
            expect(response.status).toBe(200)
            expect(response.type).toMatch(/json/i)
            expect(response.body).toBeInstanceOf(Array)
            expect(response.body).toHaveLength(1)
        })
        it('ranks/:rankID => return 200 JSON data w/ len(array) === 1', async function() {
            const response = await request(server)
                .get('/ranks/singleLog/1');
                
            expect(response.status).toBe(200)
            expect(response.type).toMatch(/json/i)
            expect(response.body).toBeInstanceOf(Object)
        })
        it('ranks/:bookID => return 200 JSON data w/ len(array) === 1', async function() {
            const response = await request(server)
                .get('/ranks/singleBook/1');
                
            expect(response.status).toBe(200)
            expect(response.type).toMatch(/json/i)
            expect(response.body).toBeInstanceOf(Object)
        })
        it('ranks/:userID => return 200 JSON data w/ len(array) === 1', async function() {
            const response = await request(server)
                .get('/ranks/singleUser/1');
                
            expect(response.status).toBe(200)
            expect(response.type).toMatch(/json/i)
            expect(response.body).toBeInstanceOf(Array)
        })
    })

    describe('PUT/', function() {
        it('ranks/:rankID => return 200 JSON data w/ len(array) === 1', async function() {
            const updateData = {
                "rank": 25,
            }
            
            const response = await request(server)
                .put('/ranks/1').send(updateData).set('Accept', 'application/json')
                
            expect(response.status).toBe(200)
            expect(response.type).toMatch(/json/i)
            expect(response.body).toBeInstanceOf(Object)
            expect(response.body[0]['rank']).toEqual(updateData['rank'])
        })
    })

    describe("DEL /", function(){
        it('ranks/:rankID => Delete Rank', async function() {
            const response_1 = await request(server)
                .delete('/ranks/1')
            expect(response_1.body).toHaveLength(0)
            expect(response_1.body).toBeInstanceOf(Array)
        })
    })
})