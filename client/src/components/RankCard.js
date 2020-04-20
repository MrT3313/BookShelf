// IMPORTS
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components
import { Card } from '@material-ui/core';

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

    },
})

// -B- COMPONENT
function RankCard(props) {
    // console.log('RANK CARD PROPS: ', props)

    // -- //
        // Styles
        const classes = useStyles({})

        // State

        // UseEffect


        // Methods

        // Return
        return (
            <div>HELLO FROM RANK CARD</div>
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
)(RankCard)