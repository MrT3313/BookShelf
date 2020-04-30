// IMPORTS
const express = require('express')
const KNEX_BD = require('../../data/dbConfig.js')

// ROUTER
const router = express.Router()

// MIDDLEWARE
const pwHash = require('../../middleware/pwHash.js')

// MODELS
const USERS_MODEL = require('../models/users_model.js')

// UTILS
const sign_JWT = require('../../utils/sign_JWT.js') 

// __MAIN__
    // - POST - //
    /* ACCEPTED SHAPE 
        {
            "username": "STRING",
            "email": "STRING",
            "PLAINTEXT_pw": "STRING",
        }
    */ 
    router.post('/', pwHash, async(req,res) => {
    // console.log('** REGISTER ROUTE: POST/')
    // console.log(req.body.email)
    // console.log(req.body)
    // -- //
        USERS_MODEL.addUser(req.body)
        .then(results => {
        // console.log(results)
        // -- //
            // Get newly created user
            KNEX_BD('users').where("email", req.body.email ).first()
                .then( newUser => {
                // console.log(newUser)
                // -- //
                    // SIGN JWT
                    const token = sign_JWT(newUser)

                    // Response
                    res.status(201).json({ 
                        message: 'Successful Registration', 
                        user: {
                            token,
                            username: newUser.username,
                            email: newUser.email,
                            publicProfile: newUser.publicProfile,
                        }
                    })
                })
                // ERROR - unable to find newly created user
                .catch(err => {
                // console.log(err)
                // -- //

                    // Response
                    res.status(500).json({error: 'Cant find newly created user  from DB'})
                })
        })
        // ERROR - unable to register
        .catch(err => {
        // console.log(err)
        // -- //
            // Response
            res.status(500).json({ error: 'Unable to register new user'})
        })
    })


// EXPORTS
module.exports = router