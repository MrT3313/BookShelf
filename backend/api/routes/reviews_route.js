// IMPORTS

// EXPRESS
const express = require('express')

// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// MODELS
const REVIEWS_MODEL = require('../models/reviews_model.js')

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
        REVIEWS_MODEL.getAll()
            .then( allReviews => {
            // console.log(allReviews.rows)
            // -- //
                res.status(200).json(allReviews.rows)
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
        REVIEWS_MODEL.getReview(reviewID)
            .then( singleReview => {
            // console.log(singleBook.rows[0])
            // -- //
                res.status(200).json(singleReview.rows[0])
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
        REVIEWS_MODEL.getReviews_by_bookID(bookID)
        .then( bookReviews => {
        // console.log(bookReviews.rows)
        // -- //
            res.status(200).json(bookReviews.rows)
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
        REVIEWS_MODEL.getReviews_by_userID(userID)
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
        REVIEWS_MODEL.postReview(req.body)
            .then( results => {
            // console.log(results)
            // -- //
                res.status(200).json(results.rows)
            })
            .catch( err => {
            // console.log(err)
            // -- //
                res.status(500).json({ ERROR: 'Unable to add review to DB'})
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
        // KNEX_DB('reviews').where('id',reviewID).update(req.body)
        REVIEWS_MODEL.updateReview(reviewID, req.body)
            .then( results => {
            // console.log(results.rows)
            // -- //
                res.status(200).json(results.rows)
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
        REVIEWS_MODEL.deleteReview(reviewID)
            .then( results => {
            // console.log(results.rows)
            // -- //
            res.status(200).json(results.rows)
            })
            .catch(err => {
            // console.log(err)
            // -- //
                res.status(500).json({ ERROR: 'Unable to remove book to DB'})
            })
    })

// EXPORTS
module.exports = router