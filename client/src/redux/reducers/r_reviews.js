import {
    GET_REVIEWS_START, GET_REVIEWS_SUCCESS, GET_REVIEWS_FAILURE
} from '../actions/a_getReviews'

// INITIAL STATE
const initialState = {
    is_fetching: false,
    is_adding: false,

    DB_reviews: [],
    error: '',
}

// __MAIN__
export const r_reviews = (state=initialState, action) => {
console.log('action.payload: ', action.payload)
// -- //
    switch(action.type) {
        // - 1 - // Get All Reviews
        case GET_REVIEWS_START:
            return {
                ...state,
                is_fetching: false,
                error: ''
            }

        case GET_REVIEWS_SUCCESS:
            return {
                ...state,
                is_fetching: false,

                DB_reviews: action.payload,

                error: ''
            }

        case GET_REVIEWS_FAILURE:
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