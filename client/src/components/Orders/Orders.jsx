import React from 'react';
import { useDispatch } from 'react-redux';
import { nameAsc, nameDesc, ratingAsc, ratingDesc } from '../../actions/ActionIndex';


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
        <div>
            <h4>Order By</h4>
            <div>
                <button onClick = {orderAsc} >A - Z</button>
                <button onClick= {orderDesc} >Z - A</button>
                <button onClick = {orderRatingAsc} >Best Rating</button>
                <button onClick = {orderRatingDesc} >Less Rating</button>
            </div>
        </div>
    )
}