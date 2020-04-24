// IMPORTS
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components
import { Card } from '@material-ui/core';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles'

// COMPONENTS

// ACTION CREATORS

// UTILS


// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles({
    // root: {
    //     border: '1px solid black',
    //     display: 'flex',
    //     height: 'auto'
    // },
    RankCard: { 
        position: 'absolute',
        top: '20px',
        right: '20px',

        fontSize: '25px',
        fontWeight: 'bold',
    }
})

// -B- COMPONENT
function RankCard(props) {
console.log('RANK CARD PROPS: ', props)
const { 
    selectedRanks
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State

    // UseEffect


    // Methods

    // Return
    if (selectedRanks.length === 0) {
        return (
            <div className={classes.RankCard}>
                {`~ ~ ~`}
            </div>
        )
    } 
    if (selectedRanks.length !== 0) {
        return (
            <div className={classes.RankCard}>
                {/* <div>{rank}</div> */}
                {selectedRanks[0].rank}
            </div>
        )
    } 
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
)(RankCard)