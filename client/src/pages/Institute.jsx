import React from 'react';
import Booking from '../components/Booking';

export default function Institute() {
  const styles = {
    container: {
      marginTop: '15px',
      width: '100%',
      textAlign: 'left',
      paddingTop: '00px',
      position: 'relative',
    },
    image: {
      width: '100%',
      height: 'auto',
      maxHeight: '700px',
      objectFit: 'cover',
    },
    overlay: {
      position: 'absolute',
      top: '50%',
      left: '40%',
      transform: 'translate(-50%, -50%)',
      color: '#fff',
      textAlign: 'left',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '20px',
      borderRadius: '12px',
      maxWidth: '100%',
      zIndex: 2,
    },
    heading: {
      fontSize: '3rem',
      marginBottom: '10px',
    },
    subText: {
      fontSize: '1.2rem',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 25px',
      fontSize: '1rem',
      fontWeight: 'bold',
      borderRadius: '8px',
      backgroundColor: '#d0fbf9',
      color: '#000',
      cursor: 'pointer',
      border: 'none',
    },
  };

  return (
    <>
      <div style={styles.container}>
        <img
          // src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/final+(1)+(1).jpg"
          src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/2147484495/images/WxbIQnoPSkq6soh2v1Vw_The_Complete_Guide_to_Learning_Music_Production_Everything_You_Need_to_Know_-_Learn_Music_Production_Blog.png"

          alt="Institute Banner"
          style={styles.image}
        />

        <div style={styles.overlay}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'nowrap',  // prevent wrapping for side by side
            gap: '20px'
          }}>
            <div style={{ flex: '1', textAlign: 'left' }}>
              <h1 style={styles.heading}>Elevate Your Sound in 2025–2026</h1>
              <p style={styles.subText}>
                Join our advanced Music Production program – hands-on training with industry tools, live projects, and mentorship.
              </p>
            </div>
            <div style={{ flex: '0 0 auto', textAlign: 'right' }}>
              <button style={styles.button}>Enroll Now</button>
            </div>
          </div>
        </div>


      </div>

      <Booking />

      {/* Media Queries */}
      <style>{`
        @media (max-width: 767px) {
          img {
            height: 25rem !important;
          }
          h1 {
            font-size: 2.4rem !important;
          }
          p {
            font-size: 1rem !important;
          }
           overlay: {
              width: '200px',
          }
        }

        @media (min-width: 768px) {
          img {
            height: 700px !important;
          }
          h1 {
            font-size: 4rem !important;
          }
          p {
            font-size: 1.2rem !important;
          }
            button {
    font-size: 0.9rem !important;
  }
        }
      `}</style>
    </>
  );
}
