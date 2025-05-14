import React, { useState } from 'react';
import Booking from '../components/Booking';

export default function Institute() {
  const [showVideo, setShowVideo] = useState(false);

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
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '50vh', // updated to be responsive
      display: showVideo ? 'none' : 'block',
      objectFit: 'cover',
    },
    video: {
      width: '100%',
      height: '50vh', // same as image
      display: showVideo ? 'block' : 'none',
      objectFit: 'cover',
    },
    heading: {
      fontSize: '2.5rem', // base font size for mobile
      position: 'absolute',
      top: '35%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      color: 'white',
      fontWeight: 'bold',
      textShadow: '2px 2px 10px black',
      textAlign: 'center',
    },
    button: {
      position: 'absolute',
      top: '80%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      color: 'black',
      padding: '10px 20px',
      borderRadius: '8px',
      backgroundColor: '#d0fbf9',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
  };

  return (
    <>
      <div style={styles.container}>
        <img
          src="https://wallpaperaccess.com/full/13361943.png"
          alt="Institute Banner"
          style={styles.image}
          onLoad={handleImageLoad}
        />

        {showVideo && (
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            muted
            loop
            style={styles.video}
          />
        )}

        <h1 style={styles.heading}>Classes</h1>
        <button style={styles.button}>Enroll Now</button>
      </div>

      <Booking />

      {/* Media Queries */}
      <style>{`
        @media (min-width: 768px) {
          img, video {
            height: 600px !important;
          }
          h1 {
            font-size: 5rem !important;
          }
        }
      `}</style>
    </>
  );
}
