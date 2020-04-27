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
import { a_getSelectedLog } from '../../redux/actions/GET/a_getSelectedLog.js'


// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    default__root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        padding: '10px',
    }, 
    ExploreSelectedLogID__root: {
        display: 'flex',
        flexDirection: 'column',

        width: '50%',
        padding: '10px',
    },
    heading: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',

        margin: '10px 0 10px 0',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-around',
    }
}))


// -B- COMPONENT
function ExploreSelectedLogID(props) {
console.log('ExploreSelectedLogID PROPS: ', props)
const {
    selected_logID,         // Passed Props
    a_getSelectedLog,        // Action Creator
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // UseEffect 
    useEffect(() => {
        console.log('EXPLORE SELECTED LOG_ID')
        a_getSelectedLog(selected_logID)
    }, [selected_logID])

    // Return
    if (selected_logID === false) {
        return (
            <Paper className={classes.default__root}>
                Select a Log Entry
            </Paper>
        )
    } else {
        return (
            <Paper className={classes.ExploreSelectedLogID__root}>
                <div className={classes.heading}>
                    <div>TITLE</div>
                    <div>AUTHOR</div>
                </div>
                <div className={classes.content}>
                    <div>REVIEW</div>
                    <div>RANK</div>
                </div>
            </Paper>
        )
    }
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
        a_getSelectedLog,
    }
)(ExploreSelectedLogID)

