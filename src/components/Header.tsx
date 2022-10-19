import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <h1>Trending Movies</h1>
      </Link>
    </header>
  );
};

export default Header;
