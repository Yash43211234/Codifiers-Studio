import React from 'react';
import './ServicesSection.css'; // Import the CSS file

const ProAudioMixing = () => {
  return (
    <div className="services-container">
      
      {/* Left Boxes */}
      <div className="services-column">
        <div className="service-box yellow-box">
          <h3>Balance & Clarity</h3>
          <p>Perfectly blending all elements of your track</p>
        </div>
        <div className="service-box gray-box">
          <h3>Creative Effects</h3>
          <p>Adding unique touches to enhance your track</p>
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
          <h2>Let’s mix it</h2>
          <button>Get Started</button>
        </div>
      </div>

      {/* Right Boxes */}
      <div className="services-column">
        <div className="service-box gray-box">
          <h3>EQ Adjustment</h3>
          <p>Fine-tuning frequencies for a clear sound</p>
        </div>
        <div className="service-box yellow-box">
          <h3>Dynamic Control</h3>
          <p>Managing compression for a polished, professional sound</p>
        </div>
      </div>

      <div className="services-center-2">
           <h2>Let’s mix it</h2>
          <button>Get Started</button>
      </div>
    </div>
  );
};

export default ProAudioMixing;
