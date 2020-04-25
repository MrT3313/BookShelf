// IMPORTS
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components
import EditIcon from '@material-ui/icons/Edit';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles'

// COMPONENTS

// ACTION CREATORS

// UTILS


// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles({
    root: { 
        display: 'flex',
        alignItems: 'center',

        width: '100%',
        marginLeft: '20px',
    },
})

// -B- COMPONENT
function ReviewCard(props) {
console.log('REVIEW CARD PROPS: ', props)
const { 
    setIsEditing,
    selectedReviews,
    setUpdatedReview,
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State

    // UseEffect


    // Methods

    // Return
    return (
        <div className={classes.root}>
            {/* Hello From Review Card */}
            {selectedReviews[0].review}
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
)(ReviewCard)