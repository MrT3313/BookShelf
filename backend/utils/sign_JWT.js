// IMPORTS
const jwt = require('jsonwebtoken')

// __MAIN__
const sign_JWT = (user) => {
console.log('** UTIL: SIGN JWT **')
console.log('token secret: ', process.env.token_secret)

    const token = jwt.sign(
        // Define body properties
        {
            user_ID: user.id,
            username: user.username,
            f_name: user.f_name
        },
        
        // Pass Secret
        process.env.token_secret,
        
        // Configure Token
        {
            expiresIn: '2h'
        }
    )
    
// RETURN
return token}

module.exports = sign_JWT


