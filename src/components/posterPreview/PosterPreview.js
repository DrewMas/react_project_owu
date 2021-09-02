import './PosterPreview.css'

export default function PosterPreview({item:{poster_path}}) {


    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt=""  className={'poster'}/>
        </div>
    );
}
