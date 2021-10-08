import React from 'react'
import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';


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
console.log(game)
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


    return (
        <div>
            {
                game.name ? 
                    <div>
                        <div>
                            <h1>{game.name}</h1>
                        </div>
                        <div>
                            <Link to= "/home">
                            <button >Home</button>
                            </Link>
                        </div>
                        <div>
                        <h2>Platforms: </h2>
                        {  
                            typeof game.platforms !== "string" 
                            ?
                                   game.platforms.map((platform) => {      
                                        return <p>{platform.platform.name}</p>       
                        })  :      game.platforms.split(' | ').map( (platform) => {
                                        return <p>{platform}</p>
                        })}
                        </div>
                        <div> 
                            <h2>Genres</h2>
                            {game.genres.map(genre => <p>{genre.name}</p>)}
                        </div>    
                        <div>
                            <img src={game.background_image} alt="imagen"/> 
                        </div>
                        <div>
                            <p>{game.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                        </div>
                        <div>
                            <h2>Released: {game.released}</h2>
                            <h2>Rating: {game.rating}</h2>
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
        </div>
    )
}

export default GameDetails
