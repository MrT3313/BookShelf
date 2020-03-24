// IMPORTS
const express = require('express')
const KNEX_BD = require('../../data/dbConfig.js')

// ROUTER
const router = express.Router()

// MIDDLEWARE
const pwHash = require('../../middleware/pwHash.js')

// __MAIN__
    // - GET - //
        // - 1 - //
        router.get('/', async(req,res) => {
            console.log('** REGISTER ROUTE: TEST GET/')
            res.status(200).json({
                message: 'TEST GET requrest for REGISTER ROUTE working'
            })
        })
    // - POST - //
        /* ACCEPTED SHAPE 
            {
                "username": "STRING"
                "email": "STRING"
                "PLAINTEXT_pw": "STRING"
            }

            - Notes:
                publicProfile is not needed in body of post as it is defaulted to FALSE
        */ 
        // TODO: Move pwHash to the FE so that the plaintext PW never goes over the web
        router.post('/', pwHash, async(req,res) => {
           console.log('** REGISTER ROUTE: POST/')
           
           KNEX_BD('users')
            .insert(req.body)
            .then(results => {
                console.log('Register Results:', results)

                // TODO: Decide what I should return. User object? Success Mesage? Only User ID
                res.status(201).json({ message: 'Successful registration'})
            })
            .catch(err => {
                res.status(500).json({ error: 'Unabel to register new user'})
            })
       })
    // - PUT - //
    // - DEL - //

// EXPORTS
module.exports = router