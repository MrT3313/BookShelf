// IMPORTS
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components
import TextField from '@material-ui/core/TextField';

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
    RankCard: { 
        display: 'flex',

        fontSize: '25px',
        fontWeight: 'bold',

        maxWidth: '25%',
    }
})

// -B- COMPONENT
function RankCard(props) {
console.log('RANK CARD PROPS: ', props)
const { 
    selectedRanks,
    is_editing,
    setUpdatedRank,         // Update <UserReviews /> State
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State

    // UseEffect


    // Methods

    // Return
    
    // if (selectedRanks.length === 0) {
    //     return (
    //         <div className={classes.RankCard}>
    //             {`~ ~ ~`}
    //         </div>
    //     )
    // } else {
    if (is_editing === true) {
        return (
            <div className={classes.RankCard}>
                <TextField
                    id="rank"
                    // label="Edit Rank"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e =>setUpdatedRank(e.target.value)}
                    defaultValue={selectedRanks[0].rank}
                />
            </div>
        )
    } else {
        if (selectedRanks.length !== 0) {
            return (
                <div className={classes.RankCard}>
                    {/* <div>{rank}</div> */}
                    {selectedRanks[0].rank}
                </div>
            )
        }
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