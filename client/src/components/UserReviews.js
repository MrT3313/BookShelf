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
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        flexGrow: '1',
    },
    review__right:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        
        width: '25%',
    },
    title: {
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',

        width: '100%',
        height: '100%',
        alignItems: 'space-between',
    },
    icons: {
        fontSize: '30px'
    },
    buttons: {
        display: 'flex',
        width: '100%',
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
                <div className={classes.content}>
                    {selectedReviews.length !== 0 &&
                        <ReviewCard 
                            setIsEditing={setIsEditing}
                            selectedReviews={selectedReviews}
                            setUpdatedReview={setUpdatedReview}
                        />
                    }
                </div>
                <div className={classes.buttons} style={{justifyContent: 'flex-start', marginLeft: '20px'}}>
                    {selectedReviews.length === 0 &&
                        <AddBoxIcon className={classes.icons}/>
                    }
                </div>
            </div>
            <div className={classes.review__right}>
                <div className={classes.title}>
                    My Rank:
                </div>
                <div className={classes.content}>
                    {selectedRanks.length !== 0 &&
                        <RankCard 
                            setIsEditing={setIsEditing} 
                            selectedRanks={selectedRanks}
                            setUpdatedRank={setUpdatedRank}
                        />
                    }
                </div>
                <div className={classes.buttons} style={{justifyContent: 'center'}}>
                    {selectedRanks.length === 0 &&
                        <AddBoxIcon className={classes.icons}/>
                    }
                </div>
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