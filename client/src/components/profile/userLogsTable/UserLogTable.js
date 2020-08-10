// IMPORTS
import React from 'react';
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Styles
import { makeStyles } from '@material-ui/core/styles';
// -2- Components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

// COMPONENTS
import EnhancedTableHead from './TableHead.js'
// import { EnhancedTableToolbar } from './TableToolBar.js'

// ACTION CREATOR
import { a_deleteLog } from '../../../redux/actions/DEL/a_deleteLog.js'
import { a_getReviews } from '../../../redux/actions/GET/a_getReviews.js'
import { a_getLoggedBooks } from '../../../redux/actions/GET/a_getLoggedBooks.js'
import { a_getRanks } from  '../../../redux/actions/GET/a_getRanks.js'

// FUNCTIONS
import decode from '../../../utils/decode_JWT.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '45%',
    height: '100%',
  },
  paper: {
    width: '100%',
  },
  table: {
    minWidth: '100%',
    tableLayout: 'auto'
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  pagination: {
    marginTop: '10px',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    borderRadius: '0 0 5px 5px',
  }
}));

// __MAIN__
function UserLogTable(props) {
console.log('UserLogTable: ', props)
const { 
  userLogs, userRanks,
  setSelected_logID,                // Passed Props
  setAddType,                       // Pass Through to open add book
  setIsEditing,                     // Pass Through to edit LogID

  token,
  a_deleteLog,                    // Action Creator
  a_getReviews,                         // After ^^
  // a_getLoggedBooks,                     // After ^^
  a_getRanks,                           // After ^^
} = props
// console.log('userLogs',userLogs)
// -- // 
  // Styles
    const classes = useStyles();

  // State
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('rank');
    // const [selected, setSelected] = React.useState([]);
    const [selected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const months = {
      0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun',
      6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec'
    }

  // UseEffect 
  // useEffect(() => {
  //   if (selected_logID) {
  //       // console.log('EXPLORE SELECTED LOG_ID')
  //       setAddtype(false)
  //   }
  // }, [selected_logID])

  // ---- DATA ----  //
  // ---- DATA ----  //
    // V2 - create data
    function createData(item, key, rank=false) {
      // console.log('CREATE DATA: ')
      // console.log(item)
      // console.log(key)
      // console.log(rank)

      let date = new Date(item.created_at)

      const dataPrep = { 
        logID: item.logID,
        date: date,
        key: key + 1,
        title: item.title, 
        author: item.author,
        rank: rank,
      }
      console.log("DATA PREP: ", dataPrep)

      // Return
      return dataPrep
    }

    const rows = userLogs.map((item,key) => {
      // console.log(item)
      console.log('!!!***', userRanks)

      let filtered = userRanks.filter(rank => rank.logID === item.logID)
      // console.log('FILTERED RANKS by Log ID', filtered)

      if (filtered.length === 0) {
        return createData(item, key)
      } else {
        return createData(item, key, filtered[0].rank)
      }
    })

  // ---- DATA ----  //
  // ---- DATA ----  //
  // ---- COMPARISON ---- //
  // ---- COMPARISON ---- //
    function descendingComparator(a, b, orderBy) {
      if (b[orderBy] < a[orderBy]) {
        return -1;
      }
      if (b[orderBy] > a[orderBy]) {
        return 1;
      }
      return 0;
    }
    
    function getComparator(order, orderBy) {
      return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
    }
  
    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  // ---- COMPARISON ---- //
  // ---- COMPARISON ---- //
  // ---- SELECTION ---- //
  // ---- SELECTION ---- //
    // const handleSelectAllClick = (event) => {
    //   if (event.target.checked) {
    //     const newSelecteds = rows.map((n) => n.name);
    //     setSelected(newSelecteds);
    //     return;
    //   }
    //   setSelected([]);
    // };

    const handleClick = (e, rowData) => {
      // console.log(rowData)
      const newSelected = rowData.logID
      // console.log(newSelected)

      setIsEditing(false)
      setSelected_logID(newSelected)
    };

    const handleEdit = (e, rowData) => {
      e.stopPropagation()
      // console.log(rowData)
      async function updateSelectedLog() {
        await setSelected_logID(rowData.logID)
      }
      updateSelectedLog()
      setIsEditing(true)
    }

    const handleDelete = (e, rowData) => {
      e.stopPropagation()

      const userID = decode(token).user_ID

      // console.log(rowData)
      async function deleteFlow() {
        await a_deleteLog(userID, rowData.logID)
      }
      deleteFlow()
      a_getReviews()
      a_getRanks()
      setSelected_logID(false)
    }

    const isSelected = (name) => selected.indexOf(name) !== -1;
  // ---- SELECTION ---- //
  // ---- SELECTION ---- //
  // ---- PAGE / ROWS ---- //
  // ---- PAGE / ROWS ---- //
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  // ---- PAGE / ROWS ---- //
  // ---- PAGE / ROWS ---- //

  // Return
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'small'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              // onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              setAddType={setAddType}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  
                  console.log('ROW!!!',row)

                  const isItemSelected = isSelected(row.key);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.key}
                      selected={isItemSelected}
                    >
                      <TableCell padding={"none"}>
                        <div style={{display: 'flex', flexDirection:'center', justifyContent: 'center', alignItems: 'center'}}>
                          <EditIcon 
                            style={{ fontSize: 20 }}
                            onClick={(e) => handleEdit(e,row)} 
                          />
                          <DeleteForeverIcon 
                            style={{ fontSize: 20 }}
                            onClick={(e) => handleDelete(e,row)}
                          />
                        </div>
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none" align="center">
                        {`${months[row.date.getMonth()]} - ${row.date.getFullYear()}`}
                      </TableCell>
                      <TableCell padding="none" align="center">{row.title}</TableCell>
                      <TableCell padding="none" align="center">{row.author}</TableCell>
                      
                      {/* TODO: UPDATE RANK DATA */}
                      {row.rank !== false &&
                        <TableCell padding="none" align="center">{row.rank}</TableCell>
                      }
                      {row.rank === false &&
                        <TableCell padding="none" align="center">~</TableCell>
                      }
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          className={classes.pagination}
        />
      </Paper>
    </div>
  );
}

// MAP STATE TO PROPS
const mstp = state => {
  return {
    userLogs: state.r_loggedBooks.USER_LoggedBooks,
    userRanks: state.r_ranks.USER_ranks, 
    token: state.r_auth.token,
    selectedLogData: state.r_selectedLog.selectedLog,
  }
}

// CONNECT & EXPORT
export default connect(
  mstp, 
  {
    a_deleteLog,        // Initiate Delete
    a_getReviews,           // AFTER ^^ 
    a_getLoggedBooks,       // AFTER ^^ 
    a_getRanks,             // AFTER ^^ 
  }
)(UserLogTable)