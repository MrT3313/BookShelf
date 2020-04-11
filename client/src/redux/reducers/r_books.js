import {
    GET_BOOKS_START ,GET_BOOKS_SUCCESS ,GET_BOOKS_FAILURE
} from '../actions/GET/a_getBooks'

import {
    ADD_BOOK_START, ADD_BOOK_SUCCESS, ADD_BOOK_FAILURE
} from '../actions/POST/a_addBook.js'

// INITIAL STATE
const initialState = {
    is_fetching: false,
    is_adding: false,

    DB_books: [],
    
    error: '',
}

// __MAIN__
export const r_books = (state=initialState, action) => {
// console.log('action.payload: ', action.payload)
// -- // 
    switch(action.type) {
        // - 1 - // 
        case GET_BOOKS_START:
            return {
                ...state,
                is_fetching: true,
                error: '',
            }
        case GET_BOOKS_SUCCESS:
            return {
                ...state,
                is_fetching: false,

                DB_books: action.payload,

                error: '',
            }
        case GET_BOOKS_FAILURE:
            return {
                ...state,
                is_fetching: false,
                error: action.paylaod
            }
        // - 2 - //
        case ADD_BOOK_START:
            return {
                ...state,
                is_adding: true,
                error: '',
            }
        case ADD_BOOK_SUCCESS:
            return {
                ...state,
                is_adding: false,

                DB_books: [...action.payload],

                error: '',
            }
        case ADD_BOOK_FAILURE:
            return {
                ...state,
                is_adding: false,
                error: action.paylaod,
            }
        // - DEFAULT - //
        default:
            return state;
    }
}