import axios from "axios";

const API_KEY = '4832a7e7e601b934383a7e7c97019b7b';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export const fetchMovies = async () => {
    const response = await axios.get(`/3/movie/11?api_key=${API_KEY}`);
    return response.data;
}
