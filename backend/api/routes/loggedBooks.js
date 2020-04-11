// IMPORTS
const express = require('express')
const KNEX_DB = require('../../data/dbConfig.js')

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
                KNEX_DB.raw(`
                    SELECT 
                        completedbooks.id as "logID", completedbooks."userID",
                        books.id as "bookID", books.title, books.author, books.created_at
                    
                    FROM completedbooks
                    
                    JOIN books
                    ON completedbooks."bookID" = books.id

                    ORDER BY books.created_at
                `)
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
        // console.log('** LOGGED BOOKD ROUTER: loggedBooks/:logID GET/')
        const {logID} = req.params
        // -- // 
            KNEX_DB('completedbooks').where('id', logID).first()
                .then( singleLog => {
                // console.log(singleBook)
                // -- //
                    res.status(200).json(singleLog)
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
            /* RAW Query
                SELECT 
                    users.id as userID, users.userName, 
                    books.id as bookID, books.title, books.author, books.created_at
                FROM users

                JOIN completedbooks
                ON users.id = completedbooks."userID"

                JOIN books
                ON completedbooks."userID" = books.id

                WHERE users.id = 1 
            */
            KNEX_DB.raw(`
                SELECT 
                    completedbooks.id as "logID", 
                    users.id as "userID",
                    books.id as "bookID", books.title, books.author, books.created_at
                FROM users
                
                JOIN completedbooks
                ON users.id = completedbooks."userID"
                
                JOIN books
                ON completedbooks."bookID" = books.id
                
                WHERE users.id = ${userID}

                ORDER BY books.created_at
            `)
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
                KNEX_DB('completedbooks').where('bookID', bookID)
                .then( bookLogs => {
                // console.log(bookLogs)
                // -- //
                    res.status(200).json(bookLogs)
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
            KNEX_DB('completedbooks').insert(req.body)
            .then( results => {
                // console.log(results)
                // -- //
                    // V2 
                    // Return All Logs in appropriate format
                    KNEX_DB.raw(`
                        SELECT 
                            completedbooks.id as "logID", 
                            users.id as "userID",
                            books.id as "bookID", books.title, books.author, books.created_at
                        FROM users
                        
                        JOIN completedbooks
                        ON users.id = completedbooks."userID"
                        
                        JOIN books
                        ON completedbooks."bookID" = books.id

                        ORDER BY books.created_at
                    `)

                    // // V1
                    // // Return ALL Logs
                    // KNEX_DB('completedbooks')
                    .then( logs => {
                        // console.log(allLogs.rows)
                        // -- //
                        
                        res.status(200).json(logs.rows)
                    })
                    .catch(err => {
                    // console.log(err)
                    // -- //
                        res.status(500).json({ ERROR: 'Unabel to get all logs after updating book'})
                    })
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
        KNEX_DB('completedbooks').where('id', logID).del()
            .then( results => {
            // console.log(results)
            // -- //
                // Return ALL Books
                KNEX_DB('completedbooks')
                    .then( allLogs => {
                        // console.log(allLogs)
                        // -- //
                        
                        res.status(200).json(allLogs)
                    })
                    .catch(err => {
                    // console.log(err)
                    // -- //
                        res.status(500).json({ ERROR: 'Unabel to get all books after book removal'})
                    })
            })
            .catch(err => {
            // console.log(err)
            // -- //
                res.status(500).json({ ERROR: 'Unable to remove book to DB'})
            })
    })

// EXPORTS
module.exports = router