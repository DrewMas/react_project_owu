import PosterPreview from "../posterPreview/PosterPreview";
import './MoviesListCard.css'

export default function MoviesListCard({item}) {

    return (
        <div className={'singleMovie'}>
            <PosterPreview item={item}/>
            <span>{item.original_title}</span>

        </div>
    );
}
