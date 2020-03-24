exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments('id')

        // Should be able to login with unique username or email as identifier
        tbl.string('username')
            .unique()
        tbl.string('email')
            .unique()
        tbl.string('HASHED_pw')
            .notNullable()

        // All profile start off as private profiles
        tbl.bool('publicProfile')
            .defaultTo(false)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};