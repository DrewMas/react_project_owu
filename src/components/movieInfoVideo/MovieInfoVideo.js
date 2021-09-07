import ReactPlayer from "react-player";

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getVideo} from "../../services/movies.api";
import {getFilmKey} from "../../redux/actions/actions";


export default function MovieInfoVideo({item}) {

    const store = useSelector(state => {
        let {moviesInfoReducer} = state;
        return moviesInfoReducer;
    });

    const getKey = () => {
        if (store.videos[0]) {
            return store.videos[0].key
        }
        return ''
    }

    console.log(store.videos);

    const dispatch = useDispatch();

    useEffect(() => {
        getVideo(item.id).then(value => {
            dispatch(getFilmKey(value))
        })
    }, [dispatch, item.id]);

    return (
        <div>

            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${getKey()}`}
            />

        </div>
    )

}
