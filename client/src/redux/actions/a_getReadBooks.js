// IMPORTS
import axios from 'axios'

// URLS
import { LOCAL_BE_base_URL } from '../../utils'
import { LIVE_BE_base_URL } from '../../utils'

// __MAIN__
    // Action Types
    export const GET_READBOOKS_START = 'GET_READBOOKS_START'
    export const GET_READBOOKS_SUCCESS = 'GET_READBOOKS_SUCCESS'
    export const GET_READBOOKS_FAILURE = 'GET_READBOOKS_FAILURE'

    // Action Creators
    export const a_getReadBooks = () => {
    // console.log('INSIDE: a_getReadBooks action creator')
    // -- // 
        // Send First Action
        return dispatch({ type: GET_READBOOKS_START})
        let used_URL = ''

        // What environment are we in?
        if (process.env.NODE_ENV === 'development') {
            used_URL = `${LOCAL_BE_base_URL}books/all`
        } else if (process.env.NODE_ENV === 'production') {
            used_URL = `${LIVE_BE_base_URL}books/all`
        }
        // console.log('URL USED')
        // console.log(used_URL)

        // Make Axios Request
        axios
            .get(used_URL)
            .then(completedBooks => {
            // consolellog(completedBooks)
            // -- // 
                dispatch({
                    type: GET_READBOOKS_SUCCESS,
                    payload: completedBooks
                })
            })
            .catch(err => {
            // console.log(err)
            // -- // 
                dispatch({
                    type: GET_BOOKLISTS_FAILURE,
                    payload: err
                })
            })
    }

