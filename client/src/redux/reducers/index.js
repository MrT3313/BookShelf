// REDUX
import { combineReducers } from 'redux'

// REDUCERS
import { r_login } from './r_login.js'
import { r_lists } from './r_lists.js'

// __MAIN__
export const rootReducer = combineReducers({
    r_login,
    r_lists,
})