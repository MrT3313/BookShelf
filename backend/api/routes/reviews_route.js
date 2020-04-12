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
        // console.log('** USERS ROUTE: reviews/test GET/')
        // -- //
            res.status(200).json({
                message: 'TEST GET request for REVIEWS ROUTE working'
            })
        })
    
    // - 2 - // GET ALL REVIEWS
    router.get('/all', async(req,res) => {
    // console.log('** REVIEWS ROUTER: reviews/all GET/')
    // -- // 
        KNEX_DB('reviews')
            .then( allReviews => {
            // console.log(allReviews)
            // -- //
                res.status(200).json(allReviews)
            })
            .catch(err => {
            // console.log(err)
            // -- //
                res.status(500).json(err)
            })
    })

    // - 3 - // GET SPECIFIC REVIEW
    router.get('/singleReview/:reviewID', async(req, res) => {
    // console.log('** REVIEWS ROUTER: reviews/:reviewID GET/')
    const {reviewID} = req.params
    // -- // 
        KNEX_DB('reviews').where('id', reviewID).first()
            .then( singleReview => {
            // console.log(singleBook)
            // -- //
                res.status(200).json(singleReview)
            })
            .catch( err => {
            // console.log(err)
            // -- //
                res.status(500).json(err)
            })
    })

    // - 4 - // GET ALL REVIEWS FOR SPECIFIC BOOK
    router.get('/singleBook/:bookID', async(req,res) => {
    // console.log('** REVIEWS ROUTER: reviews/:bookID GET/')
    const {bookID} = req.params
    // -- // 
        KNEX_DB('reviews').where('bookID', bookID)
        .then( bookReviews => {
        // console.log(bookReviews)
        // -- //
            res.status(200).json(bookReviews)
        })
        .catch( err => {
        // console.log(err)
        // -- //
            res.status(500).json(err)
        })
    })

    // - 5 - // GET ALL REVIEWS FOR SPECIFIC USER
    router.get('/singleUser/:userID', async(req,res) => {
    // console.log('** REVIEWS ROUTER: reviews/:bookID GET/')
    const {userID} = req.params
    // -- // 
        KNEX_DB.raw(`
            SELECT
                reviews."userID", reviews.id as "reviewID",
                books.id as "bookID", books.title, books.author,
                reviews.review
                
            FROM reviews
            
            JOIN books
            ON books.id = reviews."bookID"
            
            WHERE reviews."userID" = ${userID}

            ORDER BY reviews.created_at
        `)
        .then( singleUserReviews => {
        // console.log(singleUsersReviews.rows)
        // -- //
            res.status(200).json(singleUserReviews.rows)
        })
        .catch( err => {
        // console.log(err)
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
    // console.log('** REVIEWS ROUTER: reviews/ POST/')
    const {userID} = req.body
    // -- //
        KNEX_DB('reviews').insert(req.body)
            .then( results => {
            // console.log(results)
            // -- //
                // KNEX_DB('reviews')
                //     .then( allReviews => {
                //     // console.log(allReviews)
                //     // -- //
                //         res.status(200).json(allReviews)
                //     })
                //     .catch( err => {
                //     // console.log(err)
                //     // -- //
                //         res.status(500).json({ ERROR: 'Unabel to get all reviews after review creation'})
                //     })
                KNEX_DB.raw(`
                    SELECT
                        reviews."userID", reviews.id as "reviewID",
                        books.id as "bookID", books.title, books.author,
                        reviews.review
                        
                    FROM reviews
                    
                    JOIN books
                    ON books.id = reviews."bookID"

                    ORDER BY reviews.created_at
                `)
                .then( allReviews => {
                // console.log(allReviews.rows)
                // -- //
                    res.status(200).json(allReviews.rows)
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    res.status(500).json({ ERROR: 'Unable to add review to DB'})
                })
            })
    })

// - PUT - // Update Review
    /* ACCEPTED SHAPE
        {
            "review": "STRING",
        } 
    */
    router.put('/:reviewID', async(req, res) => {
    // console.log('** BOOKS ROUTER: books/ PUT/')
    const { reviewID } = req.params
    // -- //
        KNEX_DB('reviews').where('id',reviewID).update(req.body)
            .then( results => {
            // console.log(results)
            // -- //
                // Return ALL Reviews
                KNEX_DB.raw(`
                    SELECT * FROM reviews

                    ORDER BY reviews.created_at
                `)
                .catch(err => {
                // console.log(err)
                // -- //
                    res.status(500).json({ ERROR: 'Unabel to get all reviews after updating review'})
                })
            })
            .catch(err => {
            // console.log(err)
            // -- //
                res.status(500).json({ ERROR: 'Unable to update book in DB'})
            })
    })
// - DEL - //
    router.delete('/:reviewID', async(req, res) => {
        const {reviewID} = req.params
        KNEX_DB('reviews').where('id', reviewID).del()
            .then( results => {
            // console.log(results)
            // -- //
                // Return ALL Reviews
                KNEX_DB.raw(`
                    SELECT * FROM reviews

                    ORDER BY reviews.created_at
                `)
                .catch(err => {
                // console.log(err)
                // -- //
                    res.status(500).json({ ERROR: 'Unabel to get all books after book removal'})
                })
            })
            .catch(err => {
            console.log(err)
            // -- //
                res.status(500).json({ ERROR: 'Unable to remove book to DB'})
            })
    })

// EXPORTS
module.exports = router