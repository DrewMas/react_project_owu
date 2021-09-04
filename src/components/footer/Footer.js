import {useState} from "react";

import './Footer.css'
import {useSelector} from "react-redux";
import FooterButton from "../footerButton/FooterButton";


export default function Footer() {

    const state = useSelector(state => {
        let {moviesReducer} = state;
        return moviesReducer
    });
    let {page, pages} = state;


    const [pageObjects, setPageObjects] = useState([]);

    return (
        <div className={'footer'}>
            <div className={'footer-navigation'}>
                {/*<FooterButton/>*/}
            </div>
        </div>
    );
}

