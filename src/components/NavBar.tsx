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
            <a href="/explore">Explore</a>
          </li>
          <li>
            <a href="/">Favorites</a>
          </li>
          <li>
            <a href="/">My Orders</a>
          </li>
          <li>
            <a href="/">My Account</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
