// IMPORTS
import React, { useState } from 'react'

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

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles({
    root: {
        // backgroundColor: 'pink',
    },
    title: {
        flexGrow: 1
    }
})

// -B- COMPONENT
function Menu_AppBar() {
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
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
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
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
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

// CONNECT & EXPORT
export default connect(
    mstp,
    {

    }
)(Menu_AppBar)


