import { Link } from "react-router-dom";
import "./ExplorePage.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function ExplorePage() {
  const offers = [
    {
      id: 1,
      imageUrl: "/src/assets/eggs.png",
      placeName: "Eggs",
      rating: 4.5,
      originalPrice: 10,
      discountedPrice: 4.99,
    },
    {
      id: 2,
      imageUrl: "/src/assets/flour.png",
      placeName: "Flour",
      rating: 4.8,
      originalPrice: 15,
      discountedPrice: 6.5,
    },
    {
      id: 3,
      imageUrl: "/src/assets/beef.png",
      placeName: "Beef",
      rating: 4.2,
      originalPrice: 12,
      discountedPrice: 5.5,
    },
    {
      id: 4,
      imageUrl: "/src/assets/tomato.png",
      placeName: "Tomato",
      rating: 4.9,
      originalPrice: 14,
      discountedPrice: 7.0,
    },
    {
      id: 5,
      imageUrl: "/src/assets/lettuce.png",
      placeName: "Lettuce",
      rating: 4.6,
      originalPrice: 8,
      discountedPrice: 3.99,
    },
    {
      id: 6,
      imageUrl: "/src/assets/peppers.png",
      placeName: "Peppers",
      rating: 4.7,
      originalPrice: 16,
      discountedPrice: 8.0,
    },
  ];

  return (
    <div className="home-page-dark">
      <NavBar />
      <div className="explore-page">
        <h1 className="explore-title">Explore Offers</h1>
        <div className="offer-list">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card">
              <img
                src={offer.imageUrl}
                alt={offer.placeName}
                className="offer-image"
              />
              <div className="offer-details">
                <h3 className="offer-name">{offer.placeName}</h3>
                <div className="offer-info">
                  <span className="rating">User rating: {offer.rating} ★</span>
                </div>
                <div className="offer-pricing">
                  <p className="original-price">
                    Original Price: €{offer.originalPrice}
                  </p>
                  <p className="discounted-price">
                    Now: €{offer.discountedPrice}
                  </p>
                </div>
                <Link to={`/offer`} className="view-offer-button">
                  View Offer
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ExplorePage;
