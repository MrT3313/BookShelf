// IMPORTS
import React, { Component } from "react";
import { connect } from 'react-redux'

// MATERIAL UI
// -1- Components

// -2- Styles
import { makeStyles } from '@material-ui/core/styles';

// CSS
import '../styles/index.css'

// COMPONENTS
import BookCard from './BookCard.js'

// UTILS
import useWindowDimensions from '../utils/useWindowDimensions.js'

// CAROUSEL
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// -A- STYLES
const useStyles = makeStyles(theme => ({
    root: {
        border: '1px solid pink',
        // display: 'flex',
        maxWidth: '90%',
        height: '100%',

        marginBottom: '40px',
    }
}))

// -B- COMPONENT
function Carousell(props) {
const { data, row} = props
console.log(row)
console.log(data)
// -- //
    // Styles
    const classes = useStyles({})
    
    // React-Slick settings
    let settings = {}
    let settings_root = {
        slidesToScroll: 1,
        initialSlide: 0,

        arrows: true,
        dots: false,
        
        autoplay: false,
        infinite: false,


        // centerMode: true,
        // speed: 500,
        
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              infinite: false,
              dots: true
            }
          },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 1,
        //       initialSlide: 2
        //     }
        //   },
        //   {
        //     breakpoint: 501,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        ]
    }

    let settings_row1 = {
        slidesToShow: 1,
    }
    let settings_row2 = {
        slidesToShow: 2,
    }
    let settings_row3 = {
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 625,
                settings: {
                    slidesToShow: 2,
                    infinite: false,
                }
            }

        ]
    }
    let settings_row4 = {
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    infinite: false,
                }
            },
            {
                breakpoint: 625,
                settings: {
                    slidesToShow: 2,
                    infinite: false,
                }
            }
        ]
    }
    let settings_row5 = {
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 4,
                    infinite: false,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    infinite: false,
                }
            },
            {
                breakpoint: 625,
                settings: {
                    slidesToShow: 2,
                    infinite: false,
                }
            }

        ]
    }

    switch(row) {
        case 1:
            settings = {...settings_root, ...settings_row1}
            break;
        case 2:
            settings = {...settings_root, ...settings_row2}
            break;
        case 3:
            settings = {...settings_root, ...settings_row3}
            break;
        case 4:
            settings = {...settings_root, ...settings_row4}
            break;
        case 5:
            settings = {...settings_root, ...settings_row5}
            break;
        default: 
            console.log('ERROR - UNKNOWN ROW')
            break;
    }

    console.log('SETTINGS')
    console.log(settings)

    // Return
    return (
        <div className={classes.root}>
            <Slider {...settings}>
                {props.data.map((item, key) => {
                    return <BookCard bookInfo={item} key={item.rank}/>
                })}
            </Slider>
        </div>
    )
}




// // https://www.youtube.com/watch?v=F2DsmQChKA0

// // IMPORTS
// import React, { useState } from 'react';
// import { connect } from 'react-redux'

// // COMPONENTS
// import BookCard from './BookCard.js'
// import { ListItemSecondaryAction } from '@material-ui/core';

// function Carousell(props) {
// console.log('---INSIDE CAROUSELL---')
// const {data} = props
// console.log(`CAROUSELL ROW DATA: ${data}`)
// // -- //

//     // Methods
//     const makeItems = (array_of_data) => {
//         return array_of_data.map((item, key) => {
//             console.log(item)
//             console.log(item.title)
//             console.log(item.rank)

//             return <BookCard bookInfo={item}/>
//         })
//     }

//     return (
//         <div>
//             {makeItems(data)}
//         </div>
//     )

// }

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
)(Carousell)