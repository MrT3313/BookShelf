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
                TRUNCATE TABLE completedbooks, users RESTART IDENTITY CASCADE 
            `);
        });

        it.todo('logs/ => Ass log & return 200 JSON data w/ len(array) === 1')
        
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