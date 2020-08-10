// IMPORTS
// import axios from 'axios'

// IMPORT Action Creators
// - 1 - //
    import { a_addBook } from './a_addBook.js'
// - 2 - //
    import { a_logCompletedBook } from './a_addCompletedBook.js'

// __MAIN__
    // Action Creator
    export const a_addAndLogBook = (newBook, userID) => {
    // console.log('INSIDE: a_addAndLogBook action creator')
    // -- //
        return (dispatch, getState) => {
            return (
                dispatch(a_addBook(newBook))        // Dispatch Whole Action Creator
                    .then(() => {
                        const updatedState = getState()

                        const newBook = updatedState.r_books.DB_books[
                            updatedState.r_books.DB_books.length - 1
                        ]

                        return dispatch(a_logCompletedBook(userID, newBook.id))
                    })
            )

        }
    }
