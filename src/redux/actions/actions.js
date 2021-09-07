import {
    GET_FILM_KEY,
    GET_GENRES,
    GET_MOVIE_INFO,
    GET_MOVIES,
    GET_MOVIES_BY_GENRE,
    SET_CURRENT_PAGE,
    SET_DARK_THEME, SET_GENRES_ID,
    SET_LIGHT_THEME, SET_MOVIES_BY_GENRE
} from "./actionTypes";

const get_Movies = (value) => {
    return {type: GET_MOVIES, payload: value}
}

const get_Movie_Info = (value) => {
    return {type: GET_MOVIE_INFO, payload: value}
}

const get_Genres = (value) => {
    return {type: GET_GENRES, payload: value}
}

const setIsDarkTheme = () => {
    return {type: SET_DARK_THEME}
}

const setIsLightTheme = () => {
    return {type: SET_LIGHT_THEME}
}

const setCurrentPage = (value) => {
    return {type: SET_CURRENT_PAGE, payload: value}
}

const getMoviesByGenres = (value) => {
    return {type: GET_MOVIES_BY_GENRE, payload: value}
}

const setMoviesByGenre = (genresId, page) => {
    return {type: SET_MOVIES_BY_GENRE, payload: {genresId, page}}
}

const setGenresId = (value) => {
    return {type: SET_GENRES_ID, payload: value}
}

const getFilmKey = (value) => {
    return {type: GET_FILM_KEY, payload: value}
}

export {
    get_Movies,
    get_Movie_Info,
    get_Genres,
    setIsDarkTheme,
    setIsLightTheme,
    setCurrentPage,
    getMoviesByGenres,
    setMoviesByGenre,
    setGenresId,
    getFilmKey
};
