// IMPORTS
import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'

// MATERIAL UI
// -1- Styles
import { makeStyles } from '@material-ui/core/styles';
// -2- Components

// COMPONENTS

// ACTION CREATORS

              
// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    root: {

    }
}))

// -B- COMPONENT
function Account(props) {
    // Styles
    const classes = useStyles({})

    // Return
    return (
        <>
            <div>Hello from Account Page</div>
        </>
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
)(Account)