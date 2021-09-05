import {GET_GENRES, GET_MOVIES_BY_GENRE} from "../actions/actionTypes";


export const genresReducer = (state = {genres: [], genresId: 0}, action) => {
    switch (action.type) {
        case GET_GENRES:
            // console.log(action);
            return {...state, genres: [action.payload.data.genres]};
        case GET_MOVIES_BY_GENRE:
            console.log(action);
            return {...state, genresId: [action.payload.data.page]};
    }
    return state
}
