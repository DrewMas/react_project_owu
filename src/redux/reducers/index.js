import {moviesReducer} from "./movies.reducer";
import {combineReducers} from 'redux';
import {moviesInfoReducer} from "./movieInfo.reducer";


const rootReducer = combineReducers({moviesReducer, moviesInfoReducer});
export {rootReducer}
