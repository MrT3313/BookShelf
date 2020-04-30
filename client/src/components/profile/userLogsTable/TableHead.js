// IMPORTS
import React from 'react';
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Styles
import { makeStyles } from '@material-ui/core/styles';
// -2- Components
import AddBoxIcon from '@material-ui/icons/AddBox';

// COMPONENTS
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

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
    },
}));
  
function EnhancedTableHead(props) {
const { 
    order, orderBy,         // Table
    onRequestSort,          // Table
    setAddType,            // Passed Props

} = props;
// -- // 
    // Styles
    const classes = useStyles();

    // Data
    const headCells = [
        { id: 'date', numeric: true, disablePadding: true, label: 'Log Date' },
        { id: 'title', numeric: false, disablePadding: true, label: 'Title' },
        { id: 'author', numeric: true, disablePadding: false, label: 'Author' },
        { id: 'rank', numeric: true, disablePadding: false, label: 'Rank' },
    ];

    //  Methods
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    // Return
    return (
        <TableHead className={classes.tableHead__root}>
            <TableRow>
                <TableCell padding={"none"}>
                    <div
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    >
                        <AddBoxIcon onClick={() => setAddType('addBook')}/> 
                    </div>
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

// MAP STATE TO PROPS
const mstp = state => {
    return {

    }
}
        
// CONNECT & EXPORT
export default connect(
    mstp,
    {

    }
)(EnhancedTableHead)
