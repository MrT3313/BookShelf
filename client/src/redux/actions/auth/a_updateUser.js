// IMPORTS
import axios from 'axios'

// UTILS
import { LOCAL_BE_base_URL } from '../../../utils'
import { LIVE_BE_base_URL } from '../../../utils'

// __MAIN__
    // Action Types
    export const UPDATE_USER_START = 'UPDATE_USER_START'
    export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
    export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE'

    // Action Creator
    export const a_updateUser = (id, updateInfo) => {
    // console.log('INSIDE: a_UPDATE_user action creator')
    // -- //
        // Send First Action --> START
        return dispatch => {
            dispatch({ type: UPDATE_USER_START})
            let update_URL = ''

            // Which environment are we in?
            if (process.env.NODE_ENV === 'development') {
                update_URL = `${LOCAL_BE_base_URL}users/${id}`
            } else if (process.env.NODE_ENV === 'production') {
                update_URL = `${LIVE_BE_base_URL}users/${id}`
            }
            // console.log('URL USED')
            // console.log(update_URL)
            // console.log(updateInfo)

            // Make Axios Request
            axios
                .put(
                    update_URL,
                    updateInfo
                )
                .then( updateResult => {
                // console.log(updateResult)
                // -- //
                    dispatch({
                        type: UPDATE_USER_SUCCESS,
                        payload: updateResult.data,
                    })
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    dispatch({
                        type: UPDATE_USER_FAILURE,
                        payload: err,
                    })
                })
        }
    }
