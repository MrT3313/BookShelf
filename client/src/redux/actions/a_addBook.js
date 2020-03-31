// IMPORTS
import axios from 'axios'

// URLS
import { LOCAL_BE_base_URL } from '../../utils'
import { LIVE_BE_base_URL } from '../../utils'

// __MAIN__
    // Action Types
    export const ADD_BOOK_START = 'ADD_BOOK_START'
    export const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS'
    export const ADD_BOOK_FAILURE = 'ADD_BOOK_FAILURE'

    // Action Creator:
    export const a_addBook = (newBook) => {
    // console.log('INSIDE: a_addBook action creator')
    // -- //
        // Send First Action
        return dispatch => {
            dispatch({ type: ADD_BOOK_START})
            let used_URL = ''

            // What environment are we in?
            if (process.env.NODE_ENV === 'development') {
                used_URL = `${LOCAL_BE_base_URL}books`
            } else if (process.env.NODE_ENV === 'production') {
                used_URL = `${LIVE_BE_base_URL}books`
            }
            // console.log('URL USED')
            // console.log(used_URL)

            // Make Axios Requests
            return axios
                .post(
                    used_URL,
                    newBook
                )
                .then( addBookResult => {
                // console.log(addBookResult)
                // -- //
                    dispatch({
                        type: ADD_BOOK_SUCCESS,
                        payload: addBookResult.data
                    })
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    dispatch({
                        type: ADD_BOOK_FAILURE,
                        payload: err
                    })
                })
        }
    }

