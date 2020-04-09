import {
    GET_REVIEWS_START, GET_REVIEWS_SUCCESS, GET_REVIEWS_FAILURE
} from '../actions/GET/a_getReviews.js'
import {
    ADD_REVIEW_START, ADD_REVIEW_SUCCESS, ADD_REVIEW_FAILURE
} from '../actions/POST/a_addReview.js'

// INITIAL STATE
const initialState = {
    is_fetching: false,
    is_adding: false,

    DB_reviews: [],
    error: '',
}

// __MAIN__
export const r_reviews = (state=initialState, action) => {
// console.log('action.payload: ', action.payload)
// -- //
    switch(action.type) {
        // - 1 - // Get All Reviews
        case GET_REVIEWS_START:
            return {
                ...state,
                is_fetching: true,
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
        // - 2 - // Add Review
        case ADD_REVIEW_START:
            return {
                ...state,
                is_adding: true,
                error: ''
            }
        case ADD_REVIEW_SUCCESS:
            return {
                ...state,

                DB_reviews: action.payload,
                is_adding: false,
                error: ''
            }
        case ADD_REVIEW_FAILURE:
            return {
                ...state,
                is_adding: false,
                error: ''
            }
        // - DEFAULT - //
        default:
            return state;
    }
}