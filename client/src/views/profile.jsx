// IMPORTS
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

// MATERIAL UI
// -1- Styles
import { makeStyles } from '@material-ui/core/styles';
// -2- Components

// COMPONENTS
import Menu_AppBar from '../components/AppBar.js'
import AddPannel from '../components/AddPannel.js'

import UserLogTable from '../components/UserLogTable.js'
import UserReviews from '../components/UserReviews.js'

// Action Creators
import { a_getUserLoggedBooks } from '../redux/actions/GET/a_getUserLoggedBooks.js'
import { a_getUserReviews } from '../redux/actions/GET/a_getUserReviews.js'

// FUNCTIONS
import decode from '../utils/decode_JWT.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES

// -B- COMPONENT
function Profile(props) {
const { 
    token, 
    userLogs,
    a_getUserLoggedBooks, a_getUserReviews 
} = props
// -- //
    // State
    const [selectedUserLogIndex, setUserLogIndex] = useState([])

    // UseEffect
    useEffect(() => {
        // console.log('USE EFFECT IN PROFILE')
        let userID = undefined
        // -- //
            // get userID
            const decodedToken = decode(token)
            // console.log(decodedToken)
            userID = decodedToken.user_ID
            // console.log(userID)
    
            // Call  Action Creators
            async function updateData() {
                await a_getUserLoggedBooks(userID)
                await a_getUserReviews(userID)
            }
            updateData()
    }, [])

    // Return
    return (
        <>
            <Menu_AppBar />
            <AddPannel />
            {/* {console.log(userLogs)}
            {console.log(userLogs.length)} */}
            {userLogs.length !== 0 &&
                // <EnhancedTable />
                <UserLogTable setUserLogIndex={setUserLogIndex}/>
            }
            <UserReviews UserLogIndex={selectedUserLogIndex}/>
        </>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        token: state.r_auth.token,
        
        fetchingUserLogs: state.r_loggedBooks.is_fetchingUserData,
        fetchingUserReviews: state.r_reviews.is_fetchingUserData,

        userLogs: state.r_loggedBooks.userLoggedBooks,
    }
}
        
// CONNECT & EXPORT
export default connect(
    mstp,
    {
        a_getUserLoggedBooks,
        a_getUserReviews,
    }
)(Profile)