// IMPORTS
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles'

// COMPONENTS

// ACTION CREATORS

// UTILS


// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    ReviewCard__root: { 
        display: 'flex',
        alignItems: 'center',

        width: '100%',
        marginLeft: '20px',
    },
    editReview: {
        display: 'flex',
        flexDirection: 'column',
    }, 
    editIcon: {
        fontSize: '30px',
        color: theme.palette.primary.main, 
    },
    addButtons: {
        display: 'flex',
        justifyContent: 'flex-end',

        width: '100%',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',

        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,

        marginLeft: '20px',
    },
}))

// -B- COMPONENT
function ReviewCard(props) {
console.log('REVIEW CARD PROPS: ', props)
const { 
    selectedReviews,
    setUpdatedReview,
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [showEditIcon, SetShowEditIcong] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    // UseEffect

    // Methods
    const stopEditing = () => {
        SetShowEditIcong(false)
        setIsEditing(false)
    }

    // Return
    return (
        <div className={classes.ReviewCard__root}
            onMouseEnter={() => SetShowEditIcong(true)}
            // onMouseLeave={stopEditing}
        >
            {showEditIcon && !isEditing &&
                <EditIcon 
                    className={classes.editIcon}
                    onClick={() => setIsEditing(!isEditing)}
                />
            }
            {!showEditIcon && !isEditing &&
                selectedReviews[0].review
            }                
            {showEditIcon && isEditing &&
                <div className={classes.editReview}>
                    <TextField
                        variant="outlined"
                        multiline
                        rows="5"
                        defaultValue={selectedReviews[0].review}
                        id="review" label="Update Review" name="review"
                        // onChange={e => setReview(e.target.value)}
                        margin="normal"
                        fullWidth
                    />
                    <div className={classes.addButtons}>
                        <Button
                            onClick={stopEditing}
                            className={classes.editCancel}
                            style={{color: 'red'}}
                        >Cancel</Button>
                        <Button
                            // onClick={logReview}
                            className={`${classes.editSubmit} ${classes.button}`}
                            color="secondary"
                        >Update Review</Button>
                    </div>
                </div>
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
)(ReviewCard)