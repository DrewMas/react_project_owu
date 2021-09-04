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
        <div /*className={`button ${props.element.isActive === true ? 'button_active' : ' '}`}*/>
            {/*<span className={'buttonNumber'}>{props.element.number}</span>*/}
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
        </div>
    );
}

export default FooterButton;
