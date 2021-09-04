import axios from "axios";

const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzE0ZDE2MmIyMGI0ZDkyOWZhNzU5OTk0NWNmMzI1YSIsInN1YiI6IjYxMmZiOTEwZTM4YmQ4MDA4M2NhODUyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lW-wtc_gCd43fh1KAGjnmruDvsDYXKtPQ_2F-GJUQ3A`;
const baseUrl = 'https://api.themoviedb.org/3/';

const movies = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

const getMovies = async ()=> await movies.get(`/discover/movie`);


const movieInfo = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${token}`,
    }
});
const getMovieInfo = async (id) => await movieInfo.get(`/movie/${id}`)


const getPages = (page) =>{
    return fetch(baseUrl+`/discover/movie?api_key=${token}&page=${page}`, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then(value => value.json())
}

// const getMovies = async ()=> await movies.get(`/discover/movie?api_key=${token}`);
//
//
// const movies = axios.create({
//     baseURL: 'https://api.themoviedb.org/3/',
//     headers: {
//         Authorization: `Bearer ${token}`,
//     },
//     params: {
//         page: 3
//     }
// });


//


// const pages = axios.create({
//     baseURL: 'https://api.themoviedb.org/3/',
//     headers: {
//         Authorization: `Bearer ${token}`,
//     },
// });
// const pagination = async (page) => {
//     await pages.get(`/discover/movie?api_key=${token}&page=${page}`)
//     console.log(page);
// };
//
//
export {getMovies, getMovieInfo, getPages}

