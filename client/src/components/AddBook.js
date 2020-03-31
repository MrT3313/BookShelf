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

// COMPONENTS

// ACTION CREATORS
// import { a_addBook } from '../redux/actions/a_addBook.js'
import { a_logCompletedBook } from '../redux/actions/a_logCompletedBook.js'
import { a_addAndLogBook } from '../redux/actions/a_addAndLogBook.js'

// FUNCTIONS
import decode from '../utils/decode_JWT.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    addBook_root: {
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
        width: '60%',
    },
    label: {
        display: 'flex',
        justifyContent: 'center',
        minWidth: '100px', maxWidth: '100px'
    },
    addButtons: {
        display: 'flex',
        justifyContent: 'space-around',

        width: '80%',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
    }
}))

// -B- COMPONENT
function AddBook(props) {
// console.log('Add Book PROPS: ', props)
const {
    setIs_adding,                       // Close AddBook Pannel

    DB_books,                           // connect => all books in redux store
    token,                              // connect => token on redux store

    a_addBook, 
    a_logCompletedBook,       // Action Creators
    a_addAndLogBook,
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [titles, setTitles] = useState([])
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [logType, setLogType] = useState('')

    // UseEffect => Get Unique Titles
    // - 1 - // Set Unique Titles
    useEffect(() => { setTitles( DB_books.map(item => item.title) ) }, [DB_books])
    // - 2 - // Set Log Type
    useEffect(() => { setLogType(titles.includes(title) ? 'onlyLog' : 'addAndLog') }, [title])

    // Methods
    const logBook = () => {
    // console.log(logType)
    // console.log(`Log This Book! -- ${title} -- ${author}`)
    let userID = undefined
    // -- //
        // get userID
        const decodedToken = decode(token)
        // console.log(decodedToken)
        userID = decodedToken.user_ID
        // console.log(userID)
    
        switch(logType) {
            // - 1 - // 
            case 'onlyLog':
                // get bookID
                const selectedBook = DB_books.filter(book => book.title === title)[0]
                // console.log(selectedBook)
                const bookID = selectedBook.id
                // console.log(bookID)
            
                // add log to readHistory 
                a_logCompletedBook(userID, bookID)

                break;
            // - 2 - // 
            case 'addAndLog':
                // console.log(logType)
                a_addAndLogBook({title, author}, userID)
                break;
            // - ERROR HANDLING - // 
            default: 
                // console.log('ERROR - UNKNOWN LOG TYPE')
                break;
        }

        // Close Pannel
        setIs_adding(false)
    }

    // Return
    return (
        <Card
            className={classes.addBook_root}
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
                    />
                </ListItem>
                {!titles.includes(title) &&
                    <ListItem>
                        <ListItemText className={classes.label}>
                            AUTHOR
                        </ListItemText>
                        <Divider orientation="vertical" flexItem className={classes.divider}/>
                        <TextField
                            variant="outlined"
                            defaultValue={author}
                            required
                            id="author" label="Author" name="author"
                            onChange={e => setAuthor(e.target.value)}
                            
                            margin="normal"
                            fullWidth
                        />
                    </ListItem>
                }
            </List>
            <div className={classes.addButtons}>
                <Button
                    onClick={logBook}
                    className={`${classes.editSubmit} ${classes.button}`}
                    color="secondary"
                >📚📚 Log This Book 📚📚</Button>
                <Button
                    onClick={() => setIs_adding(false)}
                    className={`${classes.editCancel} ${classes.button}`}
                >❌ Cancel ❌</Button>
            </div>
        </Card>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        DB_books: state.r_books.DB_books,
        token: state.r_login.token,
}}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        // a_addBook,
        a_logCompletedBook,
        a_addAndLogBook,
    }
)(AddBook)