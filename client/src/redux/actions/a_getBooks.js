// IMPORTS
import axios from 'axios'

// URLS
import { LOCAL_BE_base_URL } from '../../utils'
import { LIVE_BE_base_URL } from '../../utils'

// __MAIN__
    // Action Types
    export const GET_BOOKS_START = "GET_BOOKS_START"
    export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS"
    export const GET_BOOKS_FAILURE= "GET_BOOKS_FAILURE"

    // Action Creator:
    export const a_getBooks = () => {
    // console.log('INSIDE: a_GetBooks action creator')
    // -- //
        // Send First Action
        return dispatch => {
            dispatch({ type: GET_BOOKS_START })
            let used_URL = ''

            // What environment are we in?
            if (process.env.NODE_ENV === 'development') {
                used_URL = `${LOCAL_BE_base_URL}books/all`
            } else if (process.env.NODE_ENV === 'production') {
                used_URL = `${LIVE_BE_base_URL}books/all`
            }
            console.log('URL USED')
            console.log(used_URL)

            // Make Axios Request
            axios
                .get(
                    used_URL
                )
                .then(res => {
                console.log(res)
                // -- //
                    dispatch({
                        type: GET_BOOKS_SUCCESS,
                        payload: res.data,
                    })
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    dispatch({
                        type: GET_BOOKS_FAILURE,
                        payload: err
                    })
                })
        }
    }
