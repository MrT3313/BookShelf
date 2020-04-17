// KNEX
const KNEX_DB = require('../../data/dbConfig.js')

// Exports
module.exports = {
    getAll,
    getByID,
    addBook,
    updateBook,
    deleteBook,

}

// Functions
// - 1 - // getAll
function getAll() {
// console.log('MODEL - BOOKS - getAll')
// -- //
    // - A - // Knex Query Builder
    // return KNEX_DB('books')
    // - B - // RAW SQL
    const results = KNEX_DB.raw(`
        SELECT * FROM books
    `)

    return results
}

// - 2 - // getByID
function getByID(id) {
// console.log('MODEL - BOOKS - getByID')
// console.log(id)
// -- //
    // - A - // Knex Query Builder
    // return KNEX_DB('books').where({id})

    // - B - // RAW SQL
    const results = KNEX_DB.raw(`
        SELECT * FROM books

        WHERE books.id = ${id}
    `)

    return results
}

// - 3 - // addBook
async function addBook(bookData) {
// console.log('MODEL - BOOKS - addBook')
// console.log(bookData)
// -- //
    // - A - // Knex Query Builder
    await KNEX_DB('books').insert(bookData)
    return getAll()

    // - B - // RAW SQL
}

// - 4 - // updateBook
async function updateBook(id, updateDate) {
// console.log('MODEL - BOOKS - updateBook')
// console.log(updateDate)
// -- //
    // - A - // Knex Query Builder
    await KNEX_DB('books').where({id}).update(updateDate)
    return getByID(id)

    // - B - // RAW SQL
}

// - 5 - // deleteBook
async function deleteBook(id) {
// console.log('MODEL - BOOKS - deleteUser')
// console.log(id)
// -- // 
    // - A - // Knex Query Builder
    await KNEX_DB('books').where({id}).del()
    return getAll()
    
    // - B - // RAW SQL
}