// IMPORTS
import React from 'react'
import { connect } from 'react-redux'
import { Tab, Tabs, TabList } from 'react-tabs';

// STYLES
import 'react-tabs/style/react-tabs.css';

// COMPONENTS
import ReactTabsPanel from './Panel.js'

// __ MAIN FUNCTIONAL COMPONENT __
function ReactTabs(props){
    return (
        <Tabs
            className='tabs'
            style={{
                display: 'flex',
                width: '100%',
            }}
        >
            <TabList
                className='tabsList'
                style={{
                    display: 'flex', justifyContent: 'space-between',
                    // flexWrap: 'wrap',
                    width: '100%',
                    padding: 0,
                }}
            >
                {props.current_listData.map((item,key) => {
                    let prepLabel = `#${item.rank}`
                    return <Tab>{prepLabel}</Tab>
                })}  
            </TabList>
        </Tabs>
        // <ReactTabsPanel />
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        current_listData: state.r_specificList.listData,
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        
    }
)(ReactTabs)