// IMPORTS
import axios from 'axios'

// URLS
import { LOCAL_BE_base_URL } from '../../utils'
import { LIVE_BE_base_URL } from '../../utils'

// __MAIN__
    // Create Action Types 
    export const REGISTER_START = "REGISTER_START"
    export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
    export const REGISTER_FAILURE = "REGISTER_FAILURE"

    // Action
    export const a_register = (registerInfo) => {

        // Send First Action --> START REGISTER process
        return dispatch => {
            dispatch({ type: REGISTER_START });
            let register_URL = ''

            // What environment are we in?
            if (process.env.NODE_ENV === 'development'){
                register_URL = `${LOCAL_BE_base_URL}register`
            } else if (process.env.NODE_ENV === 'production') {
                register_URL = `${LIVE_BE_base_URL}register`
            }
            console.log('URL USED')
            console.log(register_URL)

            // Make Axios Request
            return axios
                .post(
                    register_URL,
                    registerInfo
                )
                .then(res => {
                // console.log(res)
                // -- //
                    dispatch({
                        type: REGISTER_SUCCESS,
                        payload: res.data
                    })
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    dispatch({
                        type: REGISTER_FAILURE,
                        payload: err
                    })
                })
        }
    }