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
                -- IDs
                ranks.id as "rankID", completedbooks.id as "logID", completedbooks."userID", completedbooks."bookID",
                
                -- Data
                books.title, books.author,
                ranks.rank
            FROM completedbooks
            
            JOIN ranks
            ON completedbooks.id = ranks."logID"
            
            JOIN books
            ON completedbooks."bookID" = books.id

            ORDER BY ranks.updated_at ASC
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
                -- IDs
                ranks.id as "rankID", completedbooks.id as "logID", completedbooks."userID", completedbooks."bookID",
                
                -- Data
                books.title, books.author,
                ranks.rank
            FROM completedbooks
            
            JOIN ranks
            ON completedbooks.id = ranks."logID"
            
            JOIN books
            ON completedbooks."bookID" = books.id
            
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
                -- IDs
                ranks.id as "rankID", completedbooks.id as "logID", completedbooks."userID", completedbooks."bookID",
                
                -- Data
                books.title, books.author,
                ranks.rank
            FROM completedbooks
            
            JOIN ranks
            ON completedbooks.id = ranks."logID"
            
            JOIN books
            ON completedbooks."bookID" = books.id
            
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
                ranks.id as "rankID", completedbooks.id as "logID", completedbooks."userID", completedbooks."bookID",
                
                -- Data
                books.title, books.author,
                ranks.rank
            FROM completedbooks
            
            JOIN ranks
            ON completedbooks.id = ranks."logID"
            
            JOIN books
            ON completedbooks."bookID" = books.id
            
            WHERE completedbooks."userID" = ${userID}
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
                ranks.id as "rankID", completedbooks.id as "logID", completedbooks."userID", completedbooks."bookID",
                
                -- Data
                books.title, books.author,
                ranks.rank
            FROM completedbooks
            
            JOIN ranks
            ON completedbooks.id = ranks."logID"
            
            JOIN books
            ON completedbooks."bookID" = books.id
            
            WHERE completedbooks.id = ${logID}
            
            ORDER BY books.created_at DESC`
        )
        
    }

// - POST - // logRank
    async function logRank(logData) {
    // -- //
        // - A - // Knex Query Builder
        // await KNEX_DB('ranks').insert(logData)
        // return getAll()

        // - B - // RAW SQL
        await KNEX_DB.raw(`
            INSERT INTO ranks ("logID", rank)
            VALUES (${logData.logID},${logData.rank})

            ON CONFLICT ("logID") DO UPDATE
            SET rank = ${logData.rank}
        `)
        return getAll()
    }

// - PUT - // updateRank
async function updateRank(rankID, updateData) {
    // console.log('MODEL - USERS - RANKS')
    console.log('rankID',rankID)
    console.log('updateData',updateData)
    // -- //
        // - A - // Knex Query Builder
        await KNEX_DB('ranks').where('id', rankID).update(updateData)
        return getAll()
    
        // - B - // RAW SQL
    }

// - DEL - // deleteRank
async function deleteRank(id) {
// console.log('MODEL - REVIEWS - deleteLog')
// console.log(id)
// -- // 
    // - A - // Knex Query Builder
    await KNEX_DB('ranks').where({id}).del()
    return getAll()
    
    // - B - // RAW SQL
}

