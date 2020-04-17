// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// Exports
module.exports = {
    getAll,
    getLogs_by_userID,
    getLogs_by_bookID,
    getLog,
    logBook,
    deleteLog,

}

// Functions
// - 1 - // getAll
function getAll() {
// console.log('MODEL - BOOKS - getAll')
// -- //
    // - A - // Knex Query Builder
    // return KNEX_DB('completedBooks')
    // - B - // RAW SQL
    return KNEX_DB.raw(`
        SELECT 
            completedbooks.id as "logID", completedbooks."userID",
            books.id as "bookID", books.title, books.author, books.created_at
        
        FROM completedbooks
        
        JOIN books
        ON completedbooks."bookID" = books.id

        ORDER BY books.created_at
    `)
}

// - 2 - // getLogs_by_userID
function getLogs_by_userID(userID) {
// console.log('MODEL - LOGS - getLogs_by_userID')
// console.log(userID)
// -- //
    // - A - // Knex Query Builder
    
    // - B - // RAW SQL
    return KNEX_DB.raw(`
        SELECT 
            completedbooks.id as "logID", 
            users.id as "userID",
            books.id as "bookID", books.title, books.author, books.created_at
        FROM users
        
        JOIN completedbooks
        ON users.id = completedbooks."userID"
        
        JOIN books
        ON completedbooks."bookID" = books.id
        
        WHERE users.id = ${userID}

        ORDER BY books.created_at
    `)
}

// - 3 - // getLogs_by_bookID
function getLogs_by_bookID(bookID) {
// console.log('MODEL - LOGS - getLogs_by_bookID')
// console.log(bookID)
// -- //
    // - A - // Knex Query Builder
    
    // - B - // RAW SQL
    return KNEX_DB.raw(`
        SELECT 
            completedbooks.id as "logID", 
            users.id as "userID",
            books.id as "bookID", books.title, books.author, books.created_at
        FROM users
        
        JOIN completedbooks
        ON users.id = completedbooks."userID"
        
        JOIN books
        ON completedbooks."bookID" = books.id
        
        WHERE books.id = ${bookID}

        ORDER BY books.created_at
    `)
}

// - 4 - // getLog
function getLog(id) {
// console.log('MODEL - REVIEWS - getLog')
// console.log(id)
// -- //
    // - A - // Knex Query Builder
    // return KNEX_DB('completedbooks').where('id', id).first()

    // - B - // RAW SQL
    return KNEX_DB.raw(`
        SELECT 
            completedbooks.id as "logID", 
            users.id as "userID",
            books.id as "bookID", books.title, books.author, books.created_at
        FROM users
        
        JOIN completedbooks
        ON users.id = completedbooks."userID"
        
        JOIN books
        ON completedbooks."bookID" = books.id
        
        WHERE completedbooks.id = ${id}

        ORDER BY books.created_at
    `)
}

// - 5 - // logBook
async function logBook(logData) {
// console.log('MODEL - REVIEWS - logBook')
// -- //
    // - A - // Knex Query Builder
    await KNEX_DB('completedbooks').insert(logData)
    return getAll()

    // - B - // RAW SQL
}

// - 6 - // deleteLog
async function deleteLog(id) {
    // console.log('MODEL - REVIEWS - deleteLog')
    // console.log(id)
    // -- // 
        // - A - // Knex Query Builder
        await KNEX_DB('completedbooks').where({id}).del()
        return getAll()
        
        // - B - // RAW SQL
    }