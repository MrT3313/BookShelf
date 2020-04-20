// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// Exports
module.exports = {
    getAll,
    getRank, 
    getRanks_by_userID,
    getRanks_by_bookID,
    logRank,
    deleteRank,
    updateRank,


}

// Functions
// - 1 - // getAll
function getAll() {
// console.log('MODEL - RANKS - getAll)
// -- //
    // - A - // Knex Query Builder
    // return KNEX_DB('ranks')
    // - B - // RAW SQL
    return KNEX_DB.raw(`
        SELECT 
            ranks.id as "rankID", ranks."userID", ranks.created_at as "rankDate", ranks.rank,
            books.id as "bookID", books.title, books.author
        
        FROM ranks
        
        JOIN books
        ON ranks."bookID" = books.id

        ORDER BY books.created_at
    `)
}
// - 2 - // getRank
function getRank(id) {
// console.log(id)
// -- //
    // - A - // Knex Query Builder
    // return KNEX_DB('ranks').where('id', id).first()

    // - B - // RAW SQL
    return KNEX_DB.raw(`
        SELECT 
            ranks.id as "rankID", ranks.created_at as "rankDate", ranks.rank, 
            users.id as "userID",
            books.id as "bookID", books.title, books.author
        FROM users
        
        JOIN ranks
        ON users.id = ranks."userID"
        
        JOIN books
        ON ranks."bookID" = books.id
        
        WHERE ranks.id = ${id}

        ORDER BY books.created_at
    `)
}
// - 3 - // getRanks_by_bookID
function getRanks_by_bookID(bookID) {
// console.log(bookID)
// -- //
    // - A - // Knex Query Builder
    
    // - B - // RAW SQL
    return KNEX_DB.raw(`
        SELECT 
            ranks.id as "rankID",  ranks.created_at as "rankDate", ranks.rank,
            users.id as "userID",
            books.id as "bookID", books.title, books.author, books.created_at
        FROM users
        
        JOIN ranks
        ON users.id = ranks."userID"
        
        JOIN books
        ON ranks."bookID" = books.id
        
        WHERE books.id = ${bookID}

        ORDER BY books.created_at
    `)
}

// - 4 - // getRanks_by_userID
function getRanks_by_userID(userID) {
// console.log(userID)
// -- //
    // - A - // Knex Query Builder
    
    // - B - // RAW SQL
    return KNEX_DB.raw(`
        SELECT 
            ranks.id as "rankID",  ranks.created_at as "rankDate", ranks.rank,
            users.id as "userID",
            books.id as "bookID", books.title, books.author, books.created_at
        FROM users
        
        JOIN ranks
        ON users.id = ranks."userID"
        
        JOIN books
        ON ranks."bookID" = books.id
        
        WHERE users.id = ${userID}

        ORDER BY books.created_at
    `)
}

// - 5 - // logRank
async function logRank(logData) {
// -- //
    // - A - // Knex Query Builder
    await KNEX_DB('ranks').insert(logData)
    return getAll()

    // - B - // RAW SQL

}

// - 6 - // deleteRank
async function deleteRank(id) {
// console.log('MODEL - REVIEWS - deleteLog')
// console.log(id)
// -- // 
    // - A - // Knex Query Builder
    await KNEX_DB('ranks').where({id}).del()
    return getAll()
    
    // - B - // RAW SQL
}

// - 3 - // updateRank
async function updateRank(id, updateData) {
    // console.log('MODEL - USERS - RANKS')
    // console.log(id)
    // console.log(updateData)
    // -- //
        // - A - // Knex Query Builder
        await KNEX_DB('ranks').where({id}).update(updateData)
        return getRank(id)
    
        // - B - // RAW SQL
    }