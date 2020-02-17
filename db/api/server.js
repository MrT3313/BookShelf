// DOTENV
require('dotenv').config()

// EXPRESS
    const express = require('express')
    const server = express()

// MIDDLEWARE
    // const helmet = require('helmet')
    const logger = require('morgan')
    const cors = require('cors')

// ROUTES
    const routes = require('./routes/index')

// USE MIDDLEWARE
    server.use(
        express.json(),
        // helmet,
        cors(),
    )

// USE ROUTES
    server.use('/', routes)

// ROOT ROUTE
    server.get('/', (req, res) => {
        res.status(200).json({API: 'BookShelf ROOT ROUTE working'})
    })