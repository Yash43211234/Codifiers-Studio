import React from 'react';
import './ServicesSection.css'; // Import the CSS file

const ProSoundDesign = () => {
    return (
        <div className="services-container">

            {/* Left Boxes */}
            <div className="services-column">
                <div className="service-box yellow-box">
                    <h3>Custom Sound Creation</h3>
                    <p>Tailored sounds for your project</p>
                </div>
                <div className="service-box gray-box">
                    <h3>Foley Recording</h3>
                    <p>Realistic, in-sync sound effects for any medium</p>
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
                    <h2>Elevate your Sound</h2>
                    <button>Get Started</button>
                </div>
            </div>

            {/* Right Boxes */}
            <div className="services-column">
                <div className="service-box gray-box">
                    <h3>Sound Effects</h3>
                    <p>Unique and high-quality effects for film, games, or music</p>
                </div>
                <div className="service-box yellow-box">
                    <h3>Mixing & Mastering</h3>
                    <p>Perfecting your audio for the best impact</p>
                </div>
            </div>

            <div className="services-center-2">
                <h2>Elevate your Sound</h2>
                <button>Get Started</button>
            </div>
        </div>
    );
};

export default ProSoundDesign;
