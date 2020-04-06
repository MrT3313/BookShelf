// IMPORTS
const express = require('express')
const KNEX_DB = require('../../data/dbConfig.js')

// ROUTER
const router = express.Router()

// __MAIN__
    // - GET - //
        // - 1 - // TEST
        router.get('/test', async(req,res) => {
        console.log('** COMPLETED BOOKS ROUTE: completedBooks/test GET/')
        // -- //
                res.status(200).json({
                    message: 'TEST GET request for COMPLETED BOOKS ROUTE working'
                })
            })

        // - 2 - // Completed Books for USER_ID
        router.get('/:id', async(req, res) => {
        console.log('** COMPLETED BOOKS ROUTE: completedBooks/:id GET/')
        const { id } = req.params
        // -- //
            /* RAW Query
                SELECT 
                    users.id as userID, users.userName, 
                    books.id as bookID, books.title, books.author
                FROM users

                JOIN completedbooks
                ON users.id = completedbooks."userID"

                JOIN books
                ON completedbooks."userID" = books.id

                WHERE users.id = 1 
            */
            KNEX_DB.raw(`
                SELECT 
                    users.id as userID, users.userName, 
                    books.id as bookID, books.title, books.author
                FROM users
                
                JOIN completedbooks
                ON users.id = completedbooks."userID"
                
                JOIN books
                ON completedbooks."userID" = books.id
                
                WHERE users.id = ${id}`
            )
            .then( userReadHistory => {
            console.log(userReadHistory.rows)
            // -- // 
                res.status(200).json(userReadHistory.rows)
            })
            .catch(err => {
                res.status(500).json(err)
            })
        })
    // - POST - //
    // - PUT - //
    // - DEL - //

// EXPORTS
module.exports = router