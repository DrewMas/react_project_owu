import {useEffect, useState} from "react";

import './Footer.css'
import {useSelector} from "react-redux";
import FooterButton from "../footerButton/FooterButton";
import axios from "axios";


export default function Footer() {

    const state = useSelector(state => {
        let {moviesReducer} = state;
        return moviesReducer
    });



    return (
        <div className={'footer'}>
            <div className={'footer-navigation'}>
                <FooterButton state={state}/>
            </div>
        </div>
    );
}

