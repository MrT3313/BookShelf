// IMPORTS
// import JWT from 'jsonwebtoken'

// ACTION TYPES
import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE
} from '../actions/a_login.js'

import {
    REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE
} from '../actions/a_register.js'

import {
    LOGOUT
} from '../actions/a_logout.js'

import {
    UPDATE_USER_START, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE
} from '../actions/a_updateUser.js'

// INITIAL STATE
const initialState = {
    is_loggingIn: false,
    is_registering: false,
    is_updating: false,
    
    token: '',
    username: '',
    email: '',
    publicProfile: undefined,

    error: '',
}

// __MAIN__
export const r_login = (state=initialState, action) => {
// console.log('action.payload: ', action.payload)
// -- //
    // Switch conditional for different action types
    switch (action.type) {
        // - 1 - // 
        // LOGIN
        case LOGIN_START:
            return {
                ...state,

                is_loggingIn: true,
                error: ''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,

                token: action.payload.token,
                username: action.payload.username,
                email: action.payload.email,
                publicProfile: action.payload.publicProfile,

                is_loggingIn: false,
                error: ''
            }
        case LOGIN_FAILURE:
            return {
                ...state,

                is_loggingIn: false,
                error: 'Login Failure'
            }
        // - 2 - // 
        // REGISTER
        case REGISTER_START:
            return {
                ...state,

                is_registering: true,
                error:''
            }
        case REGISTER_SUCCESS:
            return {
                ...state,

                token: action.payload.user.token,
                username: action.payload.user.username,
                email: action.payload.user.email,
                publicProfile: action.payload.user.publicProfile,

                is_registering: false,
                error:''
            }
        case REGISTER_FAILURE:
            return {
                ...state,

                is_registering: false,
                error:'Register Failure'
            }
        // - 2 - // 
        // LOGOUT
        case LOGOUT:
            return {
                ...state,

                token: '',
                username: '',
                publicProfile: '',
                email: '',
            }
        // - 3 - // 
        // UPDATE USER
        case UPDATE_USER_START:
            return {
                ...state, 
                is_updating: true,
                error: ''
            }

        case UPDATE_USER_SUCCESS:
            return {
                ...state, 
                is_updating: false,
                
                username: action.payload.user.username,
                email: action.payload.user.email,
                publicProfile: action.payload.user.publicProfile,
                
                error: '',
            }

        case UPDATE_USER_FAILURE:
            return {
                ...state, 
                is_updating: false,
                error: action.payload
            }


        // - DEFAULT - //
        default:
            return state;
            
    }
}