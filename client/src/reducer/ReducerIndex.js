import {
    GET_GAMES, 
    SEARCH_GAMES,
    NAME_ASC,
    NAME_DESC,
    RATING_ASC,
    RATING_DESC,
    GENRE_FILTER,
    CREATED_GAME
} from '../actions/ActionIndex'




const initialState = {
    games: []
};


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GAMES:
            return {
                ...state,
                games: action.payload
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
            return { 
                ...state,
                games: state.games.filter(g => { // se filtran los generos por juego, y se encuentra el genero que sea igual al action
                    return g.genres.find(genre => {
                        return genre.name.toLowerCase() === action.payload
                    }) 
                })
            }
        case CREATED_GAME:
            return { 
                ...state,
                games: state.games.filter(g => {
                    return g.id.length > 10 // buscamos si el id es mayor porque sabemos que los creados por el usuario tiene ams de 10 digitos
                })
            }
        default:
            return state;
    }
}


export default rootReducer;