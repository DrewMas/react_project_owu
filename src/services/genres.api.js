import axios from "axios";

const baseUrl = 'https://api.themoviedb.org/3/';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzE0ZDE2MmIyMGI0ZDkyOWZhNzU5OTk0NWNmMzI1YSIsInN1YiI6IjYxMmZiOTEwZTM4YmQ4MDA4M2NhODUyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lW-wtc_gCd43fh1KAGjnmruDvsDYXKtPQ_2F-GJUQ3A';
const withGenres = `&with_genres=`;

const genres = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${token}`,
    }
});

const getGenres = async () => await genres.get('genre/movie/list')

const moviesWithGenres = axios.create({
    baseURL: baseUrl, headers: {
        Authorization: `Bearer ${token}`
    }
});

const getMoviesWithGenres = async (genreId) =>
    await moviesWithGenres.get(`/discover/movie?api_key=${token}${withGenres}${genreId}`)


const moviesByGenres = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

const getMoviesByGenresPage = async (currentPage, id) =>
    await moviesByGenres.get(`discover/movie?language=en-US&&page=${currentPage}&with_genres=${id}`)

export {getGenres, getMoviesWithGenres, getMoviesByGenresPage}
