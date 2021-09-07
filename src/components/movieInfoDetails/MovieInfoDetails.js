import './MovieInfoDetails.css'

export default function MovieInfoDetails({item}) {


    let {backdrop_path, original_title, overview, budget, tagline, release_date} = item;

    let filmGenres = item.genres.map(value =>
        item.genres.indexOf(value) !== item.genres.length - 1 ? value.name + ', ' : value.name + ' ');

    return (
        <div className={'movieInfoWrapper'}>
            <div className={'movieInfoContent'}>
                <div className={'movieInfoUpperBox'}>
                    <div className={'movieInfoImage'}>
                        <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt=""/>
                    </div>
                    <div className={'movieInfoText'}>
                        <h1>{original_title}</h1>
                        <p><b>Budget</b>: ${budget} </p>
                        <p><b>Tagline:</b> {tagline}</p>
                        <p><b>Release date:</b> {release_date}</p>
                        <p><b>Genres:</b> {filmGenres}</p>
                    </div>
                </div>
                <div className={'movieInfoBottomBox'}>
                    <h3 className={'movieInfoBottomBoxTitle'}>Overview:</h3>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    );
}
