import {moviesReducer} from "./movies.reducer";
import {genresReducer} from "./genres.reducer";
import {combineReducers} from 'redux';
import {moviesInfoReducer} from "./movieInfo.reducer";


const rootReducer = combineReducers({moviesReducer, genresReducer, moviesInfoReducer});
export {rootReducer}
