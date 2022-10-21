import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WatchlistContext from "../context/WatchlistContext";
import Movie from "../models/Movie";
import { getMovieDetails } from "../services/MovieService";
import "./MovieDetails.css";

const MovieDetails = () => {
  const movieId: number | undefined = parseInt(useParams().id || "");
  const [movie, setMovie] = useState<Movie>();
  const { inWatchlist, addToWatchlist, removeFromWatchlist } =
    useContext(WatchlistContext);

  useEffect(() => {
    getMovieDetails(movieId).then((response) => {
      setMovie(response);
    });
  }, [movieId]);
  return (
    <div className="MovieDetails">
      {movie ? (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie?.title || movie?.original_name}
          />
          <div className="movie-description">
            <h2>{movie?.title || movie?.original_name}</h2>

            <p>Overview: {movie?.overview}</p>
            <p>
              Rating :{" "}
              {`${Math.round(movie?.vote_average * 10) / 10} (${
                movie?.vote_count
              })`}
            </p>
            <p>Genre : {movie?.genres?.map((item) => `${item.name} `)}</p>
            <p>Runtime: {movie?.runtime}</p>
            <p>Release Date: {movie?.release_date}</p>
            {inWatchlist(movie.id) ? (
              <button onClick={() => removeFromWatchlist(movie.id)}>
                Remove from Watchlist
              </button>
            ) : (
              <button onClick={() => addToWatchlist(movie)}>
                Add to Watchlist
              </button>
            )}
          </div>
        </>
      ) : (
        <p>Movie details not found</p>
      )}
    </div>
  );
};

export default MovieDetails;
