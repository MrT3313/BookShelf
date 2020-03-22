// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS

// ACTION CREATORS
import {a_GETspecific_list} from '../redux/actions/a_specificList.js'


// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles( theme => ({
    listSelection__root: {
        backgroundColor: theme.palette.secondary.main,
        
        display: 'flex',
        justifyContent: 'center',

        width: '100%',

        paddingTop: '10px',
        paddingBottom: '10px',

    },
    listSelection__FormControl: {
        minWidth: '50%',
        maxWidth: '90%',
    },
}))

// -B- COMPONENT
function ListSelector(props){
console.log('listSelector PROPS: ', props)
// -- //
    // Styles
    const classes = useStyles()

    // Methods
    const handleChange = e => {
        console.log(e)
        console.log(e.target)
        setListName(e.target.value)
    }

    // state
    const [listName, setListName] = useState(props.listName)

    useEffect(() => {
        console.log('TOP 10 USE EFFECT')
            async function fetchData(){
                await props.a_GETspecific_list('current', listName)
                setListName(listName)
            }
            fetchData()
    // eslint-disable-next-line no-use-before-define
    },[listName]) 

    // Return
    return (
        <div className={classes.listSelection__root}>
            <FormControl className={classes.listSelection__FormControl}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    Active NYT Bestseller List
                </InputLabel>
                <Select
                    value={listName}
                    onChange={handleChange}
                    displayEmpty
                >
                    {props.allLists.map((list, key) => {
                        // console.log(list);
                        return (
                            <MenuItem value={list.list_name}>{list.list_name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </div>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        allLists: state.r_lists.list_names,
        listName: state.r_specificList.listName,
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        a_GETspecific_list
    }
)(ListSelector)