// IMPORTS
import axios from 'axios'

// URLS
import { BE_base_URL } from '../../utils'

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

            // Make HTTP request
            return axios
                .post(
                    `${BE_base_URL}register`,
                    registerInfo
                )
                .then(res => {
                    console.log(res)

                    dispatch({
                        type: REGISTER_SUCCESS,
                        payload: res.data
                    })
                })
                .catch( err => {
                    console.log(err)
                    dispatch({
                        type: REGISTER_FAILURE,
                        payload: err
                    })
                })
        }
    }