import "./OfferPage.css";
import "../HomePageDark.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import back_arrow from "../assets/back_arrow.svg";
import eggs from "../assets/eggs.png";

function OfferPage() {
  const navigate = useNavigate();

  const offer = {
    id: 123,
    imageUrl: eggs,
    title: "Eggs",
    uploaderUsername: "FoodSaver123",
    latitude: 52.3667,
    longitude: 4.9,
    address: "Main Street 10, Amsterdam",
    description: "Get ecological eggs",
    originalPrice: 10,
    discountedPrice: 4.99,
    additionalInfo: "Available for pickup only between 6 PM and 8 PM.",
  };

  const userLatitude = 52.3702;
  const userLongitude = 4.8952;

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ) => {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance.toFixed(2);
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  const distance =
    offer.latitude && offer.longitude
      ? calculateDistance(
          userLatitude,
          userLongitude,
          offer.latitude,
          offer.longitude,
        )
      : "N/A";

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="home-page-dark">
      <NavBar />
      <div className="modern-offer-details-page">
        <button className="modern-go-back-button" onClick={handleGoBack}>
          <img className="back-icon" src={back_arrow} />
          Back
        </button>
        <div className="modern-offer-container">
          <div className="modern-offer-image">
            <img src={offer.imageUrl} alt={offer.title} />
          </div>
          <div className="modern-offer-info">
            <h1 className="modern-offer-title">{offer.title}</h1>
            <p className="modern-offer-uploader">
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
                <path d="M19 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm-6 12h2c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm-3-3v-2c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm6-9c-2.27 0-4.18 1.81-4.56 4h9.11c-.38-2.19-2.29-4-4.55-4z" />
              </svg>
              Uploaded by: {offer.uploaderUsername || "N/A"}
            </p>
            {offer.latitude && offer.longitude && (
              <p className="modern-offer-location">
                <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a5.25 5.25 0 00-5.25 5.25c0 2.891 2.79 6.324 5.25 8.406 2.459-2.082 5.25-5.515 5.25-8.406A5.25 5.25 0 0012 1.5zM12 8.25a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                    clipRule="evenodd"
                  />
                </svg>
                Location:{" "}
                {offer.address || `${offer.latitude}, ${offer.longitude}`}
              </p>
            )}
            <p className="modern-offer-distance">
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
                <path d="M14 10V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v7h-3l4 4 4-4h-3zM12 21c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1z" />
              </svg>
              Distance: {distance} km away
            </p>
            <p className="modern-offer-description">{offer.description}</p>
            <div className="modern-offer-pricing">
              <span className="modern-original-price">
                €{offer.originalPrice}
              </span>
              <span className="modern-discounted-price">
                €{offer.discountedPrice}
              </span>
            </div>
            <button className="modern-reserve-button">Reserve Now</button>
          </div>
        </div>
        {offer.additionalInfo && (
          <div className="modern-additional-info">
            <h3 className="modern-additional-title">More Details</h3>
            <p className="modern-additional-text">{offer.additionalInfo}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default OfferPage;
