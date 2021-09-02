import {GET_MOVIE_INFO, GET_MOVIES} from "../actions/actionTypes";


export const moviesReducer = (state = {movies:[], movieInfo:[]}, action) =>{
    console.log(action);
    switch (action.type){
        case GET_MOVIES:
            console.log(action)
            return {...state, movies: [...action.payload.data.results]};
        case GET_MOVIE_INFO:
            console.log(action.payload.data);
            return {...state, movieInfo: [action.payload.data]};

        default:
            return state;
    }
}

