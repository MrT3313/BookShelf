// IMPORTS
import React from 'react';
import { connect } from 'react-redux'

// COMPONENTS
import TabPanel from './Panel.js'
import BookCard from '../BookCard.js'

// MATERIAL UI
// -1- Components
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// -2- Styles
import { makeStyles } from '@material-ui/core/styles';


// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    '& .MuiTab-root': {
        minWidth: '10px',
        marginLeft: '10px',
        color: theme.palette.primary.main,
    },
    '& .MuiTabs-scroller': {
        display: 'flex',
        justifyContent: 'center',
    }
  },
  rankSelector: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  }
}));

function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <AppBar 
            position="static" color="default" className={classes.rankSelector}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="on"
                aria-label="scrollable auto tabs example"
            >
                {props.current_listData.map((item,key) => {
                    let prepLabel = `#${item.rank}`
                    return <Tab key={key} label={prepLabel} {...a11yProps(key)}/>
                })}
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <BookCard bookInfo={props.current_listData[0]} />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <BookCard bookInfo={props.current_listData[1]} />
        </TabPanel>
        <TabPanel value={value} index={2}>
            <BookCard bookInfo={props.current_listData[2]} />
        </TabPanel>
        <TabPanel value={value} index={3}>
            <BookCard bookInfo={props.current_listData[3]} />
        </TabPanel>
        <TabPanel value={value} index={4}>
            <BookCard bookInfo={props.current_listData[4]} />
        </TabPanel>
        <TabPanel value={value} index={5}>
            <BookCard bookInfo={props.current_listData[5]} />
        </TabPanel>
        <TabPanel value={value} index={6}>
            <BookCard bookInfo={props.current_listData[6]} />
        </TabPanel>
        <TabPanel value={value} index={7}>
            <BookCard bookInfo={props.current_listData[7]} />
        </TabPanel>
        <TabPanel value={value} index={8}>
            <BookCard bookInfo={props.current_listData[8]} />
        </TabPanel>
        <TabPanel value={value} index={9}>
            <BookCard bookInfo={props.current_listData[9]} />
        </TabPanel>
        <TabPanel value={value} index={10}>
            <BookCard bookInfo={props.current_listData[10]} />
        </TabPanel>
        <TabPanel value={value} index={11}>
            <BookCard bookInfo={props.current_listData[11]} />
        </TabPanel>
        <TabPanel value={value} index={12}>
            <BookCard bookInfo={props.current_listData[12]} />
        </TabPanel>
        <TabPanel value={value} index={13}>
            <BookCard bookInfo={props.current_listData[13]} />
        </TabPanel>
        <TabPanel value={value} index={14}>
            <BookCard bookInfo={props.current_listData[14]} />
        </TabPanel>
    </div>
  );
}

// EXPORT
// MAP STATE TO PROPS
const mstp = state => {
    return {
        current_listData: state.r_specificList.listData,
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        
    }
)(ScrollableTabsButtonAuto)