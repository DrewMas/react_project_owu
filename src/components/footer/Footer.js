import {useSelector} from "react-redux";

import FooterButton from "../footerButton/FooterButton";

import './Footer.css'



export default function Footer() {

    const state = useSelector(state => {
        let {moviesReducer} = state;
        return moviesReducer
    });



    return (
        <div className={`footer`}>
            <div className={'footer-navigation'}>
                <FooterButton state={state}/>
            </div>
        </div>
    );
}

