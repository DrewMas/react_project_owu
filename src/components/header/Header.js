import ChooseGenre from "../genres/ChooseGenre";
import Switcher from "../switcher/Switcher";

import {
    Link
} from "react-router-dom";

import './Header.css'

import logo from '../../assets/image/logo.png'
import user from '../../assets/image/user.png'
import {useSelector} from "react-redux";


export default function Header() {

    const state = useSelector(state => {
        let {moviesReducer} = state;
        return moviesReducer;
    });


    return (
        <div className={'header-wrapper'}>
            <div className={`header`}>
                <Link to={{pathname: `/`}}>
                    <div className={'header-column1'}>
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
