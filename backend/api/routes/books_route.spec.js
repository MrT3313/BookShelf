// IMPORTS
const request = require('supertest')
const server = require('../server.js')

// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// __MAIN TEST SUITE__
describe('/books/', function() {
    // - GET Sub Suite
    describe('GET /', function() {
        it('books/all => return 200 JSON data w/ len(array) === 1', async function() {
            const response = await request(server)
                .get('/books/all');
                
            expect(response.status).toBe(200)
            expect(response.type).toMatch(/json/i)
            expect(response.body).toBeInstanceOf(Array)
            expect(response.body).toHaveLength(1)
        })

        it('books/:bookID => return 200 JSON data w/ INSTANCE of response.body === "object" ', async function() {
            const response = await request(server).get('/books/1');
    
            expect(response.body).toBeInstanceOf(Object)
        })
    })

    // - POST Sub Suite 
    describe("POST /", function() {
        // Before Each
        beforeEach(async function () {
            await KNEX_DB.raw(`
                TRUNCATE TABLE books RESTART IDENTITY CASCADE 
            `);
        });

        // Test
        it('books/ => Add book & return 200 JSON data w/ len(array) === 1', async function() {
            // Prepare Data
            const data_1 = {
                "title": "Title_1",
                "author": "Author_1"
            } 
            const data_2 = {
                "title": "Title_2",
                "author": "Author_2"
            } 
            // Make Test Request
            const response_1 = await request(server)
                .post('/books/').send(data_1).set('Accept', 'application/json')
            expect(response_1.status).toBe(200)
            expect(response_1.type).toMatch(/json/i)
            expect(response_1.body).toHaveLength(1)

            const response_2 = await request(server)
                .post('/books/').send(data_2).set('Accept', 'application/json')
            expect(response_2.status).toBe(200)
            expect(response_2.body).toHaveLength(2)


        })
    })

    // - Sub Suite - 
    describe("PUT /", function() {
        it('books/:bookID => Update Book Title & Author', async function() {
            const updateData = {
                "title": 'updatedTitle',
                "author": 'updatedAuthor'
            }
            const response = await request(server)
                .put('/books/1').send(updateData).set('Accept', 'application/json')

            expect(response.body['title']).toEqual(updateData['title'])
            expect(response.body['author']).toEqual(updateData['author'])
        })
    })

    // - Sub Suite - 
    describe("DEL /", function(){
        it('books/:bookID => Delete Book', async function() {
            const response_1 = await request(server)
                .delete('/books/1')
            expect(response_1.body).toHaveLength(1)
            expect(response_1.body).toBeInstanceOf(Array)

            const response_2 = await request(server)
                .delete('/books/2')
            expect(response_2.body).toHaveLength(0)
            expect(response_2.body).toBeInstanceOf(Array)
        })
    })
})