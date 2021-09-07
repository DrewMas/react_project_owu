import ChooseGenre from "../genres/ChooseGenre";
import Switcher from "../switcher/Switcher";

import {Link} from "react-router-dom";

import logo from '../../assets/image/logo.png'
import user from '../../assets/image/user.png'
import {useDispatch, useSelector} from "react-redux";

import './Header.css'
import {get_Movies, setGenresId} from "../../redux/actions/actions";
import {getMovies} from "../../services/movies.api";



export default function Header() {

    const state = useSelector(state => {
        let {moviesReducer} = state;
        return moviesReducer;
    });

    const dispatch = useDispatch();

    const goHome = () =>{
        getMovies().then(value => {
            dispatch(get_Movies(value))
        })
        dispatch(setGenresId(0));
    }

    return (
        <div className={'header-wrapper'}>
            <div className={`header`}>
                <Link to={{pathname: `/`}}>
                    <div className={'header-column1'} onClick={goHome}>
                        <img src={logo} alt="img" className={'header-column1-logo'}/>
                        <h1 className={`header-column1-txt ${state.isDarkTheme === false ? ' ' : 'header-column1-txt_black'}`}>Netflix</h1>
                    </div>
                </Link>
                <div className={'header-column2'}>
                    <ChooseGenre/>
                </div>
                <div className={'header-column3'}>
                    <Switcher/>
                </div>
                <div className={'header-column4'}>
                    <span className={'header-column4-userName'}>Jane Doe</span>
                    <img src={user} alt="user" className={'header-column4-user'}/>
                </div>
            </div>
        </div>
    );
}
