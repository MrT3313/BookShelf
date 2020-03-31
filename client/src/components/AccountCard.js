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
import TextField from '@material-ui/core/TextField';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles'

// COMPONENTS

// ACTION CREATORS
import { a_UPDATE_user } from '../redux/actions/a_updateUser.js'

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

        paddingTop: '20px',
    },
    divider: {
        marginRight: "15px",
        marginLeft: "15px",
        color: 'red'
    },
    label: {
        minWidth: '140px', maxWidth: '140px'
    },
    editButtons: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    editSubmit: {
        display: 'flex',
        width: '60%',
        backgroundColor: '#3FBCD4',
        borderRadius: 5,
    },
    editCancel: {
        display: 'flex',
        width: '20%',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',

    }
})

// -B- COMPONENT
function AccountCard(props) {
// console.log('ACCOUNT CARD PROPS: ', props)
const { token, username, email, publicProfile } = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [editUser_view, setEditUser_view] = useState(false)
    const [id, setID] = useState()
    const [privileges, setPrivileges] = useState()

    const [editEmail, setEditEmail] = useState(email)
    const [editUsername, setEditUsername] = useState(username)
    const [editDefaultProfile, setEditDefaultProfile] = useState(publicProfile)

    // UseEffect
    useEffect(() => {
        // Decode
        let decoded = decode(token)
        setPrivileges(decoded.privileges)
        setID(decoded.user_ID)
    })

    // Methods
    const saveEdits = () => {
        setEditUser_view(!editUser_view)

        const prepObj = {
            email: editEmail,
            username: editUsername,
            publicProfile: editDefaultProfile,
        }
        // console.log(prepObj)

        props.a_UPDATE_user(id, prepObj)
    }

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
                    <>
                        <List>
                            <ListItem>
                                <ListItemText
                                    className={classes.label}
                                    // style={{minWidth: '120px', maxWidth: '120px'}}
                                >
                                    USERNAME
                                </ListItemText>
                                <Divider orientation="vertical" flexItem className={classes.divider}/>
                                <TextField
                                    // required
                                    variant="outlined"
                                    defaultValue={username}

                                    id="username" label="Username" name="username"
                                    onChange={e => setEditUsername(e.target.value)}

                                    margin="normal"
                                    fullWidth
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    className={classes.label}
                                >
                                    EMAIL
                                </ListItemText>
                                <Divider orientation="vertical" flexItem className={classes.divider}/>
                                <TextField
                                    // required
                                    variant="outlined"
                                    defaultValue={email}

                                    id="email" label="Email" name="email"
                                    onChange={e => setEditEmail(e.target.value)}

                                    margin="normal"
                                    fullWidth
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    className={classes.label}
                                >
                                    PUBLIC PROFILE
                                </ListItemText>
                                <Divider orientation="vertical" flexItem className={classes.divider}/>
                                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                    <Switch 
                                        checked={editDefaultProfile}
                                        onClick={() => setEditDefaultProfile(!editDefaultProfile)}
                                        color='primary'
                                    />
                                </div>
                            </ListItem>
                        </List>
                        <div className={classes.editButtons}>
                            <button
                                onClick={saveEdits}
                                className={`${classes.editSubmit} ${classes.button}`}
                            >Save Profile</button>
                            <button
                                onClick={() => setEditUser_view(!editUser_view)}
                                className={`${classes.editCancel} ${classes.button}`}
                            >Cancel</button>
                        </div>
                    </>
                }
                {!editUser_view &&
                    <>
                    <List>
                        <ListItem>
                            <ListItemText
                                className={classes.label}
                                // style={{minWidth: '120px', maxWidth: '120px'}}
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
                    <button
                        onClick={() => setEditUser_view(!editUser_view)}
                    >Edit Profile</button>
                    </>
                }
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
        a_UPDATE_user
    }
)(AccountCard)