import './MovieInfoDetails.css'
import {useSelector} from "react-redux";
import ReactPlayer from "react-player";
import {useEffect} from "react";
import {getVideo} from "../../services/movies.api";

export default function MovieInfoDetails({item}) {


    let {
        backdrop_path,
        original_title,
        overview,
        budget,
        tagline,
        release_date,
        status,
        original_language,
        homepage
    } = item;
    console.log(item);

    let filmGenres = item.genres.map(value =>
        item.genres.indexOf(value) !== item.genres.length - 1 ? value.name + ', ' : value.name + ' ');

    const store = useSelector(state => {
        let {moviesReducer} = state;
        return moviesReducer;
    });

    useEffect(()=>{
        getVideo(item.id).then(value => {
            console.log(value.data.results[0].key);
        })
    })

    return (
        <div className={'movieInfoWrapper'}>
            <div className={'movieInfoContent'}>
                <div className={'movieInfoUpperBox'}>
                    <div className={'movieInfoUpperBox_title'}>
                        <h1>{original_title}</h1>
                    </div>
                    <div className={'movieInfoUpperBox_content'}>
                        <div className={'movieInfoImage'}>
                            <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt=""/>
                        </div>
                        <div className={'movieInfoText'}>
                            <p><b>Budget</b>: ${budget} </p>
                            <p><b>Tagline:</b> {tagline}</p>
                            <p><b>Release date:</b> {release_date}</p>
                            <p><b>Genres:</b> {filmGenres}</p>
                            <p><b>Status</b>: {status}</p>
                            <p><b>Language</b>: {original_language}</p>
                            <p><b>Homepage</b>:
                                <a href={homepage}
                                   target={'_blank'}
                                   rel="noreferrer">
                                    <button
                                        className={`movieInfoHomepageButton ${store.isDarkTheme === false ? ' ' : 'movieInfoHomepageButton_black'}`}>Link
                                        to a website
                                    </button>
                                </a>
                            </p>
                        </div>
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
