
import React from 'react';
import Filters from '../Filters/Filters';
import OrderBy from '../OrderBy/OrderBy.jsx';
import { useState } from 'react';
import styles from './filterzone.module.css';

export default function FilterZone(){
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle)
    }
   
    return (

        <div>
            <button onClick ={handleClick}>Filters</button>
            {
                toggle ?
                <div className = {styles.zone}> 
                    <Filters />
                    <OrderBy />
                </div>
                : null
            }
        </div>
    )
}