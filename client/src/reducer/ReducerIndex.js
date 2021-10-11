import {
    GET_GAMES, 
    SEARCH_GAMES,
    NAME_ASC,
    NAME_DESC,
    RATING_ASC,
    RATING_DESC,
    GENRE_FILTER,
    CREATED_GAME,
    GET_GENRES,
    ERROR
} from '../actions/ActionIndex'




const initialState = {
    games: [],
    allGames: [],
    genres: []
};


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GAMES:
            return {
                ...state,
                games: action.payload,
                allGames: action.payload
            }
        case SEARCH_GAMES:
            return { 
                ...state,
                games: action.payload
            }
        case NAME_ASC:
            return { 
                ...state,
                games: [...state.games].sort((prevGame, nextGame) => { // comparamos los 2 elementos y ordenamos en base a su valor Unicode
                    if(prevGame.name > nextGame.name) return 1
                    if(prevGame.name < nextGame.name) return -1
                    return 0
                })
            }
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case  NAME_DESC:
            return { 
                ...state,
                games: [...state.games].sort((prevGame, nextGame) => { // misma secuencia que arriba pero retornando diferente
                    if(prevGame.name > nextGame.name) return -1
                    if(prevGame.name < nextGame.name) return 1
                    return 0
                })
            }
        case RATING_ASC: 
            return { 
                ...state,
                games: [...state.games].sort((prevRating, nextRating) => { // ordenamos en base al resultado d ela resta de los rating
                    return nextRating.rating - prevRating.rating
                })
            }
        case RATING_DESC:
            return { 
                ...state,
                games: [...state.games].sort((prevRating, nextRating) => {
                    return prevRating.rating - nextRating.rating // ordenamos en base al resultado d ela resta de los rating contrario al de arriba
                })
            }
        case GENRE_FILTER:
            let gamesFiltered = state.allGames
            gamesFiltered = gamesFiltered.filter(game => game.genres.find(g => {
                return g.name.toLowerCase() === action.payload
            }))
           
            return { ...state, games: gamesFiltered}
            // return { ...state, games: gamesFiltered.filter((game) => {
            //     return game.genres.find((genre) => {
            //         return genre.name.toLowerCase() === action.payload
            //     })})
            //         } // se filtran los generos por juego, y se encuentra el genero que sea igual al action
                    
                
            
        case CREATED_GAME:
            return { 
                ...state,
                games: state.games.filter(g => {
                    return g.id.length === 36 // buscamos si el id es mayor porque sabemos que los creados por el usuario tiene ams de 10 digitos
                })
            }
        case ERROR:
            return {
                ...state,
                games: ERROR
            }
        default:
            return state;
    }
}


export default rootReducer;