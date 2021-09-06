import PosterPreview from "../posterPreview/PosterPreview";
import {
    Link
} from "react-router-dom";

import './MoviesListCard.css'
import {useSelector} from "react-redux";
import Stars from "../stars/Stars";


export default function MoviesListCard({item}) {

    const state = useSelector(state => {
        let {moviesReducer} = state;
        return moviesReducer
    });


    return (
        <div>
            <Link to={{pathname: '/movie_info/' + item.id, state: item}}
                  className={`link ${state.isDarkTheme === false ? '' : 'link_black'}`}>
                <div className={'singleMovie'}>
                    <PosterPreview item={item}/>
                    <span className={'title'}>{item.original_title}</span>
                </div>
                <Stars item={item}/>
            </Link>

        </div>
    );
}
