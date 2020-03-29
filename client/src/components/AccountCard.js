// IMPORTS
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components
import { Card } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    profile_root: {
        display: 'flex',
        flexDirection: 'column',
    },
    divider: {
        marginRight: "10px",
        marginLeft: "10px",
    },
    label: {
        width: '100px',
        // textAlign: 'center',
    }
})

// -B- COMPONENT
function AccountCard(props) {
console.log('ACCOUNT CARD PROPS: ', props)
const { token, username, email, publicProfile } = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [editUser_view, setEditUser_view] = useState(false)
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
            <div className={classes.profile_root}>
                {editUser_view &&
                    <div>TIME TO EDIT</div>
                }
                {!editUser_view &&
                    
                        <List>
                            <ListItem>
                                <ListItemText
                                    className={classes.label}
                                    disableTypography={true}
                                >
                                    USERNAME
                                </ListItemText>
                                <Divider orientation="vertical" flexItem className={classes.divider}/>
                                <ListItemText
                                        className={classes.data}
                                >
                                    {username}
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    className={classes.label}
                                >
                                    EMAIL
                                </ListItemText>
                                <Divider orientation="vertical" flexItem className={classes.divider}/>
                                <ListItemText
                                    className={classes.data}
                                >
                                    {email}
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    className={classes.label}
                                >
                                    PUBLIC PROFILE
                                </ListItemText>
                                <Divider orientation="vertical" flexItem className={classes.divider}/>
                                <ListItemText
                                    className={classes.data}
                                >
                                    {`${publicProfile}`}
                                </ListItemText>
                            </ListItem>
                        </List>
                }
                <button
                    onClick={() => setEditUser_view(!editUser_view)}
                >Edit Profile</button>
            </div>

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