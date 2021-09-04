import {useEffect} from "react";
import {getGenres} from "../../services/genres.api";
import {useDispatch, useSelector} from "react-redux";
import {get_Genres} from "../../redux/actions/actions";
import './ChooseGenre.css'

export default function ChooseGenre() {

    const state = useSelector(state => {
        let {genresReducer} = state;
        return genresReducer;
    });

    let {genres} = state;

    const dispatch = useDispatch();

    useEffect(() => {
        getGenres().then(value => {
            dispatch(get_Genres(value));
        })
    }, [dispatch]);

    return (
        <div className={'selectFilm'}>

            <select className={'selectFilm-select'}>
                <option value="">All genres</option>
                {
                    genres.map(value => value.map(value => <option key={value.id}>{value.name}</option>))
                }
            </select>

        </div>
    );
}
