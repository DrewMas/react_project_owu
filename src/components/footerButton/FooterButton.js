import {getMovies, pagination} from "../../services/movies.api";

const FooterButton = ({...props})=> {



    return (
        <div /*className={`button ${props.element.isActive === true ? 'button_active' : ' '}`}*/>
            {/*<span className={'buttonNumber'}>{props.element.number}</span>*/}
            <button>Prev</button>
            <button>Next</button>
        </div>
    );
}

export default FooterButton;
