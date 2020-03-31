const bcrypt = require('bcryptjs')

function pwHash( req,res, next) {
    // console.log('** HASH PW MIDDLEWARE')

    const newUser = req.body

    if (newUser) {
        // Make Hash from PLAINTEXT_pw
        const HASH = bcrypt.hashSync(newUser.PLAINTEXT_pw, 10)

        // Create a new property on the newUser object for the HASHED PW
        newUser.HASHED_pw = HASH

        // REMOVE: PLAINTEXT_pw field from the newUser
        delete newUser.PLAINTEXT_pw

        // console.log('Updated User POST pwHash middleware: ', newUser)

        // ONTO NEXT MIDDLEWARE 
        req.newUser = newUser
        next()
    }
}

// EXPORTS
module.exports = pwHash