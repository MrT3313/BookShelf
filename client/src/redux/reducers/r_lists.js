// IMPORTS

// ACTION TYPES
import {
    GET_BOOKLISTS_START, GET_BOOKLISTS_SUCCESS, GET_BOOKLISTS_FAILURE,
    GET_SPECIFICLIST_START, GET_SPECIFICLIST_SUCCESS, GET_SPECIFICLIST_FAILURE
} from '../actions/a_lists.js'

// INITIAL STATE
const initialState = {
    is_fetching: false,
    list_names: [],
    current_list: [],
    error: '',
}

// __MAIN__
export const r_lists = (state=initialState, action) => {
console.log('action.payload: ', action.payload)
    
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
            
            // 2 - GET SPECIFIC LIST
            case GET_SPECIFICLIST_START:
                return {
                    ...state,
                    is_fetching: true,
                    error: '',
                }
            case GET_SPECIFICLIST_SUCCESS:
                return {
                    ...state,
                    is_fetching: false,
                    error: '',

                    current_list: action.payload                    
                }
            case GET_SPECIFICLIST_FAILURE:
                return {
                    ...state,
                    is_fetching: false,
                    error: action.payload,
                }

            // - DEFAULT - //
            default:
                return state;
        }

}