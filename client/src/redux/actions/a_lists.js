
// IMPORTS
import axios from 'axios'

// URLS
import { NYT_booksAPI_baseURL } from '../../utils'

// __MAIN__
    // Action Types - 1:
    export const GET_BOOKLISTS_START = "GET_BOOKLISTS_START"
    export const GET_BOOKLISTS_SUCCESS = "GET_BOOKLISTS_SUCCESS"
    export const GET_BOOKLISTS_FAILURE = "GET_BOOKLISTS_FAILURE"
    
    // Action Types - 2:
    export const GET_SPECIFICLIST_START = "GET_SPECIFICLIST_START"
    export const GET_SPECIFICLIST_SUCCESS = "GET_SPECIFICLIST_SUCCESS"
    export const GET_SPECIFICLIST_FAILURE = "GET_SPECIFICLIST_FAILURE"

    // Action Creato - 1:
    export const a_GETbook_lists = () => {
    console.log('INSIDE: a_GETbook_lists action creator')

        // Send First Action --> START 
        return dispatch => {
            dispatch({ type: GET_BOOKLISTS_START});

            // TODO: create axios w/ query params utility
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
                        payload: lists.data.results
                        // payload: {
                        //     // copyright: lists.data.copyright,
                        //     data: lists.data.results,
                        // }
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

    // Action Creator - 2:
    export const a_GETspecific_list = (date, list) => {
    console.log('INSIDE: a_GETspecific_list')
    console.log(date)
    console.log(list)

        // Send First Action --> START
        return dispatch => {
            dispatch({ type: GET_SPECIFICLIST_START});
            axios
                .get(
                    // PT_1 == endpoint
                    `${NYT_booksAPI_baseURL}${date}/${list}`,  
                    // PT_2 == request data
                    // null, 
                    // Query Parameters
                    { params: {
                        'api-key': process.env.REACT_APP__NYT_booksAPI_key
                    }}
                )
                .then(data => {
                    console.log(data)
                    dispatch({
                        type: GET_SPECIFICLIST_SUCCESS,
                        payload: data.data.results,
                        // payload: {
                        //     copyright: data.data.copyright,
                        //     data: data.data.results,
                        // }
                    })
                })
                .catch( err => {
                    console.log(err)
                    dispatch({
                        type: GET_SPECIFICLIST_FAILURE,
                        payload: err,
                    })
                })
        }

    }



    