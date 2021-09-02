import PosterPreview from "../posterPreview/PosterPreview";
import './MoviesListCard.css'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    withRouter
} from "react-router-dom";

export default function MoviesListCard({item}) {

    return (
        <div>
            <Link to={{pathname: '/movie_info/' + item.id, state: item}}>
                <div  className={'singleMovie'}>
                    <PosterPreview item={item}/>
                    <span className={'title'}>{item.original_title}</span>
                </div>
            </Link>

        </div>
    );
}
