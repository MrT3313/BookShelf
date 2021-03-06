// IMPORTS
import axios from 'axios'

// URLS
import { LOCAL_BE_base_URL } from '../../../utils'
import { LIVE_BE_base_URL } from '../../../utils'

// __MAIN__
    // Action Types
    export const GET_REVIEWS_START = "GET_REVIEWS_START"
    export const GET_REVIEWS_SUCCESS = "GET_REVIEWS_SUCCESS"
    export const GET_REVIEWS_FAILURE = "GET_REVIEWS_FAILURE"

    // Action Creator
    export const a_getReviews = (userID) => {
    // console.log('INSIDE: a_getReviews action creator')
    // -- // 
        // Send First Action
        return dispatch => {
            dispatch({ type: GET_REVIEWS_START})
            let used_URL = ''

            // What environment are we in?
            if (process.env.NODE_ENV === 'development') {
                used_URL = `${LOCAL_BE_base_URL}reviews/all`
            } else if (process.env.NODE_ENV === 'production') {
                used_URL = `${LIVE_BE_base_URL}reviews/all`
            }
            // console.log('URL USED')
            // console.log(used_URL)

            // Make Axios Request
            return axios
                .get(
                    used_URL
                )
                .then( allReviews => {
                // console.log(res)
                // -- //
                    const userResults = allReviews.data.filter(item => item.userID === userID)
                    // console.log(userResults)

                    dispatch({
                        type: GET_REVIEWS_SUCCESS,
                        payload: {
                            allUsers: allReviews.data,
                            singleUser: userResults
                        }
                    })
                })
                .catch( err => {
                // console.log(err)
                // -- // 
                    dispatch({
                        type: GET_REVIEWS_FAILURE,
                        payload: err
                    })
                })
        }
    }