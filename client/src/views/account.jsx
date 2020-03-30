// IMPORTS
import React from 'react'
import {connect} from 'react-redux'

// MATERIAL UI
// -1- Styles
import { makeStyles } from '@material-ui/core/styles';
// -2- Components
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';

// COMPONENTS
import Menu_AppBar from '../components/AppBar.js'
import AccountCard from '../components/AccountCard.js'

// ACTION CREATORS
              
// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    accountCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

// -B- COMPONENT
function Account(props) {
// console.log('Account Page Props :', props)
// -- //
    // Styles
    const classes = useStyles({})

    // Return
    return (
        <>
            <Menu_AppBar />
            <AccountCard />
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