// IMPORTS 
import React from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components
import { Card, Paper } from '@material-ui/core';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS

// ACTION CREATORS

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles({
    root: {
        backgroundColor: 'orange',
    },
    paper: {
        height: '100px',
        width: '100px',
        backgroundColor: 'blue',
    }, 
    card: {
        color: 'teal',
    }
})

// -B- COMPONENT
function Top10(props) {
console.log('Top10 PROPS:', props)
    // Srtyles
    const classes = useStyles()

    // State

    // Methods

    // Returned Component
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Card className={classes.card}>
                    This is a card
                </Card>
            </Paper>
        </div>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        book_list: state.r_lists.current_list
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        
    }
)(Top10)