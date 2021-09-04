import PosterPreview from "../posterPreview/PosterPreview";
import './MoviesListCard.css'
import {
    Link
} from "react-router-dom";

export default function MoviesListCard({item}) {

    return (
        <div>
            <Link to={{pathname: '/movie_info/' + item.id, state: item}} className={'link'}>
                <div className={'singleMovie'}>
                    <PosterPreview item={item}/>
                    <span className={'title'}>{item.original_title}</span>
                </div>
            </Link>

        </div>
    );
}
