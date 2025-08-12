import { Link } from "react-router-dom";
import "../css/Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to={"/"}>Movies App</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favourites" className="nav-link">
          Favourites
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
