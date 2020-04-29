// IMPORTS
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

// MATERIAL UI
// -1- Styles
import { makeStyles } from '@material-ui/core/styles';
// -2- Components
import AddBoxIcon from '@material-ui/icons/AddBox';

// COMPONENTS
import Menu_AppBar from '../components/appBar/AppBar.js'
import UserLogTable from '../components/profile/userLogsTable/UserLogTable.js'
import ExploreSelectedLogID from '../components/profile/exploreSelectedLogID'
import AddBook from '../components/profile/AddBook'

// Action Creators

// FUNCTIONS
import decode from '../utils/decode_JWT.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    profile__root: {
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
    const [adding, setIsAdding] = useState(false)

    // Methods

    // Return
    return (
        <div className={classes.profile__root}>
            <Menu_AppBar />
            {adding &&
                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <AddBook 
                        setIsAdding={setIsAdding}
                    />
                </div>
            }
            <div className={classes.logExplorer}>
                <UserLogTable 
                    setSelected_logID={setSelected_logID}
                />
                {/* <div style={{display: 'flex', alignItems: 'center'}}>
                    <AddBoxIcon onClick={() => setIsAdding(true)}/>
                </div> */}
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