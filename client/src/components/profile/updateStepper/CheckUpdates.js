// IMPORTS 
import React from 'react'
import { connect } from 'react-redux';

// MATERIAL UI
// -1- Components

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

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
    }, 
    content: {
        padding: '10px 0 10px 0',
    }
}))

// -B- COMPONENT
function CheckUpdates(props) {
const {
    updatedReview,
    updatedRank,
} = props
    // Styles
    const classes = useStyles({})

    // Return
    return(
        <div className={classes.CheckUpdates__root}>
            <div className={classes.content__root}>
                <div>
                    UPDATED REVIEW:
                </div>
                <div className={classes.content}>
                    {updatedReview}
                </div>
            </div>
            <div className={classes.content__root}>
                <div>
                    UPDATED RANK:
                </div>
                <div className={classes.content}>
                    {updatedRank}
                </div>
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