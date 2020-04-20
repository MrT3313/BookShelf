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

        tbl.integer('logID')
            .references('id').inTable('completedbooks')
            .onDelete('CASCADE')
            .onUpdate("CASCADE")

        tbl.integer('rank')
            .notNullable()

        tbl.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ranks')
}
