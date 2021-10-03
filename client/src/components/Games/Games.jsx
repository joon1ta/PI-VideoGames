import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { getGames } from '../../actions/ActionIndex'
import GameDetail from '../GameDetail/GameDetail'
import { Link } from 'react-router-dom';
function Games() {

const games = useSelector(state => state.games)
const dispatch = useDispatch();



useEffect(() => {
   dispatch(getGames())
}, [dispatch])


    return (
        <div>
            {
                games.map(game => {
                    return (
                        <Link to={`/gamedetail/${game.id}`}>
                            <GameDetail name={game.name} image={game.image} rating={game.rating} id={game.id} genres={game.genres} key={game.id}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Games
