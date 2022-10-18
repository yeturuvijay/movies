import { StringifyOptions } from "querystring";
import Movie from "./Movie";

interface Geners {
  id: number;
  name: string;
}

export default interface MovieDetails extends Movie {
  genres: Geners[];
  overview: string;
  release_date: string;
  status: string;
  runtime: number;
}
