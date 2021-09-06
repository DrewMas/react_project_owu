import {RatingView} from 'react-simple-star-rating'

import './Stars.css'


export default function Stars({item:{vote_average}}) {
   //  console.log(vote_average);
   //
   //  console.log(Math.round(vote_average));
   //  let stars = [];
   //
   // const countStars = () => {
   //      for (let i = 0; i < Math.round(vote_average); i++) {
   //          stars.push('★');
   //      }
   //      return stars;
   //  }


    return (
        <div className={'ratingContainer'}>
            <div className={'ratingNUmber'}>{vote_average}/10</div>
            {/*<div className={'stars'}>{countStars()}</div>*/}
            <RatingView ratingValue={vote_average-0.5}  stars={10} size={16}/>
        </div>
    );
}
