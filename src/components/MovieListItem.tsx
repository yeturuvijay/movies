import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Movie from "../models/Movie";
import "./MovieListItem.css";

interface Props {
  movie: Movie;
}

const MovieListItem = ({ movie }: Props) => {
  return (
    <>
      {movie.poster_path && (
        <li className="MovieListItem">
          <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title || movie.original_name}
            />
          </Link>
        </li>
      )}
    </>
  );
};

export default MovieListItem;
