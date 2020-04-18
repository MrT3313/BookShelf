require("dotenv").config();

module.exports = {
    development: {
        client: "pg",
        connection: {
            database: "bookshelf",
            user: "postgres",
            password: process.env.DB_Password
        },
        migrations: {
            tableName: "knex_migrations",
            directory: "./backend/data/migrations"
        },
    },

    testing: {
        client: "pg",
        connection: {
            database: "bookshelf_test",
            user: "postgres",
            password: process.env.DB_Password
        },
        migrations: {
            tableName: "knex_migrations",
            directory: "./backend/data/migrations"
        },
        seeds: {
            directory: "./backend/data/seeds"
          }
    }, 

    production: {
        // TODO: Switch to use SQL in PRODUCTION
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: './backend/data/migrations',
            tableName: "knex_migrations"
        }
    }
}