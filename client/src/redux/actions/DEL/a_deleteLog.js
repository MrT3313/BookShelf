// IMPORTS
import axios from 'axios'

// URLS
import { LOCAL_BE_base_URL } from '../../../utils'
import { LIVE_BE_base_URL } from '../../../utils'

// __MAIN__
    // Action Types
    export const DELETE_LOG_START = 'DELETE_LOG_START'
    export const DELETE_LOG_SUCCESS = 'DELETE_LOG_SUCCESS'
    export const DELETE_LOG_FAILURE = 'DELETE_LOG_FAILURE'

    // Action Creator:
    export const a_deleteLog = (userID, logID) => {
    // console.log('INSIDE: a_deleteLog action creator')
    // console.log(logID)
    // -- //
        // Send First Action
        return dispatch => {
            dispatch({ type: DELETE_LOG_START})
            let used_URL = ''

            // What environment are we in?
            if (process.env.NODE_ENV === 'development') {
                used_URL = `${LOCAL_BE_base_URL}logs/${logID}`
            } else if (process.env.NODE_ENV === 'production') {
                used_URL = `${LIVE_BE_base_URL}logs/${logID}`
            }
            // console.log('URL USED')
            // console.log(used_URL)  

            // Make Axios Requests
            return axios
                .delete(
                    used_URL
                )
                .then( deleteResults => {
                // console.log(deleteResults.data)
                // console.log(userID)
                // -- //
                    const userResults = deleteResults.data.filter(item => item.userID == userID)
                    // console.log(userResults)

                    dispatch({
                        type: DELETE_LOG_SUCCESS,
                        payload: {
                            allUsers: deleteResults.data,
                            singleUser: userResults
                        }
                    })
                })
                .catch(err => {
                // console.log(err)
                // -- //
                    dispatch({
                        type: DELETE_LOG_FAILURE,
                        payload: err
                    })
                })
        }
    } 
    