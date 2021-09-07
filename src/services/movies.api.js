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


const pages = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${token}`,
    }
});
const getPages = async (page) => await pages.get(`/discover/movie?api_key=${token}&page=${page}`)

const videos = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${token}`
    }
})
const getVideo = async (movie_id)=> await videos.get(`movie/${movie_id}/videos?api_key=${token}&language=en-US`)

export {getMovies, getMovieInfo, getPages, getVideo}
