// IMPORTS 
import React from 'react'
import { connect } from 'react-redux';

// MATERIAL UI
// -1- Components
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    UpdateRank_root: {
        display: 'flex',
        justifyContent: 'center',

        padding: '5px',
    },
    List_root: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    divider: {
        marginRight: "20px",
        marginLeft: "20px",
    },
}))

// -B- COMPONENT
function UpdateRank(props) {
const { 
    setUpdatedRank,
    selectedData 
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // Return
    return (
        <div
            className={classes.UpdateRank_root}
        >
            <List className={classes.List_root}>
                <ListItem > 
                    <ListItemText >
                        TITLE
                    </ListItemText>
                    <Divider className={classes.divider} orientation="vertical" flexItem />

                    <TextField
                        defaultValue={selectedData.title}
                        variant="outlined"
                        id="review" name="review"
                        margin="normal"
                    />
                </ListItem>
                <ListItem >
                    <ListItemText >
                        RANK
                    </ListItemText>
                    <Divider className={classes.divider} orientation="vertical" flexItem />
                    <TextField
                        variant="outlined"
                        defaultValue={selectedData.rank}
                        id="rank" name="rank"
                        type="number"
                        onChange={e => setUpdatedRank(e.target.value)}
                    />
                </ListItem>
            </List>
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
)(UpdateRank)