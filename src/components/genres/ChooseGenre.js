import {useEffect} from "react";
import {getGenres, getMoviesWithGenres} from "../../services/genres.api";
import {useDispatch, useSelector} from "react-redux";
import {get_Genres, getMoviesByGenres} from "../../redux/actions/actions";
import './ChooseGenre.css'

export default function ChooseGenre() {

    const state = useSelector(state => {
        let {moviesReducer} = state;
        return moviesReducer;
    });

    let {genres, genresId} = state;

    const dispatch = useDispatch();

    useEffect(() => {
        getGenres().then(value => {
            dispatch(get_Genres(value));
        })
    }, [dispatch]);


    const genresSelector = (e) => {
        let findId = genres.find(value => value.name === e.target.value)

        let {id} = findId;
        getMoviesWithGenres(id).then(value => {
            dispatch(getMoviesByGenres(value))
        })
    }


    return (
        <div className={`selectFilm`}>

            <select className={`selectFilm-select ${state.isDarkTheme === false ? ' ' : 'selectFilm-select_dark'}`}
                    onChange={genresSelector}>
                <option value="">All genres</option>
                {
                    genres.map(value => <option key={value.id}>{value.name}</option>)
                }
            </select>

        </div>
    );
}
