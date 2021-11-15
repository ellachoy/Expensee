import './Collaps.scss'
import React from 'react';

const CollapsItem = (props) => {
    return ( 
        <div className="CollapsItem">
            <div className="flex">
                <h5>{props.description}</h5>
                <h5>{props.value}€</h5>
            </div>

        </div>
     );
}
 
export default CollapsItem;