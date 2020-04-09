// IMPORTS 
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';

// MATERIAL UI
// -1- Components
import Paper from '@material-ui/core/Paper';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS
import AddBook from '../components/AddBook.js'
import AddReview from '../components/AddReview.js'

// ACTION CREATORS
import { a_getBooks } from '../redux/actions/GET/a_getBooks.js'
import { a_getReviews } from '../redux/actions/GET/a_getReviews.js'

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
    addBook_root: {
        display: 'flex',
        flexDirection: 'column',

        width: '100%',
        padding: '20px',
    },
    top: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    bottom: {
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
function AddPannel(props) {
// console.log('Add Book PROPS: ', props)
// const {a_getBooks, a_getReviews} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [is_adding, setIs_adding] = useState(false)

    // UseEffect
    // useEffect(() => {
    //     a_getBooks()
    //     a_getReviews()
    // }, [])

    // Methods
    const toggleAdd = e => {
        // console.log(e.currentTarget.id)
        if (is_adding === e.currentTarget.id) {
            setIs_adding(false)
        // }
        // else if (is_adding !== false) {
        //     // Close toggle
        //     setIs_adding(false)
        } else {
            // Set toggle to current click
            setIs_adding(e.currentTarget.id)
        }
    }

    // Return
    return (
        <Paper
            className={classes.addBook_root}
        >
            <div className={classes.top}>
                <Button 
                    className={`${classes.addBook} ${classes.drawerOption}`}
                    onClick={toggleAdd}
                    id='book'
                >
                    <AddBoxIcon className={classes.addButton}/>
                    <div className={classes.title}>
                        LOG COMPLETED BOOK
                    </div>
                </Button>
                <Button 
                    className={`${classes.addReview} ${classes.drawerOption}`}
                    onClick={toggleAdd}
                    id='review'
                >
                    <AddBoxIcon className={classes.addButton}/>
                    <div className={classes.title}>
                        Add Review
                    </div>
                </Button>
            
            </div>
            <div className={classes.bottom}>
            { is_adding && is_adding === 'book' &&
                <AddBook setIs_adding={setIs_adding}/>
            }
            {/* ADD REVIEW PANNEL */}
            { is_adding && is_adding === 'review' &&
                <AddReview setIs_adding={setIs_adding}/>
            }
            </div>
        </Paper>
    )
}

// MAP STATE TO PROPS
const mstp = state => {
    return {
        DB_books: state.r_books.DB_books,
        DB_reviews: state.r_reviews.DB_reviews,
    }
}

// CONNECT & EXPORT
export default connect(
    mstp, 
    {

    }
)(AddPannel)