// IMPORTS
import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'

// LOADER
import Loader from 'react-loader-spinner'

// MATERIAL UI

// COMPONENTS
import Menu_AppBar from '../components/AppBar.js'
import Top10 from '../components/Top10.js'

// ACTION CREATORS
import { a_GETspecific_list } from '../redux/actions/a_specificList.js'
              

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
function HomePage(props) {
console.log('HOMEPAGE PROPS: ', props)
const { current_listName, searchDate } = props
console.log(current_listName)
console.log(searchDate)
// -- //
    // useEffect
    useEffect(() => {
        async function get_listData() {
            await props.a_GETspecific_list(searchDate, current_listName)
        }
        get_listData()
    }, [])

    // Return
    if (props.current_listData.length == 0) {
        return (
            <Loader type='Puff'/>
        )
    } else {
        return (
            <>
                <Menu_AppBar />
                <Top10 />
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