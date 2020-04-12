// ACTION TYPES
import {
    GET_SPECIFICLIST_START, GET_SPECIFICLIST_SUCCESS, GET_SPECIFICLIST_FAILURE,
    
} from '../actions/GET/a_getSpecificList.js'

// INITIAL STATE
const initialState = {
    is_fetching: false,
    listName: 'Combined Print and E-Book Nonfiction',
    searchDate: 'current',
    listData: [],
    error: '',
}

// __MAIN__
export const r_specificList = (state=initialState, action) => {
// console.log('action.payload: ', action.payload)
// -- //
    switch(action.type) {
        // -1- //
        case GET_SPECIFICLIST_START:
            return {
                ...state,
                listName: action.payload,
                is_fetching: true,
                error: '',
            }
        case GET_SPECIFICLIST_SUCCESS:
            return {
                ...state,

                listData: [...action.payload],                    
                is_fetching: false,

                error: '',
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