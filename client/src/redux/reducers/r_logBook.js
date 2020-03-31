import {
    LOG_COMPLETEDBOOK_START, LOG_COMPLETEDBOOK_SUCCESS, LOG_COMPLETEDBOOK_FAILURE
} from '../actions/a_logCompletedBook.js'

// INITIAL STATE
const initialState = {
    is_adding: false,
    lastAdded: {},
    error: ''
}

// __MAIN__
export const r_logBook = (state=initialState, action) => {
console.log('action.payload: ', action.payload)
// -- //
    switch(action.type) {
        case LOG_COMPLETEDBOOK_START:
            return {
                ...state,
                is_adding: true,
                error: ''
            } 
        case LOG_COMPLETEDBOOK_SUCCESS:
            return {
                ...state,
                is_adding: false,

                lastAdded: action.payload,

                error: ''
            } 
        case LOG_COMPLETEDBOOK_FAILURE:
            return {
                ...state,
                is_adding: false,
                error: action.payload
            } 
        // - DEFAULT - //
        default:
            return state;
    }
}