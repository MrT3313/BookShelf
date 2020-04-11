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

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES

// -B- COMPONENT
function UserReviews(props) {
// console.log('USER REVIEW PROPS: ',props)
// -- // 
    // Styles
    // const classes = useStyles({})

    // State

    // Return
    return (
        <Paper>Hello From User Reviews</Paper>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        
}}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        
    }
)(UserReviews)