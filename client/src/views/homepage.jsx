// IMPORTS
import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'

// MATERIAL UI

// COMPONENTS
import Menu_AppBar from '../components/AppBar.js'
import Top10 from '../components/Top10.js'

// ACTION CREATORS
import {    a_GETbook_lists, 
            a_GETspecific_list  } from '../redux/actions/a_lists.js'
import { mergeClasses } from '@material-ui/styles'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
function HomePage(props) {
console.log('HOMEPAGE PROPS: ', props)
    // State
    const [default_searchDate, setDefault_searchDate] = useState('current')
    const [default_searchList, setDefault_searchList] = useState('Combined Print and E-Book Nonfiction')

    useEffect(() => {
        get_book_lists()
    })

    // Methods
    const get_book_lists = () => {
        console.log('You Clicked: Trying to get available book lists')

        // Call the action creator that was passed through connect to props-> has the dispatch method added to it
        props.a_GETbook_lists()
    }
    const get_individual_list = () => {
        console.log('You Clicked: Trying to get individual list')

        props.a_GETspecific_list(default_searchDate, default_searchList)
    }

    // Returned Component
    return (
        <div>
            <Menu_AppBar />
            <Top10 
                default_searchDate={default_searchDate} 
                default_searchList={default_searchList}
            />
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
        a_GETbook_lists,
        a_GETspecific_list,
    }
)(HomePage)