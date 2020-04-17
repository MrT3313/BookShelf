require('dotenv').config()

const server = require('./api/server.js')

const PORT = process.env.PORT || 1313

server.listen(PORT, () => {
    console.log(`=== BookShelf API -- Base BE Server is listening on http://localHost:${PORT}===`)
})
