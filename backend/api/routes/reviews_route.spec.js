// IMPORTS
const request = require('supertest')
const server = require('../server.js')

// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// __MAIN TEST SUITE__
describe('/reviews/', function() {
    describe('POST /', function() {
        // Before Each
        beforeEach(async function () {
            await KNEX_DB.raw(`
                TRUNCATE TABLE reviews, books, users RESTART IDENTITY CASCADE 
            `);
        });

        it('reviews/ => Add review & return 200 JSON data w/ len(array) === 1', async function() {
            // Data
            const userData = {
                "username": "jestTestUser_reviews",
                "email": "jestTestUser_reviews@example.com",
                "PLAINTEXT_pw": "jestTestUser_reviews"
            }
            const bookData = {
                "title": "jestTitle_reviews",
                "author": "jestAuthor_reviews"
            } 
            const logData = {
                "userID" : 1,
                "bookID": 1
            }
            const reviewData = {
                "logID": 1,
                "review": "Postman Review Test"
            }

            // Make Test Request
            const addBook = await request(server)
                .post('/books/').send(bookData).set('Accept', 'application/json')
            expect(addBook.status).toBe(200)

            // Make Test Request
            const adduser = await request(server)
                .post('/register/').send(userData).set('Accept', 'application/json')
            expect(adduser.status).toBe(201)

            const addLog = await request(server)
                .post('/logs/').send(logData).set('Accept', 'application/json')
            expect(adduser.status).toBe(201)

            const addReview = await request(server)
                .post('/reviews/').send(reviewData).set('Accept', 'application/json')
            expect(addReview.status).toBe(200)
            expect(addReview.type).toMatch(/json/i)
            expect(addReview.body).toHaveLength(1)
        })
        
    })

    describe('GET /', function() {
        it('reviews/all => return 200 JSON data w/ len(array) === 1', async function() {
            const response = await request(server)
                .get('/reviews/all');
                
            expect(response.status).toBe(200)
            expect(response.type).toMatch(/json/i)
            expect(response.body).toBeInstanceOf(Array)
            expect(response.body).toHaveLength(1)
        })

        it('reviews/reviewID => return 200 JSON data w/ len(array) === 1', async function() {
            const response = await request(server)
                .get('/reviews/singleReview/1');
                
            expect(response.status).toBe(200)
            expect(response.type).toMatch(/json/i)
            expect(response.body).toBeInstanceOf(Object)
        })

        it('reviews/userID => return 200 JSON data w/ len(array) === 1', async function() {
            const response = await request(server)
                .get('/reviews/singleUser/1');
                
            expect(response.status).toBe(200)
            expect(response.type).toMatch(/json/i)
            expect(response.body).toBeInstanceOf(Object)
        })

        it('reviews/bookID => return 200 JSON data w/ len(array) === 1', async function() {
            const response = await request(server)
                .get('/reviews/singleBook/1');
                
            expect(response.status).toBe(200)
            expect(response.type).toMatch(/json/i)
            expect(response.body).toBeInstanceOf(Object)
        })
    })

    describe("PUT /", function() {
        it('reviews/:reviewID => Update User Username / Email / Public Profile', async function() {
            const updateData = {
                "review": "Jest Updated Review"
            }
            const response = await request(server)
                .put('/users/1').send(updateData).set('Accept', 'application/json')

            expect(response.body['username']).toEqual(updateData['username'])
            expect(response.body['email']).toEqual(updateData['email'])
            expect(response.body['publicProfile']).toEqual(updateData['publicProfile'])
        })
    })
    
    describe('DEL /', function() {
        it('reviews/:reviewID => Delete Review', async function() {
            const response = await request(server)
                .delete('/reviews/1')

            expect(response.body).toHaveLength(0)
        })
    })

})