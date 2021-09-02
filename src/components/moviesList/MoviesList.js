import {useEffect} from "react";
import {getMovies} from "../../services/movies.api";
import {useDispatch, useSelector} from "react-redux";
import {get_Movies} from "../../redux/actions/actions";
import MoviesListCard from "../moviesListCard/MoviesListCard";
import './MoviesList.css'
import {getGenres} from "../../services/genres.api";

export default function MoviesList() {

    const state = useSelector(state => {
        let {moviesReducer} = state
        return moviesReducer;
    });
    const dispatch = useDispatch();

    let {movies} = state;

    // console.log(state);

    useEffect(()=>{
        getMovies().then(value => {
           dispatch(get_Movies(value))
        });
    },[dispatch]);

    useEffect(()=>{
        getGenres().then(value => console.log(value.data.genres))
    },[]);

    return (
        <div className={'moviesListWrapper'}>
            <div className={'moviesList'}>
                {
                    movies.map((value) => <MoviesListCard key={value.id} item={value}/>)
                }
            </div>
        </div>
    );
}
