import './MovieInfoDetails.css'

export default function MovieInfoDetails({item}) {


    let {backdrop_path, original_title, overview, budget,tagline} = item;

    return (
        <div className={'movieInfoWrapper'}>
            <div className={'movieInfoContent'}>
                <div className={'movieInfoImage'}>
                    <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt=""/>
                </div>
                <div className={'movieInfoText'}>
                    Movie title: {original_title} <br/>
                    Info: {overview} <br/>
                    Budget: {budget} <br/>
                    Tagline: {tagline}
                </div>
            </div>
        </div>
    );
}
