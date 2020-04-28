// IMPORTS
import axios from 'axios'

// URLS
import { LOCAL_BE_base_URL } from '../../../utils'
import { LIVE_BE_base_URL } from '../../../utils'

// __MAIN__
    // Action Types
    export const GET_RANKS_START = 'GET_RANKS_START'
    export const GET_RANKS_SUCCESS = 'GET_RANKS_SUCCESS'
    export const GET_RANKS_FAILURE = 'GET_RANKS_FAILURE'

    // Action Creator
    export const a_getRanks = (userID) => {
    // -- //
        // Send First Action
        return dispatch => {
            dispatch({ type: GET_RANKS_START })
            let used_URL = ''

            // What environment are we in?
            if (process.env.NODE_ENV === 'development') {
                used_URL = `${LOCAL_BE_base_URL}ranks/all`
            } else if (process.env.NODE_ENV === 'production') {
                used_URL = `${LIVE_BE_base_URL}ranks/all`
            }
            // console.log('URL USED')
            // console.log(used_URL)

            // Make Axios Request
            axios
                .get(used_URL)
                .then( allRanks => {
                // console.log(allRanks)
                // -- //
                    const userResults = allRanks.data.filter(item => item.userID === userID)
                    // console.log(userResults)

                    dispatch({
                        type: GET_RANKS_SUCCESS,
                        payload: {
                            allUsers: allRanks.data,
                            singleUser: userResults
                        }
                    })
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    dispatch({
                        type: GET_RANKS_FAILURE,
                        payload: err
                    })
                })
        }
    }