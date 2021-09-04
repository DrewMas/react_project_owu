import {moviesReducer} from "./movies.reducer";
import {genresReducer} from "./genres.reducer";
import {switchReducer} from "./themeSwitcher.reducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({moviesReducer, genresReducer, switchReducer});
export {rootReducer}
