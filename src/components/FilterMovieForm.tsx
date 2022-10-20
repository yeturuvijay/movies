import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Geners from "../models/Geners";
import { getGenresList } from "../services/MovieService";
import "./FilterMovieForm.css";

const FilterMovieForm = () => {
  const [runtime, setRuntime] = useState("");
  const [rating, setRating] = useState("");
  const [genres, setGenres] = useState("");
  const [genresList, setGenresList] = useState<Geners[]>([]);

  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    navigate(`/?${new URLSearchParams({ runtime, rating, genres })}`);
  };

  useEffect(() => {
    getGenresList().then((response) => {
      setGenresList(response.genres);
    });
  }, []);

  return (
    <form className="FilterMovieForm" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <div className="form-control">
          <label htmlFor="runtime">Runtime</label>
          <input
            type="number"
            id="runtime"
            name="runtime"
            value={runtime}
            onChange={(e) => setRuntime(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="form-control">
          <label htmlFor="genres">Genres</label>
          <select
            name="genres"
            id="genres"
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
          >
            <option value="">Select Genre</option>
            {genresList.map((genre) => (
              <option value={genre.id} key={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default FilterMovieForm;
