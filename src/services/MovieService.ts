import axios from "axios";
import Movie from "../models/Movie";
import Geners from "../models/Geners";
import MultipleMovieResponse from "../models/MultipleMovieResponse";
import GenersResponse from "../models/GenersResponse";

const api_key: string = process.env.REACT_APP_MOVIE_KEY || "";

export const getTrendingMovies = (): Promise<MultipleMovieResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/trending/all/day", {
      params: {
        api_key,
      },
    })
    .then((response) => response.data);
};

export const getFilteredMovies = (
  genres?: string,
  runtime?: number,
  rating?: number
): Promise<MultipleMovieResponse> => {
  let filterParams: any = {
    api_key,
    language: "en-US",
  };

  if (genres) {
    filterParams.with_genres = genres;
  }

  if (runtime) {
    filterParams["with_runtime.lte"] = runtime;
  }

  if (rating) {
    filterParams["vote_average.gte"] = rating;
  }

  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: filterParams,
    })
    .then((response) => response.data);
};

export const getMovieDetails = (id: number): Promise<Movie> => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${encodeURIComponent(id)}`, {
      params: {
        api_key,
      },
    })
    .then((response) => response.data);
};

export const getGenresList = (): Promise<GenersResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/genre/movie/list", {
      params: {
        api_key,
      },
    })
    .then((response) => response.data);
};
