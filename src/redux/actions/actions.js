import {GET_GENRES, GET_MOVIE_INFO, GET_MOVIES, SET_DARK_THEME, SET_LIGHT_THEME} from "./actionTypes";

const get_Movies = (value) => {
    return {type: GET_MOVIES, payload: value}
}

const get_Movie_Info = (value) =>{
    return{type: GET_MOVIE_INFO, payload: value}
}

const get_Genres = (value) =>{
    return {type: GET_GENRES, payload: value}
}

const setIsDarkTheme = () =>{
    return {type: SET_DARK_THEME}
}

const setIsLightTheme = ()=>{
    return{type: SET_LIGHT_THEME}
}

export {get_Movies, get_Movie_Info, get_Genres, setIsDarkTheme, setIsLightTheme};
