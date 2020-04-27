// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

// MATERIAL UI
// -1- Components
import Paper from '@material-ui/core/Paper';


// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS


// ACTION CREATORS


// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    ExploreSelectedLogID__root: {
        display: 'flex',

        padding: '10px',
    }
}))


// -B- COMPONENT
function ExploreSelectedLogID(props) {
// console.log('Add Book PROPS: ', props)
const {
    selected_logID,
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // Return
    return (
        <Paper className={classes.ExploreSelectedLogID__root}> 
            {selected_logID} 
        </Paper>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        DB_books: state.r_books.DB_books,
        DB_reviews: state.r_reviews.DB_reviews,
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {

    }
)(ExploreSelectedLogID)

