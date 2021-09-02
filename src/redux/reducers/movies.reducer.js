import {GET_MOVIE_INFO, GET_MOVIES} from "../actions/actionTypes";


export const moviesReducer = (state = {movies:[], movieInfo:[]}, action) =>{
    switch (action.type){
        case GET_MOVIES:
            return {...state, movies: [...action.payload.data.results]};
        case GET_MOVIE_INFO:
            return {...state, movieInfo: [action.payload.data]};

        default:
            return state;
    }
}

