// IMPORTS
import axios from 'axios'

// UTILS
import { LOCAL_BE_base_URL } from '../../../utils'
import { LIVE_BE_base_URL } from '../../../utils'

// __MAIN__
    // Action Types
    export const UPDATE_REVIEW_START = "UPDATE_REVIEW_START"
    export const UPDATE_REVIEW_SUCCESS = "UPDATE_REVIEW_SUCCESS"
    export const UPDATE_REVIEW_FAILURE = "UPDATE_REVIEW_FAILURE"

    // Action Creator
    export const a_updateReview = (updateData, selectedLogData) => {
    // console.log('INSIDE: a_updateReview action creator')
    // console.log(updateData)
    // console.log(selectedLogData)
    // -- //
        // Send First Action
        return dispatch => {
            dispatch({ type: UPDATE_REVIEW_START})

            // Which environment are we in?
            let update_URL = ''
            if (process.env.NODE_ENV === 'development') {
                update_URL = `${LOCAL_BE_base_URL}reviews/${selectedLogData.reviewID}`
            } else if (process.env.NODE_ENV === 'production') {
                update_URL = `${LIVE_BE_base_URL}reviews/${selectedLogData.reviewID}`
            }
            // console.log('URL USED')
            // console.log(update_URL)
            // console.log('UPDATE DATA',updateData)

            // Make Axios Request 
            return axios
                .put(
                    update_URL,
                    {review: updateData}
                )
                .then( updateResults => {
                // console.log(updatedResults)
                // -- //
                    const userResults = updateResults.data.filter(item => item.userID === selectedLogData.userID)
                    // console.log(userResults)

                    dispatch({
                        type: UPDATE_REVIEW_SUCCESS,
                        payload: {
                            allUsers: updateResults.data,
                            singleUser: userResults
                        }
                    })
                })
                .catch(err => {
                // console.log(err)
                // -- //
                    dispatch({
                        type: UPDATE_REVIEW_FAILURE,
                        payload: err
                    })
                })
            
        }
    }