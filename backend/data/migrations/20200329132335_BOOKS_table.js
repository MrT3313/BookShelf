
exports.up = function(knex) {
    return knex.schema.createTable('books', tbl => {
        tbl.increments('id')

        tbl.string('title')
        tbl.string('author')

        tbl.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('books')
};
