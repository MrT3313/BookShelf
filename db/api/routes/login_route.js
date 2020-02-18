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
        
        */

    // - PUT - //
    // - DEL - //

// EXPORTS
    module.exports = router