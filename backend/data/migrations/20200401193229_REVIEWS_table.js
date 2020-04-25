
exports.up = function(knex) {
    return knex.schema.createTable('reviews', tbl => {
        tbl.increments('id')

        tbl.integer('logID')
            .unique()
            .references('id').inTable('completedbooks')
            .onDelete('CASCADE')
            .onUpdate("CASCADE")
        
        tbl.string('review').notNullable()

        tbl.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('reviews')
};
