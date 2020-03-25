// IMPORTS
import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'

// LOADER
import Loader from 'react-loader-spinner'

// MATERIAL UI
// -1- Styles
import { makeStyles } from '@material-ui/core/styles';
// -2- Components

// COMPONENTS
import Menu_AppBar from '../components/AppBar.js'
import ListSelector from '../components/ListSelector.js'
import VertTabPannel from '../components/VertTabPannel.js'

// ACTION CREATORS
import { a_GETspecific_list } from '../redux/actions/a_specificList.js'
              
// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    loader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
        marginTop: '50px',
    }
}))

// -B- COMPONENT
function HomePage(props) {
    // Styles
    const classes = useStyles({})

    // Return
    if (props.current_listData.length === 0) {
        return (
            <>
                <Menu_AppBar />
                <ListSelector />
                <div className={classes.loader}>
                    <Loader type='Puff' color='#00BCD4'/>
                </div>
            </>
        )
    } else {
        return (
            <>
                <Menu_AppBar />
                <ListSelector />
                <VertTabPannel />
            </>
        )
    }
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        allLists: state.r_lists.list_names,
        current_listName: state.r_specificList.listName,
        searchDate: state.r_specificList.searchDate,
        current_listData: state.r_specificList.listData,
    }
}
        
// CONNECT & EXPORT
export default connect(
    mstp,
    {
        a_GETspecific_list,
    }
)(HomePage)