// IMPORTS
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

// MATERIAL UI
// -1- Styles
import { makeStyles } from '@material-ui/core/styles';
// -2- Components

// COMPONENTS
import Menu_AppBar from '../components/appBar/AppBar.js'


// Action Creators

// FUNCTIONS
import decode from '../utils/decode_JWT.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    root: {

    },

}))


// -B- COMPONENT
function Profile(props) {
const { 
    token, 
    userLogs, userReviews, userRanks,

} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State

    // Methods


    // Return
    return (
        <div className={classes.root}>
            <Menu_AppBar />
            <div className={classes.exploreUserLogs}>
                Explore My Logs!!
            </div>
        </div>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        token: state.r_auth.token,
        userLogs: state.r_loggedBooks.userLoggedBooks,
        userReviews: state.r_reviews.USER_reviews,
        userRanks: state.r_ranks.USER_ranks,
    }
}
        
// CONNECT & EXPORT
export default connect(
    mstp,
    {

    }
)(Profile)