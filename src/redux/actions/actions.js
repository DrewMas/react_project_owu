import {
    GET_GENRES,
    GET_MOVIE_INFO,
    GET_MOVIES,
    GET_MOVIES_BY_GENRE,
    SET_CURRENT_PAGE,
    SET_DARK_THEME,
    SET_LIGHT_THEME
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

const getMoviesByGenre = (value) => {
    return {type: GET_MOVIES_BY_GENRE, payload: value}
}

export {
    get_Movies,
    get_Movie_Info,
    get_Genres,
    setIsDarkTheme,
    setIsLightTheme,
    setCurrentPage,
    getMoviesByGenre
};
