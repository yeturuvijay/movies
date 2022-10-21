import axios from "axios";
import Movie from "../models/Movie";

const xapikey: string = process.env.REACT_APP_RESTDB_KEY || "";

export const getWatchlist = (): Promise<Movie[]> => {
  return axios
    .get("https://movielist-31e9.restdb.io/rest/watchlist", {
      headers: {
        "x-apikey": xapikey,
      },
    })
    .then((response) => response.data);
};

export const postWatchlist = (movie: Movie): Promise<void> => {
  return axios
    .post("https://movielist-31e9.restdb.io/rest/watchlist", movie, {
      headers: {
        "x-apikey": xapikey,
      },
    })
    .then((res) => res.data);
};

export const removeWatchlist = (dbId: string): Promise<void> => {
  return axios
    .delete(`https://movielist-31e9.restdb.io/rest/watchlist/${dbId}`, {
      headers: {
        "x-apikey": xapikey,
      },
    })
    .then((res) => res.data);
};
