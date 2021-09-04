import {SET_DARK_THEME, SET_LIGHT_THEME} from "../actions/actionTypes";

export const switchReducer = (state = {isDarkTheme: false}, action) => {
    switch (action.type) {
        case SET_LIGHT_THEME:
            return {...state, isDarkTheme: true};
        case SET_DARK_THEME:
            return {...state, isDarkTheme: false}
        default:
            return {isDarkTheme: false}
    }
    return state
}
