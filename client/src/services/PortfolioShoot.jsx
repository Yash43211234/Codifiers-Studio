import React from 'react';
import './ServicesSection.css'; // Import the CSS file

const PortfolioShoot = () => {
  return (
    <div className="services-container">
      
      {/* Left Boxes */}
      <div className="services-column">
        <div className="service-box yellow-box">
          <h3>Editing Tools</h3>
          <p>Advanced DAWs for pro mixing</p>
        </div>
        <div className="service-box gray-box">
          <h3>Flexible Setup</h3>
          <p>Multi-track and live recording</p>
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
          <h2>Ready to Record?</h2>
          <button>Book Your Session</button>
        </div>
      </div>

      {/* Right Boxes */}
      <div className="services-column">
        <div className="service-box gray-box">
          <h3>Acoustic Room</h3>
          <p>Reaching new heights together</p>
        </div>
        <div className="service-box yellow-box">
          <h3>Creative Space</h3>
          <p>Inspiring, comfortable environment to boost creativity</p>
        </div>
      </div>

      <div className="services-center-2">
          <h2>Ready to Record?</h2>
          <button>Book Your Session</button>
      </div>
    </div>
  );
};

export default PortfolioShoot;
