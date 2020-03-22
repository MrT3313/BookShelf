// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components
import TabPannel from '../components/TabPannel.js'
// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// __MAIN__
// -A- STYLES
const useStyles = makeStyles( theme => ({
    root: {
        display: 'flex',
    }
}))
// -B- COMPONENT
function ListExplorer(props){
    // Styles
    const classes = useStyles()
    
    return (
        <div className={classes.root}>
            <TabPannel />
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
)(ListExplorer)