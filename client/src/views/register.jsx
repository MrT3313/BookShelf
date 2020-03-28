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
import { a_register } from '../redux/actions/a_register.js'


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
    margin: theme.spacing(3, 0, 2),
  },
}));

function Register(props) {
    // Styles
    const classes = useStyles();

    // State
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    // Methods
    const submit = e => {
        e.preventDefault()
        console.log('TRYING TO REGISTER!')

        // Prep Register Info
        let prep_registerInfo = {
            // "f_name": f_name,
            // "l_name": l_name,
            "username": username,
            "email": email,
            "PLAINTEXT_pw": password
        }
        console.log(prep_registerInfo)

        // Call Login action creator
        props.a_register(prep_registerInfo)
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
                    Register
                </Typography>
                <form 
                    className={classes.form} 
                    noValidate
                    onSubmit={submit}
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
                        
                        id="username" label="Username" name="username" type="username"
                        onChange={e => setUsername(e.target.value)}

                        margin="normal"
                        fullWidth
                        autoComplete="current-password"
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
                        type="submit"
                        
                        fullWidth
                        color="primary"
                        className={classes.submit}
                    >
                        Register
                    </Button>
                    <Grid container>
                        <Button onClick={() => props.history.push("/login")}>
                            {"Already have an account?"}
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
        a_register
    }
)(Register)