// IMPORTS
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS

// ACTION CREATORS

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    root: {
    },
}))

// -B- COMPONENT
function ReadBooks(props) {
// console.log('ReadBooks PROPS:', props)
// -- //
    // Styles
    const classes = useStyles({})

    // State

    // Methods

    // Return Component
    return (
        <div>ReadBooks</div>
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
)(ReadBooks)