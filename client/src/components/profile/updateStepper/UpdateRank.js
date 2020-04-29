// IMPORTS 
import React, {useState, useEffect} from 'react'
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

// ACTION CREATORS


// FUNCTIONS
import decode from '../../../utils/decode_JWT.js'

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
    // Styles
    const classes = useStyles({})

    // State
    const [rank, setRank] = useState()

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
                        
                        // defaultValue={selectedData.title}
                        variant="outlined"
                        // id="review" label="Update Review" name="review"
                        id="review" name="review"
                        onChange={e => setRank(e.target.value)}
                        margin="normal"
                        // fullWidth
                    />
                </ListItem>
                <ListItem >
                    <ListItemText >
                        RANK
                    </ListItemText>
                    <Divider className={classes.divider} orientation="vertical" flexItem />
                    <TextField
                        variant="outlined"
                        // defaultValue={selectedData.rank}
                        // id="rank" label="Update Rank" name="rank"
                        id="rank" name="rank"
                        type="number"
                        onChange={e => setRank(e.target.value)}
                        // margin="normal"
                        // fullWidth
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