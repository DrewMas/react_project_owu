import './Stars.css'


export default function Stars({item:{vote_average}}) {
    console.log(vote_average);

    console.log(Math.round(vote_average));
    let stars = [];

   const countStars = () => {
        for (let i = 0; i < Math.round(vote_average); i++) {
            stars.push('★');
        }
        return stars;
    }


    return (
        <div className={'ratingContainer'}>
            <div className={'ratingNUmber'}>{vote_average}/10</div>
            <div className={'stars'}>{countStars()}</div>

        </div>
    );
}
