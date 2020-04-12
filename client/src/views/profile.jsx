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
import NewUserReviews from '../components/newUserReview.js'

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
        display: 'flex',
        flexDirection: 'column',
    },
    profile__TOP: {
        display: 'flex',
        flexDirection: 'column',
    },
    profile__BOTTOM: {
        display: 'flex',

        justifyContent: 'space-between',
        alignItems: 'center',

        padding: '20px',
    }
}))


// -B- COMPONENT
function Profile(props) {
const { 
    token, 
    userLogs, userReviews,
    a_getUserLoggedBooks, a_getUserReviews 
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [selectedUserLogIndex, setUserLogIndex] = useState([])
    const [selectedReviews, setSelectedReviews] = useState([])
    const [is_adding, setIs_adding] = useState(false)

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

    useEffect(() => {
        console.log(userReviews)
        console.log(userLogs)

        let filtered = []

        if (selectedUserLogIndex.length > 0) {
            const logIndex = selectedUserLogIndex[0]
            console.log(logIndex)
            
            filtered = userReviews.filter(review => review.bookID === userLogs[logIndex].bookID)
            console.log(filtered)
        }

        setSelectedReviews(filtered)
    }, [selectedUserLogIndex, userReviews])

    // useEffect(() => {
    //     console.log('Users or Reviews Update')
    //     console.log(userLogs)
    //     console.log(userReviews)

    //     if (userLogs.length !== 0) {
    //         const filtered = userLogs.filter(item => item.id === userID )

    //     }


    // }, [userLogs, userReviews,])

    // Methods
    const toggleAdd = e => {
        // console.log(e.currentTarget.id)
        if (is_adding === e.currentTarget.id) {
            setIs_adding(false)
        // }
        // else if (is_adding !== false) {
        //     // Close toggle
        //     setIs_adding(false)
        } else {
            // Set toggle to current click
            setIs_adding(e.currentTarget.id)
        }
    }

    // Return
    return (
        <div className={classes.root}>
            <div className={classes.profile__TOP}>
                <Menu_AppBar />
                <AddPannel 
                    is_adding={is_adding}
                    setIs_adding={setIs_adding}
                    toggleAdd={toggleAdd}
                />
            </div>
            <div className={classes.profile__BOTTOM}>
                {userLogs.length !== 0 &&
                    // <EnhancedTable />
                    <UserLogTable setUserLogIndex={setUserLogIndex}/>
                }
                <div style={{width: '20px'}}></div>
                {/* <UserReviews
                    UserLogIndex={selectedUserLogIndex}
                    
                    is_adding={is_adding}
                    setIs_adding={setIs_adding}
                    toggleAdd={toggleAdd}
                /> */}
                <NewUserReviews 
                    selectedReviews={selectedReviews}
                    toggleAdd={toggleAdd}
                />
            </div>
        </div>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        token: state.r_auth.token,
        
        fetchingUserLogs: state.r_loggedBooks.is_fetchingUserData,
        fetchingUserReviews: state.r_reviews.is_fetchingUserData,

        userLogs: state.r_loggedBooks.userLoggedBooks,
        userReviews: state.r_reviews.USER_reviews,
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