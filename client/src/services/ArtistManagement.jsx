import React from 'react';
import './ServicesSection.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';


const ArtistManagement = () => {
  const navigate = useNavigate();

  const HandleNavigate = () => {
    navigate('/request-form'); // <-- Update with your actual route
  };

  return (
    <div className="services-container">
      
      {/* Left Boxes */}
      <div className="services-column">
        <div className="service-box yellow-box">
          <h3>Event Bookings</h3>
          <p>Securing performances and gigs</p>
        </div>
        <div className="service-box gray-box">
          <h3>Promotion and PR </h3>
          <p>Boosting your visibility</p>
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
          <h2>Ready to hit the Road?​</h2>
          <button onClick={HandleNavigate}>Sign up with Us</button>
        </div>
      </div>

      {/* Right Boxes */}
      <div className="services-column">
        <div className="service-box gray-box">
          <h3>Contract Deals</h3>
          <p>Negotiating fair terms</p>
        </div>
        <div className="service-box yellow-box random-yellow-box">
          <h3>Tour Support</h3>
          <p>Planning, coordinating, and promoting your tours</p>
        </div>
      </div>

      <div className="services-center-2">
           <h2>Ready to hit the Road?​</h2>
          <button onClick={HandleNavigate}>Sign up with Us</button>
      </div>
    </div>
  );
};

export default ArtistManagement;
