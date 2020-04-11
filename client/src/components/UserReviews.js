// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

// MATERIAL UI
// -1- Components
import Paper from '@material-ui/core/Paper';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS

// ACTION CREATORS

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES

// -B- COMPONENT
function UserReviews(props) {
// console.log('USER REVIEW PROPS: ',props)
const { 
    UserLogIndex,        // Passed Props
    userLogs,            // Connect 
} = props
// -- // 
    // Styles
    // const classes = useStyles({})

    // State
    const [data, setData] = useState([])

    // UseEffect
    useEffect(() => {
        let filtered = []
        for (const index in UserLogIndex) {
            console.log(index)
            filtered.push(userLogs[index])
        }
        console.log(filtered)
        setData(filtered)
    }, [UserLogIndex])

    // Return
    if ( UserLogIndex.length !== 0 ) {
        
        return (
            <Paper>
                You have not reviewed this book yet!
            </Paper>
        )
    } else {
        return (
            <Paper>
                Select From Logged Books
            </Paper>
        )
    }
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        userLogs: state.r_loggedBooks.userLoggedBooks, 
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        
    }
)(UserReviews)