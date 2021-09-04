import './App.css';
import MoviesList from "./components/moviesList/MoviesList";
import Header from "./components/header/Header";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import MovieInfo from "./components/movieInfo/MovieInfo";
import {useSelector} from "react-redux";
import history from "./history/History";

function App() {

    const state = useSelector(state => {
        let {switchReducer} = state;
        return switchReducer
    });

    console.log(state.isDarkTheme);

    return (
        <Router history={history}>
            <div className={
                `App ${state.isDarkTheme === false ? ' ' : 'App_dark'}`
            }>
                <Header/>

                <Route exact path={'/'} render={() => <MoviesList/>}/>
                <Route path={'/movie_info/:id'} render={(props) =>
                    <MovieInfo {...props}/>
                }/>
            </div>
        </Router>
    );
}

export default App;
