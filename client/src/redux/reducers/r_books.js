import {
    GET_BOOKS_START ,GET_BOOKS_SUCCESS ,GET_BOOKS_FAILURE
} from '../actions/a_getBooks'

// INITIAL STATE
const initialState = {
    is_fetching: false,

    DB_books: [],
    
    error: '',
}

// __MAIN__
export const r_books = (state=initialState, action) => {
console.log('action.payload: ', action.payload)
// -- // 
    switch(action.type) {
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
        // - DEFAULT - //
        default:
            return state;
    }
}