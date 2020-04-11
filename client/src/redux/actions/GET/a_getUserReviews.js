// IMPORTS
import axios from 'axios'

// URLS
import { LOCAL_BE_base_URL } from '../../../utils'
import { LIVE_BE_base_URL } from '../../../utils'

// __MAIN__
    // Action Types
    export const GET_USERREVIEWS_START = 'GET_USERREVIEWS_START'
    export const GET_USERREVIEWS_SUCCESS = 'GET_USERREVIEWS_SUCCESS'
    export const GET_USERREVIEWS_FAILURE = 'GET_USERREVIEWS_FAILURE'

    // Action Creators
    export const a_getUserReviews = (userID) => {
    // console.log('INSIDE: a_getReadBooks action creator')
    // -- // 
        // Send First Action
        return dispatch => {
            dispatch ({ type: GET_USERREVIEWS_START})
            let used_URL = ''

            // What environment are we in?
            if (process.env.NODE_ENV === 'development') {
                used_URL = `${LOCAL_BE_base_URL}reviews/singleUser/${userID}`
            } else if (process.env.NODE_ENV === 'production') {
                used_URL = `${LIVE_BE_base_URL}reviews/singleUser/${userID}`
            }
            // console.log('URL USED')
            // console.log(used_URL)

            // Make Axios Request
            axios
                .get(used_URL)
                .then(reviews => {
                // console.log(reviews)
                // -- // 
                    dispatch({
                        type: GET_USERREVIEWS_SUCCESS,
                        payload: reviews.data
                    })
                })
                .catch(err => {
                // console.log(err)
                // -- // 
                    dispatch({
                        type: GET_USERREVIEWS_FAILURE,
                        payload: err
                    })
                })
        }
    }

