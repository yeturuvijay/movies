import { useContext } from "react";
import WatchlistContext from "../context/WatchlistContext";
import MovieList from "./MovieList";
import "./Watchlist.css";

const Watchlist = () => {
  const { watchlist } = useContext(WatchlistContext);

  return (
    <div className="Watchlist">
      <h2>My movies watchlist</h2>
      <MovieList movieList={watchlist} />
    </div>
  );
};

export default Watchlist;
