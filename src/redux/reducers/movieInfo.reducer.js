import {GET_FILM_KEY, GET_MOVIE_INFO} from "../actions/actionTypes";

export const moviesInfoReducer = (state = {movieInfo: [], videos: []}, action) => {
    switch (action.type) {
        case GET_MOVIE_INFO:
            return {...state, movieInfo: [action.payload.data]};
        case GET_FILM_KEY:
            return {...state, videos: action.payload.data.results};
        default:
            return state;
    }
}

