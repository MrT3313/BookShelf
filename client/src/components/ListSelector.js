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
import API_dataAttribution from './API_DataAttribution.js'

// ACTION CREATORS
import {a_getSpecificList} from '../redux/actions/GET/a_getSpecificList.js'


// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles( theme => ({
    listSelection__root: {
        backgroundColor: theme.palette.secondary.main,
        
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',

        width: '100%',

        paddingTop: '10px',
        paddingBottom: '10px',

    },
    listSelection__FormControl: {
        width: '40%',
    },
    // listName: {
    //     color: 'white',
    //     fontWeight: "bold",

    //     "&MuiSelect-icon": {
    //         color: 'white'
    //     }
    // },
    listName: {
        fontWeight: "bold",
        color: 'white',
        '&:before': {
            color: theme.palette.secondary.main,
        },
        '&:after': {
            borderColor: theme.palette.primary.main,
        }
    },
}))

// -B- COMPONENT
function ListSelector(props){
// console.log('listSelector PROPS: ', props)
const { a_getSpecificList } = props
// -- //
    // Styles
    const classes = useStyles()

    // Methods
    const handleChange = e => {
        setListName(e.target.value)
    }

    // State
    const [listName, setListName] = useState(props.listName)

    // UseEffect
    useEffect(() => {
        // console.log('TOP 10 USE EFFECT')
            async function fetchData(){
                await a_getSpecificList('current', listName)
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
                    className={classes.listName}
                >
                    {props.allLists.map((list, key) => {
                        // console.log(list);
                        return (
                            <MenuItem key={key} value={list.list_name}>{list.list_name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>

            <API_dataAttribution />
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
        a_getSpecificList
    }
)(ListSelector)