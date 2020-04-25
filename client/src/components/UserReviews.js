// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

// MATERIAL UI
// -1- Components
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


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
    paperRoot: {
        display: 'flex',
        flexGrow: '1',

        justifyContent: 'center',
    },
    review__left:{
        display: 'flex',
        flexGrow: '1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    review__right:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '25%',
    },
}))

// -B- COMPONENT
function UserReviews(props) {
// console.log('NEW USER REVIEW PROPS: ', props)
const { 
    selectedUserLogIndex, selectedRanks, selectedReviews,
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State

    // Methods

    // Return 
    if (selectedUserLogIndex.length === 0){
        return (
            <div>
                <div>Select Log Entry!</div>
            </div>
        )
    } else {
        return (
        <>
            <div className={classes.review__left}>
                {selectedReviews.length !== 0 &&
                    <div>WE HAVE REVIEW</div>
                }
                {selectedReviews.length === 0 &&
                    <div>ADD REVIEW</div>
                }
            </div>
            <div className={classes.review__right}>
                {selectedRanks.length !== 0 &&
                    <div>WE HAVE RANK</div>
                }
                {selectedRanks.length === 0 &&
                    <div>ADD RANK</div>
                }
            </div>
        </>
        )
    }

    // if (selectedUserLogIndex.length === 0){
    //     return (
    //         <Paper className={classes.paperRoot}>
    //                 <div className={classes.review__left}>
    //                         <div>Select Log Entry!</div>
    //                 </div>
    //         </Paper>
    //     )
    // } else if (selectedUserLogIndex.length !== 0 && selectedReviews.length !== 0) {
    //     <div>THERE IS A REVIEW</div>
    // } else if (selectedUserLogIndex.length !== 0 && selectedRanks.length !== 0) {
    //     <div>THERE IS A</div>
    // }
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