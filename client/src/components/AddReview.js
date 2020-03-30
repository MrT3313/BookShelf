// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

// MATERIAL UI
// -1- Components

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
        justifyContent: 'center',

        width: '90%',
        margin: '10px',

        border: '1px solid blue',
    },
}))

// -B- COMPONENT
function AddReview(props) {
// console.log('Add Review PROPS: ', props)
// -- //
    // Styles
    const classes = useStyles({})

    // State

    // Methods

    // Return
    return (
        <div
            className={classes.addReview_root}
        >
            Add Review Coming Soon
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
)(AddReview)