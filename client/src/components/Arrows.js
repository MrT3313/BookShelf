// IMPORTS
import React from 'react'

// ICONS
import Left_arrow from '../assets/back.svg'
import Right_arrow from '../assets/next.svg'


export const PREV_svg_arrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            // className="slick-arrow"
            style={{ ...style, display: "block"}}
            onClick={onClick}
        >
            <img src={Left_arrow} height={20} width={20} fill="#01BCD4" />
        </div>
    )
}

export const NEXT_svg_arrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            // className="slick-arrow"
            style={{ ...style, display: "block"}}
            onClick={onClick}
        >
            <img src={Right_arrow} height={20}/>
        </div>
    )
}