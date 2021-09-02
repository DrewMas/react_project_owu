import {moviesReducer} from "./movies.reducer";
import {genresReducer} from "./genres.reducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({moviesReducer,genresReducer});
export {rootReducer}
