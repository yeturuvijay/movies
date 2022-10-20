import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <h1>Movies</h1>
      </Link>
      <Link to="movies/watchlist">Watchlist</Link>
    </header>
  );
};

export default Header;
