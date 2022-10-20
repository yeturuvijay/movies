import Movie from "../models/Movie";
import "./MovieList.css";
import MovieListItem from "./MovieListItem";

interface Props {
  movieList: Movie[];
}

const MovieList = ({ movieList }: Props) => {
  return (
    <>
      {movieList.length > 0 ? (
        <ul className="MovieList">
          {movieList.map((movie) => (
            <MovieListItem movie={movie} key={movie.id} />
          ))}
        </ul>
      ) : (
        <p>No movies. Please try again.</p>
      )}
    </>
  );
};

export default MovieList;
