import {GET_MOVIES} from "./actionTypes";

const get_Movies = (value) => {
    return {type: GET_MOVIES, payload: value}
}


export {get_Movies};
