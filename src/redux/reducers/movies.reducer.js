import {GET_MOVIE_INFO, GET_MOVIES, SET_CURRENT_PAGE, SET_DARK_THEME, SET_LIGHT_THEME} from "../actions/actionTypes";


export const moviesReducer = (state = {movies: [], /*movieInfo: [],*/ isDarkTheme: false, pages: [], page: 0}, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, movies: [...action.payload.data.results], pages: action.payload.data.total_pages,
                page: action.payload.data.page};
        // case GET_MOVIE_INFO:
        //     return {...state, movieInfo: [action.payload.data]};
        case SET_CURRENT_PAGE:
            return {...state, movies: [...action.payload.data.results], page: [action.payload.data.page]}
        case SET_LIGHT_THEME:
            return {...state, isDarkTheme: true};
        case SET_DARK_THEME:
            return {...state, isDarkTheme: false}

        default:
            return state;
    }
}

