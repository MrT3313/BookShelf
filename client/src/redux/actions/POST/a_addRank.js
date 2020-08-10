// IMPORTS
import axios from 'axios'

// URLS
// URLS
import { LOCAL_BE_base_URL } from '../../../utils'
import { LIVE_BE_base_URL } from '../../../utils'

// __MAIN__
    // Action Types
    export const ADD_RANK_START = 'ADD_RANK_START'
    export const ADD_RANK_SUCCESS = 'ADD_RANK_SUCCESS'
    export const ADD_RANK_FAILURE = 'ADD_RANK_FAILURE'

    // Action Creator
    export const a_addRank = (newRank, selectedLogData) => {
    // console.log('INSIDE: a_addRank action creator')
    // console.log(newRank)
    // console.log(selectedLogData)
    // -- //
        // Send First Action
        return dispatch => {
            dispatch({type: ADD_RANK_START})
            let used_URL = ''

            // What environment are we in?
            if (process.env.NODE_ENV === 'development') {
                used_URL = `${LOCAL_BE_base_URL}ranks`
            } else if (process.env.NODE_ENV === 'production') {
                used_URL = `${LIVE_BE_base_URL}ranks`
            }
            // console.log('URL USED')
            // console.log(used_URL)

            // Make Axios Request
            return axios
                .post(
                    used_URL,
                    newRank
                )
                .then(results => {
                // console.log(results)
                // -- //
                    const userResults = results.data.filter(item => item.userID === selectedLogData.userID)
                    // console.log(userResults)
                    
                    dispatch({
                        type: ADD_RANK_SUCCESS,
                        payload: {
                            allUsers: results.data,
                            singleUser: userResults
                        }
                    })
                })
                .catch(err => {
                // console.log(err)
                // -- //
                    dispatch({
                        type: ADD_RANK_FAILURE,
                        payload: err
                    })
                })
        }
    }
