// https://www.youtube.com/watch?v=F2DsmQChKA0

import React, { useState } from 'react';

function Carousell(array_of_info) {
    console.log(`CAROUSELL PROPS: ${array_of_info}`)
    // STATE
    const [items, setItems] = useState(array_of_info)

    // METHODS
    // handleCardClick = (rank, card) => {
        
    // }

    return (
        <div>
            CAROUSELL
        </div>
    )

}

// EXPORT 
export default Carousell