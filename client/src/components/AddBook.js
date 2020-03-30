// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

// MATERIAL UI
// -1- Components
import { Card } from '@material-ui/core';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS
import BookSelector from './BookSelector.js'

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

// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [selectedBook, setSelectedBook] = useState()

    // Methods

    // Return
    return (
        <Card
            className={classes.addBook_root}
        >
            <BookSelector selectBook={setSelectedBook}/>
        </Card>
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
)(AddBook)