import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMoviesList = async () => {
  let movies = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  return movies.data.results;
};

export const cariMovies = async (query) => {
  let movies = await axios.get(
    `${baseUrl}/search/movie?api_key=${apiKey}&page=1&query=${query}`
  );

  return movies.data;
};
