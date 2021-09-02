import logo from './logo.svg';
import './App.css';
import MoviesList from "./components/moviesList/MoviesList";
import Header from "./components/header/Header";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    withRouter
} from "react-router-dom";
import MovieInfo from "./components/movieInfo/MovieInfo";

function App() {
    return (
      <Router>
          <div className="App">
              <Header/>

              <Route exact path={'/'} render={()=> <MoviesList/>}/>
              <Route path={'/movie_info/:id'} render={(props)=>
                  <MovieInfo {...props}/>
              }/>
          </div>
      </Router>
  );
}

export default App;
