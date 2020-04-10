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
        console.log('** BOOKS ROUTER: TEST GET/')
        // -- //
            res.status(200).json({
                message: 'TEST GET request for BOOKS ROUTE working'
            })
        })

        // - 2 - // GET ALL BOOKS
        router.get('/all', async(req,res) => {
        console.log('** BOOKS ROUTER: books/all GET/')
        // -- //
            KNEX_DB('books')
                .then( allBooks => {
                // console.log(allBooks)
                // -- // 
                    res.status(200).json(allBooks)
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    res.status(500).json(err)
                })
        })

        // - 3 - // GET SINGLE BOOK
        router.get('/:bookID', async(req,res) => {
        console.log('** BOOKS ROUTER: books/:id GET/')
        const { bookID } = req.params
        // -- //
            KNEX_DB('books').where('id', bookID)
                .then( singleBook => {
                // console.log(singleBook)
                // -- //
                    res.status(200).json(singleBook)
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
        console.log('** BOOKS ROUTER: books/ POST/')
        // -- //
            KNEX_DB('books').insert(req.body)
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
                console.log(err)
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
            KNEX_DB('books').where('id',bookID).update(req.body)
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
                            res.status(500).json({ ERROR: 'Unabel to get all books after updating book'})
                        })
                })
                .catch(err => {
                console.log(err)
                // -- //
                    res.status(500).json({ ERROR: 'Unable to update book in DB'})
                })
        })

    // - DEL - //
        router.delete('/:bookID', async(req, res) => {
            const {bookID} = req.params
            KNEX_DB('books').where('id', bookID).del()
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