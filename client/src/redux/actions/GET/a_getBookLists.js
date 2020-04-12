// IMPORTS
import axios from 'axios'

// URLS
import { NYT_booksAPI_baseURL } from '../../../utils'

// __MAIN__    
    // Action Types:
    export const GET_BOOKLISTS_START = "GET_BOOKLISTS_START"
    export const GET_BOOKLISTS_SUCCESS = "GET_BOOKLISTS_SUCCESS"
    export const GET_BOOKLISTS_FAILURE = "GET_BOOKLISTS_FAILURE"
    
    // Action Creator:
    export const a_getBookLists = () => {
    // console.log('INSIDE: a_GETbook_lists action creator')
    // -- //
        // Send First Action --> START 
        return dispatch => {
            dispatch({ type: GET_BOOKLISTS_START});

            // Make Axios Request
            axios
                .get(
                    `${NYT_booksAPI_baseURL}names.json`, 
                    { params: {
                        'api-key': process.env.REACT_APP__NYT_booksAPI_key
                    }}
                )
                .then(lists => {
                // console.log(lists)
                // -- //
                    dispatch({
                        type: GET_BOOKLISTS_SUCCESS,
                        payload: lists.data.results
                    })
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    dispatch({
                        type: GET_BOOKLISTS_FAILURE,
                        payload: err
                    })
                })
        }
    }