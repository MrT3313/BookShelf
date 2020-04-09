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
import UsersLoggedBooks from '../components/UsersLoggedBooks.js'

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
    a_getUserLoggedBooks, a_getUserReviews 
} = props
// -- //
    // UseEffect
    useEffect(() => {
        let userID = undefined
        // -- //
            // get userID
                const decodedToken = decode(token)
                // console.log(decodedToken)
                userID = decodedToken.user_ID
                // console.log(userID)
    
            // Call  Action Creators
        a_getUserLoggedBooks(userID)
        a_getUserReviews(userID)
    }, [])

    // Return
    return (
        <>
            <Menu_AppBar />
            <AddPannel />
            <UsersLoggedBooks />
        </>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        token: state.r_auth.token,
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