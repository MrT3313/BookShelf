// IMPORTS 
import React from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS
import BookCard from '../../BookCard.js'

// __MAIN__
// -A- STYLES
const TabPanel_style = makeStyles(theme => ({
  TabPanel_Typography: {
    backgroundColor: theme.palette.primary.main,

    width: '100%',
    // height: '100%',

    margin: '10px',
  },
  TabPannel_BOX: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '20px',
    // marginBottom: '20px',
    height: '100%'
  }
    
}))

// -B- COMPONENT
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
        {/* {value === index && <div p={3} className="thisFucker">{children}</div>} */}
      </Typography>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const VerticalTabs_style = makeStyles(theme => ({
    verticalTabs__root: {
      // flexGrow: 1,
      // backgroundColor: theme.palette.background.paper,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      display: 'flex',

      // justifyContent: 'center',
      // alignItems: 'center',

      height: 350,
      // width: '100%',
      // border: `1px solid pink`
    },
    tabs: {
      display: 'flex',
      jusitfyContent: 'center',
      borderRight: `1px solid ${theme.palette.divider}`,
      maxWidth: '100px',
      

      '& .MuiTab-root': {
        minWidth: '10px',
        marginLeft: '10px',
      }
    },

  }));
  
//   export default function VerticalTabs() {
  function VerticalTabs(props) {
    const classes = VerticalTabs_style();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.verticalTabs__root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
            {props.current_listData.map((item,key) => {
                let prepLabel = `#${item.rank}`
                return <Tab key={key} label={prepLabel} {...a11yProps(key)}/>
            })}
        </Tabs>
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

// MAP STATE TO PROPS
const mstp = state => {
    return {
        current_listName: state.r_specificList.listName,
        current_listData: state.r_specificList.listData,
        allLists: state.r_lists.list_names,
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        
    }
)(VerticalTabs)