import "../HomePageDark.css"
import logo from "../assets/logo.svg";
import 

export function NavBar() {
  return (
    <header className="header-dark">
      <a className="logo-dark">
        <img src={logo} alt="To Go To Go Logo" />
        <h1>Food rescuers</h1>
      </a>
      <nav className="navigation-dark">
        <ul>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="/favorites">Favorites</a>
          </li>
          <li>
            <a href="/orders">My Orders</a>
          </li>
          <li>
            <a href="/account">My Account</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
