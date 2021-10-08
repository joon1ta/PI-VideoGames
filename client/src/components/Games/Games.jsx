import React,  {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { getGames } from '../../actions/ActionIndex'
import GameCard from '../GameCard/GameCard'
import { Link } from 'react-router-dom';
import styles from './Games.module.css'
import Filters from '../Filters/Filters'

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
        <div className={styles.containerGames}>
            
               <div className={styles.containerFilters}>
                    <Filters />
                  
               </div>
               
        <div className={styles.cards}>
      
            {
                games.createInDatabase ?

                <GameCard  name={games.name} image={games.image} rating={games.rating} genres={games.genres} key={games.id}/>

                : games?.map(game => {
                    return (
                        <Link to={`/gamedetail/${game.id}`} className={styles.links}>
                            <GameCard  name={game.name} image={game.image} rating={game.rating} genres={game.genres} key={game.id}/>
                        </Link>
                    )
                }).slice(current, gamesPerPage) 
            }
          <div className ={styles.pagingcont}>
          <button className={styles.btnPage} onClick={prevPage}>&lt;</button>
          <button className={styles.btnPage} onClick={nextPage}>&gt;</button>
          </div>
        </div>
          
      
        </div>
       
    )
}

export default Games
