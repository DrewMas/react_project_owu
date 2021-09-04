import {useState} from "react";

import './Footer.css'
import {useSelector} from "react-redux";


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

            </div>
        </div>
    );
}

