import {RatingView} from 'react-simple-star-rating'

import './Stars.css'


export default function Stars({item:{vote_average}}) {

    return (
        <div className={'ratingContainer'}>
            <div className={'ratingNUmber'}>{vote_average}/10</div>
            <RatingView ratingValue={vote_average-0.5}  stars={10} size={16}/>
        </div>
    );
}
