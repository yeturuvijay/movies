import Movie from "../models/Movie";
import "./MovieList.css";
import MovieListItem from "./MovieListItem";

interface Props {
  movieList: Movie[];
}

const MovieList = ({ movieList }: Props) => {
  return (
    <ul className="MovieList">
      {movieList.map((movie) => (
        <MovieListItem movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

export default MovieList;
