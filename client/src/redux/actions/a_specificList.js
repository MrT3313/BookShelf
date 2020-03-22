// IMPORTS
import axios from 'axios'

// URLS
import { NYT_booksAPI_baseURL } from '../../utils'

// __MAIN__
    // Action Types:
    export const GET_SPECIFICLIST_START = "GET_SPECIFICLIST_START"
    export const GET_SPECIFICLIST_SUCCESS = "GET_SPECIFICLIST_SUCCESS"
    export const GET_SPECIFICLIST_FAILURE = "GET_SPECIFICLIST_FAILURE"

    // Action Creator:
    export const a_GETspecific_list = (date, list) => {
    // console.log('INSIDE: a_GETbook_lists action creator')
    // -- //
        // Send First Action --> START
        return dispatch => {
            dispatch({ type: GET_SPECIFICLIST_START, payload: list});
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
                    // console.log(data)
                    dispatch({
                        type: GET_SPECIFICLIST_SUCCESS,
                        payload: data.data.results.books,
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



    