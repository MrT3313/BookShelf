// IMPORTS
import React from 'react'

// MATERIAL UI
// -1- Components
import Typography from '@material-ui/core/Typography';
// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// LOADER
import Loader from 'react-loader-spinner'


// __ MAIN __
// -A- STYLES
const useStyles = makeStyles((theme) => ({
    loaderContainer: {
        display: 'flex', 
        flexDirection:'column', 
        justifyContent:'center', 
        alignItems:'center'
    },
    loader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        marginTop: '50px',
        marginBottom: '20px',
    }
}))

// -B- COMPONENT
function LoginLoader(){
    // Styles
    const classes = useStyles();

    return (
        <div 
            className={classes.loaderContainer}
        >
            <div className={classes.loader}>
                <Loader type='Puff' color='#00BCD4'/>
            </div>
            <Typography
                variant="h4"
            >Logging In...</Typography>
        </div>
    )
}

// EXPORTS
export default LoginLoader