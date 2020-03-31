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
        /* ACCEPTED SHAPE
            {
                "userID": INTEGER [fk],
                "bookID": INTEGER [fk],
            } 
        */
        router.post('/completedBook', async(req,res) => {
        console.log('** READ HISTORY ROUTE: /log/completedBook')
        // -- //
            KNEX_DB('readHistory').insert(req.body)
                .then( results => {
                console.log(results)
                // -- //
                    res.status(200).json(results)
                })
                .catch( err => {
                    res.status(500).json({ ERROR: 'Unable to log your accomplishment'})
                })
        })
    // - PUT - // 
    // - DEL - // 

// EXPORTS
module.exports = router