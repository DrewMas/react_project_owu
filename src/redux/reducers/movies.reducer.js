import {GET_MOVIE_INFO, GET_MOVIES, SET_DARK_THEME, SET_LIGHT_THEME} from "../actions/actionTypes";


export const moviesReducer = (state = {movies: [], movieInfo: [], isDarkTheme: false, pages: [], page: 0}, action) => {
    switch (action.type) {
        case GET_MOVIES:
            console.log(action);
            return {...state, movies: [...action.payload.data.results], pages: action.payload.data.total_pages,
                page: action.payload.data.page};
        case GET_MOVIE_INFO:
            return {...state, movieInfo: [action.payload.data]};
        case SET_LIGHT_THEME:
            return {...state, isDarkTheme: true};
        case SET_DARK_THEME:
            return {...state, isDarkTheme: false}

        default:
            return state;
    }
}

