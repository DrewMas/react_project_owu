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

function App() {
  return (
      <Router>
          <div className="App">
              <Header/>

              <Route path={'/'} render={()=> <MoviesList/>}/>
              <Route/>
          </div>
      </Router>
  );
}

export default App;
