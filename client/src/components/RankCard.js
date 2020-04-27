// IMPORTS
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
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
    RankCard__root: { 
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
    },
    editReview: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
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
function RankCard(props) {
console.log('RANK CARD PROPS: ', props)
const { 
    selectedRanks,
    setUpdatedRank,         // Update <UserReviews /> State
    updateRank,
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [showEditIcon, setShowEditIcong] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    // UseEffect

    // Methods
    const mouseEnter = () => {
        setShowEditIcong(true)
    }
    const mouseLeave = () => {
        setShowEditIcong(false)
        setIsEditing(false)
    }
    const stopEditing = () => {
        setShowEditIcong(false)
        setIsEditing(false)
    }

    const update = () => {
        stopEditing()
        updateRank()
    }

    // Return
    return (
        <div className={classes.RankCard__root}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            {showEditIcon && !isEditing &&
                <EditIcon 
                    className={classes.editIcon}
                    onClick={() => setIsEditing(!isEditing)}
                />
            }
            {!showEditIcon && !isEditing &&
                <div style={{fontSize: '25px'}}>
                    {/* <div>{rank}</div> */}
                    {selectedRanks[0].rank}
                </div>
            }
            {showEditIcon && isEditing &&
                <div className={classes.editReview}>
                    <TextField
                        variant="outlined"
                        defaultValue={selectedRanks[0].rank}
                        id="rank" label="Update Rank" name="rank"
                        type="number"
                        onChange={e => setUpdatedRank(e.target.value)}
                        // margin="normal"
                        // fullWidth
                    />
                    <div className={classes.addButtons}>
                        <Button
                            onClick={stopEditing}
                            className={classes.editCancel}
                            style={{color: 'red'}}
                        >Cancel</Button>
                        <Button
                            onClick={update}
                            className={`${classes.editSubmit} ${classes.button}`}
                            color="secondary"
                        >Update Rank</Button>
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
)(RankCard)