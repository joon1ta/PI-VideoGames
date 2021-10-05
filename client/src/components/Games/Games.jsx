import React,  {Fragment,useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { getGames } from '../../actions/ActionIndex'
import GameCard from '../GameCard/GameCard'
import { Link } from 'react-router-dom';
import styles from './Games.module.css'
function Games() {

const games = useSelector(state => state.games)
const dispatch = useDispatch();
const [current, setCurrent] = useState(0);
const [gamesPerPage, setGamesPerPage] = useState(9);

const nextPage = () => {
    if(current < games.length) {
        setCurrent(current + 10);
        setGamesPerPage(gamesPerPage + 10);
        console.log(current)
        console.log(gamesPerPage)
    } else if (current > games.length || gamesPerPage > games.length) {
        setCurrent(0);
        setGamesPerPage(9)
    }
}

const prevPage = () => {
    setCurrent(current - 10);
    setGamesPerPage(gamesPerPage - 10);
}

useEffect(() => {
   dispatch(getGames())
}, [dispatch])


    return (
        <Fragment>
        <div className={styles.cards}>
            {
                games.map(game => {
                    return (
                        <Link to={`/gamedetail/${game.id}`} className={styles.links}>
                            <GameCard name={game.name} image={game.image} rating={game.rating} id={game.id} genres={game.genres} key={game.id}/>
                        </Link>
                    )
                }).slice(current, gamesPerPage)
            }
        </div>

        <div className ={styles.pagingcont}>
            <button className={styles.btnPage} onClick={prevPage}>&lt;</button>
            <button className={styles.btnPage} onClick={nextPage}>&gt;</button>
        </div>
        </Fragment>
    )
}

export default Games
