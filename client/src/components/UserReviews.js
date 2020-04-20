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
import RankCard from './RankCard.js'

// ACTION CREATORS

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: '1',
        padding: '20px',
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '5px',

        width: '50%',
    },
    paperRoot: {
        display: 'flex',
        flexGrow: '1',

        justifyContent: 'center',
    },
    // -- // 
    reviewRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        padding: '10px',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '20px',
    },
    reviewContent: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10px',
    },
    // -- // 
    noReviewRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '10px',
    }, 
    // -- // 
    addButton: {
        fontSize: '40px',
        color: theme.palette.primary.main,

        marginTop: '10px',
    },
    
}))

// -B- COMPONENT
function UserReviews(props) {
// console.log('NEW USER REVIEW PROPS: ', props)
const { 
    selectedReviews,
    toggleAdd,
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // Return 
    return (
        <div className={classes.root}>
            {selectedReviews.length !== 0 &&
                <Paper className={classes.paperRoot}>
                    <Card className={classes.reviewRoot}>
                        <div className={classes.title}>
                            {selectedReviews[0].title}
                        </div>
                        <div className={classes.author}>
                            {`By: ${selectedReviews[0].author}`}
                        </div>
                        <div className={classes.reviewContent}>
                            My Review: 
                            <div style={{padding: '10px 20px 20px 20px', marginTop: '10px'}}>
                                {selectedReviews[0].review}
                            </div>
                        </div>
                    </Card>
                    <RankCard rank={selectedReviews[0].rank}/>
                </Paper>
            }


            {selectedReviews.length === 0 &&
                <Paper className={classes.paperRoot}>
                    <Card className={classes.noReviewRoot}>
                        <div>
                            Add a review for this book!
                        </div>
                        <AddBoxIcon
                            id='review'
                            onClick={toggleAdd}
                            className={classes.addButton}
                        />
                    </Card>
                </Paper>
            }
        </div>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {

    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        
    }
)(UserReviews)