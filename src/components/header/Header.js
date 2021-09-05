import ChooseGenre from "../genres/ChooseGenre";
import Switcher from "../switcher/Switcher";

import {
    Link
} from "react-router-dom";

import './Header.css'

import logo from '../../assets/image/logo.png'
import user from '../../assets/image/user.png'


export default function Header() {


    return (
        <div className={'header-wrapper'}>
            <div className={'header'}>
                <Link to={{pathname: `/`}}>
                    <div className={'header-column1'}>
                        <img src={logo} alt="img" className={'header-column1-logo'}/>
                        <h1 className={'header-column1-txt'}>Netflix</h1>
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
