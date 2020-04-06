// IMPORTS
const express = require('express')
const KNEX_DB = require('../../data/dbConfig.js')

// ROUTER
const router = express.Router()

// __MAIN__
    // - GET - //
        // - 1 - // TEST
        router.get('/test', async(req,res) => {
            console.log('** COMPLETED BOOKS ROUTE: completedBooks/test GET/')
            // -- //
                res.status(200).json({
                    message: 'TEST GET request for COMPLETED BOOKS ROUTE working'
                })
            })
    // - POST - //
    // - PUT - //
    // - DEL - //

// EXPORTS
module.exports = router