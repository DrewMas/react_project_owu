import './Switcher.css'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {switchReducer} from "../../redux/reducers/themeSwitcher.reducer";
import {setIsDarkTheme, setIsLightTheme} from "../../redux/actions/actions";

export default function Switcher() {

    const state = useSelector(state => {
        let {switchReducer} = state;
        return switchReducer
    });

    const dispatch = useDispatch();

    const onThemeSet = () => {
        state.isDarkTheme === false ? dispatch(setIsLightTheme()) : dispatch(setIsDarkTheme())
    }

    return (
        <>
            <span className={'switcherText'}>
                {
                    state.isDarkTheme === false  ? 'light theme' : 'dark theme'
                }
            </span>

            <div className={'switchWrapper'}>
                <label className="switch">
                    <input type="checkbox" onChange={() => onThemeSet()}/>
                    <span className="slider round"/>
                </label>
            </div>
        </>
    );
}
