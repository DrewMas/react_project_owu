import {useEffect} from "react";
import {getMovies} from "../../services/movies.api";
import {useDispatch, useSelector} from "react-redux";
import {get_Movies} from "../../redux/actions/actions";
import MoviesListCard from "../moviesListCard/MoviesListCard";
import './MoviesList.css'
import {getGenres} from "../../services/genres.api";

export default function MoviesList() {

    const state = useSelector(state => {
        let {moviesReducer} = state
        return moviesReducer;
    });
    const dispatch = useDispatch();

    let {movies} = state;


    useEffect(()=>{
        getMovies().then(value => {
            dispatch(get_Movies(value))
        });
    },[dispatch]);

    // useEffect(()=>{
    //     getGenres().then(value => console.log(value.data.genres))
    // },[]);

    return (
        <div className={'moviesListWrapper'}>
            <div className={'moviesList'}>
                {
                    movies.map((value) => <MoviesListCard key={value.id} item={value}/>)
                }
            </div>
        </div>
    );
}

<InfiniteScroll
    dataLength={items.length} //This is important field to render the next data
    next={fetchData}
    hasMore={true}
    loader={<h4>Loading...</h4>}
    endMessage={
        <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
        </p>
    }
    // below props only if you need pull down functionality
    refreshFunction={this.refresh}
    pullDownToRefresh
    pullDownToRefreshThreshold={50}
    pullDownToRefreshContent={
        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
    }
    releaseToRefreshContent={
        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
    }
>
    {items}
</InfiniteScroll>
