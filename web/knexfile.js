const dbConnection = process.env.DATABASE_URL

module.exports = {
    development: {
        // TODO: Switch to use SQL DEVELOPMENT
        client: 'sqlite3',
        connection: {
        filename: './data/BookShelf.sqlite3'
        },
        useNullAsDefault: true,
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: './data/seeds'
        }
    },
    production: {
        // TODO: Switch to use SQL in PRODUCTION
        client: 'pg',
        connection: dbConnection,
        migrations: {
            directory: './data/migrations'
        }
    }
}