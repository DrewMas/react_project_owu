import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
// import {store} from "./redux/store";
import {createStore} from 'redux'

const moviesReducer = (state = {movies:[]}, action) =>{
    switch (action.type){
        case 'GET_MOVIES':
            return {...state, movies: [...action.payload.data.results]};
        default:
            return state;
    }
}

export let store = createStore(moviesReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
