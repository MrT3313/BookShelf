// IMPORTS
import axios from 'axios'; 
// import jwt from 'jsonwebtoken';

// URLS
// TODO: Create conditional for process.env.NODE_ENV w/ baseURL
import { base_URL } from '../../utils'
// import live_URL from '../../utils'

// __MAIN__
    // Create Action Types
    export const LOGIN_START = "LOGIN_START";
    export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
    export const LOGIN_FAILURE = "LOGIN_FAILURE";

    // Action
    export const a_login = (loginInfo) => {
    // console.log('INSIDE: a_login action creator')
    // console.log('Login Info: ', loginInfo)
    // -- //
        // Send First Action --> START LOGIN process
        return dispatch => {
            dispatch({ type: LOGIN_START });

            // Make HTTP request
            // RETURN this axios call if you need to chain a .then() --> ex: take you to another page after
            axios
                .post(
                    `${base_URL}/api/login`,
                    loginInfo
                )
                .then(res => {
                console.log(res)
                    // TODO: Deal with Token

                    // DISPATCH LOGIN_SUCCESS
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: {
                            data: res.data,
                            // user: decodedToken
                        }
                    })
                })
                .catch(err => {
                console.log(err)
                    // DISPATCH LOGIN_FAILURE
                    dispatch({
                        type: LOGIN_FAILURE,
                        payload: err
                    })
                })
        }
    };