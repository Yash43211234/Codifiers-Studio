import React from 'react';
import './ServicesSection.css'; // Import the CSS file

const ProAudioEditing = () => {
    return (
        <div className="services-container">

            {/* Left Boxes */}
            <div className="services-column">
                <div className="service-box yellow-box">
                    <h3>Layering & Comping </h3>
                    <p>Combine the best takes for a polished performance</p>
                </div>
                <div className="service-box gray-box">
                    <h3>Custom Edits</h3>
                    <p>Tailored sound adjustments to match your vision</p>
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
                    <h2>Perfect your Sound!</h2>
                    <button>Edit with us</button>
                </div>
            </div>

            {/* Right Boxes */}
            <div className="services-column">
                <div className="service-box gray-box">
                    <h3>Precision Editing</h3>
                    <p>Clean cuts, fades, and alignment for seamless tracks​</p>
                </div>
                <div className="service-box yellow-box">
                    <h3>Timing Perfection</h3>
                    <p>Tighten rhythms and sync instruments flawlessly</p>
                </div>
            </div>

            <div className="services-center-2">
                <h2>Perfect your Sound!</h2>
                    <button>Edit with us</button>
            </div>
        </div>
    );
};

export default ProAudioEditing;
