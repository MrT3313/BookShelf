// IMPORTS
import axios from 'axios'; 
// import jwt from 'jsonwebtoken';

// URLS
// TODO: Create conditional for process.env.NODE_ENV w/ baseURL
import { LOCAL_BE_base_URL } from '../../utils'
import { LIVE_BE_base_URL } from '../../utils'

// __MAIN__
    // Create Action Types
    export const LOGIN_START = "LOGIN_START";
    export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
    export const LOGIN_FAILURE = "LOGIN_FAILURE";

    // Action Creator:
    export const a_login = (loginInfo) => {
    // console.log('INSIDE: a_login action creator')
    // console.log('Login Info: ', loginInfo)
    // -- //
        // Send First Action --> START LOGIN process
        return dispatch => {
            dispatch({ type: LOGIN_START });
            let login_URL = ''

            // What environment are we in?
            if (process.env.NODE_ENV === 'development') {
                login_URL = `${LOCAL_BE_base_URL}login`
            } else if (process.env.NODE_ENV === 'production') {
                login_URL = `${LIVE_BE_base_URL}login`
            }
            console.log('URL USED')
            console.log(login_URL)

            // Make Axios Request 
            return axios
                .post(
                    login_URL,
                    loginInfo,
                )
                .then(res => {
                // console.log(res)
                // -- //    
                    // DISPATCH LOGIN_SUCCESS
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: res.data,
                    })
                })
                .catch(err => {
                // console.log(err)
                // -- //
                    // DISPATCH LOGIN_FAILURE
                    dispatch({
                        type: LOGIN_FAILURE,
                        payload: err
                    })
                })
        }
    };