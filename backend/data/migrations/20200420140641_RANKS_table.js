exports.up = function(knex) {
    return knex.schema.createTable('ranks', tbl => {
        tbl.increments('id')

        tbl.integer('logID')
            .unique()
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
