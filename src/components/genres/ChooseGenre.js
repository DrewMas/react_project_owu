import {getGenres, getMoviesByGenresPage} from "../../services/genres.api";
import {useDispatch, useSelector} from "react-redux";
import {get_Genres, get_Movies, getMoviesByGenres, setGenresId} from "../../redux/actions/actions";
import {getMovies} from "../../services/movies.api";

import {useEffect} from "react";


import './ChooseGenre.css'


export default function ChooseGenre() {

    const state = useSelector(state => {
        let {moviesReducer} = state;
        return moviesReducer;
    });

    let {genres} = state;

    const dispatch = useDispatch();

    useEffect(() => {
        getGenres().then(value => {
            dispatch(get_Genres(value));
        })
    }, [dispatch]);


    const genresSelector = (e) => {
        let findId = genres.find(value => value.name === e.target.value)

        if (findId){
            let {id} = findId;
            getMoviesByGenresPage(1,id).then(value => {
                dispatch(getMoviesByGenres(value))
            })
            dispatch(setGenresId(id));
        } else {
            getMovies().then(value => {
                dispatch(get_Movies(value))
            })
            dispatch(setGenresId(0));
        }
    }


    return (
        <div className={`selectFilm`}>

            <select className={`selectFilm-select`}
                    onChange={genresSelector}>
                <option value="">All genres</option>
                {
                    genres.map(value => <option key={value.id}>{value.name}</option>)
                }
            </select>

        </div>
    );
}
