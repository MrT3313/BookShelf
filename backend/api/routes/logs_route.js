// IMPORTS
const express = require('express')
const KNEX_DB = require('../../data/dbConfig.js')

// MODELS 
const LOGS_MODEL = require('../models/logs_model.js')

// ROUTER
const router = express.Router()

// __MAIN__
    // - GET - //
        // - 1 - // TEST
        router.get('/test', async(req,res) => {
        // console.log('** COMPLETED BOOKS ROUTE: completedBooks/test GET/')
        // -- //
                res.status(200).json({
                    message: 'TEST GET request for COMPLETED BOOKS ROUTE working'
                })
        })

        // - 2 - // GET ALL LOGS 
        router.get('/all', async(req,res) => {
        // console.log('** COMPLETED BOOKS ROUTER: completedBooks/all GET/')
        // -- //
            LOGS_MODEL.getAll()
                .then( loggedBooks => {
                // console.log(loggedBooks.rows)
                // -- // 
                    res.status(200).json(loggedBooks.rows)
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    res.status(500).json(err)
                })
        })

        // - 3 - // GET SPECIFIC LOG
        router.get('/singleLog/:logID', async(req, res) => {
        // console.log('** LOGGED BOOKD ROUTER: logs/singleLog/:logID GET/')
        const {logID} = req.params
        // -- // 
            LOGS_MODEL.getLog(logID)
                .then( singleLog => {
                // console.log(singleBook.rows[0])
                // -- //
                    res.status(200).json(singleLog.rows[0])
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    res.status(500).json(err)
                })
        })

        // - 4 - // GET ALL LOGS FOR SPECIFIC USER
        router.get('/singleUser/:userID', async(req, res) => {
        // console.log('** COMPLETED BOOKS ROUTE: completedBooks/:id GET/')
        const { userID } = req.params
        // -- //
            LOGS_MODEL.getLogs_by_userID(userID)
                .then( userReadHistory => {
                // console.log(userReadHistory.rows)
                // -- // 
                    res.status(200).json(userReadHistory.rows)
                })
                .catch(err => {
                    res.status(500).json(err)
                })
        })

        // - 5 - // GET ALL LOGS FOR SPECIFIC BOOK
        router.get('/singleBook/:bookID', async(req,res) => {
            // console.log('** REVIEWS ROUTER: reviews/:bookID GET/')
            const {bookID} = req.params
            // -- // 
                LOGS_MODEL.getLogs_by_bookID(bookID)
                    .then( bookLogs => {
                    // console.log(bookLogs.rows)
                    // -- //
                        res.status(200).json(bookLogs.rows)
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
                "userID": INTEGER [fk],
                "bookID": INTEGER [fk],
            } 
        */
       router.post('/', async(req,res) => {
        // console.log('** READ HISTORY ROUTE: /log/completedBook')
        // -- //
            LOGS_MODEL.logBook(req.body)
            .then( results => {
                // console.log(results.rows)
                // -- //
                res.status(200).json(results.rows)
            })
            .catch(err => {
            // console.log(err)
            // -- //
                res.status(500).json({ ERROR: 'Unable to update log in DB'})
            })
        })
    // - PUT - //
    // - DEL - //
    router.delete('/:logID', async(req, res) => {
        const {logID} = req.params
        LOGS_MODEL.deleteLog(logID)
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