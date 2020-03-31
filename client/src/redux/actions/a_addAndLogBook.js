// IMPORTS
import axios from 'axios'

// URLS
import { LOCAL_BE_base_URL } from '../../utils'
import { LIVE_BE_base_URL } from '../../utils'

// IMPORT Action Types
// - 1 - //
    import {
        ADD_BOOK_START, ADD_BOOK_SUCCESS, ADD_BOOK_FAILURE
    } from '../actions/a_addBook.js'
// - 2 - //
    import {
        LOG_COMPLETEDBOOK_START, LOG_COMPLETEDBOOK_SUCCESS, LOG_COMPLETEDBOOK_FAILURE
    } from '../actions/a_logCompletedBook.js'

// IMPORT Action Creators
// - 1 - //
    import { a_addBook } from '../actions/a_addBook.js'
// - 2 - //
    import { a_logCompletedBook } from '../actions/a_logCompletedBook.js'

// __MAIN__
    // Action Creator
    export const a_addAndLogBook = (newBook, userID) => {
    console.log('INSIDE: a_addAndLogBook action creator')
    // https://github.com/reduxjs/redux/issues/1676
    // -- //
        return (dispatch, getState) => {
            return (
                dispatch(a_addBook(newBook))        // Dispatch Whole Action Creator
                    .then(() => {
                        const updatedState = getState()
                        // console.log(updatedState)
                        // console.log(updatedState.r_books)
                        // console.log(updatedState.r_books.DB_books)
                        // console.log(updatedState.r_books.DB_books[
                        //     updatedState.r_books.DB_books.length - 1
                        // ])
                        const newBook = updatedState.r_books.DB_books[
                            updatedState.r_books.DB_books.length - 1
                        ]
                        console.log(newBook)
                        // -- // 

                        return dispatch(a_logCompletedBook(userID, newBook.id))
                    })
            )

        }
    }
