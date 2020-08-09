// IMPORTS
import React, {useState} from 'react';
import {connect} from 'react-redux'

// COMPONENTS
import LoginLoader from '../components/LoginLoader.js'

// MATERIAL UI
// -1- Components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// ACTION CREATORS
import { a_login } from '../redux/actions/auth/a_login.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '300px',
    },
    loginContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
        marginTop: '10px',
        '&:last-child': { marginLeft: '10px' },
    },

    secondaryOptions: {
        display:'flex',
        justifyContent: 'space-between',
    },
}));

// -B- COMPONENT
function SignIn(props) {
const {is_loggingIn} = props
// -- // 
    // Styles
    const classes = useStyles();

    // State
    // const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Methods
    const runLogin = e => {
        // e.preventDefault()
        // console.log(e.currentTarget.id)

        let prep_loginInfo = undefined
        
        if (e.currentTarget.id === 'login') {
            // Prep Login Info
            prep_loginInfo = {
                "type": "email",
                "email": email,
                "PLAINTEXT_pw": password
            }
            // console.log(prep_loginInfo)
        }
        if (e.currentTarget.id === 'guest') {
            prep_loginInfo = {
                "type": 'email',
                "email": 'guest@example.com',
                "PLAINTEXT_pw": 'guest',
            }
            // console.log(prep_loginInfo)
        }

        // Call Login action creator
        props.a_login(prep_loginInfo)
        .then(() => {
            props.history.push("/")
        }) 
    }

    // Return
    return (
        <div className={classes.mainContainer} >
        {is_loggingIn && <LoginLoader /> }
        {!is_loggingIn &&
            <div className={classes.loginContainer}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form 
                    className={classes.form} 
                    noValidate
                >
                    <TextField
                        required
                        variant="outlined"

                        id="email" label="Email Address" name="email"
                        onChange={e => setEmail(e.target.value)}

                        margin="normal"
                        fullWidth
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        required    
                        
                        id="password" label="Password" name="password" type="password"
                        onChange={e => setPassword(e.target.value)}

                        margin="normal"
                        fullWidth
                        autoComplete="current-password"
                    />
                    <Button
                        variant="contained"
                        id="login"
                        onClick={runLogin}
                        
                        fullWidth
                        color="primary"
                        className={classes.submit}
                    >
                        Login
                    </Button>
                    <div className={classes.secondaryOptions}>
                        <Button 
                            className={classes.submit}
                            variant="contained"
                            onClick={() => props.history.push("/register")} 
                        >
                            {"Register"}
                        </Button>
                        <Button 
                            id='guest'
                            onClick={runLogin}
                            variant="contained"
                            className={classes.submit}
                        >
                            {"Guest Sign In"}
                        </Button>
                    </div>
                </form>
            </div>
        }
        </div>
    );
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        is_loggingIn: state.r_auth.is_loggingIn
    }
}
        
// CONNECT & EXPORT
export default connect(
    mstp,
    {
        a_login
    }
)(SignIn)




















// // IMPORTS
// import React from 'react';
// import { connect } from 'react-redux';

// // UI
// import {
//     Paper,
//     FormControl,
//     InputLabel, Input,
//     Button,
// } from '@material-ui/core';

// import styled from 'styled-components';

// // COMPONENTS

// // ACTIONS


// // __MAIN__
//     // V1
//     // const Login = () => {}

//     // V2
//     function Login(){
//         return (
//             <div>Hello from Login</div>
//         )
//     }

// // EXPORTS
// export default Login