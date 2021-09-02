import logo from './logo.svg';
import './App.css';
import MoviesList from "./components/moviesList/MoviesList";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <MoviesList/>
    </div>
  );
}

export default App;
