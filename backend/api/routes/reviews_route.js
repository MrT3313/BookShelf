// IMPORTS

// EXPRESS
const express = require('express')

// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// ROUTER
const router = express.Router()

// UTILS

// __MAIN__
// - GET - //
    // - 1 - // TEST
    router.get('/test', async(req,res) => {
        console.log('** USERS ROUTE: reviews/test GET/')
        // -- //
            res.status(200).json({
                message: 'TEST GET request for REVIEWS ROUTE working'
            })
        })
// - POST - //
// - PUT - //
// - DEL - //

// EXPORTS
module.exports = router