// TODO: [1][] -- UPDATE RANK -- ONLY ABLE TO ENTER ONE RANK PER BOOK PER USER

// ------------------------------------------------------------------ //
// ------------------------------------------------------------------ //

// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// Exports
module.exports = {
    getAll,
    getRank, 
    getRanks_by_userID,
    getRanks_by_bookID,
    getRank_by_logID,
    logRank,
    deleteRank,
    updateRank,


}

// Functions
// - GET - //
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
    // TODO: [1][]
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
            -- IDs
                users.id as "userID",
                ranks.id as "rankID", 
                books.id as "bookID", 
            -- Data
                ranks.created_at as "rankDate", ranks.rank,
                books.title, books.author, books.created_at,
                completedbooks.id as "logID"
                
            FROM users
            
            JOIN ranks
            ON users.id = ranks."userID"
            
            JOIN books
            ON ranks."bookID" = books.id
            
            JOIN completedbooks 
            on ranks."logID" = completedbooks.id
            
            WHERE users.id = 1
            
            ORDER BY books.created_at
        `)
    }

    // - 5 - // getRanks_by_logID
    function getRank_by_logID(logID) {
    // console.log(logID)
    // -- //
        // - A - // Knex Query Builder
        
        // - B - // RAW SQL
        return KNEX_DB.raw(`
            SELECT 
            -- IDs 
                ranks.id as "rankID",  
                users.id as "userID",
                completedbooks.id as "logID",
                
            -- Data
                ranks.created_at as "rankDate", ranks.rank,
                books.id as "bookID", books.title, books.author, books.created_at
            FROM users
            
            JOIN ranks
            ON users.id = ranks."userID"
            
            JOIN books
            ON ranks."bookID" = books.id
            
            JOIN completedbooks
            on ranks."logID" = completedbooks.id
            
            WHERE completedbooks.id = ${logID}
            
            ORDER BY books.created_at DESC`
        )
        
    }

// - POST - //
    // - 1 - // logRank
    async function logRank(logData) {
    // -- //
        // - A - // Knex Query Builder
        await KNEX_DB('ranks').insert(logData)
        return getAll()

        // - B - // RAW SQL

    }

// - PUT - //
// - 1 - // updateRank
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

// - DEL - //
// - 1 - // deleteRank
async function deleteRank(id) {
// console.log('MODEL - REVIEWS - deleteLog')
// console.log(id)
// -- // 
    // - A - // Knex Query Builder
    await KNEX_DB('ranks').where({id}).del()
    return getAll()
    
    // - B - // RAW SQL
}

