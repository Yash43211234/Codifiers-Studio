import React from 'react';
import './ServicesSection.css'; // Reuses the same CSS styles
import { useNavigate } from 'react-router-dom';
const ProMusicComposition = () => {
  const navigate = useNavigate();

  const HandleNavigate = () => {
    navigate('/request-form'); // <-- Update with your actual route
  };


  return (
    <div className="services-container">
      
      {/* Left Boxes */}
      <div className="services-column">
        <div className="service-box yellow-box">
          <h3>SongWriting</h3>
          <p>Crafting lyrics and melodies for your next hit</p>
        </div>
        <div className="service-box gray-box">
          <h3>Jingles & Themes</h3>
          <p>Catchy and memorable music for brands or campaigns</p>
        </div>
      </div>

      {/* Center Image with CTA */}
      <div className="services-center">
        <img
          src="/images/Posters.png"
          alt="Music Production"
          className="center-image"
        />
        <div className="center-overlay">
          <h2>Let’s Compose Your Hit!</h2>
          <button onClick={HandleNavigate}>Compose Now</button>
        </div>
      </div>

      {/* Right Boxes */}
      <div className="services-column">
        <div className="service-box gray-box">
          <h3>Soundtracks</h3>
          <p>Scoring the perfect soundtrack for your project</p>
        </div>
        <div className="service-box yellow-box random-yellow-box">
          <h3>Music for Media</h3>
          <p>Composing the perfect soundtrack for film, ads, or games</p>
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="services-center-2">
        <h2>Let’s Compose Your Hit!</h2>
        <button onClick={HandleNavigate}>Compose Now</button>
      </div>
    </div>
  );
};

export default ProMusicComposition;
