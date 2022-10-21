import { create } from "domain";
import { createContext } from "react";
import Movie from "../models/Movie";

interface WatchlistContextModel {
  watchlist: Movie[];
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (id: number) => void;
  inWatchlist: (id: number) => boolean;
}

const defaultValues: WatchlistContextModel = {
  watchlist: [],
  addToWatchlist: () => {},
  removeFromWatchlist: () => {},
  inWatchlist: () => false,
};

const WatchlistContext = createContext(defaultValues);

export default WatchlistContext;
