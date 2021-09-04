import {useEffect} from "react";
import {getMovieInfo} from "../../services/movies.api";
import {useDispatch, useSelector} from "react-redux";
import {get_Movie_Info} from "../../redux/actions/actions";
import MovieInfoDetails from "../movieInfoDetails/MovieInfoDetails";

import './MoiveInfo.css'

export default function MovieInfo({location:{state}}) {

    const reducerState = useSelector(state => {
        let {moviesInfoReducer} = state
        return moviesInfoReducer;
    });

    let {movieInfo} = reducerState;

    const dispatch = useDispatch();

    useEffect(()=>{
        getMovieInfo(state.id).then(value => dispatch(get_Movie_Info(value)))
    },[dispatch, state.id]);

    return (
        <div className={'movieInfo-container'}>
            {
                movieInfo.map(value=> <MovieInfoDetails item={value} key={value.id}/>)
            }
        </div>
    );
}
