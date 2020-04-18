// IMPORTS
import axios from 'axios'

// URLS
import { LOCAL_BE_base_URL } from '../../../utils'
import { LIVE_BE_base_URL } from '../../../utils'

// __MAIN__
    // Action Types
    export const GET_USERLOGGEDBOOKS_START = 'GET_USERLOGGEDBOOKS_START'
    export const GET_USERLOGGEDBOOKS_SUCCESS = 'GET_USERLOGGEDBOOKS_SUCCESS'
    export const GET_USERLOGGEDBOOKS_FAILURE = 'GET_USERLOGGEDBOOKS_FAILURE'

    // Action Creators
    export const a_getUserLoggedBooks = (userID) => {
    // console.log('INSIDE: a_getReadBooks action creator')
    // -- // 
        // Send First Action
        return dispatch => {
            dispatch ({ type: GET_USERLOGGEDBOOKS_START})
            let used_URL = ''

            // What environment are we in?
            if (process.env.NODE_ENV === 'development') {
                used_URL = `${LOCAL_BE_base_URL}logs/singleUser/${userID}`
            } else if (process.env.NODE_ENV === 'production') {
                used_URL = `${LIVE_BE_base_URL}logs/singleUser/${userID}`
            }
            // console.log('URL USED')
            // console.log(used_URL)

            // Make Axios Request
            axios
                .get(used_URL)
                .then(completedBooks => {
                // console.log(completedBooks)
                // -- // 
                    dispatch({
                        type: GET_USERLOGGEDBOOKS_SUCCESS,
                        payload: completedBooks.data
                    })
                })
                .catch(err => {
                // console.log(err)
                // -- // 
                    dispatch({
                        type: GET_USERLOGGEDBOOKS_FAILURE,
                        payload: err
                    })
                })
        }
    }

