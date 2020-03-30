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
        router.get('/test', async(req,res) => {
            console.log('** BOOKS ROUTE: TEST GET/')
            res.status(200).json({
                message: 'TEST GET request for BOOKS ROUTE working'
            })
        })

        // - 2 - //
        router.get('/all', async(req,res) => {
        console.log('** BOOKS ROUTER: books/all GET/')
        // -- //
            KNEX_DB('books')
                .then( allBooks => {
                console.log(allBooks)
                // -- // 
                    res.status(200).json(allBooks)
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    res.status(500).json(err)
                })
        })
    // - POST - //
    // - PUT - //
    // - DEL - //

// EXPORTS
module.exports = router