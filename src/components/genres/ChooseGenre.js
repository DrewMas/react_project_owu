import {useEffect} from "react";
import {getGenres} from "../../services/genres.api";
import {useDispatch, useSelector} from "react-redux";
import {get_Genres} from "../../redux/actions/actions";

export default function ChooseGenre() {

    const state = useSelector(state => {
        let {genresReducer} = state;
        return genresReducer;
    });

    let {genres} = state;
    console.log(genres);

    const dispatch = useDispatch();

    useEffect(() => {
        getGenres().then(value => {
            dispatch(get_Genres(value));
        })
    }, [dispatch]);

    return (
        <div>

            <select>
                <option value="">All genres</option>
                {
                    genres.map(value => value.map(value => <option>{value.name}</option>))
                }
            </select>

        </div>
    );
}
