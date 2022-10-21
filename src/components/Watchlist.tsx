import { useContext, useEffect, useState } from "react";
import WatchlistContext from "../context/WatchlistContext";
import Movie from "../models/Movie";
import { getWatchlist } from "../services/RestDBWatchlistService";
import MovieList from "./MovieList";
import "./Watchlist.css";

const Watchlist = () => {
  const { watchlist } = useContext(WatchlistContext);
  // const [watchItems, setWatchItems] = useState<Movie[]>([]);

  // useEffect(() => {
  //   getWatchlist().then((res) => {
  //     setWatchItems(res);
  //   });
  // }, []);

  return (
    <div className="Watchlist">
      <h2>My movies watchlist</h2>
      <MovieList movieList={watchlist} />
    </div>
  );
};

export default Watchlist;
