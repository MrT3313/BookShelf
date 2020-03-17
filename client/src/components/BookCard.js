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
    card: {
        width: '190px',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

        fontFamily: "'Baloo', cursive",
        minHeight: '65px',
    },
    img: {
        margin: '0 auto',

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
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

        flex: '1',

        marginTop: '10px',
        marginBottom: '10px',

        fontFamily: "'Special Elite', cursive",
    }
})

// -B- COMPONENT
function BookCard(props) {
console.log('BookCard PROPS: ', props)
const {title, rank, author, book_image } = props.bookInfo
// -- //
    // Styles
    const classes = useStyles()

    return(
        <Card className={classes.card}>
            <div className={classes.title}>
                <div>{title}</div>
            </div>

            <img className={classes.img}
                src = {book_image}
                alt='Book Cover Image'
            />

            <div className={classes.author}>
                <div>{author}</div>
            </div>
        </Card>
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