// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

// MATERIAL UI
// -1- Components
import Paper from '@material-ui/core/Paper';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS
import AddReview from './AddReview.js'
import AddRank from './AddRank.js'
import UpdateRank from './UpdateRank.js'
import UpdateReview from './UpdateReview.js'

// ACTION CREATORS
import { a_getSelectedLog } from '../../redux/actions/GET/a_getSelectedLog.js'
import { a_addReview } from '../../redux/actions/POST/a_addReview.js'
import { a_addRank } from '../../redux/actions/POST/a_addRank.js'
import { a_updateRank } from '../../redux/actions/PUT/a_updateRank.js'
import { a_updateReview } from '../../redux/actions/PUT/a_updateReview.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    default__root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        padding: '10px',
    }, 
    ExploreSelectedLogID__root: {
        display: 'flex',
        flexDirection: 'column',

        width: '50%',
        padding: '10px',
    },
    heading: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',

        margin: '10px 0 10px 0',

        '& .title': {
            fontSize: '25px',
            fontWeight: 'bold',
        },
        '& .author': {
            fontSize: '20px',
        },
    },
    content: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    content__review: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
    },
    content__rank: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '30%',
    }
}))


// -B- COMPONENT
function ExploreSelectedLogID(props) {
console.log('ExploreSelectedLogID PROPS: ', props)
const {
    selected_logID,                                             // Passed Props
    a_getSelectedLog, a_addReview, a_addRank,                   // Action Creator
    a_updateRank, a_updateReview,                               // Action Creator
    selectedLogData,                                            // Redux
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [adding, setAdding] = useState(false)
    const [editing, setEditing] = useState(false)

    // UseEffect 
    useEffect(() => {
        if (selected_logID) {
            console.log('EXPLORE SELECTED LOG_ID')
            a_getSelectedLog(selected_logID)
        }
    }, [selected_logID])

    // Methods
    const add = e => {
        console.log(e.currentTarget.id)
        setAdding(e.currentTarget.id)
    }
    const edit = e => {
        console.log(e.currentTarget.id)
        setEditing(e.currentTarget.id)
    }

    const logReview = async (review) => {
        console.log('LOG THIS REVIEW')

        // Prep Object
        const prepObj = {
            logID: selectedLogData.logID,
            review: review,
        }
        console.log(prepObj)

        // Call Action Creator
        await a_addReview(prepObj)
        // Update Selected Data
        await a_getSelectedLog(selected_logID)
        // Close Pannel
        await setAdding(false)
    }

    const logRank = async(rank) => {
        console.log('LOG THIS RANK')

        // Prep Object
        const prepObj = {
            logID: selectedLogData.logID,
            rank: rank,
        }
        // Call Action Creator
        await a_addRank(prepObj, selectedLogData.userID)
        // Update Selected Data
        await a_getSelectedLog(selected_logID)
        // Close Pannel
        await setAdding(false)
    }

    // TODO: UPDATE
    const updateRank = async(updatedRank) => {
        // console.log(selectedLogData)
        // console.log('rankID',selectedLogData.rankID)

        // Prep Object
        // const prepObj = {
        //     rank: updatedRank
        // }
        // Call Action Creator
        await a_updateRank(updatedRank, selectedLogData.rankID, selectedLogData.userID)
        // Update Selected Data
        await a_getSelectedLog(selected_logID)
        // Close Pannel
        await setEditing(false)

    }

    const updateReview = async(updatedReview) => {
        console.log(selectedLogData)
        // Call Action Creator
        await a_updateReview(selectedLogData.reviewID, selectedLogData.userID, updatedReview)
        // Update Selected Data
        await a_getSelectedLog(selected_logID)
        // Close Pannel
        await setEditing(false)
    }

    // Return
    if (selected_logID === false) {
        return (
            <Paper className={classes.default__root}>
                Select a Log Entry
            </Paper>
        )
    } else {
        return (
            <Paper className={classes.ExploreSelectedLogID__root}>
                <div className={classes.heading}>
                    <div className="title">
                        {selectedLogData.title}
                    </div>
                    <div className="author">
                        By: {selectedLogData.author}
                    </div>
                </div>
                {!adding && !editing &&
                    <div className={classes.content}>
                        <div className={classes.content__review}>
                            <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                                <div style={{marginRight: '5px'}}>
                                    MY REVIEW
                                </div>
                                {selectedLogData.review &&
                                    <EditIcon 
                                        style={{fontSize: '20px'}}
                                        id="updateReview"
                                        onClick={edit}
                                    /> 
                                }
                            </div>
                            <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                                {!selectedLogData.review &&
                                    <AddBoxIcon 
                                        style={{marginLeft: '25px'}} 
                                        onClick={add}
                                        id="addReview"
                                    />
                                }
                                {selectedLogData.review &&
                                    selectedLogData.review
                                }
                            </div>
                        </div>
                        <div className={classes.content__rank}>
                            <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                                <div style={{marginRight: '5px'}}>
                                    MY RANK
                                </div>
                                {selectedLogData.rank &&
                                    <EditIcon 
                                        style={{fontSize: '20px'}}
                                        id="updateRank"
                                        onClick={edit}
                                    /> 
                                }
                            </div>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                {!selectedLogData.rank &&
                                    <AddBoxIcon 
                                        onClick={add}
                                        id="addRank"
                                    />
                                }
                                {selectedLogData.rank &&
                                    selectedLogData.rank
                                }
                            </div>
                        </div>
                    </div>
                }
                {adding && adding === 'addReview' &&
                    <AddReview 
                        logReview={logReview}
                        setAdding={setAdding} 
                        selectedData={selectedLogData}
                    />
                }
                {adding && adding === 'addRank' &&
                    <AddRank 
                        logRank={logRank}
                        setAdding={setAdding} 
                        selectedData={selectedLogData}
                    />
                }
                {editing && editing === 'updateRank' &&
                    <UpdateRank 
                        updateRank={updateRank}
                        setEditing={setEditing}
                        selectedData={selectedLogData}
                    />
                }
                {editing && editing === 'updateReview' &&
                    <UpdateReview 
                        updateReview={updateReview}
                        setEditing={setEditing}
                        selectedData={selectedLogData}
                    />
                }
            </Paper>
        )
    }
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        selectedLogData: state.r_selectedLog.selectedLog,
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        a_getSelectedLog,
        a_addRank, a_addReview,
        a_updateRank, a_updateReview,
    }
)(ExploreSelectedLogID)

