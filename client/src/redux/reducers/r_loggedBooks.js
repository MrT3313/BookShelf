import {
    LOG_COMPLETEDBOOK_START, LOG_COMPLETEDBOOK_SUCCESS, LOG_COMPLETEDBOOK_FAILURE
} from '../actions/POST/a_addCompletedBook.js'

import {
    GET_USERLOGGEDBOOKS_START, GET_USERLOGGEDBOOKS_SUCCESS, GET_USERLOGGEDBOOKS_FAILURE
} from '../actions/GET/a_getUserLoggedBooks.js'

import {
    GET_ALLLOGGEDBOOKS_START, GET_ALLLOGGEDBOOKS_SUCCESS, GET_ALLLOGGEDBOOKS_FAILURE
} from '../actions/GET/a_getLoggedBooks.js'

// INITIAL STATE
const initialState = {
    is_fetching: false,
    is_fetchingUserData: false,
    is_adding: false,

    userLoggedBooks: [],
    allLoggedBooks: [],

    error: '',
}

// __MAIN__
export const r_loggedBooks = (state=initialState, action) => {
console.log('LOGS REDUCER => action.payload: ', action.payload)
// -- // 
    switch(action.type) {
        // - 1 - // GET ALL LOGGED BOOKS
        case GET_ALLLOGGEDBOOKS_START:
            return {
                ...state, 
                is_fetching: true,
                error: ''
            }
        case GET_ALLLOGGEDBOOKS_SUCCESS:
            return {
                ...state, 

                allLoggedBooks: [...action.payload],
                is_fetching: false,

                error: ''
            }
        case GET_ALLLOGGEDBOOKS_FAILURE:
            return {
                ...state, 
                is_fetching: false,
                error: action.payload
            }
        

        // - 2 - // LOGGED BOOKS FOR SPECIFIC USER
        case GET_USERLOGGEDBOOKS_START:
            return {
                ...state,
                is_fetchingUserData: true,
                error: ''
            }
        case GET_USERLOGGEDBOOKS_SUCCESS:
            return {
                ...state,

                userLoggedBooks: [...action.payload],
                is_fetchingUserData: false,

                error: ''
            }
        case GET_USERLOGGEDBOOKS_FAILURE:
            return {
                ...state,
                is_fetchingUserData: false,
                error: action.payload
            }

        // - 3 - // LOG NEW BOOK
        case LOG_COMPLETEDBOOK_START:
            return {
                ...state,
                is_adding: true,

                error: '',
            }
        case LOG_COMPLETEDBOOK_SUCCESS:
            return {
                ...state,
                is_adding: false,

                userLoggedBooks: [...action.payload.singleUser],
                allLoggedBooks: [...action.payload.allUsers],

                error: '',
            }
        case LOG_COMPLETEDBOOK_FAILURE:
            return {
                ...state,
                is_adding: false,

                error: '',
            }
        // - DEFAULT - //
        default:
            return state;
    }
}