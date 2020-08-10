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
    minWidth: '50%',
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
const { 
  userLogs, userRanks,
  setSelected_logID,                
  setAddType,                       
  setIsEditing,                     

  token,
  a_deleteLog,                    
  a_getReviews,                         
  a_getRanks,                           
} = props
// -- // 
  // Styles
  const classes = useStyles();
  // State
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('rank');
  const [selected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const months = {
    0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun',
    6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec'
  }

  // Helper Functions
  // - 1 - // Create Data Rows
  const rows = userLogs.map((item,key) => {
    let filtered = userRanks.filter(rank => rank.logID === item.logID)

    if (filtered.length === 0) {
      return createData(item, key)
    } else {
      return createData(item, key, filtered[0].rank)
    }
  })

  // - 2 - // Create Data
  function createData(item, key, rank=false) {
    let date = new Date(item.created_at)
    const dataPrep = { 
      logID: item.logID,
      date: date,
      key: key + 1,
      title: item.title, 
      author: item.author,
      rank: rank,
    }
  return dataPrep}

  // - 3 - // Ranking
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

  // - 4 - // Handle Click
  const handleClick = (e, rowData) => {
    const newSelected = rowData.logID

    setIsEditing(false)
    setSelected_logID(newSelected)
  };

  // - 5 - // Handle Edit
  const handleEdit = (e, rowData) => {
    e.stopPropagation()
    // console.log(rowData)
    async function updateSelectedLog() {
      await setSelected_logID(rowData.logID)
    }
    updateSelectedLog()
    setIsEditing(true)
  }

  // - 6 - // Handle Delete
  const handleDelete = (e, rowData) => {
    e.stopPropagation()

    const userID = decode(token).user_ID
    async function deleteFlow() {
      await a_deleteLog(userID, rowData.logID)
    }

    deleteFlow()
    a_getReviews()
    a_getRanks()
    setSelected_logID(false)
  }

  // - 7 - // Change Page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // - 8 - // Selected
  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Return
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
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
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              setAddType={setAddType}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {

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
    a_deleteLog, 
    a_getReviews,    
    a_getLoggedBooks,
    a_getRanks,      
  }
)(UserLogTable)