import "../HomePageDark.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import eggs from "../assets/eggs.png";
import flour from "../assets/flour.png";
import food_rescue from "../assets/food_rescue.png";

function HomePage() {
  const featuredOffers = [
    {
      id: 1,
      placeName: "Eggs",
      imageUrl: eggs,
      rating: 4.5,
      originalPrice: 10,
      discountedPrice: 4.99,
    },
    {
      id: 2,
      placeName: "Flour",
      imageUrl: flour,
      rating: 4.8,
      originalPrice: 15,
      discountedPrice: 6.5,
    },
  ];

  return (
    <div className="home-page-dark">
      <NavBar />
      <main className="main-content-dark">
        <section className="hero-dark">
          <div className="hero-text-dark">
            <h1>Save Delicious Food and Money!</h1>
            <p>Discover incredible deals from your neighbours.</p>
            <button className="cta-button-dark">Browse Deals Now</button>
          </div>
          <div className="hero-image-dark">
            <img src={food_rescue} alt="Delicious food waiting to be rescued" />
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
              <p>
                Visit the location at the indicated time and enjoy your food.
              </p>
            </div>
          </div>
        </section>

        <section className="featured-offers-dark">
          <h2>Featured Offers</h2>
          <div className="offer-list-dark">
            {featuredOffers.map((offer) => (
              <div key={offer.id} className="offer-card-dark">
                <img src={offer.imageUrl} alt={offer.placeName} />
                <div className="offer-details-dark">
                  <h3>{offer.placeName}</h3>
                  <div className="offer-info-dark">
                    <span className="rating-dark">
                      User rating : {offer.rating} ★
                    </span>
                  </div>
                  <div className="offer-pricing-dark">
                    <p className="original-price-dark">
                      Original Price: €{offer.originalPrice}
                    </p>
                    <p className="discounted-price-dark">
                      Now: €{offer.discountedPrice}
                    </p>
                  </div>
                  <Link to="/offer" className="view-offer-button-dark">
                    View Offer
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="call-to-action-dark">
          <h2>Join the Food Rescuers</h2>
          <p>
            Start saving food, saving money, and contributing to a more
            sustainable planet.
          </p>
          <button className="signup-button-dark">Sign Up Now</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
