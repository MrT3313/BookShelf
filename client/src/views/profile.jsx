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
import EnhancedTable from '../components/loggedBooksTable.js'

// Action Creators
import { a_getUserLoggedBooks } from '../redux/actions/GET/a_getUserLoggedBooks.js'
import { a_getUserReviews } from '../redux/actions/GET/a_getUserReviews.js'

// FUNCTIONS
import decode from '../utils/decode_JWT.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    root: {
        
    }
}))

// -B- COMPONENT
function Profile(props) {
const { 
    token, 
    fetchingUserLogs, fetchingUserReviews,
    a_getUserLoggedBooks, a_getUserReviews 
} = props
// -- //
    // Use State
    const [fetching, setFetching ] = useState(true)

    // UseEffect
    useEffect(() => {
        console.log('USE EFFECT IN PROFILE')
        console.log(fetching)
        let userID = undefined
        // -- //
            // get userID
                const decodedToken = decode(token)
                // console.log(decodedToken)
                userID = decodedToken.user_ID
                // console.log(userID)
    
            // Call  Action Creators
        a_getUserLoggedBooks(userID)
        console.log('FETCHING UPDATE',fetching)
        a_getUserReviews(userID)
        console.log('FETCHING UPDATE',fetching)
    }, [])

    useEffect(() => {
        console.log('FETCHING USE EFFECT IN PROFIE')
        console.log(fetchingUserLogs, fetchingUserReviews)
        if (fetchingUserLogs === false && fetchingUserReviews === false) {
            setFetching(false)
        }
    }, [fetchingUserLogs, fetchingUserReviews])

    // Return
    return (
        <>
            <Menu_AppBar />
            <AddPannel />
            {!fetching &&
                <EnhancedTable />
            }
        </>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        token: state.r_auth.token,
        fetchingUserLogs: state.r_loggedBooks.is_fetchingUserData,
        fetchingUserReviews: state.r_reviews.is_fetchingUserData,
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