import axios from "axios";

const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzE0ZDE2MmIyMGI0ZDkyOWZhNzU5OTk0NWNmMzI1YSIsInN1YiI6IjYxMmZiOTEwZTM4YmQ4MDA4M2NhODUyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lW-wtc_gCd43fh1KAGjnmruDvsDYXKtPQ_2F-GJUQ3A`;

const movies = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${token}`,
    }
});

const getMovies = async ()=> await movies.get('/discover/movie');


const movieInfo = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${token}`,
    }
});
const getMovieInfo = async (id) => await movieInfo.get(`/movie/${id}`)




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

export {getMovies, getMovieInfo}

// const getMovieInfo = async (id) => await movieInfo.get(`/movie/${id}`)
//
//
// const movies = axios.create({
//     baseURL: 'https://api.themoviedb.org/3/',
//     headers: {
//         Authorization: `Bearer ${token}`,
//     },
// });
//
// const getMovies = async (page) => await movies.get(`/discover/movie?api_key=${token}&page=${page}`);
