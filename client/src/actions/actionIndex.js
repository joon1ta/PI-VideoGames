import axios from 'axios';

export const GET_GAMES = "GET_GAMES"
export const SEARCH_GAMES = "SEARCH_GAMES"
export const NAME_ASC = "NAME_ASC"
export const NAME_DESC = "NAME_DESC"
export const RATING_ASC = "RATING_ASC"
export const RATING_DESC = "RATING_DESC"
export const GENRE_FILTER = "GENRE_FILTER"
export const CREATED_GAME = "CREATED_GAME"
export const GET_GENRES = "GET_GENRES"
export const ERROR = "ERROR"





export function getGames() {
    return function (dispatch) {
        return axios.get('http://localhost:3002/videogames') // Llamamos a la ruta en el servidor
               .then(response => {
                   dispatch({
                       type: GET_GAMES,
                       payload: response.data
                   })
               })
    }
}
export function getGenres() {
    return function (dispatch) {
        return axios.get('http://localhost:3002/genres') // Llamamos a la ruta en el servidor
               .then(response => {
                   dispatch({
                       type: GET_GENRES,
                       payload: response.data
                   })
               })
    }
}

export function searchGames(name) {
    return function (dispatch) {
        return axios.get(`http://localhost:3002/videogames?name=${name}`)
                .then(response => {
                    dispatch({
                        type: SEARCH_GAMES,
                        payload: response.data
                    })
                })
                .catch(error => {
                    dispatch({
                        type: ERROR
                    })
                })
                
    }
}


// Filters

export function nameAsc () {
    return {
        type: NAME_ASC
    }
}

export function nameDesc() {
    return { type: NAME_DESC }
}

export function ratingAsc() {
    return { type: RATING_ASC }
}

export function ratingDesc() {
    return { type: RATING_DESC }
}

export function genreFilter(genre) {
    return { type: GENRE_FILTER, 
             payload: genre 
            }
}
export function createdGame() {
    return { 
        type: CREATED_GAME
    }
}