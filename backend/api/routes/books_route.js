// EXPRESS
const express = require('express')

// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// MODELS
const BOOKS_MODEL = require('../models/books_model.js')

// ROUTER
const router = express.Router()

// UTILS

// __MAIN__
    // - GET - //
        // - 1 - // TEST
        router.get('/test', async(req,res) => {
        // console.log('** BOOKS ROUTER: TEST GET/')
        // -- //
            res.status(200).json({
                message: 'TEST GET request for BOOKS ROUTE working'
            })
        })

        // - 2 - // GET ALL BOOKS
        router.get('/all', async(req,res) => {
        // console.log('** BOOKS ROUTER: books/all GET/')
        // -- //
            BOOKS_MODEL.getAll()
                .then( allBooks => {
                // console.log(allBooks.rows)
                // -- // 
                    res.status(200).json(allBooks.rows)
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    res.status(500).json(err)
                })
        })

        // - 3 - // GET SINGLE BOOK
        router.get('/:bookID', async(req,res) => {
        // console.log('** BOOKS ROUTER: books/:id GET/')
        const { bookID } = req.params
        // -- //
            BOOKS_MODEL.getByID(bookID)
                .then( singleBook => {
                // console.log(singleBook.rows[0])
                // -- //
                    res.status(200).json(singleBook.rows[0])
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    res.status(500).json(err)
                })
        })

    // - POST - // ADD BOOK TO DB
        /* ACCEPTED SHAPE
            {
                "title": "STRING",
                "author": "STRING",
            } 
        */
        router.post('/', async(req,res) => {
        // console.log('** BOOKS ROUTER: books/ POST/')
        // -- //
            BOOKS_MODEL.addBook(req.body)
                .then( results => {
                // console.log(results)
                // -- //
                    // Return ALL Books
                    KNEX_DB('books')
                        .then( allBooks => {
                            // console.log(allBooks)
                            // -- //
                            
                            res.status(200).json(allBooks)
                        })
                        .catch(err => {
                        // console.log(err)
                        // -- //
                            res.status(500).json({ ERROR: 'Unabel to get all books after book creation'})
                        })
                })
                .catch(err => {
                // console.log(err)
                // -- //
                    res.status(500).json({ ERROR: 'Unable to add book to DB'})
                })
        })

    // - PUT - // UPDATE BOOK IN DB
        /* ACCEPTED SHAPE
            {
                "title": "STRING",
                "author": "STRING",
            } 
        */
        router.put('/:bookID', async(req, res) => {
        // console.log('** BOOKS ROUTER: books/ PUT/')
        const { bookID } = req.params
        // -- //
            BOOKS_MODEL.updateBook(bookID, req.body)
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
        router.delete('/:bookID', async(req, res) => {
            const {bookID} = req.params
            BOOKS_MODEL.deleteBook(bookID)
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