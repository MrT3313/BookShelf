// IMPORTS
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS
import EnhancedTable from '../components/loggedBooksTable.js'

// Action Creators
import { a_getUserLoggedBooks } from '../redux/actions/a_getUserLoggedBooks.js'
import { a_getLoggedBooks } from '../redux/actions/a_getLoggedBooks.js'

// FUNCTIONS
import decode from '../utils/decode_JWT.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
}))
  
// -C- COMPONENT
function UsersLoggedBooks(props) {
// console.log('ReadBooks PROPS:', props)
const {
    a_getUserLoggedBooks, a_getLoggedBooks,

    token, 
    usersLoggedBooks,
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // UseEffect
    useEffect(() => {
    let userID = undefined
    // -- //
        // get userID
            const decodedToken = decode(token)
            // console.log(decodedToken)
            userID = decodedToken.user_ID
            // console.log(userID)

        // Call  Action Creators
        a_getLoggedBooks()
        a_getUserLoggedBooks(userID)
    }, [])

    // Methods

    // Return Component
    return (
        <EnhancedTable />
    )
}
// MAP STATE TO PROPS
const mstp = state => {
    return {
        token: state.r_login.token,
        usersLoggedBooks: state.r_loggedBooks.userLoggedBooks
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {
        a_getUserLoggedBooks,
        a_getLoggedBooks,
    }
)(UsersLoggedBooks)