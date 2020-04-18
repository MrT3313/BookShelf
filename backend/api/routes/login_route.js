// IMPORTS
const bcrypt = require('bcrypt')

// EXPRESS
const express = require('express')

// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// MODELS
const USERS_MODEL = require('../models/users_model.js')

// ROUTER
const router = express.Router()


// UTILS
const sign_JWT = require('../../utils/sign_JWT.js') 

// __MAIN__ 
    // - GET - //
        // - 1 - //
        router.get('/', async(req,res) => {
        // console.log('** LOGIN ROUTE: TEST GET/ **')
        // -- //
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
        // console.log('** LOGIN ROUTE: POST/ **')
        const { type, username, email, PLAINTEXT_pw } = req.body
        // -- //
            // Set UniqueData for login based on login TYPE
            switch(type) {
                case "email":
                    UniqueData = email
                    break;
                case "username":
                    UniqueData = username
                    break;
                default:
                    res.status(500).json({
                        error: "Login type not supported"
                    })
            }
            // console.log(type)
            // console.log(UniqueData)
            
            // Search DB for an entry where the TYPE matches the UNIQUE DATA passed in the request
            // KNEX_DB('users').where(type, UniqueData ).first()
            USERS_MODEL.login(type, UniqueData)
                .then(foundUser => {
                // console.log('FOUND USER', foundUser)
                // -- //

                    const pwVerification = bcrypt.compareSync(PLAINTEXT_pw, foundUser.HASHED_pw)
                    if (pwVerification) {
                        // SIGN JWT
                        const token = sign_JWT(foundUser)
    
                        // RESPONSE
                        res.status(200).json({
                            message: 'welcome to the BookShelf',
                            token,
                            username: foundUser.username,
                            email: foundUser.email,
                            publicProfile: foundUser.publicProfile
                        })
                    } else {
                        res.status(401).json( {error: 'Invalid Credentials'})
                    }
                })
                .catch(err => {
                // console.log(err)
                // -- //
                    // RESPONSE
                    res.status(401).json( {error: 'Unabel to find unique user'})
                })
            
        })
    // - PUT - //
    // - DEL - //

// EXPORTS
module.exports = router