// EXPRESS
const router = require('express').Router()

// IMPORT ROUTES
    const register_route = require('./register_route.js')
    const login_route = require('./login_route.js')

// ATTACH ROUTES
    router.use('/register', register_route)
    router.use('/login', login_route)
    

// EXPORTS
    module.exports = router