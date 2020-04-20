// IMPORTS
import axios from 'axios'

// URLS
import { LOCAL_BE_base_URL } from '../../../utils'
import { LIVE_BE_base_URL } from '../../../utils'
import { a_getUserReviews, GET_USERREVIEWS_FAILURE } from './a_getUserReviews'

// __MAIN__
    // Action Types
    export const GET_USERRANKS_START = 'GET_USERRANKS_START'
    export const GET_USERRANKS_SUCCESS = 'GET_USERRANKS_SUCCESS'
    export const GET_USERRANKS_FAILURE = 'GET_USERRANKS_FAILURE'

    // Action Creator
    export const a_getUserRanks = (userID) => {
    // -- //
        // Send First Action
        return dispatch => {
            dispatch({ type: GET_USERRANKS_START })
            let used_URL = ''

            // What environment are we in?
            if (process.env.NODE_ENV === 'development') {
                used_URL = `${LOCAL_BE_base_URL}ranks/singleUser/${userID}`
            } else if (process.env.NODE_ENV === 'production') {
                used_URL = `${LIVE_BE_base_URL}ranks/singleUser/${userID}`
            }
            // console.log('URL USED')
            // console.log(used_URL)

            // Make Axios Request
            axios
                .get(used_URL)
                .then( allUserRanks => {
                // console.log(allUserRanks)
                // -- //
                    dispatch({
                        type: GET_USERRANKS_SUCCESS,
                        payload: allUserRanks.data
                    })
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    dispatch({
                        type: GET_USERRANKS_FAILURE,
                        payload: err
                    })
                })
        }
    }