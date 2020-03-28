// IMPORTS
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components
import { Card } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EditIcon from '@material-ui/icons/Edit';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles'

// COMPONENTS

// ACTION CREATORS

// UTILS
import decode from '../utils/decode_JWT.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles({
    username: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editIcon: {
        marginLeft: '10px',
    },
    usernameLabel: {
        marginRight: '7px'
    }
})

// -B- COMPONENT
function AccountCard(props) {
console.log('ACCOUNT CARD PROPS: ', props)
const {token} = props
// -- //
    // State
    const [user_ID, setUser_ID] = useState()
    const [userName, setUserName] = useState()
    const [privileges, setPrivileges] = useState()

    // USE EFFECT
    useEffect(() => {
    console.log('ACCOUNT PAGE USE EFFECT')
    console.log(token)
    // -- //
        // Decode
        let decoded = decode(token)
        console.log(decoded)

        // Update Component State
        setUser_ID(decoded.user_ID)
        setUserName(decoded.username)
        setPrivileges(decoded.privileges)

        // TODO: Get all user unformation
        
    }, [])

    // Styles
    const classes = useStyles({})

    // Return
    return (
        <Grid
        container
        direction='column'
        alignItems='center'
        >
            <Card>
                <AssignmentIndIcon />
                <div className={classes.username}>
                    <div className={classes.usernameLabel}>
                        Username:
                    </div>
                    <div>{userName}</div>
                    {privileges != 2 &&
                        <EditIcon className={classes.editIcon}/>
                    }
                </div>
            </Card>
        </Grid>
    )

}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        token: state.r_login.token
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        
    }
)(AccountCard)