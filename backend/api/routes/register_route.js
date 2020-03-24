// IMPORTS
const express = require('express')
const KNEX_BD = require('../../data/dbConfig.js')

// ROUTER
const router = express.Router()

// MIDDLEWARE
const pwHash = require('../../middleware/pwHash.js')

// UTILS
const sign_JWT = require('../../utils/sign_JWT.js') 

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
        // console.log('** REGISTER ROUTE: POST/')
        console.log(req.body.email)
        // -- //
           KNEX_BD('users')
            .insert(req.body)
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
                        res.status(201).json({ message: 'Successful registration', user: {token, id: newUser.id, username: newUser.username}})
                    })
                    // ERROR - unable to find newly created user
                    .catch(err => {
                    // console.log(err)
                    // -- //

                        // Response
                        res.status(500).json({error: 'Cant find newly created user'})
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
    // - PUT - //
    // - DEL - //

// EXPORTS
module.exports = router