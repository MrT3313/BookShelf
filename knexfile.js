require("dotenv").config();

module.exports = {
    development: {
        // TODO: Switch to use SQL DEVELOPMENT
        client: 'sqlite3',
        connection: {
        filename: './backend/data/BookShelf.sqlite3'
        },
        useNullAsDefault: true,
        migrations: {
            directory: './backend/data/migrations'
        },
        seeds: {
            directory: './backend/data/seeds'
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