import {getMovies, getPages, pagination} from "../../services/movies.api";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setCurrentPage} from "../../redux/actions/actions";

const FooterButton = ({...props}) => {

    let {state: {page, pages}} = props;

    const dispatch = useDispatch();

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


    return (
        <div className={'footer-button-container'}>
            <button onClick={prev} className={'footer-button'}>Prev</button>
            <div>{page} out of {pages}</div>
            <button onClick={next} className={'footer-button'}>Next</button>
        </div>
    );
}

export default FooterButton;
