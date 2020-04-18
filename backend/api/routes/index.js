// EXPRESS
const router = require('express').Router()

// IMPORT ROUTES
const register_route = require('./register_route.js')
const login_route = require('./login_route.js')
const users_router = require('./users_route')
const books_router = require('./books_route')
const reviews_router = require('./reviews_route.js')
const logs_router = require('./logs_route.js')

// ATTACH ROUTES
router.use('/register', register_route)
router.use('/login', login_route)

router.use('/users', users_router)
router.use('/logs', logs_router)

router.use('/books', books_router)
router.use('/reviews', reviews_router)
    
// EXPORTS
module.exports = router