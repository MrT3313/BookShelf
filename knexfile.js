require("dotenv").config();

const { Client } = require('pg')
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

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
        client: client,
        migrations: {
            directory: './backend/data/migrations',
            tableName: "knex_migrations"
        }
    }
}