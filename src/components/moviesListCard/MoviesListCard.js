import PosterPreview from "../posterPreview/PosterPreview";
import Stars from "../stars/Stars";

import {
    Link
} from "react-router-dom";

import {useSelector} from "react-redux";

import './MoviesListCard.css'


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
                    <Stars item={item}/>

                    <span className={'title'}>{item.original_title}</span>
                </div>
            </Link>

        </div>
    );
}
