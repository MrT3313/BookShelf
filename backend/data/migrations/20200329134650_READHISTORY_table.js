
exports.up = function(knex) {
    return knex.schema.createTable('completedbooks', tbl => {
        tbl.increments('id')
        tbl.integer('userID')
            .references('id').inTable('users')
            .onDelete('NO ACTION')
            .onUpdate("CASCADE");
        
        tbl.integer('bookID')
            .references('id').inTable('books')
            .onDelete('NO ACTION')
            .onUpdate("CASCADE");
            
        tbl.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('completedbooks')
};
