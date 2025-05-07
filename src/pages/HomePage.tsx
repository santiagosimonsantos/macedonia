import React from 'react';
import './HomePageDark.css'; // Make sure you are using the correct CSS file

function HomePage() {
  const featuredOffers = [
    {
      id: 1,
      placeName: "Delicious Burgers",
      imageUrl: "src/assets/eggs.png",
      rating: 4.5,
      originalPrice: 10,
      discountedPrice: 4.99,
    },
    {
      id: 2,
      placeName: "Fresh Sushi Bar",
      imageUrl: "src/assets/flour.png",
      rating: 4.8,
      originalPrice: 15,
      discountedPrice: 6.50,
    },
      ];

  return (
    <div className="home-page-dark">
      <header className="header-dark">
        <div className="logo-dark">
          <img src="/src/assets/logo.svg" alt="To Go To Go Logo" />
          <h1>Food rescuers</h1>
        </div>
        <nav className="navigation-dark">
          <ul>
            <li><a href="/explore">Explore</a></li>
            <li><a href="/favorites">Favorites</a></li>
            <li><a href="/orders">My Orders</a></li>
            <li><a href="/account">My Account</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content-dark">
        <section className="hero-dark">
          <div className="hero-text-dark">
            <h1>Save Delicious Food and Money!</h1>
            <p>Discover incredible deals from your neighbours.</p>
            <button className="cta-button-dark">Browse Deals Now</button>
          </div>
          <div className="hero-image-dark">
            <img src="src/assets/food_rescue.png" alt="Delicious food waiting to be rescued" />
          </div>
        </section>

        <section className="how-it-works-dark">
          <h2>How It Works?</h2>
          <div className="steps-dark">
            <div className="step-dark">
              <span className="step-number-dark">1</span>
              <h3>Explore</h3>
              <p>Browse nearby neighbours with surplus food.</p>
            </div>
            <div className="step-dark">
              <span className="step-number-dark">2</span>
              <h3>Reserve</h3>
              <p>Select the products at the best price.</p>
            </div>
            <div className="step-dark">
              <span className="step-number-dark">3</span>
              <h3>Collect</h3>
              <p>Visit the location at the indicated time and enjoy your food.</p>
            </div>
          </div>
        </section>

        <section className="featured-offers-dark">
          <h2>Featured Offers</h2>
          <div className="offer-list-dark">
            {featuredOffers.map(offer => (
              <div key={offer.id} className="offer-card-dark">
                <img src={offer.imageUrl} alt={offer.placeName} />
                <div className="offer-details-dark">
                  <h3>{offer.placeName}</h3>
                  <div className="offer-info-dark">
                    <span className="rating-dark">Rating: {offer.rating} ★</span>
                  </div>
                  <div className="offer-pricing-dark">
                    <p className="original-price-dark">Original Price: €{offer.originalPrice}</p>
                    <p className="discounted-price-dark">Now: €{offer.discountedPrice}</p>
                  </div>
                  <button className="view-offer-button-dark">View Offer</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="call-to-action-dark">
          <h2>Join the To Go To Go Community!</h2>
          <p>Start saving food, saving money, and contributing to a more sustainable planet.</p>
          <button className="signup-button-dark">Sign Up Now</button>
        </section>
      </main>
      {/*}
      <footer className="footer-dark">
        <div className="footer-content-dark">
          <div className="footer-logo-dark">
            <img src="/logo-footer-light.png" alt="To Go To Go Logo" />
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

export default HomePage;
