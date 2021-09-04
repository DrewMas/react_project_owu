import {GET_MOVIE_INFO} from "../actions/actionTypes";

export const moviesInfoReducer = (state = {movieInfo: []}, action) => {
    switch (action.type) {
        case GET_MOVIE_INFO:
            return {...state, movieInfo: [action.payload.data]};
        default:
            return state;
    }
}

