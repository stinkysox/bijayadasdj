import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate("/form");
  };

  const handleLearnMoreClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="banner">
      <img
        src="https://i.pinimg.com/736x/0f/68/94/0f6894e539589a50809e45833c8bb6c4.jpg" // Replace with actual image later
        alt="DJ Bijaya Das performing live"
        className="banner-image"
      />

      <p className="banner-text">
        <strong>DJ Bijaya Das</strong> — The heart of Odisha’s party scene. From
        high-energy beats to soul-touching mixes, Bijaya brings unforgettable
        vibes to weddings, birthdays, and live events. Based in India, spinning
        tracks that make your moments magical, wherever you are.
      </p>

      <div className="banner-button-container">
        <button onClick={handleBookNowClick}>Book Now</button>
        <button onClick={handleLearnMoreClick}>Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
