// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

// MATERIAL UI
// -1- Components
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// ACTION CREATORS


// FUNCTIONS
import decode from '../../../utils/decode_JWT.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    CheckUpdates__root: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    content__root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        width: '45%',
        marginBottom: '5px',
    }
}))

// -B- COMPONENT
function CheckUpdates(props) {
const {
    updatedReview,
    updateRank,
} = props
    // Styles
    const classes = useStyles({})

    // Return
    return(
        <div className={classes.CheckUpdates__root}>
            <div className={classes.content__root}>
                <div>UPDATED REVIEW:</div>
                <div>{updatedReview}</div>
            </div>
            <div className={classes.content__root}>
                <div>UPDATED RANK:</div>
                <div>{updateRank}</div>
            </div>
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
)(CheckUpdates)