import Geners from "./Geners";

export default interface Movie {
  id: number;
  title?: string;
  original_name?: string;
  poster_path?: string;
  vote_average: number;
  vote_count: number;
  genres?: Geners[];
  overview?: string;
  release_date?: string;
  status?: string;
  runtime?: number;
}
