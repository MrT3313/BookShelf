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
    root: {
        display: 'flex',
        flexGrow: '1',
        padding: '20px',
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '5px',

        width: '50%',
    },
    paperRoot: {
        position: 'relative',           // for BookCard Position
        display: 'flex',
        flexGrow: '1',

        justifyContent: 'center',
    },
    // -- // 
    reviewRoot: {
        // position: 'relative',           // for BookCard Position
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
        width: '70%',

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
    // -- //
    EditIcon: {
        position: 'absolute',

        bottom: '20px',
        right: '15px',
        color: "#263238",

        padding: '5px',
        borderRadius: '5px',

        minWidth: '0px', 

        '&:Hover': {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.secondary.main,
        }
    },
    updateContainer: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',

        bottom: '15px',
        right: '15px',
    }
}))

// -B- COMPONENT
function UserReviews(props) {
// console.log('NEW USER REVIEW PROPS: ', props)
const { 
    selectedReviews,
    selectedRanks,
    toggleAdd,
    selectedUserLogIndex,
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [is_editing, setIsEditing] = useState(false)
    const [updatedRank, setUpdatedRank] = useState()
    const [updatedReview, setUpdatedReview] = useState()

    // Methods
    const toggleEdit = () => {
        console.log('TRYING TO EDIT')
        setIsAdding(!is_editing)
    }
    const submitEdit = () => {
        console.log('SUBMITTING')
        // setIsAdding(!is_editing)

        console.log(updatedReview)
        console.log(updatedRank)

        // const prepData = {
            
        // }

    }
    // Return 
    return (
        <div className={classes.root}>
            {selectedReviews.length !== 0 &&
            <>
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
                            {is_editing &&
                                <TextField
                                    id="rank" 
                                    // label="Edit Your Review"
                                    defaultValue={selectedReviews[0].review}
                                    multiline
                                    rows="5"
                                    onChange={e =>setUpdatedReview(e.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    style={{padding: '0 0 0 20px', marginTop: '10px'}}
                                />
                            }
                            {!is_editing &&
                                <div style={{display: 'flex', padding: '10px 20px 20px 20px', marginTop: '10px'}}>
                                    {selectedReviews[0].review}
                                </div>
                            }
                        </div>
                    </Card>
                    <RankCard selectedRanks={selectedRanks} is_editing={is_editing} setUpdatedRank={setUpdatedRank}/>
                    {is_editing && 
                        <div className={classes.updateContainer}>
                            <Button style={{color: 'red', marginBottom: '5px'}} onClick={toggleEdit}>
                                Cancel
                            </Button>
                            <Button style={{color: '#00BCD4', backgroundColor: '#263238'}} onClick={submitEdit}>
                                Update
                            </Button>
                        </div>
                    }
                    {!is_editing && 
                        <Button className={classes.EditIcon} onClick={toggleEdit}>
                            <EditIcon />
                        </Button>
                    }
                </Paper>
            </>
            }

            {selectedReviews.length === 0 && selectedUserLogIndex.length === 0 &&
                <Paper className={classes.paperRoot}>
                    <Card className={classes.noReviewRoot}>
                        <div>
                            Select a Log Entry!
                        </div>
                        <AddBoxIcon
                            id='review'
                            onClick={toggleAdd}
                            className={classes.addButton}
                        />
                    </Card>
                </Paper>
            }
            {selectedReviews.length === 0 && selectedUserLogIndex.length !== 0 &&
                <Paper className={classes.paperRoot}>
                    <Card className={classes.noReviewRoot}>
                        <div>
                            Add Review for Log Entry!
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