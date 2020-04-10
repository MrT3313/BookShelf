// IMPORTS
import axios from 'axios'

// URLS
import { LOCAL_BE_base_URL } from '../../../utils'
import { LIVE_BE_base_URL } from '../../../utils'

// __MAIN__
    // Action Types
    export const LOG_COMPLETEDBOOK_START = 'LOG_COMPLETEDBOOK_START'
    export const LOG_COMPLETEDBOOK_SUCCESS = 'LOG_COMPLETEDBOOK_SUCCESS'
    export const LOG_COMPLETEDBOOK_FAILURE = 'LOG_COMPLETEDBOOK_FAILURE'
    
    // Action Creator
    export const a_logCompletedBook = (userID, bookID) => {
    // console.log('INSIDE: a_logCompletedBook action creator')
    // -- //
        // Send First Action
        return dispatch => {
            dispatch({ type: LOG_COMPLETEDBOOK_START})
            let used_URL = ''

            // What environment are we in?
            // TODO: TURN INTO UTIL FUNCTION 
            if (process.env.NODE_ENV === 'development') {
                used_URL = `${LOCAL_BE_base_URL}loggedBooks`
            } else if (process.env.NODE_ENV === 'production') {
                used_URL = `${LIVE_BE_base_URL}loggedBooks`
            }
            // console.log('URL USED')
            // console.log(used_URL)

            // Make Axios Request
            return axios
                .post(
                    used_URL,
                    {userID, bookID}
                )
                .then( results => {
                console.log('CHECK!!!',results)
                // -- //
                    const userResults = results.data.filter(item => item.userID == userID)
                    console.log(userResults)

                    dispatch({
                        type: LOG_COMPLETEDBOOK_SUCCESS,
                        payload: {
                            allUsers: results.data,
                            singleUser: userResults
                        }
                    })
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    dispatch({
                        type: LOG_COMPLETEDBOOK_FAILURE,
                        payload: err
                    })
                })
        }
    }