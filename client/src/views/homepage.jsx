// IMPORTS
import React, {useEffect} from 'react'
import {connect} from 'react-redux'

// LOADER
import Loader from 'react-loader-spinner'

// MATERIAL UI
// -1- Styles
import { makeStyles } from '@material-ui/core/styles';
// -2- Components

// COMPONENTS
import MenuAppBar from '../components/appBar/AppBar.js'
import ListSelector from '../components/homepage/explore_NYT_booksAPI/ListSelector.js'
import Explorer from '../components/homepage/explore_NYT_booksAPI/Explorer/Tabs.js'

// ACTION CREATORS
import { a_getBooks } from '../redux/actions/GET/a_getBooks.js'
import { a_getReviews } from '../redux/actions/GET/a_getReviews.js'
import { a_getLoggedBooks } from '../redux/actions/GET/a_getLoggedBooks.js'
import { a_getRanks } from  '../redux/actions/GET/a_getRanks.js'

// FUNCTIONS
import decode from '../utils/decode_JWT.js'
              
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
    token,
    a_getBooks, a_getReviews, a_getLoggedBooks, a_getRanks,
} = props
    // Styles
    const classes = useStyles({})

    // UseEffect
    /* 
        We have just entered the app. 
        We now want to load initial data from your DB into the redux store
    */
    useEffect(() => {
        // Get User ID
            const userID = decode(token).user_ID
            // console.log(userID)

        // Get Data
        a_getBooks()
        a_getLoggedBooks(userID)
        a_getReviews(userID)
        a_getRanks(userID)
    }, [ token, a_getBooks, a_getLoggedBooks, a_getReviews, a_getRanks ])

    // Return
    if (props.current_listData.length === 0) {
        return (
            <>
                <MenuAppBar />
                <ListSelector />
                <div className={classes.loader}>
                    <Loader type='Puff' color='#00BCD4'/>
                </div>
            </>
        )
    } else {
        return (
            <>
                <MenuAppBar />
                <ListSelector />
                <Explorer />
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

        token: state.r_auth.token,
    }
}
        
// CONNECT & EXPORT
export default connect(
    mstp,
    {
        a_getBooks,
        a_getLoggedBooks, a_getReviews, a_getRanks,
    }
)(HomePage)