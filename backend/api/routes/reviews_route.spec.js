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
                TRUNCATE TABLE reviews RESTART IDENTITY CASCADE 
            `);
        });

        it.todo('Post')
        
    })
    describe('GET /', function() {
        it.todo('Get')
    })
    describe('PUT /', function() {
        it.todo('Put')
    })
    describe('DEL /', function() {
        it.todo('Del')
    })
})