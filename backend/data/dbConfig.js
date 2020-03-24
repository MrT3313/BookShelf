// DOTENV
require('dotenv').config()

// __MAIN__
const knex = require('knex')
const config = require('../../knexfile.js')
const db_ENV = process.env.DB_CONNECT || 'development'

// EXPORTS
module.exports = knex(config[db_ENV])