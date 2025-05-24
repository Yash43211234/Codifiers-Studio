import React, { useState, useEffect } from 'react';

export default function Pop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

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
          }

          .overlay.visible {
            opacity: 1;
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
            transition: all 0.5s ease, background-color 0.3s ease;
          }

          .overlay.visible .popup-banner {
            transform: scale(1);
            opacity: 1;
          }

          .popup-banner:hover {
            background-color: rgba(30, 30, 30, 0.95);
          }

          .popup-banner h1 {
            font-size: 32px;
            margin-bottom: 10px;
            font-weight: 300;
            letter-spacing: 2px;
            opacity: 0;
            transform: translateY(-20px);
            animation: fadeInUp 0.8s ease forwards 0.2s;
          }

          .popup-banner h1 span {
            font-weight: 700;
            color: #ffffff;
          }

          .popup-banner .highlight {
            font-size: 48px;
            font-weight: 700;
            margin: 20px 0;
            background: linear-gradient(90deg, #ff5f6d, #ffc371);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            opacity: 0;
            transform: scale(0.8);
            animation: zoomIn 0.6s ease forwards 0.6s;
          }

          .popup-banner p {
            font-size: 20px;
            margin-top: 20px;
            color: #ffcc70;
            cursor: pointer;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.8s ease forwards 1s;
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

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes zoomIn {
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>

      <div className={`overlay ${isVisible ? 'visible' : ''}`}>
        <div className="popup-banner">
          <button className="close-btn" onClick={() => setIsVisible(false)}>×</button>
          <h1>REGISTER <span>NOW!</span></h1>
          <div className="highlight">50% OFF</div>
          <p>SIGN-UP</p>
        </div>
      </div>
    </>
  );
}
