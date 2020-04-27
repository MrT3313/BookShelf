import {
    GET_REVIEWS_START, GET_REVIEWS_SUCCESS, GET_REVIEWS_FAILURE
} from '../actions/GET/a_getReviews.js'

import {
    ADD_REVIEW_START, ADD_REVIEW_SUCCESS, ADD_REVIEW_FAILURE
} from '../actions/POST/a_addReview.js'

import {
    UPDATE_REVIEW_START, UPDATE_REVIEW_SUCCESS, UPDATE_REVIEW_FAILURE
} from '../actions/PUT/a_updateReview.js'

// INITIAL STATE
const initialState = {
    is_fetching: false,
    is_fetchingUserData: false,
    is_adding: false,

    USER_reviews: [],
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
                
                DB_reviews: [...action.payload.allUsers],
                USER_reviews: [...action.payload.singleUser],
                
                is_fetching: false,
                error: ''
            }

        case GET_REVIEWS_FAILURE:
            return {
                ...state,
                error: action.payload,
                is_fetching: false,
            }

        // // - 2 - // get SINGLE USERS reviews
        // case GET_USERREVIEWS_START:
        //     return {
        //         ...state,
        //         is_fetchingUserData: true,
        //         error: '',
        //     }
        // case GET_USERREVIEWS_SUCCESS:
        //     return {
        //         ...state,

        //         USER_reviews: [...action.payload],
        //         is_fetchingUserData: false,

        //         error: '',
        //     }
        // case GET_USERREVIEWS_FAILURE:
        //     return {
        //         ...state,
        //         error: action.payload,
        //         is_fetchingUserData: false,
        //     }

        // - 3 - // Add Review
        case ADD_REVIEW_START:
            return {
                ...state,
                is_adding: true,
                error: ''
            }
        case ADD_REVIEW_SUCCESS:
            return {
                ...state,

                DB_reviews: [...action.payload.allUsers],
                USER_reviews: [...action.payload.singleUser],
                
                is_adding: false,
                error: ''
            }
        case ADD_REVIEW_FAILURE:
            return {
                ...state,
                is_adding: false,
                error: ''
            }
        // - 4 - // Update Review
        case UPDATE_REVIEW_START:
            return {
                ...state,
                is_updating: true,
                error: ''
            }
        case UPDATE_REVIEW_SUCCESS:
            return {
                ...state,
                is_updating: false,

                DB_reviews: [...action.payload.allUsers],
                USER_reviews: [...action.payload.singleUser],

                error: ''
            }
        case UPDATE_REVIEW_FAILURE:
            return {
                ...state,
                is_updating: false,
                error: action.payload
            }
        // - DEFAULT - //
        default:
            return state;
    }
}