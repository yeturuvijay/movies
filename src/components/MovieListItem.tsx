import { Link } from "react-router-dom";
import Movie from "../models/Movie";
import "./MovieListItem.css";

interface Props {
  movie: Movie;
}

const MovieListItem = ({ movie }: Props) => {
  return (
    <li className="MovieListItem">
      <Link to={`movies/${encodeURIComponent(movie.id)}`}>
        <span>{movie.title || movie.original_name}</span>
        <span> Rating : {movie.vote_average}</span>
      </Link>
    </li>
  );
};

export default MovieListItem;
