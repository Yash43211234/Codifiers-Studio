import React from 'react';
import './ServicesSection.css'; // Import the CSS file

const PortfolioShoot = () => {
  return (
    <div className="services-container">
      
      {/* Left Boxes */}
      <div className="services-column">
        <div className="service-box yellow-box">
          <h3>Service Range</h3>
          <p>Visuals of recording, editing, and lesson</p>
        </div>
        <div className="service-box gray-box">
          <h3>Creative Outputs</h3>
          <p>Previews of completed projects or setups

</p>
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
          <h2>Step into the Spotlight</h2>
          <button>Shoot Today!</button>
        </div>
      </div>

      {/* Right Boxes */}
      <div className="services-column">
        <div className="service-box gray-box">
          <h3>Equipment</h3>
          <p>Close-ups of mics, mixers, and DAWs</p>
        </div>
        <div className="service-box yellow-box random-yellow-box">
          <h3>Workflow Shots</h3>
          <p>Team in action, recording, or editing</p>
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
