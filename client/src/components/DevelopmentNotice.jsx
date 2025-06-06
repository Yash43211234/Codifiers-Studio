import React, { useState } from 'react';

const DevelopmentNotice = () => {
 
  return (
    <div
      style={{
        backgroundColor: '#e53935',
        color: 'white',
        padding: '10px 0',
        fontWeight: 500,
        fontSize: '14px',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        whiteSpace: 'nowrap',
      }}
    >
      <div
        style={{
          display: 'block',
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            paddingLeft: '100%',
            animation: 'scroll-left 45s linear infinite',
          }}
        >
          Please note that this website is currently under development. We are continuously working to improve its design, features, and overall user experience.
          Updates are being made regularly to ensure better accessibility and functionality for artists, musicians, and all our visitors.
          Thank you for your patience and support as we enhance the platform.
        </div>
      </div>

      

      {/* Inline styles for animation */}
      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @media (max-width: 600px) {
            div[style*="inline-block"] {
              font-size: 12px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default DevelopmentNotice;
