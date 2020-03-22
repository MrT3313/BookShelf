// ACTION TYPES
import {
    GET_BOOKLISTS_START, GET_BOOKLISTS_SUCCESS, GET_BOOKLISTS_FAILURE,
} from '../actions/a_lists.js'

// INITIAL STATE
const initialState = {
    is_fetching: false,
    list_names: [],
    error: '',
}

// __MAIN__
export const r_lists = (state=initialState, action) => {
// console.log('action.payload: ', action.payload)
// -- //
        switch(action.type) {
            // 1 - GET LISTS
            case GET_BOOKLISTS_START:
                return {
                    ...state,
                    is_fetching: true,
                    error: ''
                }
            case GET_BOOKLISTS_SUCCESS:
                return {
                    ...state,
                    is_fetching: false,
                    error: '',
    
                    // lists: action.payload
                    list_names: action.payload
                }
            case GET_BOOKLISTS_FAILURE :
                return {
                    ...state,
                    is_fetching: false,
                    error: action.payload
                }
            // - DEFAULT - //
            default:
                return state;
        }

}