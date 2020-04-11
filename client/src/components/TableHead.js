import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

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
        { id: 'date', numeric: true, disablePadding: true, label: 'Log Date' },
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
