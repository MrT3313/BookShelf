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
import Carousell from './Carousell.js'
import BookCard from './BookCard.js'

// ACTION CREATORS
import { a_UPDATE_listName } from '../redux/actions/a_specificList.js'

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
const {current_listData} = props
console.log(current_listData)
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [list_data, setListData] = useState(props.current_listData)
    const [row_data, setRow_data] = useState([])
    console.log(list_data)
    console.log(row_data)

    // useEffect
    useEffect(() => {
        let all_rows = []
        for (const rowNum of [1,2,3,4,5]){
            console.log(rowNum)
            all_rows.push(filterBooks_forRow(current_listData, rowNum))
        }
        console.log(all_rows)
        setRow_data(all_rows)
    }, [list_data])

    // Methods
    const filterBooks_forRow = (books, rowNum) => {
        let includeRanks = []
        switch(rowNum) {
            case 1:
                includeRanks = [1]
                break
            case 2:
                includeRanks = [2,3]
                break
            case 3:
                includeRanks = [4,5,6]
                break
            case 4:
                includeRanks = [7,8,9,10]
                break
            case 5:
                includeRanks = [11,12,13,14,15]
                break
            default:
                console.log('ERROR - unknown row')
                break
        }

        let filtered_book_data =  books.filter(book => includeRanks.includes(book.rank))
        console.log(`'FILTERED BOOK DATA: ${filtered_book_data}`)
        return filtered_book_data
    }
    
    const handleChange = e => {
        console.log(e)
        console.log(e.target)
        a_UPDATE_listName(e.target.value)
    }

    // Return
    if (row_data.length != 0) {
        return (
            <div className={classes.root}>
                <FormControl className={classes.listSelection}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Active NYT Bestseller List
                    </InputLabel>
                    <Select
                        value={props.current_listName}
                        onChange={handleChange}
                        displayEmpty
                    >
                        {props.allLists.map((list, key) => {
                            // console.log(list);
                            return (
                                <MenuItem key={key} value={list.list_name}>{list.list_name}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                
                
                <Carousell data={row_data[0]} row={1}/>
                <Carousell data={row_data[1]} row={2}/>
                <Carousell data={row_data[2]} row={3}/>
                <Carousell data={row_data[3]} row={4}/>
                <Carousell data={row_data[4]} row={5}/>
            </div>
        )
    } else {
        return (<div>WTF is going on</div>)
    }
}    



    

//     // Returned Component
//     return (
//         <div className={classes.root}>

//             {/* TODO: Should this be wrapped in a <Paper /> */}
//             {/* <Paper className={classes.paper}> */}
//                 {/* // TOP ROW */}
//                 <div className={classes.row}>
//                     {current_list.books && 
//                         current_list.books.filter(book => [1].includes(book.rank)).map((item, key) => {
//                             console.log('TOP ROW')
//                             console.log(item)

//                             return (
//                                 <BookCard bookInfo={item}/>
//                             )
//                         })
//                     }
//                 </div>
//                 {/* WIP -- WIP -- WIP -- WIP -- WIP -- WIP -- WIP -- WIP */}
//                 {/* WIP -- WIP -- WIP -- WIP -- WIP -- WIP -- WIP -- WIP */}
//                 {/* WIP -- WIP -- WIP -- WIP -- WIP -- WIP -- WIP -- WIP */}

//                 {current_list.books && 
//                     <div className={classes.row}>
//                             <Carousell book_data={filterBooks_forRow(current_list.books, 2)}/>
//                     </div>
//                 }

//                 <div className={classes.row}>
//                     {current_list.books && 
//                         current_list.books.filter(book => [2,3].includes(book.rank)).map((item, key) => {
//                             console.log('SECOND ROW')
//                             console.log(item)
                            
//                             return (
//                                 <BookCard bookInfo={item}/>
//                                 )
//                             })
//                         }
//                 </div>

//                 {/* WIP -- WIP -- WIP -- WIP -- WIP -- WIP -- WIP -- WIP */}
//                 {/* WIP -- WIP -- WIP -- WIP -- WIP -- WIP -- WIP -- WIP */}
//                 {/* WIP -- WIP -- WIP -- WIP -- WIP -- WIP -- WIP -- WIP */}
//                 <div className={classes.row}>
//                     {current_list.books && 
//                         current_list.books.filter(book => [4,5,6].includes(book.rank)).map((item, key)=> {
//                             console.log('THIRD ROW')
//                             console.log(item)

//                             return (
//                                 <BookCard bookInfo={item}/>
//                             )
//                         })
//                     }
//                 </div>
//                 <div className={classes.row}>
//                     {current_list.books && 
//                         current_list.books.filter(book => [7,8,9,10].includes(book.rank)).map((item, key)=> {
//                             console.log('FOURTH ROW')
//                             console.log(item)

//                             return (
//                                 <BookCard bookInfo={item}/>
//                             )
//                         })
//                     }
//                 </div>
//                 <div className={classes.row}>
//                     {current_list.books && 
//                         current_list.books.filter(book => [11,12,13,14,15].includes(book.rank)).map((item, key)=> {
//                             console.log('FIFTH ROW')
//                             console.log(item)

//                             return (
//                                 <BookCard bookInfo={item}/>
//                             )
//                         })
//                     }
//                 </div>
//             {/* </Paper> */}
//             {/* Data Attribution */}
//             <div className={classes.dataAttribution}>
//                 <img 
//                     src={NYT_credit}
//                     alt='NYT_dataAttribution'
//                 />
//             </div>
//         </div>
//     )
// }

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
        a_UPDATE_listName
    }
)(Top10)