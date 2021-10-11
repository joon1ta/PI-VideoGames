import React from 'react'
import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import styles from './GameDetails.module.css';

function GameDetails() {

const [game, setGame] = useState({});
const [loading, setLoading] = useState(true);
const { id } = useParams();

const getGame = async () => {
    try {
        const games = await axios.get(`http://localhost:3002/videogames/${id}`)
        setGame(games.data) //seteamos la respuesta de axios al estado del juego
        setLoading(false)
        
    } catch (error) {
        setLoading(false)
        console.log(error)
    }
}

useEffect(() =>{
    getGame(id)
},[])

    if(loading) { 
        return (
            <div>
                <h1>Loading Game</h1>
            </div>
        )
    }

    console.log(game.publishers)
    return (
        <div className={styles.containerDetails}>
                 <h1 className={styles.vgnameTitle}>{game.name}</h1>
            {
                game.name ? 
                    <div className={styles.containerDetails2}>
                   <div>
                         <p className={styles.descriptionDetails}>{game.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>

                         <div className={styles.containerDetails3}>

                                <div>
                                        <h2  className={styles.vgname}>Released:</h2>
                                      <p>{game.released}</p>
                                </div>
                                <div>  
                                <h2  className={styles.vgname}>Rating: </h2>  
  
       
                                      <p>{game.rating}/5</p> 
                                </div>      
                                <div>
                                    <h2  className={styles.vgname}>Publishers:</h2>
                                                {game.publishers ? game.publishers.map(publisher => {
                                                    return <p>{publisher.name}</p>
                                                }) : <p>No contiene creador</p> } 
                                </div>
                                <div>
                                    <h2  className={styles.vgname}>Platforms: </h2>
                                                    {
                                                game.platforms ?        
                                                    typeof game.platforms !== "string" 
                                                    ?
                                                        game.platforms.map((platform) => {      
                                                            return <p>{platform.platform.name}</p>       
                                                })  :      game.platforms.split(' | ').map( (platform) => {
                                                            return <p>{platform}</p>
                                                }) : <p>Plataforma Desconocida</p>}  
                                </div>
                                <div>
                                        
                                                    <h2  className={styles.vgname}>Genres</h2>
                                                {game.genres.map(genre => <p>{genre.name}</p>)}
                                            
                                </div>
                            </div>   
                       </div>                     
                
                       
                       <div>
                                <img height='450' src={game.background_image} alt="imagen"/> 
                           
                       </div>
                                    
                      </div>
                                                     : 
                    <div>
                        <h2>We cant found your game, try another</h2>
                        <div>
                        <Link to= "/home">
                        <button >Back</button>
                        </Link>
                        </div>
                    </div>       
            } 
            <div className={styles.button2}>
                 <Link className={styles.linkDetails} to= "/home">
                    <button className={styles.btnBackHome}>Back Home</button>
                </Link>
            </div>
               
        </div>
    )
}

export default GameDetails
