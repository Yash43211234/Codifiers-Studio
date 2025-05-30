import React from 'react';
import './ServicesSection.css'; // Import the CSS file
import { Music } from 'lucide-react';

const MusicPromotion = () => {
    return (
        <div className="services-container">

            {/* Left Boxes */}
            <div className="services-column">
                <div className="service-box yellow-box">
                    <h3>Social Media Strategy</h3>
                    <p>Growing your online presence across platforms</p>
                </div>
                <div className="service-box gray-box">
                    <h3>Brand Promotion </h3>
                    <p>Crafting campaigns to elevate your music </p>
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
                    <h2>Boost your Music</h2>
                    <button>Start now!</button>
                </div>
            </div>

            {/* Right Boxes */}
            <div className="services-column">
                <div className="service-box gray-box">
                    <h3>Content Creation</h3>
                    <p>Engaging visuals, videos, and posts</p>
                </div>
                <div className="service-box yellow-box">
                    <h3>PR & Media Outreach</h3>
                    <p>Getting your music featured in the right places</p>
                </div>
            </div>

            <div className="services-center-2">
                <h2>Boost your Music</h2>
                <button>Start now!</button>
            </div>
        </div>
    );
};

export default MusicPromotion;
