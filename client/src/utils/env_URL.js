// IMPORTS

const env_URL = () => {
let used_URL = ''
// -- //
    if (process.env.NODE_ENV === 'development') {
        used_URL = `${LOCAL_BE_base_URL}books`
    } else if (process.env.NODE_ENV === 'production') {
        used_URL = `${LIVE_BE_base_URL}books`
    }

    console.log('URL USED')
    console.log(used_URL)

return used_URL}

// EXPORTS
module.exports = env_URL