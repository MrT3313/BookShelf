// IMPORTS
import React from 'react'
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components
import { Card } from '@material-ui/core';

// -2- Styles
import { makeStyles } from '@material-ui/core/styles'

// COMPONENTS

// ACTION CREATORS

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles({
    root: {
        marginTop: '10px',
        marginBottom: '10px',
        marginRight: '15px',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'space-between',
        textAlign: 'center',
        fontSize: '20px',

        minHeight: '100%',
        width: '200px'
    },
    title: {
        display: 'flex',
        alignItems: 'center',

        fontFamily: "'Baloo', cursive",
        minHeight: '65px',
    },
    img: {
        maxHeight: '200px',
        // maxHeight: '40%',

        maxWidth: '130px',
        // maxWidth: '40%',

        height: 'auto',

        marginTop: '10px',
        marginBottom: '10px',
    },
    author: {
        display: 'flex',
        flexGrow: '1',

        alignItems: 'center',
        marginTop: '10px',
        marginBottom: '10px',
        fontFamily: "'Special Elite', cursive",
    }
})

// -B- COMPONENT
function BookCard(props) {
console.log('BookCard PROPS: ', props)
const {title, rank, author, book_image } = props.bookInfo

    // Styles
    const classes = useStyles()

    // Statte

    // Methods

    // Returned Component
    return(
        <div className={classes.root}>
            <Card className={classes.card}>
                <div className={classes.title}>
                    {title}
                </div>
                <img className={classes.img}
                    src = {book_image}
                    alt='Book Cover Image'
                />
                <div className={classes.author}>
                    {author}
                </div>
                
            </Card>
        </div>
    )
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
)(BookCard)