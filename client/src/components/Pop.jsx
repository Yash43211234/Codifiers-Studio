import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Pop() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100); // Delay the appearance slightly
    return () => clearTimeout(timeout);
  }, []);

  const handleClick = () => {
    setIsVisible(false); // Optional: hide the popup before navigating
    navigate('/register'); // Replace with desired route
  };

  return (
    <>
      <style>
        {`
          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
            opacity: 0;
            transition: opacity 0.4s ease-in-out;
            pointer-events: none;
          }

          .overlay.visible {
            opacity: 1;
            pointer-events: auto;
          }

          .popup-banner {
            background-color: rgba(30, 30, 30, 0.85);
            color: white;
            padding: 40px;
            border-radius: 16px;
            text-align: center;
            width: 90%;
            max-width: 500px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
            position: relative;
            font-family: 'Segoe UI', sans-serif;
            transform: scale(0.8);
            opacity: 0;
            transition: all 0.5s ease;
          }

          .overlay.visible .popup-banner {
            transform: scale(1);
            opacity: 1;
          }

          .popup-banner h1 {
            font-size: 32px;
            margin-bottom: 10px;
            font-weight: 300;
            letter-spacing: 2px;
          }

          .popup-banner .highlight {
            font-size: 48px;
            font-weight: 700;
            margin: 20px 0;
            background: linear-gradient(90deg, #ff5f6d, #ffc371);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .popup-banner p {
            font-size: 20px;
            margin-top: 20px;
            color: #ffcc70;
            cursor: pointer;
            transition: color 0.3s, text-shadow 0.3s;
          }

          .popup-banner p:hover {
            color: #ffffff;
            text-shadow: 0 0 10px #ffcc70;
          }

          .close-btn {
            position: absolute;
            top: 10px;
            right: 15px;
            background: none;
            border: none;
            font-size: 26px;
            color: white;
            cursor: pointer;
            transition: color 0.3s;
          }

          .close-btn:hover {
            color: #ff6666;
          }

          .cta-btn {
            background: linear-gradient(135deg, #ff6a00, #ee0979);
            color: #fff;
            font-size: 1.1rem;
            font-weight: 600;
            padding: 12px 28px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-top: 20px;
          }

          .cta-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
            background: linear-gradient(135deg, #ee0979, #ff6a00);
          }

          .cta-btn:active {
            transform: scale(0.97);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
        `}
      </style>

      <div className={`overlay ${isVisible ? 'visible' : ''}`}>
        <div className="popup-banner">
          <button className="close-btn" onClick={() => setIsVisible(false)}>×</button>
          <h1>Don't Miss Out!</h1>
          <div className="highlight">Exclusive Offer</div>
          <p>Join us today and enjoy premium benefits tailored just for you.</p>
          <button className="cta-btn" onClick={handleClick}>Get Started</button>
        </div>
      </div>
    </>
  );
}
