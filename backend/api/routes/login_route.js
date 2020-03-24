// IMPORTS
const bcrypt = require('bcrypt')

// EXPRESS
    const express = require('express')

// KNEX
    const KNEX_DB = require('../../data/dbConfig.js')

// ROUTER
    const router = express.Router()

// UTILS
const sign_JWT = require('../../utils/sign_JWT.js') 

// __MAIN__ 
    // - GET - //
        // - 1 - //
        router.get('/', async(req,res) => {
            console.log('** LOGIN ROUTE: TEST GET/ **')
            // res.status(200).json({
            //     message: 'TEST GET request for LOGIN ROUTE working'
            // })
            KNEX_DB('users')
                .then(allUsers => {
                    res.status(200).json(allUsers)
                })
                .catch( err => {
                    res.status(500).json({
                        error: "Unabel to get all users"
                    })
                })
        })
    // - POST - //
        /* ACCEPTED SHAPE
            {
                "type": "STRING"
                "username": "STRING"
                "email": "STRING"
                "PLAINTEXT_pw": "STRING"
            }

            - Notes:
                User should be able to login with EITHER unique username or email
        */
        router.post('/', async(req,res) => {
            console.log('** LOGIN ROUTE: POST/ **')
            // Declare Exiting Switch Variable
            let UniqueIdentifier = null 
            
            // Deconstruct Req.Body
            const { type, username, email, PLAINTEXT_pw } = req.body
            console.log('type', type)
            console.log('username', username)
            console.log('email', email)
            console.log('PLAINTEXT_pw', PLAINTEXT_pw)


            // Check what type of Login Submission is being attempted
            switch(type) {
                case "email":
                    // UniqueIdentifier = "email"
                    UniqueData = email
                    break;
                case "username":
                    // UniqueIdentifier = "username"
                    UniqueData = username
                    break;
                default:
                    res.status(500).json({
                        error: "Login type not supported"
                    })
            }
            
            // Search DB for an entry where the TYPE matches the UNIQUE DATA passed in the request
            KNEX_DB('users').where(type, UniqueData ).first()
                .then(foundUser => {
                    console.log(foundUser)

                    // SIGN JWT
                    const token = sign_JWT(foundUser)
                    console.log(token)

                    // RESPONSE
                    res.status(200).json({
                        message: 'welcome to the homeManager',
                        token
                    })
                })
                .catch(err => {
                    // RESPONSE
                    res.status(401).json( {error: 'Unabel to find unique use'})
                })
            
        })
    // - PUT - //
    // - DEL - //

// EXPORTS
    module.exports = router