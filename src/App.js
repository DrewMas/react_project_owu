import MoviesList from "./components/moviesList/MoviesList";
import Header from "./components/header/Header";
import {
    BrowserRouter as Router,
    Route, Switch
} from "react-router-dom";
import MovieInfo from "./components/movieInfo/MovieInfo";
import {useSelector} from "react-redux";
import Footer from "./components/footer/Footer";

import './App.css';


import {useEffect} from "react";

function App() {

    const state = useSelector(state => {
        let {moviesReducer} = state;
        return moviesReducer
    });

    useEffect(() => {
        const element = document.getElementsByTagName('html')[0]
        if (element !== null) {
            element.style.backgroundColor = state.isDarkTheme === false ? 'white' : 'black';
        }
    }, [state.isDarkTheme]);

    return (
        <Router>
            <div className={
                `App ${state.isDarkTheme === false ? ' ' : 'App_dark'}`
            }
            >
                <Header/>

                <Switch>
                    <Route exact path={'/'}>
                        <MoviesList/>
                    </Route>
                    <Route path={'/movie_info/:id'} render={(props) =>
                        <MovieInfo {...props}/>
                    }/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
