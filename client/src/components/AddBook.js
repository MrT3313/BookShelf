// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

// MATERIAL UI
// -1- Components
import { Card } from '@material-ui/core';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// ACTION CREATORS


// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    addBook_root: {
        display: 'flex',
        justifyContent: 'center',

        width: '90%',
        margin: '10px',

        border: '1px solid blue',
    },
}))

// -B- COMPONENT
function AddBook(props) {
// console.log('Add Book PROPS: ', props)
const {DB_books} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [boosk, setBooks] = useState(DB_books)

    // Methods

    // Return
    return (
        <Card
            className={classes.addBook_root}
        >
            Add Book Coming Soon
        </Card>
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
)(AddBook)