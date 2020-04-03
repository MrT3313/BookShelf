// IMPORTS
import axios from 'axios'

// URLS
import { LOCAL_BE_base_URL } from '../../utils'
import { LIVE_BE_base_URL } from '../../utils'

// __MAIN__
    // Action Types
    export const ADD_REVIEW_START = 'ADD_REVIEW_START'
    export const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS'
    export const ADD_REVIEW_FAILURE = 'ADD_REVIEW_FAILURE'
    
    // Action Creator
    export const a_addReview = (newReview) => {
    // console.log('INSIDE: a_addReview action creator')
    // -- //
        // Send First Action
        return dispatch => {
            dispatch({type: ADD_REVIEW_START})
            let used_URL = ''

            // What environment are we in?
            if (process.env.NODE_ENV === 'development') {
                used_URL = `${LOCAL_BE_base_URL}reviews`
            } else if (process.env.NODE_ENV === 'production') {
                used_URL = `${LIVE_BE_base_URL}reviews`
            }
            // console.log('URL USED')
            // console.log(used_URL)

            // Make Axios Requests
            return axios
                .post(
                    used_URL,
                    newReview
                )
                .then( addReviewResult => {
                // console.log(addReviewResult)
                // -- //
                    dispatch({
                        type: ADD_REVIEW_SUCCESS,
                        payload: addReviewResult.data
                    })
                })
                .catch( err => {
                // consoe.log(err)
                // -- //
                    dispatch({
                        type: ADD_REVIEW_FAILURE,
                        payload: err
                    })
                })
        }
    }