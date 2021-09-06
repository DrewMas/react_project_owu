import './Stars.css'


export default function Stars({item:{vote_average}}) {
    console.log(vote_average);


    for (let i = 0; i < vote_average.length; i++) {
    }

    return (
        <div>
            {vote_average}
            ★★★★★


        </div>
    );
}
