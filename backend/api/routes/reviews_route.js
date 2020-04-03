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
    
    // - 2 - // Get ALL Reviews
    router.get('/all', async(req,res) => {
    console.log('** REVIEWS ROUTER: reviews/all GET/')
    // -- // 
        KNEX_DB('reviews')
            .then( allReviews => {
            console.log(allReviews)
            // -- //
                res.status(200).json(allReviews)
            })
            .catch(err => {
            console.log(err)
            // -- //
                res.status(500).json(err)
            })
    })
// - POST - //
    /* ACCEPTED SHAPE
        {
            "userID": 1,
            "bookID": 1,
            "review": "This book was fantastic. Highly recommended."
        }
    */
    router.post('/', async(req,res) => {
    console.log('** REVIEWS ROUTER: reviews/ POST/')
    // -- //
        KNEX_DB('reviews').insert(req.body)
            .then( results => {
            // console.log(results)
            // -- //
                KNEX_DB('reviews')
                    .then( allReviews => {
                    // console.log(allReviews)
                    // -- //
                        res.status(200).json(allReviews)
                    })
                    .catch( err => {
                    // console.log(err)
                    // -- //
                        res.status(500).json({ ERROR: 'Unabel to get all reviews after review creation'})
                    })
            })
            .catch( err => {
            console.log(err)
            // -- //
                res.status(500).json({ ERROR: 'Unable to add review to DB'})
            })
    })
// - PUT - //
// - DEL - //

// EXPORTS
module.exports = router