import axios from "axios";

const genres = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzE0ZDE2MmIyMGI0ZDkyOWZhNzU5OTk0NWNmMzI1YSIsInN1YiI6IjYxMmZiOTEwZTM4YmQ4MDA4M2NhODUyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lW-wtc_gCd43fh1KAGjnmruDvsDYXKtPQ_2F-GJUQ3A',
    }
});

const getGenres = async () => await genres.get('genre/movie/list')
export {getGenres}
