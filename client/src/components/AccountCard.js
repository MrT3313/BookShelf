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
import { LOCAL_BE_base_URL } from '../utils'
import { LIVE_BE_base_URL } from '../utils'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles({
    accountCard_root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        width: '75%',
    },
    // TODO: Combine into generic 
    username: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    email: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    publicProfile: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // TODO: Combine into generic 
    usernameLabel: {
        marginRight: '7px'
    },
    emailLabel: {
        marginRight: '7px'
    },
    publicProfileLabel: {
        marginRight: '7px'
    },

    // edit icon
    editIcon: {
        marginLeft: '10px',
    },
})

// -B- COMPONENT
function AccountCard(props) {
console.log('ACCOUNT CARD PROPS: ', props)
const { token, username, email, publicProfile } = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [privileges, setPrivileges] = useState()

    // UseEffect
    useEffect(() => {
        // Decode
        let decoded = decode(token)
        setPrivileges(decoded.privileges)
    })

    // Methods

    // Return
    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            justify='center'
        >
            <Card className={classes.accountCard_root}>
                <AssignmentIndIcon />
                <div className={classes.username}>
                    <div className={classes.usernameLabel}>
                        Username:
                    </div>
                    <div>{username}</div>
                    {privileges != 2 &&
                        <EditIcon 
                            // name='userName'
                            className={classes.editIcon}
                            // onClick={edit}
                        />
                    }
                </div>
                <div className={classes.email}>
                    <div className={classes.emailLabel}>
                        Email:
                    </div>
                    <div>{email}</div>
                    {privileges != 2 &&
                        <EditIcon 
                            // name='userName'
                            className={classes.editIcon}
                            // onClick={edit}
                        />
                    }
                </div>
                <div className={classes.publicProfile}>
                    <div className={classes.publicProfileLabel}>
                        Public Profile:
                    </div>
                    <div>{publicProfile}</div>
                    {privileges != 2 &&
                        <EditIcon 
                            // name='userName'
                            className={classes.editIcon}
                            // onClick={edit}
                        />
                    }
                </div>
            </Card>
        </Grid>
    )

}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        token: state.r_login.token,
        username: state.r_login.username,
        email: state.r_login.email,
        publicProfile: state.r_login.publicProfile,
        
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        
    }
)(AccountCard)