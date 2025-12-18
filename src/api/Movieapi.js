import axios from "axios";


const API_KEY = "25f5520cb7f4ee6c12e3b7042d9da4c5";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const res = await axios.get(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
  return res.data.results;
};

export const fetchMovieDetails = async (id) => {
  const res = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return res.data;
 
};