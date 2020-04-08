import {
    GET_USERLOGGEDBOOKS_START, GET_USERLOGGEDBOOKS_SUCCESS, GET_USERLOGGEDBOOKS_FAILURE
} from '../actions/a_getUserLoggedBooks'

import {
    GET_ALLLOGGEDBOOKS_START, GET_ALLLOGGEDBOOKS_SUCCESS, GET_ALLLOGGEDBOOKS_FAILURE
} from '../actions/a_getLoggedBooks.js'

// INITIAL STATE
const initialState = {
    is_fetching: false,

    userLoggedBooks: [],
    allLoggedBooks: [],

    error: '',
}

// __MAIN__
export const r_loggedBooks = (state=initialState, action) => {
console.log('action.payload: ', action.payload)
// -- // 
    switch(action.type) {
        // - 1 - // All Data
        case GET_ALLLOGGEDBOOKS_START:
            return {
                ...state, 
                error: ''
            }
        case GET_ALLLOGGEDBOOKS_SUCCESS:
            return {
                ...state, 

                allLoggedBooks: action.payload,

                error: ''
            }
        case GET_ALLLOGGEDBOOKS_FAILURE:
            return {
                ...state, 
                error: action.payload
            }
        

        // - 2 - // Specific User
        case GET_USERLOGGEDBOOKS_START:
            return {
                ...state,
                error: ''
            }
        case GET_USERLOGGEDBOOKS_SUCCESS:
            return {
                ...state,

                userLoggedBooks: action.payload,

                error: ''
            }
        case GET_USERLOGGEDBOOKS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        // - DEFAULT - //
        default:
            return state;
    }
}