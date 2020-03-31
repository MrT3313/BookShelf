// EXPRESS
const router = require('express').Router()

// IMPORT ROUTES
    const register_route = require('./register_route.js')
    const login_route = require('./login_route.js')
    const users_router = require('./users_route')
    const books_router = require('./books_route')
    const readHistory_router = require('./readHistory_route.js')

// ATTACH ROUTES
    router.use('/register', register_route)
    router.use('/login', login_route)
    router.use('/users', users_router)
    router.use('/books', books_router)
    router.use('/log', readHistory_router)
    
// EXPORTS
    module.exports = router