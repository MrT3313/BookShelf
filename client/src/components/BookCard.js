// IMPORTS
import React from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components

// -2- Styles
import { makeStyles } from '@material-ui/core/styles'

// COMPONENTS

// ACTION CREATORS

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles({
    root: {

    }
})

// -B- COMPONENT
function BookCard(props) {
console.log('BookCard PROPS: ', props)

    // Styles

    // Statte

    // Methods

    // Returned Component
    return(
        <div>HELLO</div>
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
)(BookCard)