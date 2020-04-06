import {
    GET_READBOOKS_START, GET_READBOOKS_SUCCESS, GET_READBOOKS_FAILURE
} from '../actions/a_getReadBooks.js'

// INITIAL STATE
const initialState = {
    is_fetching: false,

    readBooks: [],

    error: '',
}

// __MAIN__
export const r_userData = (stata=initialState, action) => {
// console.log('action.payload: ', action.payload)
// -- // 
    switch(action.types) {
        case GET_READBOOKS_START:
            return {
                ...state,
                error: ''
            }
        case GET_READBOOKS_SUCCESS:
            return {
                ...state,
                readBooks: action.payload,
                error: ''
            }
        case GET_READBOOKS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
    }
}