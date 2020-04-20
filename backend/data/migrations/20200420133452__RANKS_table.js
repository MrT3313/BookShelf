
exports.up = function(knex) {
    return knex.schema.createTable('ranks', tbl => {
        tbl.increments('id')

        tbl.integer('userID')
            .references('id').inTable('users')
            .onDelete('CASCADE')
            .onUpdate("CASCADE");

        tbl.integer('bookID')
            .references('id').inTable('books')
            .onDelete('CASCADE')
            .onUpdate("CASCADE");

        tbl.string('type') // allTime, [year]
            .notNullable()
        tbl.string('year', 4) // default = true
        tbl.integer('rank')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ranks')
};
