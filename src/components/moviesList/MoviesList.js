import {useEffect} from "react";
import {getMovies} from "../../services/movies.api";
import {useDispatch, useSelector} from "react-redux";
import {get_Movies} from "../../redux/actions/actions";
import MoviesListCard from "../moviesListCard/MoviesListCard";
import './MoviesList.css'
import {getGenres} from "../../services/genres.api";
import ChooseGenre from "../genres/ChooseGenre";

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
            <div>
                {/*<ChooseGenre/>*/}

                <div className={'moviesList'}>
                    {
                        movies.map((value) => <MoviesListCard key={value.id} item={value}/>)
                    }
                </div>
            </div>
        </div>
    );
}

