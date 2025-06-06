import React from 'react';
import './ServicesSection.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const ProAudioMastering = () => {
  const navigate = useNavigate();

  const HandleNavigate = () => {
    navigate('/request-form'); // <-- Update with your actual route
  };

  return (
    <div className="services-container">
      
      {/* Left Boxes */}
      <div className="services-column">
        <div className="service-box yellow-box">
          <h3>Stereo Refining</h3>
          <p>Expanding and refining the stereo image</p>
        </div>
        <div className="service-box gray-box">
          <h3>EQ Balance</h3>
          <p>Adjusting EQ for clarity and punch</p>
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
          <h2>Master your track now!</h2>
          <button onClick={HandleNavigate}>Master Now</button>
        </div>
      </div>

      {/* Right Boxes */}
      <div className="services-column">
        <div className="service-box gray-box">
          <h3>Loudness</h3>
          <p>Ensuring your music sounds perfect on all devices</p>
        </div>
        <div className="service-box yellow-box">
          <h3>Pro Finish</h3>
          <p>High-quality mastering for the perfect sound</p>
        </div>
      </div>

      <div className="services-center-2">
         <h2>Master your track now!</h2>
          <button onClick={HandleNavigate}>Master Now</button>
      </div>
    </div>
  );
};

export default ProAudioMastering;
