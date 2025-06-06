import React from 'react';
import './ServicesSection.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const MusicDistribution = () => {
  const navigate = useNavigate();

  const HandleNavigate = () => {
    navigate('/request-form'); // <-- Update with your actual route
  };
  return (
    <div className="services-container">
      
      {/* Left Boxes */}
      <div className="services-column">
        <div className="service-box yellow-box">
          <h3>Music Videos</h3>
          <p>High-quality, creative storytelling for artists and bands</p>
        </div>
        <div className="service-box gray-box">
          <h3>Corporate Videos</h3>
          <p>Professional videos for presentations, training, or promotions</p>
        </div>
      </div>

      {/* Center Image with CTA */}
      <div className="services-center">
        <img
          src="/images/Posters.png"
          alt="Music CDs"
          className="center-image"
        />
        <div className="center-overlay">
          <h2>Capture with Us</h2>
          <button onClick={HandleNavigate}>Book Your Session</button>
        </div>
      </div>

      {/* Right Boxes */}
      <div className="services-column">
        <div className="service-box gray-box">
          <h3>Short Films</h3>
          <p>Cinematic production for impactful storytelling</p>
        </div>
        <div className="service-box yellow-box">
        <h3>Custom Projects</h3>
        <p>Inspiring, comfortable environment to boost creativity</p>
        </div>
      </div>

      <div className="services-center-2">
          <h2>Capture with Us</h2>
          <button onClick={HandleNavigate}>Book Your Session</button>
      </div>
    </div>
  );
};

export default MusicDistribution;
