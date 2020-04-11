// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

// MATERIAL UI
// -1- Components
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import AddBoxIcon from '@material-ui/icons/AddBox';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS

// ACTION CREATORS

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    noSelection: {
        display: 'flex',
        flexGrow: '1',

        justifyContent: 'center',
        padding: '20px',
        backgroundColor: theme.palette.secondary.main,
    },
    noSelectionCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        flexGrow: '1',
        padding: '10px',
    },
    addButton: {
        display: 'flex',

        fontSize: '40px',
        color: theme.palette.primary.main,

        marginTop: '20px',
    },
    // -- // 
    review: {
        display: 'flex',
        flexGrow: '1',

        padding: '20px',
        backgroundColor: theme.palette.secondary.main,
    },
    reviewCard: {
        display: 'flex',
        flexDirection: 'column',

        flexGrow: '1',
        padding: '10px',
    },
    // -- // 
    noReview: {
        display: 'flex',
        flexGrow: '1',

        padding: '20px',
        backgroundColor: theme.palette.secondary.main,
    },
    noReviewCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        flexGrow: '1',
        padding: '10px',
    },
    // -- // 
    label: {
        fontWeight: 'bold'
    },
    bookReview: {
        marginTop: '10px',
    },
    reviewContent: {
        padding: '20px',
    },
}))

// -B- COMPONENT
function UserReviews(props) {
// console.log('USER REVIEW PROPS: ',props)
const { 
    UserLogIndex,                       // Passed Props
    is_adding, setIs_adding, toggleAdd, // Passed Props
    userLogs, userReviews,              // Connect 
} = props
// -- // 
    // Styles
    const classes = useStyles({})

    // State
    const [filtered_userLogs, setUserLogs] = useState([])
    const [filtered_userReviews, setUserReviews] = useState([])

    // UseEffect
    useEffect(() => {
        let filtered = []
        console.log('!!!!!',UserLogIndex)
        for (let index of UserLogIndex) {
            console.log(index)
            filtered.push(userLogs[index])
        }
        console.log('Filtered Logs',filtered)
        setUserLogs(filtered)
    }, [UserLogIndex])

    useEffect(() => {
        let filtered = userReviews.filter(review => review.bookID === filtered_userLogs[0].bookID)

        console.log('Filtered Reviews', filtered)
        setUserReviews(filtered)

    }, [filtered_userLogs])

    // useEffect(() => {
    //     console.log('REVIEWS CHANGED')
    //     console.log(userReviews)
    //     console.log(filtered_userLogs)

    //     if (userReviews.length !== 0) {
    //         let filtered = userReviews.filter(review => review.bookID === filtered_userLogs[0].bookID)
    //         console.log('Filtered Reviews', filtered)
    //         setUserReviews(filtered)

    //     }
    // }, [userReviews])

    // Return
    if ( UserLogIndex.length !== 0 ) {
        if (filtered_userReviews.length !== 0) {
            return (
                <Paper className={`${classes.review}`}>
                    <Card className={classes.reviewCard}>
                        <div className={classes.label}>
                            <div className={classes.title}>
                                {`${filtered_userReviews[0].title}  `}
                            </div>
                            <div>
                                By: {filtered_userReviews[0].author}
                            </div>
                        </div>
                        <div className={classes.bookReview}>
                            My Book Review:
                            <div className={classes.reviewContent}>
                                {filtered_userReviews[0].review}
                            </div>
                        </div>
                    </Card>
                </Paper>
            )
        } else {
            return (
                <Paper className={classes.noReview}>
                    <Card className={classes.noReviewCard}>
                        <div className={classes.label}>
                            Add a review for this book!
                        </div>
                        <AddBoxIcon
                            id='review'
                            onClick={toggleAdd}
                            className={classes.addButton}
                        />
                    </Card>
                </Paper>
            )
        }
    } else {
        return (
            <Paper className={`${classes.noSelection}`}>
                <Card className={classes.noSelectionCard}>
                    <div className={classes.label}>
                        Select From Logged Books
                    </div>
                </Card>
            </Paper>
        )
    }
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        userLogs: state.r_loggedBooks.userLoggedBooks, 
        userReviews: state.r_reviews.USER_reviews,
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        
    }
)(UserReviews)