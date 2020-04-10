import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

// ----- ----- ----- ----- ----- ----- ----- ----- ----- //
// ----- ----- ----- ----- ----- ----- ----- ----- ----- //

// Styles
const useStyles = makeStyles((theme) => ({
    tableHead__root: {
        
    },
    sortLabel: {
        display: 'flex',
        justifyContent: 'center',

        marginTop: "10px",
        marginBottom: "10px",

        fontWeight: 'bold',
    }
}));
  
export function EnhancedTableHead(props) {
const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
// -- // 
    // Styles
    const classes = useStyles();

    // Data
    const headCells = [
        { id: 'order', numeric: false, disablePadding: true, label: 'Order' },
        { id: 'title', numeric: false, disablePadding: true, label: 'Title' },
        { id: 'author', numeric: true, disablePadding: false, label: 'Author' },
    ];

    //  Methods
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    // Return
    return (
        <TableHead className={classes.tableHead__root}>
            <TableRow>
                <TableCell padding="checkbox">
                    {/* TODO: Table Interactions */}
                    {/* <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all logs' }}
                    /> */}
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'center'}
                        padding={'none'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                            className={classes.sortLabel}
                            hideSortIcon={true}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
  
EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};