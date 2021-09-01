import {GET_MOVIES} from "../actions/actionTypes";


export const moviesReducer = (state = {movies:[]}, action) =>{
    switch (action.type){
        case GET_MOVIES:
            return {...state, movies: [...action.payload.data.results]};
        default:
            return state;
    }
}

