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
            reviews."userID", reviews.id as "reviewID",
            books.id as "bookID", books.title, books.author,
            reviews.review
            
        FROM reviews

        JOIN books
        ON books.id = reviews."bookID"

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
            reviews."userID", reviews.id as "reviewID",
            books.id as "bookID", books.title, books.author,
            reviews.review
            
        FROM reviews
        
        JOIN books
        ON books.id = reviews."bookID"
        
        WHERE reviews."userID" = ${userID}

        ORDER BY reviews.created_at DESC
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
            reviews."userID", reviews.id as "reviewID",
            books.id as "bookID", books.title, books.author,
            reviews.review
            
        FROM reviews
        
        JOIN books
        ON books.id = reviews."bookID"
        
        WHERE reviews."bookID" = ${bookID}

        ORDER BY reviews.created_at DESC
    `)
}

// - 4 - // getReview
function getReview(id) {
// console.log('MODEL - REVIEWS - getReview')
// console.log(id)
// -- //
    // - A - // Knex Query Builder
    return KNEX_DB('reviews').where('id', id).first()

    // - B - // RAW SQL
}

// - 5 - // postReview
async function postReview(postData) { 
// console.log(postData)
// -- //
    // - A - // Knex Query Builder
    await KNEX_DB('reviews').insert(postData)
    return getAll()
    // - B - // RAW SQL
}

// - 6 - // updateReview
async function updateReview(id, updateData) { 
console.log(updateData)
console.log(id)
// -- //
    // - A - // Knex Query Builder
    await KNEX_DB('reviews').where({id}).update(updateData)
    return getReview(id)
    // - B - // RAW SQL
}

// - 7 - // deleteUser
async function deleteReview(id) {
// console.log('MODEL - REVIEWS - deleteReview')
// console.log(id)
// -- // 
    // - A - // Knex Query Builder
    await KNEX_DB('reviews').where({id}).del()
    return getAll()
    
    // - B - // RAW SQL
}