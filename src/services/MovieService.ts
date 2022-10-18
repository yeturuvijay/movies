import axios from "axios";
import MovieDetails from "../models/MovieDetails";
import MultipleMovieResponse from "../models/MultipleMovieResponse";

interface FilterParams {
  api_key: string;
  language: string;
  vote_average?: {
    gte: number;
  };
  with_runtime?: {
    lte: number;
  };
  with_genres?: string;
}

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
  let filterParams: FilterParams = {
    api_key,
    language: "en-US",
  };

  if (genres) {
    filterParams.with_genres = genres;
  }

  if (runtime) {
    filterParams.with_runtime = {
      lte: runtime,
    };
  }

  if (rating) {
    filterParams.vote_average = {
      gte: rating,
    };
  }

  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: filterParams,
    })
    .then((response) => response.data);
};

export const getMovieDetails = (id: number): Promise<MovieDetails> => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${encodeURIComponent(id)}`, {
      params: {
        api_key,
      },
    })
    .then((response) => response.data);
};
