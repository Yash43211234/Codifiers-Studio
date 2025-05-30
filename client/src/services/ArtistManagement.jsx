import React from 'react';
import './ServicesSection.css'; // Import the CSS file

const ArtistManagement = () => {
  return (
    <div className="services-container">
      
      {/* Left Boxes */}
      <div className="services-column">
        <div className="service-box yellow-box">
          <h3>Monthly Rentals</h3>
          <p>Long-term access for regular use</p>
        </div>
        <div className="service-box gray-box">
          <h3>Private Space</h3>
          <p>Enjoy a quiet, dedicated space for your music</p>
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
          <h2>Reserve your Jampad​</h2>
          <button>Book Now</button>
        </div>
      </div>

      {/* Right Boxes */}
      <div className="services-column">
        <div className="service-box gray-box">
          <h3>Hourly Rentals</h3>
          <p>Rent the space for short sessions</p>
        </div>
        <div className="service-box yellow-box">
          <h3>Fully Equipped</h3>
          <p>Sound systems, instruments, and more</p>
        </div>
      </div>

      <div className="services-center-2">
            <h2>Reserve your Jampad​</h2>
            <button>Book Now</button>
      </div>
    </div>
  );
};

export default ArtistManagement;
