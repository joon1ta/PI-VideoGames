import React from 'react'
import { useDispatch } from 'react-redux';
import { genreFilter, getGames, createdGame } from '../../actions/ActionIndex'

function Filters() {

const dispatch = useDispatch();

const handleReload = () => {
    dispatch(getGames());
}
const handleCreated = () => {
    dispatch(createdGame());
}


    return (
        <div>
            <h4>Filter by</h4>
            <div>
                
        
                <select name="" id="" onChange= {(e) => dispatch(genreFilter(e.target.value)) }>
                            <option value= "">-- Genres --</option>
                            <option value="action">Action</option> 
                            <option value="indie">Indie</option>
                            <option value="adventure">Adventure</option>
                            <option value="role-playing-games-rpg">Role</option>
                            <option value="strategy">Strategy</option>
                            <option value="shooter">Shooter</option>
                            <option value="casual">Casual</option>
                            <option value="simulation">Simulation</option>
                            <option value="puzzle">Puzzle</option>
                            <option value="arcade">Arcade</option>
                            <option value="platformer">Platformer</option>
                            <option value="racing">Racing</option>
                            <option value="massively-multiplayer">Multiplayer</option>
                            <option value="sports">Sports</option>
                            <option value="fighting">Fighting</option>
                            <option value="family">Family</option>
                            <option value="board-games">Board-games</option>
                            <option value="educational">Educational</option>
                            <option value="card">Card</option>
                </select>

                
                <button onClick ={handleCreated} >Made by you</button>

                <button onClick = {handleReload} >All</button>

                
            </div>
        </div>
    )
}

export default Filters
