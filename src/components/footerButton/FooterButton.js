import {getMovies, getPages, pagination} from "../../services/movies.api";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setCurrentPage} from "../../redux/actions/actions";

const FooterButton = ({...props}) => {

    let {state: {page, pages, genres, moviesByGenres, isDarkTheme}} = props;

    const dispatch = useDispatch();

    console.log(moviesByGenres);

    const next = () => {
        if (page + 1 <= pages) {
            getPages(Number(page) + 1).then(value => {
                dispatch(setCurrentPage(value))
            })
        }
    }

    const prev = () => {
        if (page > 1) {
            getPages(Number(page) - 1).then(value => {
                dispatch(setCurrentPage(value))
            })
        }
    }

    const first = () => {
        getPages(Number(page = 1)).then(value => {
            dispatch(setCurrentPage(value))
        })
    }

    const last = () => {
        getPages(Number(page = 500)).then(value => {
            dispatch(setCurrentPage(value))
        })
    }

    let darkTheme = `${isDarkTheme ===false? ' ': 'footer-button_dark'}`;

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
