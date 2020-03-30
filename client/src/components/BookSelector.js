// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS

// ACTION CREATORS

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles( theme => ({
    bookList__root: {
        backgroundColor: theme.palette.secondary.main,
        
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',

        width: '100%',

        paddingTop: '10px',
        paddingBottom: '10px',

    },
    bookSelection__FormControl: {
        minWidth: '50%',
        maxWidth: '90%',
    },
}))

// -B- COMPONENT
function BookSelector(props) {
// console.log('BookSelector PROPS: ', props)
const {DB_books, selectBook} = props
// -- //
    // Styles
    const classes = useStyles()

    // State
    // const [book, setBook] = useState('Add New Book') 
    
    // Methods
    const handleChange = e => {
        console.log(e)
        console.log(e.target)
        selectBook(e.target.value)
    }

    // State

    // Return
    return (
        <div className={classes.bookList__root}>
            <FormControl className={classes.bookSelection__FormControl}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    Book Database
                </InputLabel>
                <Select
                    // value={book}
                    onChange={handleChange}
                    displayEmpty
                >
                    <MenuItem key={1} value={'newBook'}>--Add A New Book--</MenuItem>
                    {DB_books.map((book, key) => {
                        // console.log(book);
                        return (
                            <MenuItem key={key + 1} value={book.title}>TITLE: {book.title} -- by: {book.author}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </div>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        DB_books: state.r_books.DB_books
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        
    }
)(BookSelector)