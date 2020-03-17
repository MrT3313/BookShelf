// https://www.youtube.com/watch?v=F2DsmQChKA0

// IMPORTS
import React, { useState } from 'react';
import { connect } from 'react-redux'

// COMPONENTS
import BookCard from './BookCard.js'
import { ListItemSecondaryAction } from '@material-ui/core';

function Carousell(props) {
console.log('---INSIDE CAROUSELL---')
const {data} = props
console.log(`CAROUSELL ROW DATA: ${data}`)
// -- //

    // Methods
    const makeItems = (array_of_data) => {
        return array_of_data.map((item, key) => {
            console.log(item)
            console.log(item.title)
            console.log(item.rank)

            return <BookCard bookInfo={item}/>
        })
    }

    return (
        <div>
            {makeItems(data)}
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
)(Carousell)