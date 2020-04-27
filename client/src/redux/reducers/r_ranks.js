import {
    GET_USERRANKS_START, GET_USERRANKS_SUCCESS, GET_USERRANKS_FAILURE
} from '../actions/GET/a_getUserRanks.js'

import {
    GET_RANKS_START, GET_RANKS_SUCCESS, GET_RANKS_FAILURE
} from '../actions/GET/a_getRanks.js'

import { 
    UPDATE_RANK_START, UPDATE_RANK_SUCCESS, UPDATE_RANK_FAILURE
} from '../actions/PUT/a_updateRank.js'

// INITIAL STATE
const initialState = {
    is_fetching: false,
    if_fetchingUserData: false,
    is_adding: false,
    is_updating: false, 

    USER_ranks: [],
    DB_ranks: [],

    error: ''
}

// __MAIN__
export const r_ranks = (state=initialState, action) => {
// console.log('action.payload: ', action.payload)
// -- //
    switch(action.type) {
        // - 1 - // Get All Ranks
        case GET_RANKS_START: 
            return {
                ...state, 
                is_fetchingData : true, 

                error: ''
            }
        case GET_RANKS_SUCCESS: 
            return {
                ...state, 
                is_fetchingData : false, 

                DB_ranks: [...action.payload],

                error: ''
            }
        case GET_RANKS_FAILURE: 
            return {
                ...state, 
                is_fetchingData : false, 

                error: ''
            }

        // - 2 - // Get User Ranks
        case GET_USERRANKS_START:
            return {
                ...state,
                is_fetchingUserData: true,

                error: ''
            }
        case GET_USERRANKS_SUCCESS:
            return {
                ...state,
                is_fetchingUserData: false,

                USER_ranks: [...action.payload],

                error: ''
            }
        case GET_USERRANKS_FAILURE:
            return {
                ...state,
                is_fetchingUserData: false,

                error: action.payload
            }
        // - 3 - // Update Rank
        case UPDATE_RANK_START:
            return {
                ...state,
                is_updating: false,
                error: ''
            }
        case UPDATE_RANK_SUCCESS:
            return {
                ...state,
                is_updating: false,

                USER_ranks: [...action.payload.singleUser],
                DB_ranks: [...action.payload.allUsers],

                error: ''
            }
        case UPDATE_RANK_FAILURE:
            return {
                ...state,
                is_updating: false,
                error: ''
            }
        // - DEFAULT - //
        default:
            return state;
    }
}