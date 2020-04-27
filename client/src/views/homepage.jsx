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
import Menu_AppBar from '../components/appBar/AppBar.js'
import ListSelector from '../components/homepage/explore_NYT_booksAPI/ListSelector.js'
import VertTabPannel from '../components/homepage/explore_NYT_booksAPI/VertTabPannel.js'

// ACTION CREATORS
import { a_getSpecificList } from '../redux/actions/GET/a_getSpecificList.js'
import { a_getBooks } from '../redux/actions/GET/a_getBooks.js'
import { a_getReviews } from '../redux/actions/GET/a_getReviews.js'
import { a_getLoggedBooks } from '../redux/actions/GET/a_getLoggedBooks.js'
import { a_getRanks } from  '../redux/actions/GET/a_getRanks.js'
              
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
const { 
    allLists, listName, searchDate,
    a_getBooks, a_getReviews, a_getLoggedBooks, a_getRanks     // Action Creators
} = props
    // Styles
    const classes = useStyles({})

    // UseEffect
    /* 
        We have just entered the app. 
        We now want to load initial data from your DB into the redux store
    */
    useEffect(() => {
        a_getBooks()
        a_getReviews()
        a_getLoggedBooks()
        a_getRanks()
    }, [])

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
        listName: state.r_specificList.listName,
        searchDate: state.r_specificList.searchDate,

        current_listData: state.r_specificList.listData,
    }
}
        
// CONNECT & EXPORT
export default connect(
    mstp,
    {
        a_getBooks,
        a_getReviews,
        a_getLoggedBooks,
        a_getRanks,
    }
)(HomePage)