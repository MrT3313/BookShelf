// IMPORTS
import React, { useState } from 'react'
import { withRouter } from 'react-router'

// MATERIAL UI
// -1- Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS

// ACTION CREATORS
import { a_logout } from '../../redux/actions/auth/a_logout.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles( theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
    },
    title: {
        flexGrow: 1
    }
}))

// -B- COMPONENT
function MenuAppBar(props) {
// console.log('Menu_AppBar Props: ', props)
// -- //
    // Styles
    const classes = useStyles();

    // State 
    // const [auth, setAuth] = useState(true);
    const [auth] = useState(true);
    // const [menuToggle, setMenuToggle] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);

    // Methods
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    // Returned Component
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Typography variant="h6" className={classes.title} onClick={() => props.history.push('/')}>
                    BookShelf
                </Typography>

                {auth && (
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleClick}
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => props.history.push('/profile')}>Profile</MenuItem>
                            <MenuItem onClick={() => props.history.push('/account')}>My account</MenuItem>
                            <MenuItem onClick={() => props.a_logout()}>Logout</MenuItem>
                        </Menu>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    )
}


// MAP STATE TO PROPS
const mstp = state => {
    return {}
}

// CONNECT & Export & withRouter (so we can access props.history)
export default withRouter(
    connect(
        mstp,
        {
            a_logout
        }
    )(MenuAppBar)
)


