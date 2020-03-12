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
import BookCard from './BookCard.js'

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
const { default_searchList,  default_searchDate,                // Passed w/ passed props
        lists, current_list,                        } = props   // Passed w/ Connect

    // Styles
    const classes = useStyles()

    // State
    const [activeList_name, setActiveList_name] = useState(default_searchList)
    const [activeSearch_date, setActiveSearch_date] = useState(default_searchDate)
    
    useEffect(() => {
    console.log('TOP 10 USE EFFECT')
        async function fetchData(){
            await props.a_GETspecific_list(activeSearch_date, activeList_name)
        }
        fetchData()
    },[activeList_name, activeSearch_date])

    // Methods
    const handleChange = e => {
        console.log(e)
        console.log(e.target)
        setActiveList_name(e.target.value)
    }

    // Returned Component
    return (
        <div className={classes.root}>
            <FormControl className={classes.listSelection}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    Active NYT Bestseller List
                </InputLabel>
                <Select
                    value={activeList_name}
                    onChange={handleChange}
                    // renderValue={() => activeList_name}
                    // renderValue={activeList_name}
                    displayEmpty
                >
                    {lists.map( list => {
                        // console.log(list);
                        return (
                            <MenuItem value={list.list_name}>{list.list_name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <Paper className={classes.paper}>
                {/* // TOP ROW */}
                {current_list.books && 
                    current_list.books.filter(book => [1].includes(book.rank)).map(item => {
                        console.log('TOP ROW')
                        console.log(item)

                        return (
                            <BookCard bookInfo={item}/>
                        )
                    })
                }
                {current_list.books && 
                    current_list.books.filter(book => [2,3].includes(book.rank)).map(item => {
                        console.log('SECOND ROW')
                        console.log(item)

                        return (
                            <BookCard bookInfo={item}/>
                        )
                    })
                }
            </Paper>
        </div>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        lists: state.r_lists.list_names,
        current_list: state.r_lists.current_list,
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        a_GETspecific_list,
    }
)(Top10)