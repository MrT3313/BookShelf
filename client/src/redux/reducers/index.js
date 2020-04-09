// REDUX
import { combineReducers } from 'redux'

// REDUCERS
import { r_auth } from './r_auth.js'
import { r_lists } from './r_lists.js'
import { r_books } from './r_books.js'
import { r_specificList } from './r_specificList.js'
import { r_reviews } from './r_reviews.js'
import { r_loggedBooks } from './r_loggedBooks.js'

// __MAIN__
export const rootReducer = combineReducers({
    r_auth,
    r_lists,
    r_books,
    r_specificList,
    r_reviews,
    r_loggedBooks,
})