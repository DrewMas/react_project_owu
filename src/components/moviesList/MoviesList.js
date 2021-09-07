import {getMovies} from "../../services/movies.api";
import {get_Movies} from "../../redux/actions/actions";

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import MoviesListCard from "../moviesListCard/MoviesListCard";

import './MoviesList.css'


export default function MoviesList() {

    const state = useSelector(state => {
        let {moviesReducer} = state
        return moviesReducer;
    });
    const dispatch = useDispatch();

    let {movies} = state;


    useEffect(() => {
        getMovies().then(value => {
            dispatch(get_Movies(value))
        });
    }, [dispatch]);


    return (
        <div className={'moviesListWrapper'}>
            <div className={'moviesList-container'}>
                <div className={'moviesList'}>
                    {
                        movies.map((value) => <MoviesListCard key={value.id} item={value}/>)
                    }
                </div>
            </div>
        </div>
    );
}

