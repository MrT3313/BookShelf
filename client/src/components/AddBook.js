// IMPORTS 
import React, {useState, useEffect} from 'react'

// MATERIAL UI
// -1- Components
import { Card } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import AddBoxIcon from '@material-ui/icons/AddBox';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// ACTION CREATORS

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    addBook_root: {
        display: 'flex',
        flexDirection: 'column',

        width: '100%',

        padding: '20px'
    },
    top: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    drawerOption: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',

        backgroundColor: theme.palette.secondary.main,

        width: '40%',
    },
    addButton: {
        display: 'flex',

        fontSize: '40px',
        // backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.primary.main,
        flexGrow: 1,
    }
}))

// -B- COMPONENT
function AddBook(props) {
console.log('Add Book PROPS: ', props)
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [is_adding, setIs_adding] = useState(false)

    // Return
    return (
        <Paper
            className={classes.addBook_root}
        >
            <div className={classes.top}>
                <Card 
                    className={`${classes.addBook} ${classes.drawerOption}`}
                    onClick={() => setIs_adding(!is_adding)}
                >
                    <AddBoxIcon className={classes.addButton}/>
                    <div className={classes.title}>
                        Add Book
                    </div>
                </Card>
                <Card 
                    className={`${classes.addReview} ${classes.drawerOption}`}
                    onClick={() => setIs_adding(!is_adding)}
                >
                    <AddBoxIcon className={classes.addButton}/>
                    <div className={classes.title}>
                        Add Review
                    </div>
                </Card>
            </div>
            { is_adding &&
                <div className={classes.bottom}>
                    BOTTOM
                </div>
            }
        </Paper>
    )
}

// EXPORTS
export default AddBook