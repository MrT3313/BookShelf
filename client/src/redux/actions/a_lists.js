
// IMPORTS
import axios from 'axios'

// URLS
import { NYT_booksAPI_baseURL } from '../../utils'

// __MAIN__
    // Create Action Types
    export const GET_BOOKLISTS_START = "GET_BOOKLISTS_START"
    export const GET_BOOKLISTS_SUCCESS = "GET_BOOKLISTS_SUCCESS"
    export const GET_BOOKLISTS_FAILURE = "GET_BOOKLISTS_FAILURE"

    // Action
    export const a_GETbook_lists = () => {
    console.log('INSIDE: a_GETbook_lists action creator')
    console.log(process.env.REACT_APP__NYT_booksAPI_key)
    console.log(NYT_booksAPI_baseURL)


        // Send First Action --> START 
        return dispatch => {
            dispatch({ type: GET_BOOKLISTS_START});

            axios
                .get(
                    // PT_1 == endpoint
                    `${NYT_booksAPI_baseURL}names.json`, 
                    // PT_2 == request data
                    // null, 
                    // Query Parameters
                    { params: {
                        'api-key': process.env.REACT_APP__NYT_booksAPI_key
                    }}
                )
                .then(lists => {
                    console.log(lists)
                    dispatch({
                        type: GET_BOOKLISTS_SUCCESS,
                        payload: {
                            copyright: lists.data.copyright,
                            data: lists.data.results,
                        }
                    })
                })
                .catch( err => {
                    console.log(err)
                    dispatch({
                        type: GET_BOOKLISTS_FAILURE,
                        payload: err
                    })
                })
        }
    }
    