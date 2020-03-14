// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// IMAGES
import NYT_credit from '../assets/NYT_dataAttribution.png'

// MATERIAL UI
// -1- Components
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// -2- Styles
// import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS
import BookCard from './BookCard.js'

// ACTION CREATORS
import { a_GETspecific_list } from '../redux/actions/a_lists.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paper: {
        marginTop: '15px',
        marginBottom: '15px',
    }, 
    row: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    card: {
        color: 'teal',
    },
    listSelection: {
        minWidth: '60%',
        marginTop: '15px',
        marginBottom: '15px',
    },
    dataAttribution: {
        marginBottom: '15px'
    }
}))

// -B- COMPONENT
function Top10(props) {
console.log('Top10 PROPS:', props)
const { default_searchList,  default_searchDate,                // Passed w/ passed props
        lists, current_list,                        } = props   // Passed w/ Connect

    // Styles
    // const theme = useTheme()
    const classes = useStyles({})

    // State
    const [activeList_name, setActiveList_name] = useState(default_searchList)
    const [activeSearch_date, setActiveSearch_date] = useState(default_searchDate)
    
    useEffect(() => {
    console.log('TOP 10 USE EFFECT')
        async function fetchData(){
            await props.a_GETspecific_list(activeSearch_date, activeList_name)
        }
        fetchData()
    },[activeList_name, activeSearch_date]) // eslint-disable-next-line no-use-before-define

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
            {/* TODO: Should this be wrapped in a <Paper /> */}
            {/* <Paper className={classes.paper}> */}
                {/* // TOP ROW */}
                <div className={classes.row}>
                    {current_list.books && 
                        current_list.books.filter(book => [1].includes(book.rank)).map(item => {
                            console.log('TOP ROW')
                            console.log(item)

                            return (
                                <BookCard bookInfo={item}/>
                            )
                        })
                    }
                </div>
                <div className={classes.row}>
                    {current_list.books && 
                        current_list.books.filter(book => [2,3].includes(book.rank)).map(item => {
                            console.log('SECOND ROW')
                            console.log(item)

                            return (
                                <BookCard bookInfo={item}/>
                            )
                        })
                    }
                </div>
                <div className={classes.row}>
                    {current_list.books && 
                        current_list.books.filter(book => [4,5,6].includes(book.rank)).map(item => {
                            console.log('THIRD ROW')
                            console.log(item)

                            return (
                                <BookCard bookInfo={item}/>
                            )
                        })
                    }
                </div>
                <div className={classes.row}>
                    {current_list.books && 
                        current_list.books.filter(book => [7,8,9,10].includes(book.rank)).map(item => {
                            console.log('FOURTH ROW')
                            console.log(item)

                            return (
                                <BookCard bookInfo={item}/>
                            )
                        })
                    }
                </div>
                <div className={classes.row}>
                    {current_list.books && 
                        current_list.books.filter(book => [11,12,13,14,15].includes(book.rank)).map(item => {
                            console.log('FIFTH ROW')
                            console.log(item)

                            return (
                                <BookCard bookInfo={item}/>
                            )
                        })
                    }
                </div>
            {/* </Paper> */}
            {/* Data Attribution */}
            <div className={classes.dataAttribution}>
                <img 
                    src={NYT_credit}
                    alt='NYT_dataAttribution'
                />
            </div>
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