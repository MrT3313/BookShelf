// IMPORTS
import React from 'react';
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


// COMPONENTS
import { EnhancedTableHead } from './TableHead.js'
import { EnhancedTableToolbar } from './TableToolBar.js'

// ----- ----- ----- ----- ----- ----- ----- ----- ----- //
// ----- ----- ----- ----- ----- ----- ----- ----- ----- //

// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

    margin: '20px',
  },
  paper: {
    width: '100%',
  },
  table: {
    minWidth: 750,
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
  userLogs,
  setUserLogIndex, 
} = props
// console.log('userLogs',userLogs)
// -- // 
  // State
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const months = {
      0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun',
      6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec'
    }
  
  // Styles
    const classes = useStyles();

  // ---- DATA ----  //
  // ---- DATA ----  //
    // V2 - create data
    function createData(item, key) {
      let date = new Date(item.created_at)

      const dataPrep = { 
        logID: item.logID,
        date: date,
        key: key + 1,
        title: item.title, 
        author: item.author,
      }

      // Return
      return dataPrep
    }

    const rows = userLogs.map((item,key) => {
      return createData(item, key)
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
    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = rows.map((n) => n.name);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };

    const handleClick = (event, key) => {
      const multiSelect = false
      const selectedIndex = selected.indexOf(key);

      let newSelected = [];
      if (multiSelect) {
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, key);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
      } else {
        newSelected = [key,]
      }

      console.log(newSelected)

      setUserLogIndex(newSelected.map(index => index - 1).sort())
      setSelected(newSelected);
    };

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

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
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
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
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
                      onClick={(event) => handleClick(event, row.key)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.key}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        {/* TODO: Table Interaction */}
                        {/* <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        /> */}
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none" align="center">
                        {`${row.date.getMonth() + 1} / ${row.date.getFullYear()}`}
                      </TableCell>
                      <TableCell padding="none" align="center">{row.title}</TableCell>
                      <TableCell padding="none" align="center">{row.author}</TableCell>
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
    userLogs: state.r_loggedBooks.userLoggedBooks,
  }
}

// CONNECT & EXPORT
export default connect(
  mstp, 
  {
      
  }
)(UserLogTable)