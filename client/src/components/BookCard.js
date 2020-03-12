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
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    img: {
        maxHeight: '40%',
        maxWidth: '40%',
        height: 'auto',
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
                {title}
                <img className={classes.img}
                    src = {book_image}
                    alt='Book Cover Image'
                />
                {author}
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