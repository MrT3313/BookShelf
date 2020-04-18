// IMPORTS
const request = require('supertest')
const server = require('../server.js')

// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// __MAIN TEST SUITE__
describe('/logs/', function() {
    describe('POST /', function() {
        // Before Each
        beforeEach(async function () {
            await KNEX_DB.raw(`
                TRUNCATE TABLE completedbooks, books, users RESTART IDENTITY CASCADE 
            `);
        });

        it('logs/ => Add book & return 200 JSON data w/ len(array) === 1', async function() {
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
            expect(addLog.type).toMatch(/json/i)
            expect(addLog.body).toHaveLength(1)
        })
    })

    describe('GET /', function() {
        it('logs/all => return 200 JSON data w/ len(array) === 1', async function() {
            const response = await request(server)
                .get('/logs/all');
                
            expect(response.status).toBe(200)
            expect(response.type).toMatch(/json/i)
            expect(response.body).toBeInstanceOf(Array)
            expect(response.body).toHaveLength(1)
        })

        it('logs/singleUser => return 200 JSON data w/ len(array) === 1', async function() {
            const response = await request(server)
                .get('/logs/singleUser/1');
                
            expect(response.status).toBe(200)
            expect(response.type).toMatch(/json/i)
            expect(response.body).toBeInstanceOf(Array)
            expect(response.body).toHaveLength(1)
        })

        it('logs/singleBook => return 200 JSON data w/ len(array) === 1', async function() {
            const response = await request(server)
                .get('/logs/singleBook/1');
                
            expect(response.status).toBe(200)
            expect(response.type).toMatch(/json/i)
            expect(response.body).toBeInstanceOf(Array)
            expect(response.body).toHaveLength(1)
        })

        it('logs/singleLog => return 200 JSON data w/ len(array) === 1', async function() {
            const response = await request(server)
                .get('/logs/singleLog/1');
                
            expect(response.status).toBe(200)
            expect(response.type).toMatch(/json/i)
            expect(response.body).toBeInstanceOf(Object)
        })
    })

    describe('DEL /', function() {
        it('logs/:logID => Delete Log', async function() {
            const response = await request(server)
                .delete('/logs/1')

            expect(response.body).toHaveLength(0)
        })
    })
})