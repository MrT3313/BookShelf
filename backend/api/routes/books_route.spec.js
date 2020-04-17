// IMPORTS
const request = require('supertest')
const server = require('../server.js')

// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// __MAIN TEST SUITE__
describe('/books/', function() {
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
            const data = {
                "title": "BLAHH",
                "author": "BLAHH"
            } 
            // Make Test Request
            const response = await request(server)
                .post('/books/').send(data).set('Accept', 'application/json')
    
            expect(response.status).toBe(200)
            expect(response.type).toMatch(/json/i)
            expect(response.body).toHaveLength(1)
        })
    })

    // - GET Sub Suite
    describe('GET /', function() {
        it('books/all => return 200 JSON data w/ len(array) === 1', async function() {
            const response = await request(server).get('/books/all');
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
            const response = await request(server)
                .delete('/books/1')

            expect(response.body).toHaveLength(0)
        })
    })
})