// IMPORTS
import React from 'react'
import {connect} from 'react-redux'

// UI

// COMPONENTS

// ACTION CREATORS
import { a_GETbook_lists,
        } from '../redux/actions/a_lists.js'

// __MAIN__
function HomePage(props) {
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
    }

    // Returned Component
    return (
        <div>
            <div>
                Hello from HOMEPAGE
                <button type='button' onClick={get_book_lists}>
                    Test - Get Available Book Lists
                </button>
                <button type='button'>
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
    }
)(HomePage)