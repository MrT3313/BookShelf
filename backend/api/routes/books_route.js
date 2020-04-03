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
        // -- //
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
    // - POST - //
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
                    // V1
                    // Return New Book
                    // KNEX_DB('books').where('title', req.body.title).first()
                    // .then( newBook => {
                    //     console.log(newBook)
                    //     // -- //
                    //     const objToPass = {
                    //         bookID: newBook.id,
                    //         bookTITLE: newBook.title, 
                    //         bookAUTHOR: newBook.author
                    //     }
                        
                    //     res.status(200).json(objToPass)
                    // })

                    // V2
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
    // - PUT - //
    // - DEL - //

// EXPORTS
module.exports = router