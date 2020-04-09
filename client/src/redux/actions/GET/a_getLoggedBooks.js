// IMPORTS
import axios from 'axios'

// URLS
import { LOCAL_BE_base_URL } from '../../../utils'
import { LIVE_BE_base_URL } from '../../../utils'

// __MAIN__
    // Action Types
    export const GET_ALLLOGGEDBOOKS_START = "GET_ALLLOGGEDBOOKS_START"
    export const GET_ALLLOGGEDBOOKS_SUCCESS = "GET_ALLLOGGEDBOOKS_SUCCESS"
    export const GET_ALLLOGGEDBOOKS_FAILURE = "GET_ALLLOGGEDBOOKS_FAILURE"


    // Action Creator
    export const a_getLoggedBooks = () => {
    // console.log('INSIDE: a_getLoggedBooks action creator')
    // -- //
        // Send First Action
        return dispatch => {
            dispatch({ type: GET_ALLLOGGEDBOOKS_START })
            let used_URL = ''

            // What environment are we in?
            if (process.env.NODE_ENV === 'development') {
                used_URL = `${LOCAL_BE_base_URL}loggedBooks/all`
            } else if (process.env.NODE_ENV === 'production') {
                used_URL = `${LIVE_BE_base_URL}loggedBooks/all`
            }
            // console.log('URL USED')
            // console.log(used_URL)

            // Make Axios Request
            axios
                .get(used_URL)
                .then(completedBooks => {
                console.log(completedBooks)
                // -- // 
                    dispatch({
                        type: GET_ALLLOGGEDBOOKS_SUCCESS,
                        payload: completedBooks.data
                    })
                })
                .catch(err => {
                // console.log(err)
                // -- // 
                    dispatch({
                        type: GET_ALLLOGGEDBOOKS_FAILURE,
                        payload: err
                    })
                })
        }
    }
    