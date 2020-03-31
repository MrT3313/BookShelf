// IMPORTS
import React, { useState } from 'react'
import { withRouter } from 'react-router'

// MATERIAL UI
// -1- Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS

// ACTION CREATORS
import { a_logout } from '../redux/actions/a_logout.js'

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
function Menu_AppBar(props) {
// console.log('Menu_AppBar Props: ', props)
// -- //
    // Styles
    const classes = useStyles();

    // State 
    const [auth, setAuth] = useState(true);
    const [menuToggle, setMenuToggle] = useState(false)
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
        <div>
            <AppBar position='static' className={classes.root}>
                <Toolbar>
                    {/* <IconButton aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" className={classes.title} onClick={() => props.history.push('/')}>
                        BookShelf
                    </Typography>

                    {auth && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                // onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle 
                                    onClick={handleClick}
                                />
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
                            {/* <Menu
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem 
                                    // onClick={handleClose}
                                >Profile</MenuItem>
                                <MenuItem 
                                    // onClick={handleClose}
                                >My account</MenuItem>
                            </Menu> */}
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}


// MAP STATE TO PROPS
const mstp = state => {
    return {

    }
}

// CONNECT & Export & withRouter (so we can access props.history)
export default withRouter(
    connect(
        mstp,
        {
            a_logout
        }
    )(Menu_AppBar)
)


