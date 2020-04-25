// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// Exports
module.exports = {
    getAll,
    getReviews_by_userID,
    getReviews_by_bookID,
    getReview,
    postReview,
    updateReview,
    deleteReview,
}

// Functions
// - 1 - // getAll
function getAll() {
// console.log('MODEL - REVIEWS - getAll')
// -- //
    // - A - // Knex Query Builder
    // return KNEX_DB('reviews')

    // - B - // RAW SQL
    return KNEX_DB.raw(`
        SELECT 
            -- IDs
                reviews.id as "reviewID", completedbooks.id as "logID", completedbooks."userID", completedbooks."bookID",
            
            -- Data
                books.title, books.author,
                reviews.review
        FROM completedbooks

        JOIN reviews
        ON completedbooks.id = reviews."logID"

        JOIN books
        ON completedbooks."bookID" = books.id

        ORDER BY reviews.created_at DESC
    `)
}

// - 2 - // getReviews_by_userID
function getReviews_by_userID(userID) {
// console.log('MODEL - REVIEWS - getReviews_by_userID')
// console.log(userID)
// -- //
    // - A - // Knex Query Builder
    // return KNEX_DB('reviews').where("userID", userID)

    // - B - // RAW SQL
    return KNEX_DB.raw(`
        SELECT
            -- IDs
            reviews.id as "reviewID", completedbooks.id as "logID", completedbooks."userID", completedbooks."bookID",

            -- Data
            books.title, books.author,
            reviews.review

        FROM completedbooks
            
        JOIN reviews
        ON reviews."logID" = completedbooks.id

        JOIN books
        ON completedbooks."bookID" = books.id

        WHERE completedbooks."userID" = ${userID}
    `)
}


// - 3 - // getReviews_by_bookID
function getReviews_by_bookID(bookID) {
// console.log('MODEL - REVIEWS - getReviews_by_bookID')
// console.log(bookID)
// -- //
    // - A - // Knex Query Builder
    // return KNEX_DB('reviews').where("userID", bookID)

    // - B - // RAW SQL
    return KNEX_DB.raw(`
        SELECT 
        -- IDs
            completedbooks.id as "logID", reviews.id as "reviewID", completedbooks."userID", completedbooks."bookID",
        
        -- Data
            books.title, books.author,
            reviews.review
        FROM completedbooks
        
        JOIN reviews
        ON completedbooks.id = reviews."logID"
        
        JOIN books
        ON completedbooks."bookID" = books.id
        
        WHERE books.id = ${bookID}
        
        ORDER BY reviews.created_at DESC
    `)
}

// - 4 - // getReview
function getReview(id) {
// console.log('MODEL - REVIEWS - getReview')
// console.log(id)
// -- //
    // - A - // Knex Query Builder
    // return KNEX_DB('reviews').where({id}).first()

    // - B - // RAW SQL
    return KNEX_DB.raw(`
        SELECT 
        -- IDs
            completedbooks.id as "logID", reviews.id as "reviewID", completedbooks."userID", completedbooks."bookID",
        
        -- Data
            books.title, books.author,
            reviews.review
        FROM completedbooks

        JOIN reviews
        ON completedbooks.id = reviews."logID"

        JOIN books
        ON completedbooks."bookID" = books.id

        WHERE reviews.id = ${id}
    `)
}

// - POST - //
// - 1 - // postReview
async function postReview(postData) { 
// console.log(postData)
// -- //
    // - A - // Knex Query Builder
    await KNEX_DB('reviews').insert(postData)
    return getAll()
    // - B - // RAW SQL
}

// - PUT - //
// - 1 - // updateReview
async function updateReview(id, updateData) { 
console.log(updateData)
console.log(id)
// -- //
    // - A - // Knex Query Builder
    await KNEX_DB('reviews').where({id}).update(updateData)
    return getReview(id)
    // - B - // RAW SQL
}

// - DEL - //
// - 1 - // deleteUser
async function deleteReview(id) {
// console.log('MODEL - REVIEWS - deleteReview')
// console.log(id)
// -- // 
    // - A - // Knex Query Builder
    await KNEX_DB('reviews').where({id}).del()
    return getAll()
    
    // - B - // RAW SQL
}