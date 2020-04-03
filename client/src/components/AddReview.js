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
        margin: '10px',
        marginBottom: '20px',

        border: '5px solid #273238',
        // border: '5px solid #40BCD4',
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
function AddReview(props) {
// console.log('Add Review PROPS: ', props)
const {
    DB_books,
    token
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [bookID, setBookID] = useState()
    const [userID, setUserID] = useState()
    const [review, setReview] = useState()

    // Methods

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

                    <Autocomplete 
                        className={classes.autoComplete}
                        freeSolo={true}
                        options={DB_books}
                        getOptionLabel={(option) => option.title}

                        // onInputChange={(e, value) => setTitle(value)}

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
                        defaultValue={userID}
                        required
                        id="review" label="Review" name="review"
                        onChange={e => setUserID(e.target.value)}
                        margin="normal"
                        fullWidth
                    />
                </ListItem>
            </List>
            <div className={classes.addButtons}>
                <Button
                    // onClick={() => setIs_adding(false)}
                    className={`${classes.editCancel} ${classes.button}`}
                    style={{color: 'red'}}
                >Cancel</Button>
                <Button
                    // onClick={}
                    className={`${classes.editSubmit} ${classes.button}`}
                    color="secondary"
                >Log This Book</Button>
            </div>
        </Card>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        DB_books: state.r_books.DB_books,
        token: state.r_login.token,
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        
    }
)(AddReview)