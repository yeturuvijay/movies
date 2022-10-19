import { useEffect, useState } from "react";
import Movie from "../models/Movie";
import {
  getFilteredMovies,
  getMovieDetails,
  getTrendingMovies,
} from "../services/MovieService";
import "./Main.css";
import MovieList from "./MovieList";

const Main = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  useEffect(() => {
    getTrendingMovies().then((response) => {
      setMovieList(response.results);
    });

    getFilteredMovies("", 30).then((response) => {
      console.log("test data filter movies :: ", response.results);
    });

    getMovieDetails(616820).then((response) => {
      console.log("test data movie details :: ", response);
    });
  }, []);
  return (
    <div className="Main">
      <MovieList movieList={movieList} />
    </div>
  );
};

export default Main;
