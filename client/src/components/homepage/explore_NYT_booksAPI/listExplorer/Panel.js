// IMPORTS 
import React from 'react'

// MATERIAL UI
// -1- Components
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

const TabPanel_style = makeStyles(theme => ({
    TabPanel_Typography: {
      backgroundColor: theme.palette.primary.main,
  
      width: '100%',
      height: '100%',
  
      margin: '10px',
    },
    TabPannel_BOX: {
      padding: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
}))

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = TabPanel_style();
    return (
        <Typography
            className={classes.TabPanel_Typography}
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3} className={classes.TabPannel_BOX}>{children}</Box>}
        </Typography>
    );
}

// EXPORT
export default TabPanel