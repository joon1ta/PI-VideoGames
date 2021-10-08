import React from 'react';
import { useDispatch } from 'react-redux';
import { nameAsc, nameDesc, ratingAsc, ratingDesc } from '../../actions/ActionIndex';
import styles from './Orders.module.css'

export default function OrderBy () {
    const dispatch = useDispatch();


    const orderAsc = () =>{
        dispatch(nameAsc())
    }
    const orderDesc = () => {
        dispatch(nameDesc())
    }
    const orderRatingAsc = () => {
        dispatch(ratingAsc())
    }
    const orderRatingDesc = () => {
        dispatch(ratingDesc())
    }    

    return (
        <div className={styles.containerOrdersFlex}>
            <h4 className={styles.h4Orders}>Order By</h4>
            <div className={styles.containersButtonsOrders}>
                <button className={styles.buttonsOrders} onClick={orderAsc}>A - Z</button>
                <button className={styles.buttonsOrders} onClick={orderDesc}>Z - A</button>
                <button className={styles.buttonsOrders} onClick={orderRatingAsc}>Best Rating</button>
                <button className={styles.buttonsOrders} onClick={orderRatingDesc}>Less Rating</button>
            </div>
        </div>
    )
}