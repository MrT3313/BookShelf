// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

// MATERIAL UI
// -1- Components
import { Card } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// ACTION CREATORS


// FUNCTIONS
import decode from '../../../utils/decode_JWT.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    addReview_root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        width: '90%',

        padding: '10px',
        paddingRight: '25px',
        margin: '10px',
        marginBottom: '20px',

        border: '5px solid #273238',
    },
    divider: {
        marginRight: "20px",
        marginLeft: "20px",
    },
    autoComplete: {
        display: 'flex',
        width: '100%',
    },
    listRoot: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: '0px',
    },
    listItemRoot: {
        padding: '0px',
        margin: '0 0 20px 0',
    },
    label: {
        display: 'flex',
        justifyContent: 'center',
        minWidth: '100px', maxWidth: '100px'
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
    }
}))

// -B- COMPONENT
function UpdateReview(props) {
// console.log('Add Review PROPS: ', props)
const {
    setEditing, 
    selectedData,

    updateReview,

    DB_books,
    token,

    a_addReview     // Action Creator
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [review, setReview] = useState()

    // Methods
    // const logReview = () => {

    //     // Prep Object
    //     const prepObj = {
    //         logID: selectedData.logID,
    //         review: review,
    //     }
    //     console.log(prepObj)

    //     // Call Action Creator
    //     a_addReview(prepObj)
    //     // Close Pannel
    //     setEditing(false)
    // }

    // Use Effect

    // Return
    return (
        <Card
            className={classes.addReview_root}
        >
            <List className={classes.listRoot}>
                <ListItem className={classes.listItemRoot}> 
                    <ListItemText className={classes.label}>
                        TITLE
                    </ListItemText>
                    <Divider orientation="vertical" flexItem className={classes.divider}/>

                    {/* <Autocomplete 
                        className={classes.autoComplete}
                        freeSolo={true}
                        options={DB_books}
                        getOptionLabel={(option) => option.title}

                        onInputChange={(e, value) => setTitle(value)}

                        renderInput={ (params) => {
                            return (
                                <TextField 
                                    {...params}  
                                    required 
                                    variant='outlined' 
                                    label="Title"
                                />
                            )
                        }}
                    /> */}
                    <TextField
                        className={classes.autoComplete}
                        defaultValue={selectedData.title}
                        variant="outlined"
                        // id="review" label="Update Review" name="review"
                        id="review" name="review"
                        onChange={e => setReview(e.target.value)}
                        margin="normal"
                        // fullWidth
                    />
                </ListItem>
                <ListItem className={classes.listItemRoot}>
                    <ListItemText className={classes.label}>
                        REVIEW
                    </ListItemText>
                    <Divider orientation="vertical" flexItem className={classes.divider}/>
                    <TextField
                        variant="outlined"
                        multiline
                        rows="5"
                        defaultValue={selectedData.review}
                        required
                        // id="review" label="Add Review" name="review"
                        id="review" name="review"
                        onChange={e => setReview(e.target.value)}
                        margin="normal"
                        fullWidth
                    />
                </ListItem>
            </List>
            <div className={classes.addButtons}>
                <Button
                    onClick={() => setEditing(false)}
                    className={classes.editCancel}
                    style={{color: 'red'}}
                >Cancel</Button>
                <Button
                    onClick={() => updateReview(review)}
                    className={`${classes.editSubmit} ${classes.button}`}
                    color="secondary"
                >Update Review</Button>
            </div>
        </Card>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        DB_books: state.r_books.DB_books,
        token: state.r_auth.token,
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        
    }
)(UpdateReview)