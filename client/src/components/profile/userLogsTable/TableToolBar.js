// IMPORTS
import React from 'react';

// MATERIAL UI
// -1- Styles
import { lighten, makeStyles } from '@material-ui/core/styles';

// -2- Components
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// STYLES
const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,

      borderRadius: '5px 5px 0 0',
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
}));

// __MAIN__ 
export function EnhancedTableToolbar(props) {
const { numSelected } = props;
// -- //
  // Styles
  const classes = useToolbarStyles();

  // Return
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
      >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Your Logged Books!
        </Typography>
      )}

      {numSelected > 0 &&
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
              <DeleteIcon />
          </IconButton>
        </Tooltip>
      }
    </Toolbar>
  );
};
  
