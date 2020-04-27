// IMPORTS
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

// MATERIAL UI
// -1- Styles
import { makeStyles } from '@material-ui/core/styles';
// -2- Components

// COMPONENTS
import Menu_AppBar from '../components/appBar/AppBar.js'
import UserLogTable from '../components/profile/userLogsTable/UserLogTable.js'
import ExploreSelectedLogID from '../components/profile/exploreSelectedLogID'

// Action Creators

// FUNCTIONS
import decode from '../utils/decode_JWT.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    logExplorer: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px',
    }

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
    const [selected_logID, setSelected_logID] = useState(false)

    // Methods

    // Return
    return (
        <div className={classes.root}>
            <Menu_AppBar />
            <div className={classes.logExplorer}>
                <UserLogTable 
                    setSelected_logID={setSelected_logID}
                />
                <ExploreSelectedLogID 
                    selected_logID={selected_logID}
                /> 
            </div>
        </div>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        token: state.r_auth.token,
        userLogs: state.r_loggedBooks.USER_LoggedBooks,
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