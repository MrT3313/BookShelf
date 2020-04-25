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
import ReviewCard from './ReviewCard.js'

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
        flexDirection: 'column',
        flexGrow: '1',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    review__right:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '25%',
    },
    title: {
        fontWeight: 'bold',
        marginBottom: '10px',
    }
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
    const [is_editing, setIsEditing] = useState(false)
    const [updatedRank, setUpdatedRank] = useState()
    const [updatedReview, setUpdatedReview] = useState()

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
        <Paper className={classes.paperRoot}>
            <div className={classes.review__left}>
                <div className={classes.title}>
                    My Review:
                </div>
                {selectedReviews.length !== 0 &&
                    <ReviewCard 
                        setIsEditing={setIsEditing}
                        selectedReviews={selectedReviews}
                        setUpdatedReview={setUpdatedReview}
                    />
                }
                {selectedReviews.length === 0 &&
                    <AddBoxIcon />
                }
            </div>
            <div className={classes.review__right}>
                <div className={classes.title}>
                    My Rank:
                </div>
                {selectedRanks.length !== 0 &&
                    <RankCard 
                        setIsEditing={setIsEditing} 
                        selectedRanks={selectedRanks}
                        setUpdatedRank={setUpdatedRank}
                    />
                }
                {selectedRanks.length === 0 &&
                    <AddBoxIcon />
                }
            </div>
        </Paper>
        )
    }
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