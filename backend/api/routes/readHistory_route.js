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
        // - 1 - //
        router.get('/test', async(req, res) => {
        console.log('** READ HISTORY ROUTE: TEST GET/')
        // -- //
            res.status(200).json({
                message: 'TEST GET request from READ HISTORY ROUTE working'
            })
        })
    // - POST - // 
    // - PUT - // 
    // - DEL - // 

// EXPORTS
module.exports = router