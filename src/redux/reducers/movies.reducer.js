import {
    GET_GENRES,
    GET_MOVIES,
    GET_MOVIES_BY_GENRE,
    SET_CURRENT_PAGE,
    SET_DARK_THEME, SET_GENRES_ID,
    SET_LIGHT_THEME, SET_MOVIES_BY_GENRE
} from "../actions/actionTypes";


export const moviesReducer = (state = {
    movies: [],
    isDarkTheme: false,
    pages: [],
    page: 0,
    genres: [],
    genresId: 0,
}, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state, movies: [...action.payload.data.results], pages: action.payload.data.total_pages,
                page: action.payload.data.page
            };
        case SET_CURRENT_PAGE:
            return {...state, movies: [...action.payload.data.results], page: action.payload.data.page}
        case SET_LIGHT_THEME:
            return {...state, isDarkTheme: true};
        case SET_DARK_THEME:
            return {...state, isDarkTheme: false};
        case GET_GENRES:
            return {...state, genres: action.payload.data.genres};
        case GET_MOVIES_BY_GENRE:
            return {...state, movies: [...action.payload.data.results], page: action.payload.data.page};
            //infinite scroll
            //return {...state, movies: [...movies].concat(action.payload.data.results, page: action.payload.data.page}
        case SET_GENRES_ID:
            return {...state, genresId: action.payload }
        case SET_MOVIES_BY_GENRE:
            return {...state, movies: [...action.payload.data.results], page: action.payload.data.page, genres: action.payload}
        default:
            return state;
    }
}

