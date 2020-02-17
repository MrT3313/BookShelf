// EXPRESS
const router = require('express').Router()

// IMPORT ROUTES
    const login_route = require('./login_route')

// ATTACH ROUTES
    router.use('login', login_route)

// EXPORTS
    module.exports = router