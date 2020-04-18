// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// Exports
module.exports = {
    getAll,
    getByID,
    updateUser,
    updatePrivileges, 
    deleteUser,
    addUser,
    login, 
}

// Functions
// - 1 - // getAll
function getAll() {
// console.log('MODEL - USERS - getAll')
// -- //
    // - A - // Knex Query Builder
    // return KNEX_DB('users')

    // - B - // RAW SQL
    return KNEX_DB.raw(`
        SELECT * FROM users
    `)
}

// - 2 - // getByID
function getByID(id) {
// console.log('MODEL - USERS - getByID')
// console.log(id)
// -- //
    // - A - // Knex Query Builder
    // return KNEX_DB('users').where({id})

    // - B - // RAW SQL
    return KNEX_DB.raw(`
        SELECT 
            id, username, email, users."publicProfile", privileges
        FROM users

        WHERE users.id = ${id}
    `)
}

// - 3 - // updateUser
async function updateUser(id, updateData) {
// console.log('MODEL - USERS - updateUser')
// console.log(id)
// console.log(updateData)
// -- //
    // - A - // Knex Query Builder
    await KNEX_DB('users').where({id}).update(updateData)
    return getByID(id)

    // - B - // RAW SQL
}

// - 4 - // updatePrivileges
async function updatePrivileges(id, updateData) {
// console.log('MODEL - USERS - updatePrivileges')
// console.log(id)
// console.log(updateData)
// -- // 
    // - A - // Knex Query Builder
    await KNEX_DB('users').where({id}).update(updateData)

    return getByID(id)
    // - B - // RAW SQL
}

// - 5 - // deleteUser
async function deleteUser(id) {
// console.log('MODEL - USERS - deleteUser')
// console.log(id)
// -- // 
    // - A - // Knex Query Builder
    await KNEX_DB('users').where({id}).del()
    return getAll()
    
    // - B - // RAW SQL
}

// - 6 - // addUser
function addUser(userData) {
// console.log('MODEL - USERS - addUser')
// console.log('USER DATA: ', userData)
// -- // 
    // - A - // Knex Query Builder
    return KNEX_DB('users').insert(userData)

    // - B - // RAW SQL 
}

// - 7 - // login
function login(type, data) {
// console.log('MODEL - USERS - login')
// console.log('DATA: ', data)
// console.log('TYPE: ', type)
// -- // 
    // - A - // Knex Query Builder
    return KNEX_DB('users').where(type, data).first()
    // - B - // RAW SQL   
}