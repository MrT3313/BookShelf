// IMPORTS
const decode_JWT = require('jwt-decode');

// __MAIN__
const decode = (token) => {
// console.log('** UTIL: DECODE JWT **')
// -- //
    const decoded = decode_JWT(token)

// RETURN
// console.log('Decoded Token: ',decoded)
return decoded}

// EXPORTS
module.exports = decode

