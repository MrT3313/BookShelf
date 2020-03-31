// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

// MATERIAL UI
// -1- Components
import { Card } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS
import BookSelector from './BookSelector.js'

// ACTION CREATORS
import { a_addBook } from '../redux/actions/a_addBook.js'
import { a_logCompletedBook } from '../redux/actions/a_logCompletedBook.js'

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
        margin: '10px',

        border: '1px solid blue',
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
    },
    button: {
        display: 'flex',
        justifyContent: 'center',

    }
}))

// -B- COMPONENT
function AddBook(props) {
console.log('Add Book PROPS: ', props)
const {a_addBook, DB_books, setIs_adding, token, lastAdded} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [titles, setTitles] = useState([])
    const [title, setTitle] = useState('undefined')
    const [author, setAuthor] = useState('')

    // UseEffect
    useEffect(() => {
        let titles = DB_books.map(item => item.title)
        console.log(titles)
        setTitles(titles)
    }, [DB_books, lastAdded])

    // Methods
    const saveBook = () => {
    let prepObj = undefined
    // -- //
        // Close Pannel
        setIs_adding(false)

        // Add Book If Needed & Get Book ID
        let bookID = undefined
        if (!titles.includes(title)) {
            // Add Book
            // async function addBook() {
                const data = a_addBook({title, author})
                console.log(data)
                console.log(lastAdded)
            //     return data
            // }
            // const addBook_RESULT = addBook()
            // console.log(addBook_RESULT)
            // console.log(addBook_RESULT.id)
            // bookID = addBook_RESULT.id
        } else {
            const foundBook = DB_books.filter(book => {
                console.log(book)
                return book.title === title
            })
            console.log(foundBook)
            bookID = foundBook.id
        }
        console.log('BOOK_ID: ', bookID)

        // Decode Token
        const decodedToken = decode(token)
        console.log(decodedToken)

        if (author === '') {
            // DONT NEED TO ADD A NEW BOOK
            // Add Read Record
        } else {
            // ADD NEW BOOK
            // Add Read Record
            prepObj = {
                title: title,
                author: author,
            }
        }

        console.log(title)
        console.log(author)
        console.log(prepObj)

        // 

        // (decodedToken.user_ID)
        
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
                        // autoSelect={true}

                        options={DB_books}
                        getOptionLabel={(option) => option.title}

                        onInputChange={(e, value) => setTitle(value)}
                        // onChange={(e, value) => setTitle(value)}
                        // onChange={handleChange}
                        
                        renderInput={ (params) => <TextField 
                            {...params}  
                            required 
                            variant='outlined' 
                            label="Title"
                        /> }
                    />
                </ListItem>
                {!titles.includes(title) &&
                    <ListItem>
                        <ListItemText
                            className={classes.label}
                            >
                            AUTHOR
                        </ListItemText>
                        <Divider orientation="vertical" flexItem className={classes.divider}/>
                        <TextField
                            // required
                            variant="outlined"
                            defaultValue={author}
                            
                            id="author" label="Author" name="author"
                            onChange={e => setAuthor(e.target.value)}
                            
                            margin="normal"
                            fullWidth
                            />
                    </ListItem>
                }
            </List>
            <div className={classes.addButtons}>
                <button
                    onClick={saveBook}
                    className={`${classes.editSubmit} ${classes.button}`}
                >Save Profile</button>
                {/* <button
                    onClick={() => setEditUser_view(!editUser_view)}
                    className={`${classes.editCancel} ${classes.button}`}
                >Cancel</button> */}
            </div>
        </Card>
    )
}


// MAP STATE TO PROPS
const mstp = state => {
    return {
        DB_books: state.r_books.DB_books,
        lastAdded: state.r_books.lastAdded,
        token: state.r_login.token,
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        a_addBook,
        a_logCompletedBook,
    }
)(AddBook)