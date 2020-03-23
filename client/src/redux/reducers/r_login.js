// IMPORTS
// import JWT from 'jsonwebtoken'

// ACTION TYPES
import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE
} from '../actions/a_login.js'

// INITIAL STATE
const initialState = {
    is_loggingIn: false,
    token: '',
    error: '',
}

// __MAIN__
export const r_login = (state=initialState, action) => {
// console.log('action.payload: ', action.payload)
// -- //
    // Switch conditional for different action types
    switch (action.type) {
        // - 1 - // 
        case LOGIN_START:
            return {
                ...state,

                is_loggingIn: true,
                error: ''
            };
        // - 2 - //
        case LOGIN_SUCCESS:
            return {
                ...state,

                token: action.payload.token,

                is_loggingIn: false,
                error: ''
            }
        // - 3 - //
        case LOGIN_FAILURE:
            return {
                ...state,

                is_loggingIn: false,
                error: 'Login Failure'
            }
        // - DEFAULT - //
        default:
            return state;
            
    }
}