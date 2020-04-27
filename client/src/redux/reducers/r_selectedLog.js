import {
    GET_SELECTED_BOOK_START, GET_SELECTED_BOOK_SUCCESS, GET_SELECTED_BOOK_FAILURE
} from '../actions/GET/a_getSelectedLog.js'

// INITIAL STATE
const initialState = { 
    is_fetching: false,
    selectedBook: {},
    error: ''
}

// __MAIN__
export const r_selectedLog = (state=initialState, action) => {
// console.log('action.payload: ', action.payload)
    switch(action.type) {
        case GET_SELECTED_BOOK_START:
                return {
                    ...state,
                    is_fetching: 'true',
                    error: ''
                }
        case GET_SELECTED_BOOK_SUCCESS:
                return {
                    ...state,
                    selectedBook: action.payload,

                    is_fetching: 'false',
                    error: ''
                }
        case GET_SELECTED_BOOK_FAILURE:
            return {
                ...state,
                is_fetching: 'false',
                error: action.payload
            }
        // - DEFAULT - //
        default:
            return state;
    }
}