import { useEffect } from "react";
import {
  getFilteredMovies,
  getMovieDetails,
  getTrendingMovies,
} from "../services/MovieService";
import "./Main.css";

const Main = () => {
  useEffect(() => {
    getTrendingMovies().then((response) => {
      console.log("test data trending movies :: ", response.results);
    });

    getFilteredMovies("", 30).then((response) => {
      console.log("test data filter movies :: ", response.results);
    });

    getMovieDetails(616820).then((response) => {
      console.log("test data movie details :: ", response);
    });
  }, []);
  return <div className="Main">Main works</div>;
};

export default Main;
