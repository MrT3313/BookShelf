// IMPORTS
import React, {useState} from 'react';
import {connect} from 'react-redux'

// MATERIAL UI
// -1- Components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// ACTION CREATORS
import { a_login } from '../redux/actions/a_login.js'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: '10px'
  },
}));

function SignIn(props) {
    // Styles
    const classes = useStyles();

    // State
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Methods
    const runLogin = e => {
        // e.preventDefault()
        console.log(e.currentTarget.id)
        let prep_loginInfo = undefined
        
        if (e.currentTarget.id === 'login') {
            // Prep Login Info
            prep_loginInfo = {
                "type": "email",
                "email": email,
                "PLAINTEXT_pw": password
            }
            console.log(prep_loginInfo)
        }
        if (e.currentTarget.id === 'guest') {
            prep_loginInfo = {
                "type": 'email',
                "email": 'guest@example.com',
                "PLAINTEXT_pw": 'guest',
            }
            console.log(prep_loginInfo)
        }

        // Call Login action creator
        props.a_login(prep_loginInfo)
        .then(() => {
            props.history.push("/")
        }) 
    }

    // Return
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
            <div className={classes.paper}>
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
                <Grid 
                    container
                    justify="space-between"
                    alignItems="center"
                >
                    <Button 
                        className={classes.submit}
                        onClick={() => props.history.push("/register")} 
                    >
                        {"Don't have an account?"}
                    </Button>
                    <Button 
                        id='guest'
                        onClick={runLogin}
                        className={classes.submit}
                    >
                        {"Sign in as a guest!"}
                    </Button>
                </Grid>
                </form>
            </div>
        </Container>
    );
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