import React, { useState, useEffect } from 'react';
import Booking from '../components/Booking';

export default function Institute() {

const [showVideo, setShowVideo] = useState(false);

  // Wait 2 seconds after image is loaded
  const handleImageLoad = () => {
    setTimeout(() => {
      setShowVideo(true);
    }, 2000);
  };


const styles = {
    container: {
      width: '100%',
      textAlign: 'left',
      paddingTop: '70px',
      
    },

    image: {
      width: '100%',
      maxWidth: '1440px',
      height: '600px',
      display: 'block',
      margin: '0 auto',
    },

    image: {
      width: '100%',
      height: '600px',
      display: showVideo ? 'none' : 'block',
    },
    video: {
      width: '100%',
      height: 'auto',
      display: showVideo ? 'block' : 'none',
    },
    heading: {
      fontSize: '12rem',
      position: 'absolute',
      top: '25%',
      left: '25%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      color: 'white',
    },
    button: {
      position: 'absolute',
      top: '95%',
      left: '19%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      color: 'black',
      padding: '10px 20px',
      borderRadius: '8px',
      backgroundColor: '#d0fbf9',
      cursor: 'pointer'
    },
  }


  return (
    <div>
      <div style={styles.container}>
        <img
          src="https://wallpaperaccess.com/full/13361943.png"
          alt="Institute Banner"
          style={styles.image}
          onLoad={handleImageLoad}
        />

        {showVideo && (
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your video URL
            autoPlay
            muted
            loop
            style={styles.video}
          />
        )}

         <h1 style={styles.heading}>
          <p style={{ margin: 0, lineHeight: '.9' }}>Classes</p>
        </h1>

      </div>
      <Booking/>
    </div>
  );
}
