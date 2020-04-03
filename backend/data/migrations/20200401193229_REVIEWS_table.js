
exports.up = function(knex) {
    return knex.schema.createTable('reviews', tbl => {
        tbl.increments('id')
        tbl.integer('userID')
            .references('id').inTable('users')
            .onDelete('CASCADE')
            .onUpdate("CASCADE");
        tbl.integer('bookID')
            .references('id').inTable('books')
            .onDelete('CASCADE')
            .onUpdate("CASCADE");
        
        tbl.string('review').notNullable()

        tbl.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('reviews')
};
