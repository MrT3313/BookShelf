// IMPORTS
import axios from 'axios'

// UTILS
import { LOCAL_BE_base_URL } from '../../../utils'
import { LIVE_BE_base_URL } from '../../../utils'

// __MAIN__
    // Action Types
    export const UPDATE_RANK_START = 'UPDATE_RANK_START'
    export const UPDATE_RANK_SUCCESS = 'UPDATE_RANK_SUCCESS'
    export const UPDATE_RANK_FAILURE = 'UPDATE_RANK_FAILURE'

    // Action Creator
    export const a_updateRank = (rankID, userID, updateData) => {
    // console.log('INSIDE: a_updateRank action creator')
    // -- //
        // Send First Action 
        return dispatch => {
            dispatch({type: UPDATE_RANK_START})
            let update_URL = ''

            // Which environment are we in?
            if (process.env.NODE_ENV === 'development') {
                update_URL = `${LOCAL_BE_base_URL}ranks/${rankID}`
            } else if (process.env.NODE_ENV === 'production') {
                update_URL = `${LIVE_BE_base_URL}ranks/${rankID}`
            }
            // console.log('URL USED')
            console.log(update_URL)
            console.log(updateData)

            // Make Axios Request
            axios  
                .put(
                    update_URL,
                    updateData
                )
                .then( updateResult => {
                console.log('Updated Rank Results: ', updateResult )
                // -- //
                    const userResults = updateResult.data.filter(item => item.userID == userID)
                    console.log(userResults)
                    
                    dispatch({
                        type: UPDATE_RANK_SUCCESS,
                        payload: {
                            allUsers: updateResult.data,
                            singleUser: userResults
                        }
                    })
                })
                .catch( err => {
                // console.log(err)
                // -- //
                    dispatch({
                        type: UPDATE_RANK_FAILURE,
                        payload: err
                    })
                })

        }
    }