import React from "react";
import "../HomePageDark.css";
import eggs from "../assets/eggs.png";
import flour from "../assets/flour.png";
import logo from "../assets/logo.svg";

function MyOrders() {
  const featuredOffers = [
    {
      id: 1,
      imageUrl: "/src/assets/eggs.png",
      placeName: "3 Eggs",
      rating: 4.5,
      originalPrice: 3,
      discountedPrice: 1.5,
    },
    {
      id: 2,
      imageUrl: "/src/assets/flour.png",
      placeName: "0.5kg Flour",
      rating: 4.8,
      originalPrice: 4,
      discountedPrice: 2,
    },
  ];

  return (
    <div className="home-page-dark">
      <header className="header-dark">
        <div className="logo-dark">
          <img src={logo} alt="To Go To Go Logo" />
          <h1>Food rescuers</h1>
        </div>
        <nav className="navigation-dark">
          <ul>
            <li>
              <a href="/explore">Explore</a>
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

      <main className="main-content-dark"></main>
      {/*
      <footer className="footer-dark">
        <div className="footer-content-dark">
          <div className="footer-logo-dark">
            <img src="/logo-footer-dark.png" alt="To Go To Go Logo" />
          </div>
          <nav className="footer-navigation-dark">
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </nav>
          <p className="copyright-dark">&copy; {new Date().getFullYear()} To Go To Go. All rights reserved.</p>
        </div>
      </footer>
      */}
    </div>
  );
}

export default MyOrders;
