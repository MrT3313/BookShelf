// IMPORTS
import React, { useState } from 'react'
import {connect} from 'react-redux'

// UI

// COMPONENTS

// ACTION CREATORS
import { a_GETbook_lists,
         a_GETspecific_list } from '../redux/actions/a_lists.js'

// __MAIN__
function HomePage(props) {
    // State
    const [listSearch_date, setListSearch_date] = useState('current')
    const [listSearch_name, setListSearch_name] = useState('Combined Print and E-Book Nonfiction')


    // Methods
    const get_book_lists = e => {
        e.preventDefault();
        console.log('You Clicked: Trying to get available book lists')

        // Call the action creator that was passed through connect to props-> has the dispatch method added to it
        props.a_GETbook_lists()
    }
    const get_individual_list = e => {
        e.preventDefault();
        console.log('You Clicked: Trying to get individual list')

        props.a_GETspecific_list(listSearch_date, listSearch_name)
    }

    // Returned Component
    return (
        <div>
            <div>
                Hello from HOMEPAGE
                <button type='button' onClick={get_book_lists}>
                    Test - Get Available Book Lists
                </button>
                <button type='button' onClick={get_individual_list}>
                    Test - Get Individual List
                </button>
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
        a_GETbook_lists,
        a_GETspecific_list,
    }
)(HomePage)