// IMPORTS
import axios from 'axios'

// URLS
import { LOCAL_BE_base_URL } from '../../../utils'
import { LIVE_BE_base_URL } from '../../../utils'

// __MAIN__
    // Action Types
    export const GET_SELECTED_LOG_START = 'GET_SELECTED_LOG_START'
    export const GET_SELECTED_LOG_SUCCESS = 'GET_SELECTED_LOG_SUCCESS'
    export const GET_SELECTED_LOG_FAILURE = 'GET_SELECTED_LOG_FAILURE'

    // Action Creator
    export const a_getSelectedLog = (logID) => {
    // console.log('INSIDE: a_getSelectedBook action creator)
    // -- //
        return dispatch => {
            dispatch({type: GET_SELECTED_LOG_START})
            let used_URL = ''

            // What environment are we in?
            if (process.env.NODE_ENV === 'development') {
                used_URL = `${LOCAL_BE_base_URL}logs/singleLog/${logID}`
            } else if (process.env.NODE_ENV === 'production') {
                used_URL = `${LIVE_BE_base_URL}logs/singleLog/${logID}`
            }
            // console.log('URL USED')
            // console.log(used_URL)

            // Make Axios Request
            axios
                .get(
                    used_URL
                )
                .then(singleLog => {
                // console.log(singleLog)
                // -- //
                    dispatch({
                        type: GET_SELECTED_LOG_SUCCESS,
                        payload: singleLog.data
                    })
                })
                .catch(err => {
                // console.log(err)
                // -- //
                    dispatch({
                        type: GET_SELECTED_LOG_FAILURE,
                        payload: err
                    })
                })
        }
    }