// IMPORTS
import React, { useState, useEffect } from 'react'
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
    // MOBILE
    MobileBookCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    mobileTop: {
        display: 'flex',
        justifyContent: 'center',
    },
    // DESKTOP
    DesktopBookCard: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        textAlign: 'center',
        fontSize: '20px',

        paddingRight: '20px',
        paddingLeft: '20px',

        minHeight: '100%',
        width: '100%'
    },
    card__left: {
        display: 'flex',
        flexDirection: 'column',
    },
    author: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: "'Special Elite', cursive",
        fontSize: 20,
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: "'Baloo', cursive",
        fontSize: 30,
    },
    description: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: "'Special Elite', cursive",
        fontSize: 18,
        marginTop: 5,
    },
    img: {
        maxHeight: '200px',
        // maxHeight: '40%',

        maxWidth: '130px',
        // maxWidth: '40%',

        height: 'auto',

        marginTop: '10px',
        marginBottom: '10px',
        marginLeft: '20px',
    },
})

// -B- COMPONENT
function BookCard(props) {
// console.log('BookCard PROPS: ', props)
const {
    title, author, book_image, description,
} = props.bookInfo
// -- // 
    // Styles
    const classes = useStyles()

    // State
    const [width, setWidth] = useState(window.innerWidth)

    // UseEffect
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    // Return
    if (width < 450) {
        return (
            <Card className={classes.MobileBookCard}>
                <div className={classes.mobileTop}>
                    <div>
                        <div className={classes.title}>
                            Title: {title}
                        </div>
                        <div className={classes.author}>
                            Author: {author}
                        </div>
                    </div>
                </div>
                <div className={classes.mobileCover}>
                    <img className={classes.img}
                        src = {book_image}
                        alt='Book Cover'
                    />
                </div>
                <div className={classes.mobileBottom}>
                    <div className={classes.description}>
                        {description}
                    </div>
                </div>
            </Card>
        )
    } else {
        return(
            <Card className={classes.DesktopBookCard}>
                <div className={classes.card__left}>
                    <div>
                        <div className={classes.title}>
                            Title: {title}
                        </div>
                        <div className={classes.author}>
                            Author: {author}
                        </div>
                    </div>
                    ~ ~ ~ 
                    <div>
                        <div className={classes.description}>
                            {description}
                        </div>
                    </div>
                </div>
                <div className={classes.card__right}>
                    <img className={classes.img}
                        src = {book_image}
                        alt='Book Cover'
                    />
                </div>
            </Card>
        )
    }
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