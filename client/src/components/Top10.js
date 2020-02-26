// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components
import { Card, Paper } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS

// ACTION CREATORS
import { a_GETspecific_list } from '../redux/actions/a_lists.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles({
    root: {
        backgroundColor: 'orange',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paper: {
        height: '100px',
        width: '100px',
        backgroundColor: 'blue',
    }, 
    card: {
        color: 'teal',
    },
    listSelection: {
        width: '60%',
        height: '50px',
    }

})

// -B- COMPONENT
function Top10(props) {
console.log('Top10 PROPS:', props)

    // Styles
    const classes = useStyles()

    // State
    const [activeList, setActiveList] = useState("Combined Print and E-Book Nonfiction")
    
    useEffect(() => {
        props.a_GETspecific_list('current', activeList)
    },[activeList])

    // Methods
    const handleChange = e => {
        setActiveList(e.target.value)
    }

    // Returned Component
    return (
        <div className={classes.root}>
            <FormControl className={classes.listSelection}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    Active NYT Bestseller List
                </InputLabel>
                <Select
                    onChange={handleChange}
                    renderValue={() => activeList}
                    displayEmpty
                >
                    {props.lists.map( list => {
                        // console.log(list);
                        return (
                            <MenuItem value={list.list_name}>{list.list_name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <Paper className={classes.paper}>
                <Card className={classes.card}>
                    This is a card
                </Card>
            </Paper>
        </div>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        lists: state.r_lists.list_names
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        a_GETspecific_list,
    }
)(Top10)