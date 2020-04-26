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
// import { a_updateReview } from '../redux/actions/PUT/a_updateReview.js'
// import { a_updateRank } from '../redux/actions/PUT/a_updateRank.js'
// FUNCTIONS
import decode from '../utils/decode_JWT.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    paperRoot: {
        display: 'flex',
        flexGrow: '1',

        padding: '10px',
        backgroundColor: theme.palette.secondary.main, 

        justifyContent: 'center',
    },
    review__left:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        flexGrow: '1',

        padding: '5px',
        backgroundColor: '#FFFFFF', 
        borderRadius: '5px 0 0 5px'
    },
    review__right:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        
        width: '40%',
        // height: '100%',

        padding: '5px',
        backgroundColor: '#FFFFFF',
        borderRadius: '0 5px 5px 0'
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
        fontSize: '30px',
        color: theme.palette.primary.main, 
    },
    buttons: {
        display: 'flex',
        width: '100%',
        height: '100%',
        marginBottom: '5px',
    },
}))

// -B- COMPONENT
function UserReviews(props) {
// console.log('NEW USER REVIEW PROPS: ', props)
const { 
    selectedUserLogIndex, selectedRanks, selectedReviews,
    a_updateReview,
    token,
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [is_editing, setIsEditing] = useState(false)
    const [updatedRank, setUpdatedRank] = useState(false)
    const [updatedReview, setUpdatedReview] = useState(false)

    // Methods
    const updateRank = () => {
    }
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
                    <div className={classes.content}>
                        <ReviewCard 
                            selectedReviews={selectedReviews}
                            setUpdatedReview={setUpdatedReview}
                        />
                    </div>
                }
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
                {selectedRanks.length !== 0 &&
                    <div className={classes.content}>
                        <RankCard 
                            selectedRanks={selectedRanks}
                            setUpdatedRank={setUpdatedRank}
                            updateRank={updateRank}
                        />
                    </div>
                }
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
        token: state.r_auth.token,
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        // a_updateReview, a_updateRank
    }
)(UserReviews)