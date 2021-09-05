import {useEffect} from "react";
import {getGenres, getMoviesWithGenres} from "../../services/genres.api";
import {useDispatch, useSelector} from "react-redux";
import {get_Genres, getMoviesByGenre} from "../../redux/actions/actions";
import './ChooseGenre.css'

export default function ChooseGenre() {

    const state = useSelector(state => {
        let {moviesReducer} = state;
        return moviesReducer;
    });

    let {genres, genresId} = state;

    console.log(genres);


    const dispatch = useDispatch();

    useEffect(() => {
        getGenres().then(value => {
            dispatch(get_Genres(value));
        })
    }, [dispatch]);


    const genresSelector = (e) => {
        let findId = genres.map(value => value.find(value => value.name === e.target.value))
        let {id} = findId[0];
        getMoviesWithGenres(id).then(value => {
            dispatch(getMoviesByGenre(value))
        })
    }


    return (
        <div className={'selectFilm'}>

            <select className={'selectFilm-select'} onChange={genresSelector}>
                <option value="">All genres</option>
                {
                    genres.map(value => value.map(value => <option key={value.id}>{value.name}</option>
                        )
                    )
                }
            </select>

        </div>
    );
}
