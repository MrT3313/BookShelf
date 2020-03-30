// IMPORTS
import React from 'react'
import {connect} from 'react-redux'

// MATERIAL UI
// -1- Styles
import { makeStyles } from '@material-ui/core/styles';
// -2- Components

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
        <div>Profile Coming Soon</div>
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