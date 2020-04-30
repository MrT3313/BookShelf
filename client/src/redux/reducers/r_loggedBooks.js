import {
    LOG_COMPLETEDBOOK_START, LOG_COMPLETEDBOOK_SUCCESS, LOG_COMPLETEDBOOK_FAILURE
} from '../actions/POST/a_addCompletedBook.js'

import {
    GET_ALLLOGGEDBOOKS_START, GET_ALLLOGGEDBOOKS_SUCCESS, GET_ALLLOGGEDBOOKS_FAILURE
} from '../actions/GET/a_getLoggedBooks.js'

import {
    DELETE_LOG_START, DELETE_LOG_SUCCESS, DELETE_LOG_FAILURE
} from '../actions/DEL/a_deleteLog.js'

// INITIAL STATE
const initialState = {
    is_fetching: false,
    // is_fetchingUserData: false,
    is_adding: false,

    USER_LoggedBooks: [],
    DB_LoggedBooks: [],

    error: '',
}

// __MAIN__
export const r_loggedBooks = (state=initialState, action) => {
// console.log('LOGS REDUCER => action.payload: ', action.payload)
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

                USER_LoggedBooks: [...action.payload.singleUser],
                DB_LoggedBooks: [...action.payload.allUsers],

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
        // case GET_USERLOGGEDBOOKS_START:
        //     return {
        //         ...state,
        //         is_fetchingUserData: true,
        //         error: ''
        //     }
        // case GET_USERLOGGEDBOOKS_SUCCESS:
        //     return {
        //         ...state,

        //         userLoggedBooks: [...action.payload],
        //         is_fetchingUserData: false,

        //         error: ''
        //     }
        // case GET_USERLOGGEDBOOKS_FAILURE:
        //     return {
        //         ...state,
        //         is_fetchingUserData: false,
        //         error: action.payload
        //     }

        // - 2 - // LOG NEW BOOK
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

                USER_LoggedBooks: [...action.payload.singleUser],
                DB_LoggedBooks: [...action.payload.allUsers],

                error: '',
            }
        case LOG_COMPLETEDBOOK_FAILURE:
            return {
                ...state,
                is_adding: false,

                error: action.payload,
            }
            // - 3 - // Delete
        case DELETE_LOG_START:
            return {
                ...state,
                is_deleting: 'false',
                error: ''
            }
        case DELETE_LOG_SUCCESS:
            return {
                ...state,
                is_deleting: 'false',

                USER_LoggedBooks: [...action.payload.singleUser],
                DB_LoggedBooks: [...action.payload.allUsers],
                
                error: ''
            }
            case DELETE_LOG_FAILURE:
                return {
                    ...state,
                    is_deleting: 'false',
                    error: ''
                }
        // - DEFAULT - //
        default:
            return state;
    }
}