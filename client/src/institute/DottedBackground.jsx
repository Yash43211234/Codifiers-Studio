// src/components/DottedBackgroundBox.jsx
import React from 'react';

const DottedBackground = ({ children, style }) => {
  return (
    <div
      style={{
        backgroundColor: '#333333', // Dark gray background color from the image
        backgroundImage: 'linear-gradient(to right, #444444 1px, transparent .1px)', // Vertical lines
        backgroundSize: '2px 100%', // Spacing between vertical lines
        // You can adjust '20px' to change the density of the dots/lines.
        // For a more 'dotted' feel, you might also add a horizontal line:
        // backgroundImage: 'linear-gradient(to right, #444444 1px, transparent 1px), linear-gradient(to bottom, #444444 1px, transparent 1px)',
        // backgroundSize: '20px 20px',

        minHeight: '200px', // Example minimum height, adjust as needed
        width: '100%', // Ensure it takes full width
        boxSizing: 'border-box', // Include padding in element's total width and height
        overflow: 'hidden', // Hide any overflow from content or background
        ...style, // Allows passing additional inline styles from parent
      }}
    >
      {children} {/* Renders any content passed into this component */}
    </div>
  );
};

export default DottedBackground;