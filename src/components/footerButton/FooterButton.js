import {getPages} from "../../services/movies.api";

import {getMoviesByGenres, setCurrentPage} from "../../redux/actions/actions";
import {getMoviesByGenresPage} from "../../services/genres.api";

import {useDispatch} from "react-redux";



const FooterButton = ({...props}) => {

    let {state: {page, pages, genresId, isDarkTheme}} = props;

    const dispatch = useDispatch();


    const next = () => {
        if (page + 1 <= pages && genresId === 0) {
            getPages(Number(page) + 1).then(value => {
                dispatch(setCurrentPage(value));
            })
        } else if (page + 1 <= pages && genresId > 0) {
            getMoviesByGenresPage(Number(page) + 1, genresId).then(value => {
                dispatch(getMoviesByGenres(value));
            })
        }
    }

    const prev = () => {
        if (page > 1 && genresId === 0) {
            getPages(Number(page) - 1).then(value => {
                dispatch(setCurrentPage(value));
            })
        } else if (page > 1 && genresId > 0){
            getMoviesByGenresPage(Number(page)-1, genresId).then(value => {
                dispatch(getMoviesByGenres(value));
            })
        }
    }

    const first = () => {
        if (genresId === 0) {
            getPages(Number(page = 1)).then(value => {
                dispatch(setCurrentPage(value));
            })
        } else if (genresId > 0) {
            getMoviesByGenresPage(Number(page = 1),genresId).then(value => {
                dispatch(setCurrentPage(value));
            })
        }
    }

    const last = () => {
        if (genresId === 0){
            getPages(Number(page = 500)).then(value => {
                dispatch(setCurrentPage(value));
            })
        } else if (genresId > 0) {
            getMoviesByGenresPage(Number(page = 500), genresId).then(value => {
                dispatch(setCurrentPage(value));
            })
        }
    }


    let darkTheme = `${isDarkTheme === false ? ' ' : 'footer-button_dark'}`;

    return (
        <div className={'footer-button-container'}>
            <button className={`footer-button ${darkTheme}`} onClick={first}>First page</button>
            <button onClick={prev} className={`footer-button ${darkTheme}`}>Prev</button>
            <div>{page} out of {pages}</div>
            <button onClick={next} className={`footer-button ${darkTheme}`}>Next</button>
            <button className={`footer-button ${darkTheme}`} onClick={last}>Last page</button>

        </div>
    );
}

export default FooterButton;
