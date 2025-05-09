import "./NavBar.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="header-dark">
      <Link to="/" className="logo-dark">
        <img src={logo} alt="To Go To Go Logo" />
        <h1>Food Rescuers</h1>
      </Link>
      <nav className="navigation-dark">
        <ul>
          <li>
            <Link to="/explore" className="link">Explore</Link>
          </li>
          <li>
            <Link to="/" className="link">Favorites</Link>
          </li>
          <li>
            <Link to="/" className="link">My Orders</Link>
          </li>
          <li>
            <Link to="/login" className="link">My Account</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
