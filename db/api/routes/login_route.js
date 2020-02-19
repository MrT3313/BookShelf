// IMPORTS
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// EXPRESS
    const express = require('express')

// KNEX
    const KNEX_DB = require('../../data/dbConfig.js')

// ROUTER
    const router = express.Router()

// __MAIN__ 
    // - GET - //
        // - 1 - //
        router.get('/', async(req,res) => {
            console.log('** LOGIN ROUTE: TEST GET/ **')
            res.status(200).json({
                message: 'TEST GET request for LOGIN ROUTE working'
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


            // Check Type
            switch(type) {
                case "email":
                    UniqueIdentifier = "email"
                    break;
                case "username":
                    UniqueIdentifier = "username"
                    break;
                default:
                    res.status(500).json({
                        error: "Login type not supported"
                    })
            }
            console.log(UniqueIdentifier)


            
            // Interact with the DB
            KNEX_DB('USERS')
                .where(UniqueIdentifier, UniqueIdentifier).first()
                // .where('email', email).first()
                // .where('username', username).first()
                    .then(foundUser => {
                        console.log('foundUser', foundUser)

                        // Verify PW
                        // const VERIFY_pw = bcrypt.compareSync(PLAINTEXT_pw, foundUser.HASHED_pw);
                        // print(VERIFY_pw)

                        if (VERIFY_pw && foundUser) {
                            console.log('token_secret', process.env.token_secret)

                            // Make JWT Token
                            const token = jwt.sign(
                                // Define token body properties
                                {
                                    user_ID: foundUser.id,
                                    username: foundUser.username,
                                    f_name: foundUser.f_name
                                },
                                
                                // Pass Secret
                                process.env.token_secret,
                                
                                // Configure Token
                                {
                                    expiresIn: '2h'
                                }
                            )
                            console.log('created token', token)

                            res.status(200).json({
                                message: `Welcome ${user.username}!`,
                                token
                            })

                        } else {
                            res.status(401).json({ error: "Unabel to login with provided information"})
                        }
                    })
                    .catch( err => {
                        res.status(500).json({
                            error: "Unabel to find unique user"
                        })
                    })
        })
    // - PUT - //
    // - DEL - //

// EXPORTS
    module.exports = router