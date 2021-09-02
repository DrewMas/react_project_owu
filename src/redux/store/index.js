import {createStore} from 'redux';
import {rootReducer} from "../reducers";
import {moviesReducer} from "../reducers/movies.reducer";

export const store = createStore(rootReducer);
