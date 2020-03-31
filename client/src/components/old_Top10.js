// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// IMAGES
import NYT_credit from '../assets/NYT_dataAttribution.png'

// MATERIAL UI
// -1- Components


// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS
// import Carousell from './Carousell.js'
import BookCard from './BookCard.js'

// ACTION CREATORS

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
// console.log('Top10 PROPS:', props)
const {current_listData} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [list_data, setListData] = useState(props.current_listData)
    const [row_data, setRow_data] = useState([])

    // useEffect
    useEffect(() => {
        let all_rows = []
        for (const rowNum of [1,2,3,4,5]){
            all_rows.push(filterBooks_forRow(current_listData, rowNum))
        }
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
        // props.a_UPDATE_listName(e.target.value)
    }

    return (

        <div>this is the top 6</div>
    )
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
        
    }
)(Top10)