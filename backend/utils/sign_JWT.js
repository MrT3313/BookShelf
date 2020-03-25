// IMPORTS
const jwt = require('jsonwebtoken')

// __MAIN__
const sign_JWT = (user) => {
console.log('** UTIL: SIGN JWT **')
console.log('token secret: ', process.env.token_secret)
// -- //
    const token = jwt.sign(
        // Define body properties
        {
            user_ID: user.id,
            username: user.username,
        },
        
        // Pass Secret
        process.env.token_secret,
        
        // Configure Token
        {
            expiresIn: '2h'
        }
    )
    
// RETURN
console.log(token)
return token}

module.exports = sign_JWT


