// IMPORTS
import React from 'react'
import {connect} from 'react-redux'

// MATERIAL UI
// -1- Styles
import { makeStyles } from '@material-ui/core/styles';
// -2- Components

// COMPONENTS
import Menu_AppBar from '../components/AppBar.js'
import AddPannel from '../components/AddPannel.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    root: {
        
    }
}))

// -B- COMPONENT
function Profile(props) {
    return (
        <>
            <Menu_AppBar />
            <AddPannel />
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
)(Profile)