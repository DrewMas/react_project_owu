import {useEffect} from "react";
import {getGenres, getMoviesWithGenres} from "../../services/genres.api";
import {useDispatch, useSelector} from "react-redux";
import {get_Genres, getMoviesByGenre} from "../../redux/actions/actions";
import './ChooseGenre.css'
import {findAllByDisplayValue} from "@testing-library/react";

export default function ChooseGenre() {

    const state = useSelector(state => {
        let {genresReducer} = state;
        return genresReducer;
    });

    let {genres, genresId} = state;

    console.log(genresId);


    const dispatch = useDispatch();

    useEffect(() => {
        getGenres().then(value => {
            dispatch(get_Genres(value));
        })
    }, [dispatch]);


    const genresSelector = (e) => {
        console.log(e.target.value);
        let findId = genres.map(value => value.find(value => value.name === e.target.value))
        console.log(findId[0]);
        let {id} = findId[0];
        console.log(id);
        getMoviesWithGenres(id).then(value => {
            dispatch(getMoviesByGenre(value))
            console.log(value);
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
